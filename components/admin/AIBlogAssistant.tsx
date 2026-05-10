'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';
import AIBlogChat from '@/components/admin/AIBlogChat';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIBlogAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [prompt]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    if (isLoading) {
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');
    setError(null);
    setIsLoading(true);

    try {
      // Call API endpoint
      const response = await fetch('/api/admin/ai-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || `API error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success || !data.content) {
        throw new Error('No content generated');
      }

      // Add assistant message
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to generate content';
      setError(errorMessage);

      // Add error message to chat
      const errorMessage_msg: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: `❌ Error: ${errorMessage}`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage_msg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-8 lg:px-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              AI Blog Assistant
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Generate SEO-optimized blog posts powered by Gemini AI
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 min-h-[400px] overflow-y-auto px-6 py-6 lg:px-8">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100">
                <Sparkles className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Start creating with AI
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Describe what you'd like your blog post to cover. Be specific about
                <br />
                topics, audience, tone, and any SEO keywords you want to include.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <AIBlogChat
                key={message.id}
                role={message.role}
                content={message.content}
                isLoading={false}
              />
            ))}
            {isLoading && (
              <AIBlogChat role="assistant" content="" isLoading={true} />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mx-6 mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 lg:mx-8">
          {error}
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-slate-200 px-6 py-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="prompt" className="block text-sm font-medium text-slate-900">
              Your prompt
            </label>
            <textarea
              ref={textareaRef}
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                  handleSubmit(e as any);
                }
              }}
              placeholder="Example: Write an SEO-optimized blog post about visa processing timelines for UAE residence visas. Target audience: professionals and entrepreneurs. Include 5-7 headings, practical tips, and internal links to our visa services pages. Tone: professional yet approachable."
              className="min-h-[100px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 resize-none focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
              disabled={isLoading}
            />
            <p className="text-xs text-slate-500">
              Tip: Be specific about topics, audience, tone, and SEO keywords. (Ctrl+Enter to submit)
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-600/30"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Generating...' : 'Generate Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}
