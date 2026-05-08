import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BarChart3, Building2, CheckCircle2, Clock3, FileText, Globe2, Headset, Landmark, ShieldCheck, Sparkles, Smartphone, Workflow } from 'lucide-react';
import { brand, featuredServices, homepageFaqs, homepageStats, processSteps, servicePillars, trustSignals } from '@/data/site-architecture';

const serviceCards = [
  {
    icon: Landmark,
    title: 'Visa Services',
    description: 'Employment visa Dubai, family visa UAE, tourist visa UAE, and Golden Visa support.',
    href: '/visa-services',
  },
  {
    icon: Building2,
    title: 'Company Formation',
    description: 'Mainland, free zone, and offshore setup guidance for founders and expanding teams.',
    href: '/visa-services/company-formation-uae',
  },
  {
    icon: Workflow,
    title: 'PRO Services',
    description: 'Government liaison, renewals, attestation, and recurring compliance tasks.',
    href: '/visa-services/pro-services-uae',
  },
  {
    icon: Smartphone,
    title: 'POS Systems',
    description: 'Retail and hospitality POS implementations with payment and inventory workflows.',
    href: '/technical-services/pos-system-setup',
  },
  {
    icon: BarChart3,
    title: 'CRM Solutions',
    description: 'Lead management, pipeline visibility, and workflow automation for sales teams.',
    href: '/technical-services/suitecrm-customization',
  },
  {
    icon: Globe2,
    title: 'WordPress Development',
    description: 'Corporate websites and conversion-focused digital presence for UAE businesses.',
    href: '/technical-services/wordpress-development',
  },
];

export const metadata: Metadata = {
  title: 'VistaDocs Center | UAE Business Setup, Visas & PRO Services',
  description: 'Business setup, employment visas, PRO services, and document attestation for entrepreneurs and SMEs launching in Dubai, Abu Dhabi, Sharjah, and Ajman.',
};

function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">{title}</h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-24 pb-12">
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="brand-surface relative overflow-hidden rounded-[2rem] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(2,132,199,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(13,148,136,0.12),transparent_30%)]" />
            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="brand-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" />
                  {brand.tagline}
                </span>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Company setup, visas, and renewals handled right.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Entrepreneurs, investors, and SMEs launch and operate in the UAE with clear guidance on licenses, visas, PRO work, and government approvals. No delays. No surprises.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-white shadow-lg transition-transform hover:-translate-y-0.5">
                    Get a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={brand.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-slate-900 shadow-sm transition-transform hover:-translate-y-0.5">
                    WhatsApp us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {['Company formation', 'Visa processing', 'License renewals'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {homepageStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="text-3xl font-display font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
                  </div>
                ))}
                <div className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Real UAE business support</p>
                  <p className="mt-3 text-lg leading-8 text-slate-100">
                    Company formation, visa processing, PRO services, and renewals—handled by people who know UAE procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why choose us"
            title="Built on trust and local experience"
            description="Licensed PRO specialists, transparent pricing, and real progress updates—not a typing center or generic consultant."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal} className="brand-surface flex items-start gap-4 rounded-3xl p-6">
                <BadgeCheck className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-600" />
                <p className="text-slate-700 leading-7">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Services"
            title="Licenses, visas, and renewals in one place"
            description="Company formation, visa sponsorship, PRO work, and document attestation—the complete range of UAE business services."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((pillar) => (
              <article key={pillar.title} className="brand-surface rounded-[1.75rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{pillar.highlight}</p>
                <h3 className="mt-4 text-2xl font-display font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {pillar.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href={pillar.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-cyan-700">
                  Explore {pillar.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Main services"
            title="Core services for UAE business owners"
            description="Whether you're starting out, hiring your first employee, or renewing your license—we handle it straightforwardly."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group brand-surface rounded-[1.75rem] p-6 transition-transform hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-display font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="How it works"
            title="Our process is simple and transparent"
            description="Every project follows the same clear steps—from first meeting to approval and handover."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="brand-surface rounded-[1.75rem] p-6">
                <div className="text-sm font-semibold text-cyan-700">{step.title}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Service guides"
            title="In-depth guides on visas, licenses, and procedures"
            description="Learn about visa types, license requirements, costs, and timelines before you reach out."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <Link key={service.slug} href={service.slug} className="brand-surface rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{service.primaryKeyword}</p>
                <h3 className="mt-3 text-xl font-display font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions about UAE business setup and visas"
            description="Answers to the questions we hear most from entrepreneurs and SME owners."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {homepageFaqs.map((faq) => (
              <div key={faq.question} className="brand-surface rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="brand-surface grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Blog and resources</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">Guides, updates, and practical advice for UAE business owners</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Step-by-step visa guides, license requirements, cost breakdowns, and regulatory updates—all written for people actually launching or running businesses in the UAE.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
                {['Visa guides', 'Company formation', 'License renewals', 'Startup operations', 'Government procedures'].map((topic) => (
                  <span key={topic} className="rounded-full border border-slate-200 bg-white px-4 py-2">{topic}</span>
                ))}
              </div>
              <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                View all guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Get in touch</p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-200">
                <li className="flex gap-3"><Headset className="mt-1 h-4 w-4 text-cyan-300" /> WhatsApp, phone, and live chat support.</li>
                <li className="flex gap-3"><FileText className="mt-1 h-4 w-4 text-cyan-300" /> Quick consultation booking—no long forms.</li>
                <li className="flex gap-3"><ShieldCheck className="mt-1 h-4 w-4 text-cyan-300" /> Transparent pricing and realistic timelines upfront.</li>
                <li className="flex gap-3"><Clock3 className="mt-1 h-4 w-4 text-cyan-300" /> Regular updates on your project status.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="brand-surface rounded-[2rem] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Ready to get started?</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">Let's handle your UAE business setup or visa processing</h2>
                <p className="mt-4 text-slate-600 leading-7">Start with a free consultation. We'll understand your situation, confirm the service you need, and give you exact costs and timelines—no hidden fees or surprises.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-white">
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={brand.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-slate-900">
                    Message on WhatsApp
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['UAE visa services', 'Company formation Dubai', 'PRO services Dubai', 'POS systems UAE', 'CRM solutions UAE', 'WordPress development UAE'].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'VistaDocs Center Home',
            url: brand.domain,
            about: {
              '@type': 'Organization',
              name: brand.name,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

