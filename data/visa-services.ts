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
  }
};
