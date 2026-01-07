const { SERVICE_TYPES, INTENT_TYPES, LIFECYCLE_STATUS } = require('./services-taxonomy');

const servicesData = {
  'employment-visa-uae': {
    meta: {
      serviceType: SERVICE_TYPES.CORE_VISA,
      intentType: INTENT_TYPES.ACQUISITION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
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
          id: 'labour-card',
          heading: 'Labour Card Registration',
          content: `
            <p>Required for all employees under UAE labour law. Processed simultaneously with residence visa.</p>
            <h3>Covered Automatically</h3>
            <ul>
              <li>Ministry of Human Resources and Emiratisation registration</li>
              <li>Work permit issuance</li>
              <li>Contract lodgement</li>
            </ul>
            <p>No separate application required. Included in employment visa service.</p>
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
      upsells: ['golden-visa-uae'],
      alternatives: [],
      relatedGuides: ['document-attestation-uae', 'corporate-pro-services']
    },
    faqs: [
      {
        question: 'Does the work visa include labour card?',
        answer: 'Yes. Labour card registration is part of the employment visa process and processed simultaneously.'
      },
      {
        question: 'Can I work for multiple employers on one visa?',
        answer: 'No. Employment visa is tied to sponsoring employer. Additional work requires employer consent and MOHRE approval.'
      },
      {
        question: 'What happens if medical test fails?',
        answer: 'Visa application is rejected. Specific conditions may allow reapplication after treatment or waiver request.'
      }
    ]
  },

  'family-visa-uae': {
    meta: {
      serviceType: SERVICE_TYPES.CORE_VISA,
      intentType: INTENT_TYPES.ACQUISITION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'UAE Family Residence Visa | Sponsor Wife Children Parents',
      metaDescription: 'Sponsor family members for UAE residence. Wife, children, and parents visa sponsorship with salary requirements met.',
      h1: 'UAE Family Sponsorship Visa',
      primaryKeyword: 'uae family visa',
      secondaryKeywords: ['family sponsorship uae', 'sponsor wife uae', 'dependent visa dubai']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Residence permits for immediate family members:</p>
            <ul>
              <li>Spouse (wife or husband)</li>
              <li>Children (unmarried, under 18 or studying)</li>
              <li>Parents (subject to additional income requirements)</li>
            </ul>
            <p>Each family member receives 2-year residence visa tied to sponsor's visa validity.</p>
          `
        },
        {
          id: 'sponsor-requirements',
          heading: 'Sponsor Requirements',
          content: `
            <ul>
              <li>Valid UAE residence visa</li>
              <li>Minimum salary threshold met (varies by emirate)</li>
              <li>Accommodation meeting tenancy standards</li>
              <li>No outstanding visa violations</li>
            </ul>
            <p>Salary requirements differ based on emirate, family size, and sponsor nationality. Contact us for current thresholds applicable to your case.</p>
          `
        },
        {
          id: 'documents-required',
          heading: 'What We Need From You',
          content: `
            <h3>For Sponsor</h3>
            <ul>
              <li>Passport copy and residence visa</li>
              <li>Emirates ID</li>
              <li>Salary certificate or labour contract</li>
              <li>Tenancy contract (ejari registered)</li>
            </ul>
            <h3>For Family Members</h3>
            <ul>
              <li>Passport copies (minimum 6 months validity)</li>
              <li>Marriage certificate (attested)</li>
              <li>Birth certificates for children (attested)</li>
              <li>Passport-size photographs</li>
            </ul>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Document attestation verification</li>
              <li>Entry permit applications</li>
              <li>Medical fitness test coordination</li>
              <li>Emirates ID enrollment for all members</li>
              <li>Residence visa stamping</li>
              <li>Family book issuance</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>10-20 working days from complete documentation and attestation.</p>
            <p>Attestation of marriage and birth certificates adds time if not already completed. Processing time varies by emirate and government workload.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing', 'document-attestation-uae'],
      upsells: [],
      alternatives: [],
      relatedGuides: ['document-attestation-uae']
    },
    faqs: [
      {
        question: 'Can I sponsor my parents?',
        answer: 'Yes, subject to higher salary requirements. Minimum monthly income typically required. Requirements vary by emirate.'
      },
      {
        question: 'Do family members need separate medical tests?',
        answer: 'Yes. All family members over 18 require individual medical fitness tests for residence visa.'
      },
      {
        question: 'What if my spouse wants to work?',
        answer: 'Spouse can work after obtaining employment offer and transferring sponsorship to employer, or with your written consent under specific conditions.'
      }
    ]
  },

  'golden-visa-uae': {
    meta: {
      serviceType: SERVICE_TYPES.CORE_VISA,
      intentType: INTENT_TYPES.ACQUISITION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'UAE Golden Visa Application | 5-10 Year Residence Permit',
      metaDescription: 'Apply for UAE golden visa. Long-term residence for investors, entrepreneurs, and skilled professionals.',
      h1: 'UAE Golden Visa Application',
      primaryKeyword: 'uae golden visa',
      secondaryKeywords: ['golden visa dubai', 'uae 10 year visa', 'uae investor visa']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Long-term residence permit (5 or 10 years) with:</p>
            <ul>
              <li>No employer sponsorship required</li>
              <li>Ability to sponsor family members</li>
              <li>Extended stay outside UAE without visa cancellation</li>
              <li>Renewable under same category</li>
            </ul>
          `
        },
        {
          id: 'eligibility-categories',
          heading: 'Who Qualifies',
          content: `
            <ul>
              <li>Investors: Property investment minimum AED 2M or business investment</li>
              <li>Entrepreneurs: Approved startup or previous exit with Ministry endorsement</li>
              <li>Specialized professionals: Approved occupations with salary threshold</li>
              <li>Outstanding students: Academic distinction criteria met</li>
              <li>Researchers and scientists: Ministry of Education endorsement</li>
            </ul>
            <p>Qualification criteria are subject to government review and approval. Contact us to assess your eligibility.</p>
          `
        },
        {
          id: 'documents-required',
          heading: 'What We Need From You',
          content: `
            <p>Requirements vary by category. Common documents:</p>
            <ul>
              <li>Passport copy (minimum 6 months validity)</li>
              <li>Current UAE residence visa or entry permit</li>
              <li>Category-specific evidence (property deed, business license, employment contract, academic transcripts)</li>
              <li>Proof of health insurance</li>
              <li>Passport-size photographs</li>
            </ul>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Eligibility assessment and category selection</li>
              <li>Application preparation and submission</li>
              <li>Coordination with issuing authorities</li>
              <li>Medical fitness and Emirates ID processing</li>
              <li>Visa stamping and family sponsorship</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>30-60 days from application submission.</p>
            <p>Processing time depends on category, supporting documentation, and government review. Some categories require endorsement from multiple authorities.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: ['medical-fitness-uae', 'emirates-id-processing'],
      upsells: [],
      alternatives: [],
      relatedGuides: []
    },
    faqs: [
      {
        question: 'Can golden visa holders work without employer sponsorship?',
        answer: 'Yes. Golden visa allows self-sponsorship. Employment with any company is permitted without visa transfer.'
      },
      {
        question: 'What happens if I sell my property after getting investor golden visa?',
        answer: 'Visa may be revoked if minimum investment threshold no longer met. Maintaining investment is required for renewal.'
      },
      {
        question: 'Can I include family members?',
        answer: 'Yes. Spouse, children, and parents can be sponsored under golden visa with no additional salary requirements.'
      }
    ]
  },

  'tourist-visa-uae': {
    meta: {
      serviceType: SERVICE_TYPES.CORE_VISA,
      intentType: INTENT_TYPES.ACQUISITION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'UAE Tourist Visa Application | Dubai Visit Visa 30-90 Days',
      metaDescription: 'Get UAE tourist visa in 3-5 days. 30-day and 90-day visit visas for tourism, family visit, or business meetings.',
      h1: 'UAE Tourist Visa Service',
      primaryKeyword: 'uae tourist visa',
      secondaryKeywords: ['dubai tourist visa', 'uae visit visa', 'dubai visa online']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Single-entry or multiple-entry visit visa:</p>
            <ul>
              <li>30-day tourist visa (single entry)</li>
              <li>90-day tourist visa (single or multiple entry)</li>
              <li>Entry valid for 60 days from issue</li>
            </ul>
          `
        },
        {
          id: 'who-qualifies',
          heading: 'Who Qualifies',
          content: `
            <ul>
              <li>Valid passport (minimum 6 months validity)</li>
              <li>Sponsor in UAE (individual or company)</li>
              <li>No active visa ban or immigration violation</li>
            </ul>
            <p>Some nationalities eligible for visa-on-arrival. Check current eligibility before applying.</p>
          `
        },
        {
          id: 'documents-required',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Passport copy (full color scan)</li>
              <li>Passport-size photograph (white background)</li>
              <li>Sponsor's Emirates ID copy (if individual sponsor)</li>
              <li>Company trade license (if company sponsor)</li>
            </ul>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Application submission to immigration</li>
              <li>Sponsor coordination</li>
              <li>Visa issuance and delivery</li>
            </ul>
            <p>Medical fitness test and Emirates ID not required for tourist visas.</p>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>3-5 working days for standard processing.</p>
            <p>Express processing available for urgent travel (additional fees apply).</p>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: ['employment-visa-uae'],
      alternatives: [],
      relatedGuides: []
    },
    faqs: [
      {
        question: 'Can I convert tourist visa to work visa inside UAE?',
        answer: 'Yes, if you receive job offer and employer sponsors you. Process called visa change status. Not all nationalities eligible.'
      },
      {
        question: 'Can I extend tourist visa after arrival?',
        answer: 'Yes. 30-day extension available once. Apply before current visa expires to avoid overstay fines.'
      },
      {
        question: 'Do I need hotel booking to apply?',
        answer: 'Not required for visa issuance but may be requested by immigration officer on arrival.'
      }
    ]
  },

  'business-setup-uae': {
    meta: {
      serviceType: SERVICE_TYPES.CORE_BUSINESS,
      intentType: INTENT_TYPES.ACQUISITION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'Company Formation UAE | Business Setup Dubai Mainland & Freezone',
      metaDescription: 'Register company in UAE mainland or freezone. Trade license, investor visa, and bank account setup included.',
      h1: 'UAE Business Setup Services',
      primaryKeyword: 'company formation uae',
      secondaryKeywords: ['business setup dubai', 'uae mainland company', 'freezone company dubai']
    },
    content: {
      sections: [
        {
          id: 'what-you-get',
          heading: 'What You Get',
          content: `
            <p>Complete company registration with:</p>
            <ul>
              <li>Trade license (commercial, professional, or industrial)</li>
              <li>Initial approval and external approvals coordination</li>
              <li>Memorandum of Association</li>
              <li>Share certificates</li>
              <li>Investor visa quota allocation</li>
            </ul>
          `
        },
        {
          id: 'mainland-vs-freezone',
          heading: 'Mainland vs Freezone',
          content: `
            <h3 id="mainland">Mainland Company</h3>
            <ul>
              <li>Trade anywhere in UAE and internationally</li>
              <li>Local service agent required for most activities</li>
              <li>Office space in mainland required</li>
              <li>100% foreign ownership available for most activities</li>
            </ul>
            <h3 id="freezone">Freezone Company</h3>
            <ul>
              <li>100% foreign ownership</li>
              <li>No local agent required</li>
              <li>Tax benefits and customs exemptions</li>
              <li>Mainland trading requires distributor or separate mainland license</li>
              <li>Office requirements vary by freezone</li>
            </ul>
          `
        },
        {
          id: 'documents-required',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Passport copies of all shareholders</li>
              <li>Passport-size photographs</li>
              <li>Business activity description</li>
              <li>Company name options (3 preferred names)</li>
              <li>Share distribution agreement</li>
            </ul>
            <p>Additional documents may be required for regulated activities.</p>
          `
        },
        {
          id: 'what-we-handle',
          heading: 'What We Handle',
          content: `
            <ul>
              <li>Company name reservation</li>
              <li>Initial approval applications</li>
              <li>External approvals coordination (if required)</li>
              <li>Memorandum drafting and notarization</li>
              <li>Trade license issuance</li>
              <li>Immigration file opening for investor visas</li>
              <li>Corporate bank account introduction (banking approval not guaranteed)</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>7-21 working days depending on jurisdiction and activity.</p>
            <p>Freezone processing typically faster than mainland. Regulated activities require external approvals which extend timeframe.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: [],
      alternatives: [],
      relatedGuides: ['corporate-pro-services']
    },
    faqs: [
      {
        question: 'Can I own 100% of mainland company?',
        answer: 'Yes for most commercial activities. Some activities still require UAE national partner or service agent.'
      },
      {
        question: 'How many investor visas can I get?',
        answer: 'Depends on office space size and license type. Minimum quota usually 2-3 visas. Additional visas require larger office or multiple licenses.'
      },
      {
        question: 'Do I need physical office?',
        answer: 'Yes for mainland. Freezone options include flexi-desk, shared office, or dedicated office depending on freezone rules.'
      }
    ]
  },

  'document-attestation-uae': {
    meta: {
      serviceType: SERVICE_TYPES.SUPPORTING,
      intentType: INTENT_TYPES.INFORMATION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'UAE Certificate Attestation | Embassy Attestation Dubai',
      metaDescription: 'Attest educational, personal, and commercial documents for UAE use. Embassy and MOFA attestation handled.',
      h1: 'Document Attestation for UAE',
      primaryKeyword: 'uae certificate attestation',
      secondaryKeywords: ['embassy attestation dubai', 'mofa attestation', 'degree attestation uae']
    },
    content: {
      sections: [
        {
          id: 'what-attestation-does',
          heading: 'What Attestation Does',
          content: `
            <p>Official verification that foreign documents are genuine and acceptable for use in UAE.</p>
            <p>Required for:</p>
            <ul>
              <li>Family visa sponsorship (marriage and birth certificates)</li>
              <li>Professional employment (educational degrees)</li>
              <li>Business setup (commercial documents)</li>
            </ul>
          `
        },
        {
          id: 'attestation-process',
          heading: 'Attestation Steps',
          content: `
            <p>Multi-level verification process:</p>
            <ol>
              <li>Notary verification in issuing country</li>
              <li>Home country foreign affairs ministry</li>
              <li>UAE embassy in issuing country</li>
              <li>UAE Ministry of Foreign Affairs (MOFA)</li>
            </ol>
            <p>Specific steps vary by document type and country of origin.</p>
          `
        },
        {
          id: 'document-types',
          heading: 'Document Types We Handle',
          content: `
            <h3>Educational</h3>
            <ul>
              <li>Degree certificates</li>
              <li>Transcripts</li>
              <li>Professional certifications</li>
            </ul>
            <h3>Personal</h3>
            <ul>
              <li>Marriage certificates</li>
              <li>Birth certificates</li>
              <li>Divorce decrees</li>
              <li>Death certificates</li>
            </ul>
            <h3>Commercial</h3>
            <ul>
              <li>Company registration documents</li>
              <li>Board resolutions</li>
              <li>Power of attorney</li>
            </ul>
          `
        },
        {
          id: 'what-we-need',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Original documents or certified copies</li>
              <li>Passport copy</li>
              <li>Authorization letter (if we handle on your behalf)</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Processing Time',
          content: `
            <p>15-45 days depending on issuing country and document type.</p>
            <p>UAE-issued documents: 5-10 days. Foreign documents require attestation in home country before UAE processing.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: [],
      alternatives: [],
      relatedGuides: []
    },
    faqs: [
      {
        question: 'Can I use document without attestation?',
        answer: 'No. UAE authorities will not accept foreign documents without proper attestation chain.'
      },
      {
        question: 'Do I need to attest all pages of degree?',
        answer: 'Only final degree certificate requires attestation. Transcripts may be requested for specific cases.'
      },
      {
        question: 'Is attestation permanent?',
        answer: 'Yes. Once attested, document remains valid unless reissued or updated.'
      }
    ]
  },

  'corporate-pro-services': {
    meta: {
      serviceType: SERVICE_TYPES.SUPPORTING,
      intentType: INTENT_TYPES.INFORMATION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: true,
      canonicalParent: null,
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'Corporate PRO Services UAE | Government Relations Dubai',
      metaDescription: 'Corporate PRO services for visa processing, license renewals, and government approvals in UAE.',
      h1: 'Corporate PRO Services',
      primaryKeyword: 'pro services uae',
      secondaryKeywords: ['corporate pro dubai', 'government relations uae', 'business support services dubai']
    },
    content: {
      sections: [
        {
          id: 'what-pro-services-are',
          heading: 'What PRO Services Cover',
          content: `
            <p>Public Relations Officer (PRO) services handle government interactions for UAE companies:</p>
            <ul>
              <li>Employee visa processing and renewals</li>
              <li>Trade license renewals</li>
              <li>Immigration transactions</li>
              <li>Ministry approvals and permits</li>
              <li>Documentation and compliance filings</li>
            </ul>
          `
        },
        {
          id: 'when-needed',
          heading: 'When You Need PRO Services',
          content: `
            <ul>
              <li>Company lacks internal PRO staff</li>
              <li>High volume of employee visas</li>
              <li>Multiple government departments coordination required</li>
              <li>License renewals and amendments</li>
              <li>Compliance filings and inspections</li>
            </ul>
          `
        },
        {
          id: 'services-covered',
          heading: 'Services We Handle',
          content: `
            <h3>Immigration and Visa</h3>
            <ul>
              <li>Employment visa applications and renewals</li>
              <li>Visa cancellations</li>
              <li>Emirates ID processing</li>
              <li>Work permit renewals</li>
            </ul>
            <h3>Licensing and Compliance</h3>
            <ul>
              <li>Trade license renewals</li>
              <li>License amendments (activities, partners, address)</li>
              <li>Ministry approvals coordination</li>
            </ul>
            <h3>Documentation</h3>
            <ul>
              <li>Document attestation coordination</li>
              <li>Ministry of Labour filings</li>
              <li>Health and safety compliance</li>
            </ul>
          `
        },
        {
          id: 'what-we-need',
          heading: 'What We Need From You',
          content: `
            <ul>
              <li>Company trade license and establishment card</li>
              <li>Authorized signatory Emirates ID</li>
              <li>Employee documents (passports, photos, contracts)</li>
              <li>POA authorizing PRO transactions</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: [],
      alternatives: [],
      relatedGuides: []
    },
    faqs: [
      {
        question: 'Can PRO services replace internal HR?',
        answer: 'No. PRO handles government transactions only. HR functions like payroll, recruitment, and employee management remain with company.'
      },
      {
        question: 'Do I need dedicated PRO for small company?',
        answer: 'Not required. Outsourced PRO services suitable for companies with occasional government transactions.'
      },
      {
        question: 'How long does PRO retain company documents?',
        answer: 'Original documents returned immediately after transaction completion. Copies retained per data retention policy.'
      }
    ]
  },

  'medical-fitness-uae': {
    meta: {
      serviceType: SERVICE_TYPES.DEPENDENCY,
      intentType: INTENT_TYPES.INFORMATION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: false,
      canonicalParent: 'employment-visa-uae',
      seoDirective: 'noindex,follow'
    },
    seo: {
      title: 'Medical Fitness Test for UAE Visa',
      metaDescription: '',
      h1: 'Medical Fitness Test',
      primaryKeyword: '',
      secondaryKeywords: []
    },
    content: {
      sections: [
        {
          id: 'requirement',
          heading: 'Requirement',
          content: `
            <p>Mandatory medical screening for residence visa applicants over 18 years.</p>
          `
        },
        {
          id: 'tests-included',
          heading: 'Tests Included',
          content: `
            <ul>
              <li>Blood test (infectious diseases screening)</li>
              <li>Chest X-ray (tuberculosis screening)</li>
              <li>Pregnancy test (for female applicants)</li>
            </ul>
          `
        },
        {
          id: 'process',
          heading: 'Process',
          content: `
            <ol>
              <li>Entry permit issued</li>
              <li>Medical test appointment at approved center</li>
              <li>Results submitted to immigration electronically</li>
              <li>Clearance allows visa processing to continue</li>
            </ol>
            <p>Results typically available within 24-48 hours.</p>
          `
        },
        {
          id: 'failure',
          heading: 'If Test Result is Positive',
          content: `
            <p>Visa application rejected. Specific conditions prohibit residence visa issuance under UAE immigration law.</p>
            <p>Included automatically when processing employment or family visa through our service.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: [],
      alternatives: [],
      relatedGuides: []
    },
    faqs: []
  },

  'emirates-id-processing': {
    meta: {
      serviceType: SERVICE_TYPES.DEPENDENCY,
      intentType: INTENT_TYPES.INFORMATION,
      lifecycleStatus: LIFECYCLE_STATUS.ACTIVE,
      isIndexable: false,
      canonicalParent: 'employment-visa-uae',
      seoDirective: 'noindex,follow'
    },
    seo: {
      title: 'Emirates ID Application',
      metaDescription: '',
      h1: 'Emirates ID',
      primaryKeyword: '',
      secondaryKeywords: []
    },
    content: {
      sections: [
        {
          id: 'requirement',
          heading: 'Requirement',
          content: `
            <p>Mandatory national identity card for all UAE residents.</p>
          `
        },
        {
          id: 'process',
          heading: 'Process',
          content: `
            <ol>
              <li>Biometric enrollment at typing center</li>
              <li>Fingerprints and photograph captured</li>
              <li>Application submitted to Federal Authority for Identity and Citizenship</li>
              <li>Card printed and delivered to registered address</li>
            </ol>
            <p>Processing time: 5-10 working days after enrollment.</p>
          `
        },
        {
          id: 'validity',
          heading: 'Validity',
          content: `
            <p>Tied to residence visa validity. Renewal required before expiry to avoid fines.</p>
            <p>Included automatically when processing employment or family visa through our service.</p>
          `
        }
      ]
    },
    linking: {
      dependencies: [],
      upsells: [],
      alternatives: [],
      relatedGuides: []
    },
    faqs: []
  }
};

module.exports = servicesData;
