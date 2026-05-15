import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow } from 'lucide-react';
import { featuredServices, processSteps, servicePillars } from '@/data/site-architecture';

export const metadata: Metadata = {
  title: 'Services | VistaDocs Center',
  description: 'Explore UAE visa services, company formation, PRO support, attestation, Emirates ID, POS systems, CRM solutions, and WordPress development.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="brand-surface rounded-[2rem] p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950">A single service ecosystem for UAE businesses</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">This page is the authoritative hub for all service clusters. It should funnel traffic into the most relevant transactional landing page instead of spreading intent across disconnected pages.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {servicePillars.map((pillar) => (
            <div key={pillar.title} className="brand-surface rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{pillar.highlight}</p>
              <h2 className="mt-3 text-2xl font-display font-semibold text-slate-950">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {pillar.services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link href={pillar.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                Open category
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {featuredServices.slice(0, 9).map((service) => (
            <Link key={service.slug} href={service.slug} className="brand-surface rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{service.primaryKeyword}</p>
              <h2 className="mt-3 text-xl font-display font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 brand-surface rounded-[1.75rem] p-6">
          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title}>
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  <Workflow className="h-4 w-4" />
                  {step.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-white">
              Book consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm text-slate-700">
              <ShieldCheck className="h-4 w-4 text-cyan-700" />
              Premium, conversion-ready, and SEO-aligned
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
