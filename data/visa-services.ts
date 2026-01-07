import { ServicesData, ServiceType, IntentType, LifecycleStatus } from '@/types/services';

export const visaServicesData: ServicesData = {
  'employment-visa-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'UAE Work Visa Processing | Employment Residence Permit',
      metaDescription: 'Get UAE work visa and residence permit in 7-14 days. Employment visa sponsorship with labour card included.',
      h1: 'UAE Employment Visa Processing',
      primaryKeyword: 'uae work visa',
      secondaryKeywords: ['employment visa uae', 'uae residence permit', 'work permit dubai']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Work authorization and residence permit for UAE employment. Includes:</p>
            <ul>
              <li>Employment visa entry permit</li>
              <li>Medical fitness screening coordination</li>
              <li>Emirates ID application</li>
              <li>Labour card registration</li>
              <li>Residence visa stamping (2-year validity)</li>
            </ul>
          `
        },
        {
          id: 'who-qualifies',
          heading: 'Who Qualifies',
          content: `
            <ul>
              <li>Job offer from UAE-registered company</li>
              <li>Company willing to sponsor visa</li>
              <li>Educational certificates attested (degree-level positions)</li>
              <li>No active visa ban or deportation record</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Passport copy (minimum 6 months validity)</li>
              <li>Passport-size photographs (white background)</li>
              <li>Educational certificates</li>
              <li>Employment contract copy</li>
              <li>Previous visa cancellation (if applicable)</li>
            </ul>
            <p>Additional documents may be required depending on nationality and job category.</p>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Application submission to immigration authorities</li>
              <li>Coordination with employer's PRO office</li>
              <li>Medical test appointment scheduling</li>
              <li>Emirates ID enrollment</li>
              <li>Status tracking and updates</li>
              <li>Visa stamping in passport</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>Standard processing: 7-14 working days from complete documentation.</p>
            <p>Timing varies based on nationality, emirate, and government workload. Medical fitness clearance and security screening may extend timeframe.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing'],
      relatedServices: ['visa-renewal-uae', 'family-visa-uae']
    }
  },
  'family-visa-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'UAE Family Visa Sponsorship | Spouse & Dependents Visa',
      metaDescription: 'Sponsor family members to UAE. Family visa processing for spouse, children, and parents with residence permit.',
      h1: 'UAE Family Visa Sponsorship',
      primaryKeyword: 'uae family visa',
      secondaryKeywords: ['family sponsorship uae', 'spouse visa dubai', 'dependent visa uae']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Residence visa sponsorship for immediate family members:</p>
            <ul>
              <li>Entry permit for family members</li>
              <li>Medical fitness test coordination</li>
              <li>Emirates ID application</li>
              <li>Residence visa stamping (2-3 year validity)</li>
              <li>Status change processing (if family already in UAE)</li>
            </ul>
          `
        },
        {
          id: 'who-can-sponsor',
          heading: 'Who Can Sponsor',
          content: `
            <ul>
              <li>UAE residents with valid residence visa</li>
              <li>Minimum salary: AED 4,000 (for spouse) or AED 10,000 (for spouse and children)</li>
              <li>Accommodation letter or tenancy contract</li>
              <li>Employment in approved profession</li>
            </ul>
            <p>Additional income requirements may apply for certain nationalities.</p>
          `
        },
        {
          id: 'eligible-family',
          heading: 'Eligible Family Members',
          content: `
            <ul>
              <li>Spouse</li>
              <li>Children (sons under 18, unmarried daughters of any age)</li>
              <li>Parents (subject to higher income requirements)</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'Required Documents',
          content: `
            <h3>From Sponsor</h3>
            <ul>
              <li>Passport and visa copies</li>
              <li>Emirates ID copy</li>
              <li>Salary certificate and bank statements (6 months)</li>
              <li>Tenancy contract or accommodation letter</li>
              <li>Marriage certificate (attested)</li>
              <li>Children's birth certificates (attested)</li>
            </ul>
            <h3>From Family Members</h3>
            <ul>
              <li>Passport copies (6 months validity)</li>
              <li>Passport-size photographs</li>
              <li>Relationship proof documents</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>7-14 working days from complete documentation and salary certificate approval.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing', 'document-attestation-uae'],
      relatedServices: ['employment-visa-uae', 'visa-renewal-uae']
    }
  },
  'golden-visa-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'UAE Golden Visa Processing | 5 & 10 Year Residence',
      metaDescription: 'Get UAE Golden Visa for long-term residence. 5 and 10-year visa options for investors, entrepreneurs, and skilled professionals.',
      h1: 'UAE Golden Visa Processing',
      primaryKeyword: 'uae golden visa',
      secondaryKeywords: ['golden visa dubai', 'uae long term visa', '10 year visa uae']
    },
    content: {
      sections: [
        {
          id: 'what-is-golden-visa',
          heading: 'What is Golden Visa',
          content: `
            <p>Long-term residence visa (5 or 10 years) with automatic renewal. Benefits:</p>
            <ul>
              <li>No sponsor required after initial approval</li>
              <li>Family sponsorship included</li>
              <li>Longer validity than standard residence visa</li>
              <li>Extended stay outside UAE without visa cancellation (up to 6 months)</li>
            </ul>
          `
        },
        {
          id: 'eligibility-categories',
          heading: 'Eligibility Categories',
          content: `
            <h3>Investors</h3>
            <ul>
              <li>Property investment: AED 2 million minimum</li>
              <li>Business investment: AED 2 million minimum in UAE company</li>
              <li>Investment fund deposits: AED 2 million minimum</li>
            </ul>
            <h3>Entrepreneurs</h3>
            <ul>
              <li>Tech startup founders with government approval</li>
              <li>Innovative project owners</li>
            </ul>
            <h3>Skilled Professionals</h3>
            <ul>
              <li>Doctors, scientists, engineers in specialized fields</li>
              <li>PhD holders</li>
              <li>Outstanding students</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'Documentation Requirements',
          content: `
            <p>Documents vary by category. Common requirements:</p>
            <ul>
              <li>Passport copies (all pages)</li>
              <li>Current UAE visa copy (if applicable)</li>
              <li>Qualification certificates (attested)</li>
              <li>Proof of eligibility (property deed, business license, investment proof)</li>
              <li>Health insurance</li>
              <li>Medical fitness certificate</li>
            </ul>
          `
        },
        {
          id: 'application-process',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Eligibility assessment</li>
              <li>Document preparation and attestation</li>
              <li>Application submission to ICP or GDRFA</li>
              <li>Follow-up and status tracking</li>
              <li>Emirates ID processing</li>
              <li>Visa stamping</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>14-30 working days depending on category and emirate. Property-based applications are typically faster.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing', 'document-attestation-uae'],
      relatedServices: ['family-visa-uae', 'employment-visa-uae']
    }
  },
  'visa-renewal-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.RENEWAL,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'UAE Visa Renewal Services | Residence Permit Extension',
      metaDescription: 'Renew UAE residence visa before expiry. Employment and family visa renewal with medical and Emirates ID update.',
      h1: 'UAE Visa Renewal Processing',
      primaryKeyword: 'uae visa renewal',
      secondaryKeywords: ['residence visa renewal uae', 'visa extension dubai', 'renew emirates id']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <ul>
              <li>Residence visa renewal (2-3 year validity)</li>
              <li>Medical fitness test (if required)</li>
              <li>Emirates ID renewal</li>
              <li>Updated visa stamping in passport</li>
            </ul>
          `
        },
        {
          id: 'when-to-renew',
          heading: 'When to Renew',
          content: `
            <p>Start renewal process 2-3 months before visa expiry. Renewal after expiry incurs penalties.</p>
            <h3>Grace Period</h3>
            <p>30 days after visa expiry for renewal without exit. Overstaying beyond grace period requires exit and re-entry.</p>
          `
        },
        {
          id: 'documents-required',
          heading: 'Required Documents',
          content: `
            <ul>
              <li>Passport (minimum 6 months validity)</li>
              <li>Current Emirates ID</li>
              <li>Passport-size photographs</li>
              <li>Sponsor documents (if employment visa)</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>5-10 working days for standard renewal. Medical fitness may add 2-3 days.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing'],
      relatedServices: ['employment-visa-uae', 'family-visa-uae']
    }
  },
  'tourist-visa-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'UAE Tourist Visa | Visit Visa Processing Dubai',
      metaDescription: 'Get UAE tourist and visit visa in 3-5 days. 30-day and 90-day tourist visa options with express processing available.',
      h1: 'UAE Tourist & Visit Visa Processing',
      primaryKeyword: 'uae tourist visa',
      secondaryKeywords: ['dubai visit visa', 'uae visit visa', 'tourist visa dubai']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Short-term visit visa for tourism, family visits, or business meetings:</p>
            <ul>
              <li>30-day tourist visa (single or multiple entry)</li>
              <li>90-day tourist visa (single or multiple entry)</li>
              <li>Digital visa copy via email</li>
              <li>Express processing available (24-48 hours)</li>
              <li>Free visa cancellation if not used</li>
            </ul>
          `
        },
        {
          id: 'visa-types',
          heading: 'Visa Types Available',
          content: `
            <h3>30-Day Tourist Visa</h3>
            <ul>
              <li>Single entry or multiple entry</li>
              <li>Valid for 60 days from issue (must enter within 60 days)</li>
              <li>Can be extended once for additional 30 days</li>
            </ul>
            <h3>90-Day Tourist Visa</h3>
            <ul>
              <li>Single entry or multiple entry</li>
              <li>Valid for 60 days from issue</li>
              <li>Can be extended twice (30 days each time)</li>
            </ul>
            <h3>Transit Visa</h3>
            <ul>
              <li>48 hours or 96 hours validity</li>
              <li>For passengers in transit through UAE</li>
            </ul>
          `
        },
        {
          id: 'who-qualifies',
          heading: 'Who Can Apply',
          content: `
            <p>All nationalities can apply for UAE tourist visa. Some nationalities get visa on arrival, but pre-arranged visa is recommended for:</p>
            <ul>
              <li>Nationalities requiring pre-approved visa</li>
              <li>Travelers wanting guaranteed entry</li>
              <li>Business visitors</li>
              <li>Family visit purposes</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'Required Documents',
          content: `
            <ul>
              <li>Passport copy (minimum 6 months validity)</li>
              <li>Passport-size photograph (white background)</li>
              <li>Flight booking confirmation</li>
              <li>Hotel reservation or sponsor details in UAE</li>
              <li>Bank statement (last 3 months) - for certain nationalities</li>
            </ul>
            <p>Additional documents may be required based on nationality and visa type.</p>
          `
        },
        {
          id: 'processing-timeline',
          heading: 'Processing Time',
          content: `
            <p><strong>Standard Processing:</strong> 3-5 working days</p>
            <p><strong>Express Processing:</strong> 24-48 hours (additional charges apply)</p>
            <p><strong>Same Day Processing:</strong> Available for urgent cases</p>
          `
        },
        {
          id: 'visa-extension',
          heading: 'Visa Extension',
          content: `
            <p>Tourist visas can be extended from inside UAE:</p>
            <ul>
              <li>30-day visa: One extension of 30 days</li>
              <li>90-day visa: Two extensions of 30 days each</li>
              <li>Extension must be applied before visa expiry</li>
              <li>Extension processing: 2-3 days</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['employment-visa-uae', 'visa-renewal-uae', 'family-visa-uae']
    }
  },
  'document-attestation-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.INFORMATION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'Document Attestation UAE | Certificate Legalization Dubai',
      metaDescription: 'Professional document attestation and legalization services in UAE. Educational certificates, commercial documents, and personal certificates.',
      h1: 'Document Attestation & Legalization Services',
      primaryKeyword: 'document attestation uae',
      secondaryKeywords: ['certificate attestation dubai', 'mofa attestation', 'embassy legalization uae']
    },
    content: {
      sections: [
        {
          id: 'what-is-attestation',
          heading: 'What is Document Attestation',
          content: `
            <p>Document attestation is the official verification and legalization of documents by authorized government bodies, making them legally valid in UAE.</p>
            <h3>Why Attestation is Required</h3>
            <ul>
              <li>Employment visa processing</li>
              <li>Higher education admissions</li>
              <li>Business setup and company formation</li>
              <li>Family visa sponsorship</li>
              <li>Marriage registration</li>
              <li>Property transactions</li>
            </ul>
          `
        },
        {
          id: 'document-types',
          heading: 'Documents We Attest',
          content: `
            <h3>Educational Certificates</h3>
            <ul>
              <li>Degree certificates (Bachelor's, Master's, PhD)</li>
              <li>Diploma and school certificates</li>
              <li>Transcripts and mark sheets</li>
              <li>Professional certifications</li>
            </ul>
            <h3>Commercial Documents</h3>
            <ul>
              <li>Commercial invoices</li>
              <li>Certificates of origin</li>
              <li>Trade licenses</li>
              <li>Power of attorney</li>
              <li>Board resolutions</li>
              <li>Memorandum of Association</li>
            </ul>
            <h3>Personal Documents</h3>
            <ul>
              <li>Birth certificates</li>
              <li>Marriage certificates</li>
              <li>Death certificates</li>
              <li>Police clearance certificates</li>
              <li>Medical certificates</li>
            </ul>
          `
        },
        {
          id: 'attestation-process',
          heading: 'Attestation Process',
          content: `
            <p>Documents go through multiple levels of authentication:</p>
            <h3>For Documents from India</h3>
            <ol>
              <li>Notary attestation (if required)</li>
              <li>State HRD/SDM attestation</li>
              <li>MEA (Ministry of External Affairs) attestation</li>
              <li>UAE Embassy attestation in India</li>
              <li>MOFA (Ministry of Foreign Affairs) attestation in UAE</li>
            </ol>
            <h3>For Documents from Other Countries</h3>
            <ol>
              <li>Notary/solicitor verification</li>
              <li>Foreign ministry attestation in home country</li>
              <li>UAE Embassy attestation in home country</li>
              <li>MOFA attestation in UAE</li>
            </ol>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Document verification and preparation</li>
              <li>Submission to all attestation authorities</li>
              <li>Follow-up and status tracking</li>
              <li>Collection and delivery of attested documents</li>
              <li>Translation services (if required)</li>
              <li>Express processing coordination</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Original documents or certified copies</li>
              <li>Passport copy</li>
              <li>Current visa copy (if in UAE)</li>
              <li>Purpose of attestation</li>
              <li>Contact details for updates</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p><strong>Documents Already in Home Country:</strong> 15-25 working days (including courier time)</p>
            <p><strong>Documents in UAE (MOFA only):</strong> 3-5 working days</p>
            <p><strong>Express Processing:</strong> Available with additional charges</p>
            <p>Timeline varies by country of origin and document type.</p>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['employment-visa-uae', 'family-visa-uae', 'company-formation-uae']
    }
  },
  'company-formation-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'Company Formation UAE | Business Setup Dubai',
      metaDescription: 'Complete company formation services in UAE. Mainland and free zone business setup with trade license processing.',
      h1: 'Company Formation & Business Setup UAE',
      primaryKeyword: 'company formation uae',
      secondaryKeywords: ['business setup dubai', 'trade license uae', 'free zone company setup']
    },
    content: {
      sections: [
        {
          id: 'service-overview',
          heading: 'Company Formation Services',
          content: `
            <p>End-to-end business setup solutions for entrepreneurs and companies establishing presence in UAE.</p>
            <h3>Types of Business Setup</h3>
            <ul>
              <li>Mainland company formation (DED license)</li>
              <li>Free zone company setup (JAFZA, DMCC, DAFZA, etc.)</li>
              <li>Offshore company formation</li>
              <li>Branch office setup for foreign companies</li>
            </ul>
          `
        },
        {
          id: 'mainland-setup',
          heading: 'Mainland Company Formation',
          content: `
            <h3>Benefits</h3>
            <ul>
              <li>Trade anywhere in UAE and internationally</li>
              <li>No restrictions on office location</li>
              <li>Can deal directly with UAE government entities</li>
              <li>Eligibility for UAE residence visa</li>
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>Local service agent (for foreign ownership)</li>
              <li>Physical office space (minimum requirements apply)</li>
              <li>Initial approval from DED</li>
              <li>Shareholders' passport copies and photos</li>
            </ul>
            <h3>License Types</h3>
            <ul>
              <li>Commercial license (trading activities)</li>
              <li>Professional license (service providers)</li>
              <li>Industrial license (manufacturing)</li>
            </ul>
          `
        },
        {
          id: 'freezone-setup',
          heading: 'Free Zone Company Formation',
          content: `
            <h3>Benefits</h3>
            <ul>
              <li>100% foreign ownership</li>
              <li>0% corporate and personal tax</li>
              <li>100% repatriation of capital and profits</li>
              <li>No currency restrictions</li>
              <li>Simplified company formation process</li>
            </ul>
            <h3>Popular Free Zones</h3>
            <ul>
              <li>DMCC (Dubai Multi Commodities Centre)</li>
              <li>JAFZA (Jebel Ali Free Zone)</li>
              <li>Dubai Silicon Oasis</li>
              <li>DAFZA (Dubai Airport Free Zone)</li>
              <li>RAKEZ (Ras Al Khaimah Economic Zone)</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>Cannot trade directly in UAE mainland (requires distributor)</li>
              <li>Office must be within the free zone</li>
            </ul>
          `
        },
        {
          id: 'what-we-deliver',
          heading: 'What We Deliver',
          content: `
            <ul>
              <li>Business activity consultation and license type selection</li>
              <li>Trade name reservation and approval</li>
              <li>Initial approval from relevant authority</li>
              <li>Memorandum of Association (MOA) drafting</li>
              <li>License application and processing</li>
              <li>Office space assistance (Ejari registration)</li>
              <li>Visa quota allocation</li>
              <li>Corporate bank account opening support</li>
              <li>Immigration card for business owners</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'Required Documents',
          content: `
            <h3>For Individual Shareholders</h3>
            <ul>
              <li>Passport copies (all pages)</li>
              <li>Passport-size photographs</li>
              <li>Current visa copy (if in UAE)</li>
              <li>Emirates ID (if applicable)</li>
            </ul>
            <h3>For Corporate Shareholders</h3>
            <ul>
              <li>Certificate of incorporation</li>
              <li>Memorandum and Articles of Association</li>
              <li>Board resolution for UAE setup</li>
              <li>Passport copies of authorized signatories</li>
              <li>All documents attested</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Setup Timeline',
          content: `
            <p><strong>Free Zone Setup:</strong> 5-10 working days</p>
            <p><strong>Mainland Setup:</strong> 10-20 working days</p>
            <p><strong>Offshore Setup:</strong> 7-15 working days</p>
            <p>Timeline depends on document readiness, approvals, and specific free zone/emirate.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['document-attestation-uae', 'pro-services-uae'],
      relatedServices: ['employment-visa-uae', 'labour-immigration-uae']
    }
  },
  'pro-services-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.INFORMATION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'PRO Services UAE | Government Relations Officer Dubai',
      metaDescription: 'Professional PRO services for government transactions in UAE. License renewals, visa processing, and regulatory compliance.',
      h1: 'Professional PRO Services UAE',
      primaryKeyword: 'pro services uae',
      secondaryKeywords: ['pro services dubai', 'government liaison uae', 'corporate pro services']
    },
    content: {
      sections: [
        {
          id: 'what-are-pro-services',
          heading: 'What are PRO Services',
          content: `
            <p>Public Relations Officer (PRO) services provide professional representation and liaison with UAE government departments for business-related transactions.</p>
            <h3>Why Businesses Need PRO Services</h3>
            <ul>
              <li>Complex government procedures and regulations</li>
              <li>Time-consuming documentation requirements</li>
              <li>Multiple government departments involved</li>
              <li>Language barriers (Arabic-English)</li>
              <li>Frequent regulatory updates</li>
              <li>Need for specialized knowledge</li>
            </ul>
          `
        },
        {
          id: 'services-provided',
          heading: 'Services We Provide',
          content: `
            <h3>License Management</h3>
            <ul>
              <li>Trade license renewals</li>
              <li>License amendments (activities, trade name, shareholders)</li>
              <li>Branch license processing</li>
              <li>License cancellation</li>
            </ul>
            <h3>Immigration Services</h3>
            <ul>
              <li>Employment visa processing</li>
              <li>Visa renewals and cancellations</li>
              <li>Entry permit applications</li>
              <li>Emirates ID processing</li>
              <li>Medical fitness coordination</li>
            </ul>
            <h3>Labour & MOHRE Services</h3>
            <ul>
              <li>Labour card applications and renewals</li>
              <li>Work permit processing</li>
              <li>Employment contract submissions</li>
              <li>Quota increase requests</li>
              <li>Labour dispute resolution</li>
            </ul>
            <h3>Municipal Services</h3>
            <ul>
              <li>Municipality approvals and permits</li>
              <li>Health and safety certificates</li>
              <li>Food licenses (restaurants, cafes)</li>
              <li>Shop signage approvals</li>
            </ul>
          `
        },
        {
          id: 'government-departments',
          heading: 'Government Departments We Deal With',
          content: `
            <ul>
              <li>Department of Economic Development (DED)</li>
              <li>General Directorate of Residency and Foreigners Affairs (GDRFA)</li>
              <li>Ministry of Human Resources and Emiratisation (MOHRE)</li>
              <li>Dubai Municipality and other emirates municipalities</li>
              <li>Ministry of Foreign Affairs (MOFA)</li>
              <li>Immigration offices</li>
              <li>Free zone authorities</li>
            </ul>
          `
        },
        {
          id: 'service-packages',
          heading: 'Service Packages',
          content: `
            <h3>Pay-As-You-Go</h3>
            <p>Individual transaction basis with transparent per-service pricing.</p>
            <h3>Monthly Retainer</h3>
            <p>Dedicated PRO services for businesses with regular government transactions. Includes:</p>
            <ul>
              <li>Unlimited visa processing</li>
              <li>License renewal coordination</li>
              <li>Document clearing</li>
              <li>Priority service</li>
              <li>Dedicated account manager</li>
            </ul>
          `
        },
        {
          id: 'why-choose-us',
          heading: 'Why Choose Our PRO Services',
          content: `
            <ul>
              <li>Licensed and authorized PRO professionals</li>
              <li>Direct access to government systems</li>
              <li>Extensive experience with UAE regulations</li>
              <li>Fluent in Arabic and English</li>
              <li>Fast turnaround times</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Regular status updates</li>
            </ul>
          `
        },
        {
          id: 'typical-timeline',
          heading: 'Service Timelines',
          content: `
            <p>Processing times vary by service type:</p>
            <ul>
              <li>License renewal: 3-5 working days</li>
              <li>License amendment: 5-7 working days</li>
              <li>Visa processing: 5-10 working days</li>
              <li>Labour card: 3-7 working days</li>
              <li>Municipality approvals: 7-15 working days</li>
            </ul>
            <p>Express services available for urgent requirements.</p>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['company-formation-uae', 'labour-immigration-uae', 'employment-visa-uae']
    }
  },
  'labour-immigration-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.ACQUISITION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'Labour & Immigration Services UAE | MOHRE Services Dubai',
      metaDescription: 'Complete labour and immigration services for UAE businesses. Labour cards, work permits, MOHRE compliance, and WPS services.',
      h1: 'Labour & Immigration Services',
      primaryKeyword: 'labour services uae',
      secondaryKeywords: ['mohre services dubai', 'labour card uae', 'work permit dubai', 'wps uae']
    },
    content: {
      sections: [
        {
          id: 'service-overview',
          heading: 'Labour & Immigration Services',
          content: `
            <p>Comprehensive labour and immigration solutions for employers and businesses operating in UAE.</p>
            <h3>Who Needs These Services</h3>
            <ul>
              <li>Companies hiring foreign employees</li>
              <li>Businesses expanding workforce</li>
              <li>Employers requiring MOHRE compliance</li>
              <li>Companies managing employee lifecycle</li>
            </ul>
          `
        },
        {
          id: 'labour-card-services',
          heading: 'Labour Card Services',
          content: `
            <h3>New Labour Card Application</h3>
            <p>Mandatory work authorization card for employees in UAE mainland companies.</p>
            <ul>
              <li>Application submission to MOHRE</li>
              <li>Biometric enrollment</li>
              <li>Card printing and delivery</li>
              <li>Digital labour card access</li>
            </ul>
            <h3>Labour Card Renewal</h3>
            <ul>
              <li>Renewal before expiry</li>
              <li>Medical fitness update (if required)</li>
              <li>Updated employment contract</li>
            </ul>
            <h3>Labour Card Cancellation</h3>
            <ul>
              <li>Employee resignation or termination</li>
              <li>Absconding case filing</li>
              <li>Final settlement documentation</li>
            </ul>
          `
        },
        {
          id: 'work-permit-services',
          heading: 'Work Permit Services',
          content: `
            <p>Work permit is the initial approval from MOHRE before visa stamping.</p>
            <h3>New Work Permit</h3>
            <ul>
              <li>Quota verification</li>
              <li>Employee qualification assessment</li>
              <li>Salary compliance check</li>
              <li>Work permit issuance</li>
            </ul>
            <h3>Work Permit Modification</h3>
            <ul>
              <li>Designation change</li>
              <li>Salary adjustment</li>
              <li>Sponsor transfer</li>
            </ul>
          `
        },
        {
          id: 'mohre-services',
          heading: 'MOHRE Compliance Services',
          content: `
            <h3>Employment Contract Registration</h3>
            <ul>
              <li>Contract drafting and review</li>
              <li>Arabic translation</li>
              <li>MOHRE e-signature system</li>
              <li>Contract amendments</li>
            </ul>
            <h3>Employee Quota Management</h3>
            <ul>
              <li>Quota increase applications</li>
              <li>Emiratisation compliance</li>
              <li>Quota utilization tracking</li>
            </ul>
            <h3>Wage Protection System (WPS)</h3>
            <ul>
              <li>WPS registration and setup</li>
              <li>Monthly salary file submission</li>
              <li>Bank integration support</li>
              <li>WPS compliance monitoring</li>
            </ul>
          `
        },
        {
          id: 'additional-services',
          heading: 'Additional Services',
          content: `
            <h3>Absconding Cases</h3>
            <ul>
              <li>Absconding report filing</li>
              <li>Case resolution and negotiation</li>
              <li>Labour court representation</li>
            </ul>
            <h3>Labour Disputes</h3>
            <ul>
              <li>Mediation services</li>
              <li>Documentation and case filing</li>
              <li>MOHRE meetings attendance</li>
            </ul>
            <h3>Final Settlement</h3>
            <ul>
              <li>End-of-service calculation</li>
              <li>Gratuity processing</li>
              <li>Leave salary settlement</li>
              <li>NOC issuance</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'What We Need From You',
          content: `
            <h3>From Employer</h3>
            <ul>
              <li>Trade license copy</li>
              <li>Immigration card</li>
              <li>Establishment card</li>
              <li>MOA (for new companies)</li>
            </ul>
            <h3>From Employee</h3>
            <ul>
              <li>Passport copy with valid visa</li>
              <li>Emirates ID copy</li>
              <li>Educational certificates (attested)</li>
              <li>Employment contract</li>
              <li>Medical fitness certificate</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Timelines',
          content: `
            <ul>
              <li>Work permit approval: 3-5 working days</li>
              <li>Labour card processing: 5-7 working days</li>
              <li>Contract registration: 1-2 working days</li>
              <li>WPS file submission: Same day</li>
              <li>Quota increase: 7-10 working days</li>
              <li>Cancellation processing: 2-3 working days</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      dependencies: ['employment-visa-uae', 'medical-emirates-id-uae'],
      relatedServices: ['pro-services-uae', 'company-formation-uae']
    }
  },
  'medical-emirates-id-uae': {
    meta: {
      serviceType: ServiceType.CORE_VISA,
      intentType: IntentType.INFORMATION,
      lifecycleStatus: LifecycleStatus.ACTIVE,
      isIndexable: true,
      category: 'visa',
      seoDirective: 'index,follow',
      canonicalParent: null
    },
    seo: {
      title: 'Medical Fitness & Emirates ID Processing UAE',
      metaDescription: 'Medical fitness tests and Emirates ID processing services. Approved health centers, biometric services, and fast-track options.',
      h1: 'Medical Fitness & Emirates ID Services',
      primaryKeyword: 'medical fitness uae',
      secondaryKeywords: ['emirates id processing', 'medical test dubai', 'biometric uae']
    },
    content: {
      sections: [
        {
          id: 'service-overview',
          heading: 'Medical & Emirates ID Services',
          content: `
            <p>Mandatory health screening and identity card processing services for all UAE residence visa holders.</p>
            <h3>When These Services are Required</h3>
            <ul>
              <li>New employment visa processing</li>
              <li>Family visa sponsorship</li>
              <li>Visa renewal (every 2-3 years)</li>
              <li>Golden visa application</li>
              <li>Visit visa to residence visa conversion</li>
            </ul>
          `
        },
        {
          id: 'medical-fitness',
          heading: 'Medical Fitness Testing',
          content: `
            <h3>What is Medical Fitness Test</h3>
            <p>Mandatory health screening conducted at DHA/MOHAP approved medical centers to ensure public health compliance.</p>
            <h3>Tests Included</h3>
            <ul>
              <li>Chest X-ray (tuberculosis screening)</li>
              <li>Blood test (HIV, Hepatitis B & C, VDRL)</li>
              <li>General physical examination</li>
              <li>Pregnancy test (for females of certain age groups)</li>
            </ul>
            <h3>Medical Categories</h3>
            <ul>
              <li>Category A: Food handlers, healthcare workers, teachers</li>
              <li>Category B: All other professions</li>
            </ul>
            <h3>Test Results</h3>
            <p>Results available within 24-48 hours. Fit results are automatically sent to immigration for visa processing.</p>
          `
        },
        {
          id: 'emirates-id',
          heading: 'Emirates ID Processing',
          content: `
            <h3>What is Emirates ID</h3>
            <p>Mandatory government-issued identity card for all UAE residents. Serves as:</p>
            <ul>
              <li>Official identification document</li>
              <li>Access to government services</li>
              <li>Banking and financial transactions</li>
              <li>Telecom services activation</li>
              <li>Health insurance validation</li>
            </ul>
            <h3>Processing Steps</h3>
            <ol>
              <li>Biometric enrollment (fingerprints, photo, signature)</li>
              <li>Application submission to Federal Authority for Identity and Citizenship (ICP)</li>
              <li>Card production (5-7 working days)</li>
              <li>Card delivery to registered address or collection center</li>
            </ol>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <h3>Medical Fitness Coordination</h3>
            <ul>
              <li>Appointment booking at approved centers</li>
              <li>Medical center selection (location convenient to you)</li>
              <li>Test fee payment assistance</li>
              <li>Result tracking and follow-up</li>
              <li>Repeat tests if required</li>
            </ul>
            <h3>Emirates ID Services</h3>
            <ul>
              <li>Biometric appointment scheduling</li>
              <li>Application form completion</li>
              <li>Document submission</li>
              <li>Application tracking</li>
              <li>Card collection and delivery</li>
              <li>Emirates ID renewal processing</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'What to Bring',
          content: `
            <h3>For Medical Test</h3>
            <ul>
              <li>Original passport</li>
              <li>Entry permit or visa copy</li>
              <li>Medical referral form (provided by us)</li>
              <li>Previous medical results (if renewal)</li>
              <li>Test fee payment</li>
            </ul>
            <h3>For Emirates ID</h3>
            <ul>
              <li>Original passport with valid visa stamp</li>
              <li>Medical fitness certificate</li>
              <li>Emirates ID application form</li>
              <li>Biometric appointment confirmation</li>
            </ul>
          `
        },
        {
          id: 'approved-centers',
          heading: 'Approved Medical Centers',
          content: `
            <p>We work with DHA and MOHAP approved centers across UAE:</p>
            <ul>
              <li>Al Tadawi Medical Center</li>
              <li>Aster Clinic (multiple locations)</li>
              <li>Prime Medical Center</li>
              <li>NMC Medical Center</li>
              <li>Emirates Hospital</li>
            </ul>
            <p>Center selection based on your location preference and appointment availability.</p>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Timeline',
          content: `
            <p><strong>Medical Fitness:</strong></p>
            <ul>
              <li>Appointment: Same day to 2 days</li>
              <li>Test completion: 30-45 minutes</li>
              <li>Results: 24-48 hours</li>
            </ul>
            <p><strong>Emirates ID:</strong></p>
            <ul>
              <li>Biometric appointment: 1-3 days</li>
              <li>Card production: 5-7 working days</li>
              <li>Total timeline: 7-10 working days</li>
            </ul>
          `
        },
        {
          id: 'important-notes',
          heading: 'Important Notes',
          content: `
            <ul>
              <li>Medical test must be done after entry permit approval</li>
              <li>Results are valid for 6 months</li>
              <li>Emirates ID must be applied within 60 days of entry</li>
              <li>Delayed application may incur fines</li>
              <li>Emirates ID is valid for same duration as visa</li>
              <li>Health insurance is mandatory before medical test</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['employment-visa-uae', 'family-visa-uae', 'visa-renewal-uae', 'labour-immigration-uae']
    }
  }
};
