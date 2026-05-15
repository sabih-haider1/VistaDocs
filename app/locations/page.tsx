import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPinned, Sparkles } from 'lucide-react';
import { locations } from '@/data/site-architecture';

export const metadata: Metadata = {
  title: 'UAE Locations | Dubai, Abu Dhabi, Sharjah & Ajman | VistaDocs',
  description: 'Find local business services in Dubai, Abu Dhabi, Sharjah, and Ajman. VistaDocs provides visa, company formation, PRO, and digital solutions across all emirates.',
  keywords: ['dubai business services', 'abu dhabi visa services', 'sharjah company formation', 'ajman business setup', 'uae business services', 'local business support'],
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'UAE Locations | VistaDocs Center',
    description: 'Local business services in Dubai, Abu Dhabi, Sharjah, and Ajman.',
    url: 'https://vistadocscenter.com/locations',
    type: 'website',
  },
};

export default function LocationsPage() {
  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="brand-surface rounded-[2rem] p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Locations</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950">Location pages built for local SEO in the UAE</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Each city page should speak to a specific local intent, reinforce UAE relevance, and help users quickly find the support model that fits their location.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="brand-surface rounded-[1.75rem] p-6 transition-transform hover:-translate-y-1">
              <MapPinned className="h-6 w-6 text-cyan-700" />
              <h2 className="mt-4 text-2xl font-display font-semibold text-slate-950">{location.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{location.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {location.focus.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 brand-surface rounded-[1.75rem] p-6 lg:p-8">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 text-cyan-700" />
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-950">Use one brand, many local entry points</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">This structure improves local discoverability while keeping the core brand consistent across the UAE.</p>
            </div>
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
            Request city-specific support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
