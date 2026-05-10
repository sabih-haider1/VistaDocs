'use client';

import { useEffect, useRef, useState } from 'react';
import RichTextEditor from '@/components/admin/RichTextEditor';

type BlogFormMode = 'create' | 'edit';

type BlogFormValues = {
  id?: string;
  title?: string;
  slug?: string;
  metaDescription?: string;
  h1?: string;
  excerpt?: string;
  category?: string;
  tags?: string;
  content?: string;
  coverImage?: string;
  status?: string;
  featured?: boolean;
  readTime?: number;
  canonicalUrl?: string;
  noindex?: boolean;
  relatedServices?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  authorName?: string;
  authorRole?: string;
  authorBio?: string;
  originalSlug?: string;
};

type GeneratedBlogDraft = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  h1: string;
  excerpt: string;
  featuredImageSuggestion: string;
  contentHtml: string;
  contentMarkdown: string;
  faq: Array<{ question: string; answer: string }>;
  cta: string;
  category: 'technical' | 'regulatory' | 'case-study' | 'analysis';
  tags: string[];
  relatedServices: string[];
  featured: boolean;
  noindex: boolean;
  readTime: number;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  authorName: string;
  authorRole: string;
  authorBio: string;
};

export default function BlogForm({
  mode,
  initialValues,
  action,
  submitLabel,
}: {
  mode: BlogFormMode;
  initialValues: BlogFormValues;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
}) {
  const [slugTouched, setSlugTouched] = useState(Boolean(initialValues.slug));
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiNotice, setAiNotice] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState(initialValues.content || '');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setEditorContent(initialValues.content || '');
  }, [initialValues.content]);

  const setFormValue = (name: string, value: string | boolean) => {
    const form = formRef.current;

    if (!form) {
      return;
    }

    const field = form.elements.namedItem(name);

    if (!field) {
      return;
    }

    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
      if (typeof value === 'boolean' && field instanceof HTMLInputElement && field.type === 'checkbox') {
        field.checked = value;
        field.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }

      field.value = String(value);
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const applyDraftToForm = (draft: GeneratedBlogDraft, publish = false) => {
    setFormValue('title', draft.title);
    setFormValue('slug', draft.slug);
    setFormValue('h1', draft.h1);
    setFormValue('excerpt', draft.excerpt);
    setFormValue('metaDescription', draft.metaDescription);
    setFormValue('category', draft.category);
    setFormValue('tags', draft.tags.join(', '));
    setFormValue('relatedServices', draft.relatedServices.join(', '));
    setFormValue('featured', draft.featured);
    setFormValue('noindex', draft.noindex);
    setFormValue('readTime', String(draft.readTime));
    setFormValue('canonicalUrl', draft.canonicalUrl || '');
    setFormValue('ogTitle', draft.ogTitle || draft.metaTitle);
    setFormValue('ogDescription', draft.ogDescription || draft.metaDescription);
    setFormValue('ogImage', draft.ogImage || '');
    setFormValue('authorName', draft.authorName);
    setFormValue('authorRole', draft.authorRole);
    setFormValue('authorBio', draft.authorBio);
    setFormValue('status', publish ? 'published' : 'draft');
    setFormValue('contentJson', JSON.stringify(draft));
    setEditorContent(draft.contentHtml);
  };

  const handleAiGenerate = async (publish = false) => {
    if (!aiPrompt.trim()) {
      setAiNotice('Please enter an AI brief first.');
      return;
    }

    if (isGenerating) {
      return;
    }

    setIsGenerating(true);
    setAiNotice(null);

    try {
      const response = await fetch('/api/admin/ai-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: aiPrompt, publish }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `AI generation failed: ${response.status}`);
      }

      if (!data.draft) {
        throw new Error('AI did not return a structured blog draft.');
      }

      applyDraftToForm(data.draft, publish);
      setAiNotice(publish ? 'Generated and published successfully.' : 'Draft fields populated from AI.');

      if (publish && data.id) {
        window.location.href = `/admin/blogs/${data.id}/edit?saved=1`;
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate blog draft';
      setAiNotice(message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      setSubmitError(null);
      setIsSubmitting(true);
      await action(formData);
    } catch (err) {
      if (isNextRedirectError(err)) {
        throw err;
      }

      const message = err instanceof Error ? err.message : 'Failed to save post';
      setSubmitError(message);
      console.error('Form submission error:', message);
      setIsSubmitting(false);
    }
  };

  const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlugTouched(true);

    if (!slugTouched && mode === 'create') {
      const value = event.target.value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      event.target.value = value;
    }
  };

  const storageKey = initialValues.slug
    ? `vistadocs-blog-${initialValues.slug}`
    : 'vistadocs-blog-draft-new';

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      <input type="hidden" name="id" defaultValue={initialValues.id} />
      <input type="hidden" name="originalSlug" defaultValue={initialValues.originalSlug || initialValues.slug} />
      <input type="hidden" name="contentJson" defaultValue="" />

      <section className="rounded-3xl border border-cyan-200 bg-cyan-50/70 p-6 shadow-sm">
        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">AI Assistant</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-950">Generate and publish a complete post</h2>
            <p className="mt-1 text-sm text-slate-600">
              Describe the article you want. AI will fill every field in this form and can publish it directly to MongoDB.
            </p>
          </div>
        </div>

        <textarea
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          placeholder="Example: Create a premium SEO blog post about UAE employment visa processing in 2026. Audience: professionals and entrepreneurs. Include H1/H2/H3 structure, FAQ, CTA, internal links, and a conversion-focused tone."
          className="min-h-[140px] w-full rounded-2xl border border-cyan-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleAiGenerate(false)}
            disabled={isGenerating}
            className="inline-flex items-center justify-center rounded-2xl border border-cyan-200 bg-white px-4 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating…' : 'Generate draft'}
          </button>
          <button
            type="button"
            onClick={() => handleAiGenerate(true)}
            disabled={isGenerating}
            className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Publishing…' : 'Generate & publish'}
          </button>
        </div>

        {aiNotice && (
          <div className="mt-4 rounded-2xl border border-cyan-200 bg-white px-4 py-3 text-sm text-slate-700">
            {aiNotice}
          </div>
        )}
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Post details</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-950">Core content</h2>
              </div>
              <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
                <input type="checkbox" name="featured" defaultChecked={initialValues.featured} className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-950" />
                Featured
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Title" name="title" defaultValue={initialValues.title} placeholder="UAE Employment Visa Processing: Complete 2026 Guide" required />
              <Field label="Slug" name="slug" defaultValue={initialValues.slug} placeholder="uae-employment-visa-processing-2026" onChange={handleSlugChange} required />
              <Field label="H1" name="h1" defaultValue={initialValues.h1} placeholder="UAE Employment Visa Processing: Complete 2026 Guide" required className="md:col-span-2" />
              <Field label="Excerpt" name="excerpt" defaultValue={initialValues.excerpt} placeholder="Short summary shown in listings and cards" required className="md:col-span-2" textarea rows={4} />
              <Field label="Meta description" name="metaDescription" defaultValue={initialValues.metaDescription} placeholder="SEO description for search results" required textarea rows={4} className="md:col-span-2" />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Body</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">Rich text editor</h2>
            </div>

            <RichTextEditor
              name="content"
              initialContent={initialValues.content || ''}
              content={editorContent}
              storageKey={storageKey}
            />
          </section>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Publishing</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">Status and SEO</h2>
            </div>

            <div className="space-y-4">
              <SelectField label="Status" name="status" defaultValue={initialValues.status || 'draft'} options={[{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }]} />
              <Field label="Read time" name="readTime" type="number" defaultValue={initialValues.readTime?.toString()} placeholder="6" />
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600">
                <input type="checkbox" name="noindex" defaultChecked={initialValues.noindex} className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-950" />
                No index
              </label>
              <Field label="Canonical URL" name="canonicalUrl" defaultValue={initialValues.canonicalUrl} placeholder="https://vistadocscenter.com/blog/..." />
              <Field label="OpenGraph title" name="ogTitle" defaultValue={initialValues.ogTitle} placeholder="Custom social title" />
              <Field label="OpenGraph description" name="ogDescription" defaultValue={initialValues.ogDescription} placeholder="Custom social description" textarea rows={3} />
              <Field label="OpenGraph image" name="ogImage" defaultValue={initialValues.ogImage} placeholder="https://..." />
              <Field label="Related services" name="relatedServices" defaultValue={initialValues.relatedServices} placeholder="employment-visa-uae, emirates-id-application" textarea rows={3} />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Metadata</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">Classification</h2>
            </div>

            <div className="space-y-4">
              <SelectField
                label="Category"
                name="category"
                defaultValue={initialValues.category || 'technical'}
                options={[
                  { label: 'Technical', value: 'technical' },
                  { label: 'Regulatory', value: 'regulatory' },
                  { label: 'Case study', value: 'case-study' },
                  { label: 'Analysis', value: 'analysis' },
                ]}
              />
              <Field label="Tags" name="tags" defaultValue={initialValues.tags} placeholder="uae visa, employment, compliance" textarea rows={3} />
              <Field label="Featured image URL" name="coverImage" defaultValue={initialValues.coverImage} placeholder="Paste an image URL" />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Author</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">Publishing voice</h2>
            </div>

            <div className="space-y-4">
              <Field label="Author name" name="authorName" defaultValue={initialValues.authorName} placeholder="Sabih Haider" />
              <Field label="Author role" name="authorRole" defaultValue={initialValues.authorRole} placeholder="Founder, VistaDocs" />
              <Field label="Author bio" name="authorBio" defaultValue={initialValues.authorBio} placeholder="Short editor bio for article pages" textarea rows={4} />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-3">
              {submitError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <strong>Error:</strong> {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : submitLabel}
              </button>
              <p className="text-xs leading-5 text-slate-500">
                {mode === 'create'
                  ? 'A draft is stored locally while you type. Publishing writes to MongoDB immediately.'
                  : 'Use the status field above to move between draft and published.'}
              </p>
            </div>
          </section>
        </aside>
      </div>
    </form>
  );
}

function Field({
  label,
  textarea,
  className,
  rows,
  ...props
}: (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>) & {
  label: string;
  textarea?: boolean;
  className?: string;
  rows?: number;
}) {
  return (
    <label className={`block ${className || ''}`}>
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {textarea ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={rows}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />
      ) : (
        <input
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <select
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function isNextRedirectError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  if (error.message === 'NEXT_REDIRECT') {
    return true;
  }

  const digest = (error as Error & { digest?: string }).digest;
  return typeof digest === 'string' && digest.startsWith('NEXT_REDIRECT');
}