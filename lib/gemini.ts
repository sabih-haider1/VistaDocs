import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
  }

  // The new client expects an options object. We pass the API key here.
  return new GoogleGenAI({ apiKey });
}

const systemPrompt = `You are an expert SEO blog writer for VistaDocs Center, a professional immigration and visa services consultancy. 

Your role is to generate high-quality, SEO-optimized blog posts that:
- Are written in clear, professional English
- Include proper markdown formatting (headings, lists, emphasis, code blocks where appropriate)
- Contain relevant internal linking suggestions in [text](URL) format
- Include SEO best practices (keyword optimization, clear structure)
- Are engaging and informative for the target audience
- Include a suggested meta description (50-160 characters)
- Include suggested tags

Format your response as follows:
# Blog Post Title

## Meta Information
- **Meta Description**: [Suggested meta description here]
- **Suggested Tags**: tag1, tag2, tag3

## Content
[Blog content in markdown format]

## SEO Notes
- [Key optimization note 1]
- [Key optimization note 2]
- [Suggested internal links]`;

// Note: use the project site domain for canonical URLs and internal links
// so generated content uses the correct production domain.
// Site domain: https://vistadocscenter.com/

const structuredBlogDraftSchema = z.object({
  title: z.string().min(5),
  metaTitle: z.string().min(5),
  metaDescription: z.string().min(50),
  slug: z.string().min(3),
  h1: z.string().min(5),
  excerpt: z.string().min(40),
  featuredImageSuggestion: z.string().min(10),
  contentHtml: z.string().min(20),
  contentMarkdown: z.string().min(20),
  faq: z.array(
    z.object({
      question: z.string().min(3),
      answer: z.string().min(10),
    })
  ).min(1),
  cta: z.string().min(10),
  category: z.enum(['technical', 'regulatory', 'case-study', 'analysis']).default('technical'),
  tags: z.array(z.string().min(1)).default([]),
  relatedServices: z.array(z.string().min(1)).default([]),
  featured: z.boolean().default(false),
  noindex: z.boolean().default(false),
  readTime: z.number().int().min(1).max(60).default(6),
  canonicalUrl: z.string().url().optional().or(z.literal('')),
  ogTitle: z.string().optional().or(z.literal('')),
  ogDescription: z.string().optional().or(z.literal('')),
  ogImage: z.string().url().optional().or(z.literal('')),
  authorName: z.string().min(2),
  authorRole: z.string().min(2),
  authorBio: z.string().min(10),
});

export type StructuredBlogDraft = z.infer<typeof structuredBlogDraftSchema>;

function extractJsonPayload(text: string) {
  const trimmed = text.trim();

  if (trimmed.startsWith('```')) {
    return trimmed
      .replace(/^```(?:json)?/i, '')
      .replace(/```$/,'')
      .trim();
  }

  return trimmed;
}

function buildStructuredPrompt(prompt: string) {
  return `${systemPrompt}

Return ONLY valid JSON matching this shape:
{
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "slug": "string",
  "h1": "string",
  "excerpt": "string",
  "featuredImageSuggestion": "string",
  "contentMarkdown": "string",
  "contentHtml": "string",
  "faq": [{"question": "string", "answer": "string"}],
  "cta": "string",
  "category": "technical|regulatory|case-study|analysis",
  "tags": ["string"],
  "relatedServices": ["string"],
  "featured": false,
  "noindex": false,
  "readTime": 6,
  "canonicalUrl": "",
  "ogTitle": "",
  "ogDescription": "",
  "ogImage": "",
  "authorName": "string",
  "authorRole": "string",
  "authorBio": "string"
}

Requirements:
- Write for a premium UAE digital agency brand named VistaDocs Center.
- Create a complete blog post that can be pasted into the CMS form.
- Make the content human-like, SEO-focused, and conversion-focused.
- Include proper H1/H2/H3 structure inside contentHtml and contentMarkdown.
- Keep metaDescription between 120 and 160 characters.
- Keep excerpt between 80 and 220 characters.
- Use a URL-friendly slug without leading slash.
- Include a useful FAQ and CTA.
- Use the best matching category.
- Choose related services if relevant.
- Domain name is "https://vistadocscenter.com/"

User brief:
${prompt}`;
}

// Inform the model of the production domain to use for canonical URLs and
// internal linking (important for SEO and correct link generation).
// Site domain: https://vistadocscenter.com/

export async function generateStructuredBlogDraft(prompt: string): Promise<StructuredBlogDraft> {
  const ai = getGeminiClient();
  const modelName = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

  const result = await ai.models.generateContent({
    model: modelName,
    contents: buildStructuredPrompt(prompt),
  });

  const payloadText = extractJsonPayload(result.text || '');
  const parsed = JSON.parse(payloadText) as unknown;
  const draft = structuredBlogDraftSchema.parse(parsed);

  return draft;
}

function isQuotaOrRateLimitError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  return /429|too many requests|quota|rate limit/i.test(error.message);
}

function isGeminiApiKeyError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  return /api key not found|api_key_invalid|invalid api key|api key is invalid|unauthorized/i.test(
    error.message
  );
}

function wrapGeminiError(error: unknown): Error {
  if (error instanceof Error) {
    const wrappedError = new Error(`Gemini API Error: ${error.message}`);

    if (isQuotaOrRateLimitError(error)) {
      wrappedError.name = 'GeminiQuotaError';
    } else if (isGeminiApiKeyError(error)) {
      wrappedError.name = 'GeminiApiKeyError';
    }

    return wrappedError;
  }

  return new Error('Gemini API Error: Unknown error');
}

export async function generateBlogWithGemini(prompt: string): Promise<string> {
  try {
    const ai = getGeminiClient();

    // Use the newer preview model by default. If you prefer a different model,
    // change the string below.
    const modelName = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

    const result = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    const text = result.text;

    if (!text) {
      throw new Error('No response text generated');
    }

    return text;
  } catch (error) {
    throw wrapGeminiError(error);
  }
}

export async function generateBlogStream(
  prompt: string
): Promise<AsyncIterable<string>> {
  try {
    // The new SDK exposes a stream API, but for the blog assistant we only need
    // the final full article text here.
    const full = await generateBlogWithGemini(prompt);

    async function* streamText() {
      yield full;
    }

    return streamText();
  } catch (error) {
    throw wrapGeminiError(error);
  }
}
