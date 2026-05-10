import AIBlogAssistant from '@/components/admin/AIBlogAssistant';

export const metadata = {
  title: 'AI Blog Assistant - VistaDocs Admin',
  description: 'Generate SEO-optimized blog posts with AI',
};

export default function AIAssistantPage() {
  return (
    <div className="space-y-6">
      <AIBlogAssistant />
    </div>
  );
}
