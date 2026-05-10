'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import {
  Bold,
  Code,
  Italic,
  Link2,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
  Redo,
  RemoveFormatting,
  Table2,
  Underline as UnderlineIcon,
  Undo,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

function ToolbarButton({
  active,
  onClick,
  children,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition ${
        active
          ? 'border-slate-950 bg-slate-950 text-white'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  name,
  initialContent,
  content,
  placeholder = 'Write the post body...',
  storageKey,
}: {
  name: string;
  initialContent: string;
  content?: string;
  placeholder?: string;
  storageKey: string;
}) {
  const [html, setHtml] = useState((content ?? initialContent) || '');
  const [autosaveState, setAutosaveState] = useState<'idle' | 'saved' | 'saving'>('idle');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: {
          HTMLAttributes: {
            class: 'rounded-2xl bg-slate-950 text-slate-50 p-4 overflow-x-auto',
          },
        },
        link: false,
        underline: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          class: 'text-cyan-700 underline underline-offset-4',
        },
      }),
      Underline,
      Image.configure({
        inline: false,
        allowBase64: false,
      }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent || '<p></p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'min-h-[480px] rounded-b-3xl border border-slate-200 bg-white px-5 py-4 text-[15px] leading-7 outline-none prose prose-slate max-w-none focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const nextHtml = editor.getHTML();
      setHtml(nextHtml);
      setAutosaveState('saving');
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const savedDraft = window.localStorage.getItem(storageKey);

    if (savedDraft && !initialContent) {
      editor.commands.setContent(savedDraft);
    }
  }, [editor, initialContent, storageKey]);

  useEffect(() => {
    if (!editor) {
      return;
    }

    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(storageKey, html);
      setAutosaveState('saved');
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [editor, html, storageKey]);

  useEffect(() => {
    if (!editor || typeof content !== 'string') {
      return;
    }

    if (content !== html) {
      editor.commands.setContent(content, { emitUpdate: false });
      setHtml(content);
      setAutosaveState('saving');
    }
  }, [content, editor, html]);

  if (!editor) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm">
        Loading rich text editor...
      </div>
    );
  }

  const promptForLink = () => {
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Paste the link URL', previousUrl || 'https://');

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex flex-wrap gap-2">
          <ToolbarButton title="Paragraph" active={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()}>
            <Pilcrow className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            H2
          </ToolbarButton>
          <ToolbarButton title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            H3
          </ToolbarButton>
          <ToolbarButton title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
            <UnderlineIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
            <Quote className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Code block" active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
            <Code className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Add link" onClick={promptForLink}>
            <Link2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            title="Insert table"
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          >
            <Table2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
            <AlignLeft className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
            <AlignCenter className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Align right" active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
            <AlignRight className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()}>
            <Undo className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()}>
            <Redo className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton title="Clear marks" onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
            <RemoveFormatting className="h-4 w-4" />
          </ToolbarButton>
        </div>

        <div className="ml-auto rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
          {autosaveState === 'saving' ? 'Autosaving…' : autosaveState === 'saved' ? 'Draft cached locally' : 'Ready'}
        </div>
      </div>

      <EditorContent editor={editor} />
      <input type="hidden" name={name} value={html} readOnly />
    </div>
  );
}