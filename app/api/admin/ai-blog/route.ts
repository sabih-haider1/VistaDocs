import { NextRequest, NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/admin-auth';
import { generateStructuredBlogDraft } from '@/lib/gemini';
import { upsertBlogPost } from '@/lib/blog';
import { revalidatePath } from 'next/cache';

export const runtime = 'nodejs';
export const maxDuration = 60; // Max 60s for generation

export async function POST(request: NextRequest) {
  try {
    // Verify admin session
    const session = await requireAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { prompt } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    // Enforce reasonable prompt length
    if (prompt.length > 2000) {
      return NextResponse.json(
        { error: 'Prompt must be under 2000 characters' },
        { status: 400 }
      );
    }

    const bodyData = body as {
      publish?: boolean;
      slug?: string;
    };

    const publish = Boolean(bodyData.publish);
    const draft = await generateStructuredBlogDraft(prompt);

    if (!publish) {
      return NextResponse.json(
        {
          success: true,
          content: draft.contentMarkdown,
          draft,
        },
        { status: 200 }
      );
    }

    const formData = new FormData();
    formData.set('title', draft.title);
    formData.set('slug', bodyData.slug || draft.slug);
    formData.set('metaDescription', draft.metaDescription);
    formData.set('h1', draft.h1);
    formData.set('excerpt', draft.excerpt);
    formData.set('category', draft.category);
    formData.set('tags', draft.tags.join(', '));
    formData.set('content', draft.contentHtml);
    formData.set('contentJson', JSON.stringify(draft));
    formData.set('coverImage', '');
    formData.set('status', 'published');
    formData.set('readTime', String(draft.readTime));
    formData.set('canonicalUrl', draft.canonicalUrl || '');
    if (draft.noindex) {
      formData.set('noindex', 'on');
    }
    formData.set('relatedServices', draft.relatedServices.join(', '));
    formData.set('ogTitle', draft.ogTitle || draft.metaTitle);
    formData.set('ogDescription', draft.ogDescription || draft.metaDescription);
    formData.set('ogImage', draft.ogImage || '');
    formData.set('authorName', draft.authorName);
    formData.set('authorRole', draft.authorRole);
    formData.set('authorBio', draft.authorBio);

    const postId = await upsertBlogPost(formData, session.user);

    revalidatePath('/blog');
    revalidatePath('/admin');
    revalidatePath('/admin/blogs');
    revalidatePath(`/blog/${draft.slug}`);

    return NextResponse.json(
      {
        success: true,
        published: true,
        id: postId,
        slug: draft.slug,
        content: draft.contentMarkdown,
        draft,
      },
      { status: 201 }
    );
  } catch (error) {
    const isQuotaError =
      error instanceof Error && error.name === 'GeminiQuotaError';
    const isApiKeyError =
      error instanceof Error && error.name === 'GeminiApiKeyError';

    if (isQuotaError || isApiKeyError) {
      console.warn('AI Blog generation is temporarily unavailable due to Gemini quota limits.');
    } else {
      console.error('AI Blog Generation Error:', error);
    }

    const message = error instanceof Error ? error.message : 'Unknown error';

    const isProduction = process.env.NODE_ENV === 'production';
    const errorMessage = isQuotaError
      ? 'AI generation is temporarily unavailable because the Gemini quota has been exhausted. Please try again later.'
      : isApiKeyError
        ? 'AI generation is not configured correctly. Please check the Gemini API key and try again.'
      : isProduction
        ? 'Failed to generate blog content. Please try again.'
        : message;

    const status = isQuotaError || isApiKeyError ? 503 : 500;

    return NextResponse.json(
      { error: errorMessage, success: false },
      { status }
    );
  }
}
