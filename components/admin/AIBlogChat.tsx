'use client';

import { Copy, Check } from 'lucide-react';
import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

interface AIBlogChatProps {
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

export default function AIBlogChat({
  role,
  content,
  isLoading = false,
}: AIBlogChatProps) {
  const [copied, setCopied] = useState(false);

  const markdownSchema = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
      'img',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'figure',
      'figcaption',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'div',
      'span',
    ],
  };

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [content]);

  if (role === 'user') {
    return (
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
            You
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-slate-900">Your prompt</p>
          <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-xs font-semibold text-white">
          AI
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium text-slate-900">AI Response</p>
          {!isLoading && (
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              title="Copy response"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-600"></div>
              <span className="text-sm text-slate-600">Generating response...</span>
            </div>
          </div>
        ) : (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="prose prose-sm prose-slate max-w-none">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw, [rehypeSanitize, markdownSchema]]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="mt-4 text-lg font-bold text-slate-900" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="mt-3 text-base font-bold text-slate-900" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="mt-2.5 text-sm font-semibold text-slate-900"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mt-2 text-sm text-slate-700" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="mt-2 space-y-1 text-sm text-slate-700 list-decimal list-inside"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => <li className="ml-2" {...props} />,
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="mt-2 border-l-4 border-slate-300 bg-slate-50 px-4 py-2 text-sm italic text-slate-600"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, ...props }: any) =>
                    inline ? (
                      <code
                        className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-900"
                        {...props}
                      />
                    ) : (
                      <code
                        className="mt-2 block rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-50 overflow-x-auto"
                        {...props}
                      />
                    ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-cyan-600 underline hover:text-cyan-700"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
