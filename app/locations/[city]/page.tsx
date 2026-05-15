import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, MapPin, ShieldCheck } from 'lucide-react';
import { locations, featuredServices } from '@/data/site-architecture';

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((entry) => entry.slug === city);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.city} UAE Business Services | VistaDocs Center`,
    description: location.description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = locations.find((entry) => entry.slug === city);

  if (!location) {
    notFound();
  }

  const cityServices = featuredServices.slice(0, 6);

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="brand-surface rounded-[2rem] p-8 lg:p-12">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            <MapPin className="h-4 w-4" />
            {location.city}
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950">{location.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{location.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="brand-surface rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-display font-semibold text-slate-950">What this page should rank for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {location.focus.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              This page provides concise, local guidance on visas, licences and next steps — with a clear contact option.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cityServices.map((service) => (
              <Link key={service.slug} href={service.slug} className="brand-surface rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-display font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 brand-surface rounded-[1.75rem] p-6 lg:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 text-cyan-700" />
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-950">Local trust signals</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Use city-specific testimonials, office/service coverage, and local examples here to strengthen geo relevance.</p>
            </div>
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
            Get support in {location.city}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
