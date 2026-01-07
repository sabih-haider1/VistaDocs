/**
 * VistaDocs Center - Service Configuration
 * Central data file for all services
 */

const services = {
  // Employment Visa
  'employment-visa-uae': {
    slug: 'employment-visa-uae',
    title: 'Employment Visa Processing UAE',
    metaDescription: 'Employment visa processing in UAE. Complete work permit and residence visa services for all nationalities. MOHRE approved processing.',
    h1: 'Employment Visa Processing in UAE',
    primaryKeyword: 'employment visa uae',
    secondaryKeywords: ['work visa dubai', 'uae work permit', 'employment residence visa', 'mohre visa processing'],
    
    sections: {
      what: {
        title: 'What is an Employment Visa',
        content: 'An employment visa is a legal permit that allows foreign nationals to work and reside in the UAE. The visa is sponsored by a UAE-based employer and is mandatory for all employees working in mainland and free zone companies.'
      },
      who: {
        title: 'Who Needs This Service',
        content: 'Foreign nationals offered employment in UAE companies, employers hiring international staff, employees transferring to UAE offices, and professionals relocating to the UAE for work.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Passport copy (minimum 6 months validity)',
          'Passport-size photographs (white background)',
          'Educational certificates (attested)',
          'Employment contract signed by employer',
          'Company trade license copy',
          'Establishment card copy'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Submit application to MOHRE for work permit approval',
          'Obtain entry permit from GDRFA after MOHRE approval',
          'Employee enters UAE using entry permit',
          'Complete medical fitness test at approved center',
          'Submit Emirates ID application and biometrics',
          'Apply for residence visa stamping',
          'Collect residence visa and Emirates ID'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '7 to 14 working days from document submission to residence visa stamping, excluding medical and Emirates ID processing time.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Incomplete or expired passport',
          'Educational certificates not properly attested',
          'Company quota limitations or restrictions',
          'Previous visa violations or overstay records',
          'Mismatch between job title and educational background',
          'Medical fitness test failure'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Employment visa processing involves coordination with multiple government departments including MOHRE, GDRFA, and ICP. Professional services ensure document compliance, prevent rejections, expedite processing, and handle all government interactions on your behalf.'
      }
    },
    
    relatedServices: ['medical-fitness-uae', 'emirates-id-processing', 'labour-card-uae'],
    
    faqs: [
      {
        question: 'How long is an employment visa valid in UAE?',
        answer: 'Employment residence visas are typically issued for 2 or 3 years, depending on the employment contract and company preference.'
      },
      {
        question: 'Can I change employers on an employment visa?',
        answer: 'Yes, but you must obtain a no objection certificate (NOC) from your current employer or wait for the labour ban period to expire if applicable.'
      },
      {
        question: 'What happens if my visa application is rejected?',
        answer: 'Rejection reasons are provided by authorities. Most rejections can be resolved by correcting documents or addressing specific issues before reapplication.'
      }
    ]
  },

  // Family Visa
  'family-visa-uae': {
    slug: 'family-visa-uae',
    title: 'Family Visa Sponsorship UAE',
    metaDescription: 'Family visa sponsorship in UAE. Spouse and children residence visa processing. Complete dependent visa services for UAE residents.',
    h1: 'Family Visa Sponsorship in UAE',
    primaryKeyword: 'family visa uae',
    secondaryKeywords: ['spouse visa dubai', 'dependent visa uae', 'family sponsorship dubai', 'children visa uae'],
    
    sections: {
      what: {
        title: 'What is a Family Visa',
        content: 'A family visa allows UAE residents to sponsor their immediate family members (spouse, children, parents) for residence in the UAE. The sponsor must meet minimum salary requirements and provide accommodation proof.'
      },
      who: {
        title: 'Who Can Apply',
        content: 'UAE residents with valid employment or investor visas meeting minimum salary criteria (AED 4,000 for certain nationalities, AED 10,000 for others), property owners, and retired residents under specific programs.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Sponsor passport and visa copy',
          'Sponsor salary certificate (minimum requirements)',
          'Tenancy contract (ejari) or property title deed',
          'Family member passports (minimum 6 months validity)',
          'Marriage certificate (attested) for spouse',
          'Birth certificates (attested) for children',
          'Sponsor bank statement (6 months)'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Verify sponsor eligibility and salary requirements',
          'Obtain initial approval from immigration',
          'Apply for entry permits for family members',
          'Family members enter UAE on entry permit',
          'Complete medical fitness tests',
          'Submit Emirates ID applications',
          'Process residence visa stamping',
          'Collect residence visas and Emirates IDs'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '10 to 15 working days from approval to visa stamping, excluding medical tests and Emirates ID processing.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Salary below minimum requirement',
          'Invalid or unattested marriage certificate',
          'Insufficient accommodation proof',
          'Sponsor visa validity less than required period',
          'Missing bank statements or salary certificate',
          'Previous immigration violations'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Family visa processing requires verification of eligibility, proper document attestation, and coordination between GDRFA and typing centers. Professional services ensure all requirements are met, preventing delays and rejections.'
      }
    },
    
    relatedServices: ['document-attestation-uae', 'medical-fitness-uae', 'emirates-id-processing'],
    
    faqs: [
      {
        question: 'What is the minimum salary to sponsor a family in UAE?',
        answer: 'Minimum salary varies by nationality and emirate, typically AED 4,000 or AED 10,000 plus accommodation or AED 3,000 additional.'
      },
      {
        question: 'Can I sponsor my parents on a family visa?',
        answer: 'Yes, if you meet higher salary requirements (usually AED 20,000 or above) or own property valued above a certain threshold.'
      },
      {
        question: 'How long does a family visa remain valid?',
        answer: 'Family visas are issued for the same duration as the sponsor visa, typically 2 or 3 years.'
      }
    ]
  },

  // Tourist Visa
  'tourist-visa-uae': {
    slug: 'tourist-visa-uae',
    title: 'Tourist Visa UAE',
    metaDescription: 'Tourist visa for UAE. Visit visa processing for 30 days and 90 days. Fast tourist visa services for all nationalities.',
    h1: 'Tourist Visa Processing for UAE',
    primaryKeyword: 'tourist visa uae',
    secondaryKeywords: ['visit visa dubai', 'uae tourist visa', '30 day visa uae', '90 day tourist visa'],
    
    sections: {
      what: {
        title: 'What is a Tourist Visa',
        content: 'A tourist visa is a short-term entry permit for visitors coming to the UAE for tourism, family visits, or business meetings. Available in 30-day and 90-day validity options with single or multiple entry.'
      },
      who: {
        title: 'Who Needs This Service',
        content: 'International travelers visiting UAE for tourism, family members visiting residents, business visitors attending meetings or conferences, and transit passengers requiring UAE entry.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Passport copy (minimum 6 months validity)',
          'Passport-size photograph (white background)',
          'Sponsor Emirates ID copy (if sponsored by resident)',
          'Hotel booking confirmation (for tourist visa)',
          'Travel insurance (recommended)',
          'Return flight booking'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Submit visa application with required documents',
          'Payment of visa fees and processing charges',
          'Application processing by immigration authorities',
          'Visa approval and electronic visa issuance',
          'Email delivery of approved visa copy',
          'Entry to UAE with printed visa copy'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '3 to 5 working days for standard processing. Express services available for 24-hour processing.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Passport validity less than 6 months',
          'Previous visa violations or overstay',
          'Incomplete application or missing documents',
          'Security or background check issues',
          'Nationality-specific restrictions',
          'Sponsor eligibility issues (if applicable)'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Tourist visa applications require proper documentation and sponsor verification. Professional services ensure quick processing, handle rejections, provide visa status tracking, and offer express options for urgent travel.'
      }
    },
    
    relatedServices: ['medical-insurance-uae'],
    
    faqs: [
      {
        question: 'Can I extend my tourist visa while in UAE?',
        answer: 'Yes, 30-day tourist visas can be extended once for an additional 30 days. Extensions must be applied before visa expiry.'
      },
      {
        question: 'What is the difference between 30-day and 90-day tourist visas?',
        answer: '30-day visas allow stays up to 30 days, while 90-day visas permit stays up to 90 days. Both can be single or multiple entry.'
      },
      {
        question: 'Do I need travel insurance for a UAE tourist visa?',
        answer: 'Travel insurance is not mandatory but highly recommended for medical emergencies and trip cancellations.'
      }
    ]
  },

  // Golden Visa
  'golden-visa-uae': {
    slug: 'golden-visa-uae',
    title: 'Golden Visa UAE Processing',
    metaDescription: 'Golden Visa UAE application. 5-year and 10-year residence visa for investors, entrepreneurs, and professionals. Complete golden visa services.',
    h1: 'Golden Visa Processing in UAE',
    primaryKeyword: 'golden visa uae',
    secondaryKeywords: ['10 year visa uae', '5 year visa dubai', 'investor visa uae', 'long term visa dubai'],
    
    sections: {
      what: {
        title: 'What is a Golden Visa',
        content: 'The Golden Visa is a long-term residence visa (5 or 10 years) granted to investors, entrepreneurs, specialized talents, researchers, and outstanding students. It offers renewable residency without the need for a sponsor.'
      },
      who: {
        title: 'Who is Eligible',
        content: 'Investors in property or business, entrepreneurs with approved projects, specialized professionals in medicine, engineering, science, and arts, PhD holders, outstanding students, and humanitarian pioneers.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Passport copy (minimum 6 months validity)',
          'Proof of eligibility (property deed, investment proof, degree)',
          'Emirates ID copy (if applicable)',
          'Passport-size photographs',
          'Category-specific documents (NOC, salary certificate, approval letters)',
          'Health insurance coverage proof',
          'No objection certificate (for employees)'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Determine eligibility category and requirements',
          'Prepare and submit application with supporting documents',
          'Application review by relevant authorities',
          'Initial approval and nomination',
          'Complete medical fitness examination',
          'Submit Emirates ID application',
          'Residence visa stamping and issuance',
          'Collect Golden Visa and Emirates ID'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '15 to 30 working days depending on category and document verification. Property investors may see faster processing.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Insufficient proof of eligibility',
          'Property value below minimum threshold',
          'Incomplete investment documentation',
          'Degree not recognized or unattested',
          'Missing health insurance coverage',
          'Employer NOC not provided',
          'Previous immigration violations'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Golden Visa applications involve complex eligibility verification, document authentication, and coordination with multiple authorities. Professional services ensure proper category selection, complete documentation, and expedited approvals.'
      }
    },
    
    relatedServices: ['property-investment-consultation', 'medical-fitness-uae', 'emirates-id-processing'],
    
    faqs: [
      {
        question: 'What is the minimum property value for Golden Visa?',
        answer: 'Property must be valued at AED 2 million or above for Golden Visa eligibility. Off-plan properties may qualify under specific conditions.'
      },
      {
        question: 'Can I sponsor my family on a Golden Visa?',
        answer: 'Yes, Golden Visa holders can sponsor their spouse, children, and one executive assistant or advisor.'
      },
      {
        question: 'Do I need to stay in UAE to maintain Golden Visa?',
        answer: 'Golden Visa holders must visit UAE at least once every 180 days to maintain visa validity.'
      }
    ]
  },

  // Document Attestation
  'document-attestation-uae': {
    slug: 'document-attestation-uae',
    title: 'Document Attestation Services UAE',
    metaDescription: 'Document attestation in UAE. Educational certificate attestation, MOFA attestation, embassy legalization. Complete attestation services.',
    h1: 'Document Attestation and Legalization in UAE',
    primaryKeyword: 'document attestation uae',
    secondaryKeywords: ['mofa attestation dubai', 'certificate attestation uae', 'embassy legalization dubai', 'degree attestation uae'],
    
    sections: {
      what: {
        title: 'What is Document Attestation',
        content: 'Document attestation is the official verification process that confirms the authenticity of documents issued outside the UAE. It involves certification by the issuing country authorities, embassy, and UAE Ministry of Foreign Affairs (MOFA).'
      },
      who: {
        title: 'Who Needs This Service',
        content: 'Individuals applying for employment visas, students enrolling in UAE institutions, professionals seeking license approvals, individuals registering marriages, and businesses requiring contract authentication.'
      },
      documents: {
        title: 'Documents Commonly Attested',
        items: [
          'Educational certificates (degrees, diplomas, transcripts)',
          'Marriage certificates',
          'Birth certificates',
          'Police clearance certificates',
          'Commercial documents (contracts, agreements, invoices)',
          'Medical certificates and reports',
          'Power of attorney documents'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Notarization in the issuing country (if required)',
          'Attestation from relevant government department in home country',
          'Attestation from UAE embassy in the issuing country',
          'Translation to Arabic (if document not in English or Arabic)',
          'Attestation from UAE Ministry of Foreign Affairs (MOFA)',
          'Additional attestation from relevant UAE ministry (if required)',
          'Document delivery to client'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '15 to 25 working days depending on issuing country and document type. UAE-issued documents may be processed within 3 to 7 days.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Documents not properly notarized in home country',
          'Missing attestation from home country authorities',
          'Incorrect translation or missing Arabic translation',
          'Documents issued by non-recognized institutions',
          'Expired or damaged documents',
          'Discrepancies in personal information across documents'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Document attestation involves multiple government departments across different countries. Professional services manage the complete chain of attestation, coordinate with embassies, ensure proper translation, and prevent rejections due to procedural errors.'
      }
    },
    
    relatedServices: ['employment-visa-uae', 'translation-services-uae'],
    
    faqs: [
      {
        question: 'How long is an attested document valid in UAE?',
        answer: 'Educational certificates have no expiry once attested. Personal documents like police clearance may require recent issuance (within 3-6 months).'
      },
      {
        question: 'Do I need to attest documents from my home country?',
        answer: 'Yes, documents issued outside UAE must first be attested by your home country authorities and UAE embassy before MOFA attestation.'
      },
      {
        question: 'Can I attest photocopies or do I need originals?',
        answer: 'Original documents are required for attestation. Certified copies may be accepted in some cases but originals are always recommended.'
      }
    ]
  },

  // Labour Card
  'labour-card-uae': {
    slug: 'labour-card-uae',
    title: 'Labour Card Processing UAE',
    metaDescription: 'Labour card processing in UAE. MOHRE labour card application and renewal. Complete work permit card services for employees.',
    h1: 'Labour Card Processing and Renewal in UAE',
    primaryKeyword: 'labour card uae',
    secondaryKeywords: ['mohre labour card', 'work permit card dubai', 'labour card renewal uae', 'employee labour card'],
    
    sections: {
      what: {
        title: 'What is a Labour Card',
        content: 'A labour card is an official document issued by the Ministry of Human Resources and Emiratisation (MOHRE) that authorizes an employee to work for a specific employer in the UAE. It is mandatory for all employees working in mainland companies.'
      },
      who: {
        title: 'Who Needs This Service',
        content: 'All employees working in UAE mainland companies (excluding free zones and government entities), employers processing new employee onboarding, and employees requiring labour card renewal or cancellation.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Employee passport copy and visa copy',
          'Emirates ID copy',
          'Company trade license copy',
          'Establishment card',
          'Employment contract (typed and stamped)',
          'Educational certificates (attested)',
          'Medical fitness certificate',
          'Employer authorization letter'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Submit work permit application to MOHRE',
          'Obtain work permit approval',
          'Complete medical fitness test (if not done)',
          'Submit labour card application with approved work permit',
          'Pay MOHRE fees and processing charges',
          'Biometric data submission (if required)',
          'Labour card printing and issuance',
          'Delivery of labour card to employer/employee'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '5 to 10 working days from work permit approval to labour card issuance.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Company quota exceeded or unavailable',
          'Educational qualification not matching job title',
          'Previous labour violations or bans',
          'Incomplete employment contract details',
          'Medical fitness test not completed',
          'Wage Protection System (WPS) non-compliance',
          'Outstanding MOHRE fines or penalties'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Labour card processing requires coordination with MOHRE, compliance with labour laws, and proper contract registration. Professional services ensure quota verification, WPS compliance, prevent rejections, and handle all MOHRE formalities.'
      }
    },
    
    relatedServices: ['employment-visa-uae', 'medical-fitness-uae', 'wps-registration-uae'],
    
    faqs: [
      {
        question: 'How long is a labour card valid?',
        answer: 'Labour cards are typically valid for 2 years and must be renewed before expiry to avoid penalties.'
      },
      {
        question: 'Can I work without a labour card in a free zone?',
        answer: 'Free zone employees do not require MOHRE labour cards but must have valid employment contracts and work permits issued by the free zone authority.'
      },
      {
        question: 'What happens if my labour card expires?',
        answer: 'Expired labour cards result in fines for employers and employees may be unable to renew residence visas or change employment.'
      }
    ]
  },

  // Medical Fitness
  'medical-fitness-uae': {
    slug: 'medical-fitness-uae',
    title: 'Medical Fitness Test UAE',
    metaDescription: 'Medical fitness test for UAE residence visa. Approved medical centers, test requirements, and results processing for visa applications.',
    h1: 'Medical Fitness Test for UAE Residence Visa',
    primaryKeyword: 'medical fitness test uae',
    secondaryKeywords: ['visa medical test dubai', 'medical fitness center uae', 'health screening visa uae', 'blood test residence visa'],
    
    sections: {
      what: {
        title: 'What is a Medical Fitness Test',
        content: 'A medical fitness test is a mandatory health screening required for all residence visa applicants in the UAE. The test screens for infectious diseases and ensures applicants meet UAE health standards.'
      },
      who: {
        title: 'Who Must Take This Test',
        content: 'All residence visa applicants including employees, dependents (above 18 years), domestic workers, and visa renewal applicants. Children under 18 may require screening based on visa type.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Original passport',
          'Entry permit or current visa copy',
          'Emirates ID (if renewal)',
          'Passport-size photograph',
          'Medical fitness appointment confirmation',
          'Previous medical fitness result (if renewal)'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Book appointment at approved medical center',
          'Visit center with required documents',
          'Complete registration and payment',
          'Blood test for infectious diseases',
          'Chest X-ray screening',
          'General physical examination',
          'Results processing by health authority',
          'Pass/fail status notification',
          'Medical fitness certificate issuance if passed'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '24 to 48 hours for test results. Medical fitness certificate issued within 3 working days for passed results.'
      },
      rejection: {
        title: 'Common Reasons for Test Failure',
        items: [
          'Positive test for HIV/AIDS',
          'Active tuberculosis infection',
          'Hepatitis B or C (employment visa specific)',
          'Pregnancy (may require deferment)',
          'Other communicable diseases as per UAE health regulations'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Professional services coordinate appointments at convenient times, ensure all documents are in order, track test results, and expedite medical certificate collection, minimizing delays in visa processing.'
      }
    },
    
    relatedServices: ['employment-visa-uae', 'emirates-id-processing', 'family-visa-uae'],
    
    faqs: [
      {
        question: 'Do I need to fast before the medical fitness test?',
        answer: 'Fasting is not required for the standard medical fitness test. Regular blood tests are performed.'
      },
      {
        question: 'What happens if I fail the medical fitness test?',
        answer: 'Failed tests result in visa application rejection. Retesting may be possible after treatment, depending on the condition.'
      },
      {
        question: 'How long is the medical fitness certificate valid?',
        answer: 'Medical fitness certificates are valid for 3 months from issuance date for visa processing purposes.'
      }
    ]
  },

  // Emirates ID
  'emirates-id-processing': {
    slug: 'emirates-id-processing',
    title: 'Emirates ID Application and Renewal',
    metaDescription: 'Emirates ID application and renewal services. Biometric registration, urgent processing, and Emirates ID card collection in UAE.',
    h1: 'Emirates ID Processing and Renewal Services',
    primaryKeyword: 'emirates id uae',
    secondaryKeywords: ['emirates id application', 'emirates id renewal', 'biometric emirates id', 'id card dubai'],
    
    sections: {
      what: {
        title: 'What is Emirates ID',
        content: 'The Emirates ID is a mandatory identification card for all UAE residents. It serves as proof of identity, residence, and access to government services. The card contains biometric data and a microchip with personal information.'
      },
      who: {
        title: 'Who Needs Emirates ID',
        content: 'All UAE residents with valid residence visas including employees, investors, family members, students, and domestic workers. Tourists and visit visa holders are exempt.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Original passport',
          'Residence visa (stamped in passport)',
          'Entry stamp page copy',
          'Passport-size photograph (if not using typing center services)',
          'Previous Emirates ID (if renewal)',
          'Medical fitness certificate',
          'Sponsor documents (for family visas)'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Submit Emirates ID application through typing center',
          'Receive SMS notification for biometric appointment',
          'Visit ICP center for biometric registration',
          'Fingerprint and photograph capture',
          'Application processing by Federal Authority for Identity',
          'Card printing and quality verification',
          'SMS notification for card collection',
          'Collect Emirates ID from typing center or receive via courier'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '10 to 15 working days from biometric registration to card issuance. Urgent processing available within 2 to 3 working days.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Biometric data not captured properly',
          'Visa cancellation during processing',
          'Incomplete application information',
          'Outstanding traffic fines or government dues',
          'Previous Emirates ID not cancelled',
          'Medical fitness certificate expired'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Emirates ID processing requires precise application submission, biometric appointment scheduling, and status tracking. Professional services ensure timely renewals, coordinate urgent processing, and handle collection and delivery.'
      }
    },
    
    relatedServices: ['employment-visa-uae', 'medical-fitness-uae', 'typing-center-services'],
    
    faqs: [
      {
        question: 'How long is Emirates ID valid?',
        answer: 'Emirates ID validity matches residence visa validity, typically 2 or 3 years. Renewal must be done within 30 days of visa renewal.'
      },
      {
        question: 'Can I travel with an expired Emirates ID?',
        answer: 'You can exit and re-enter UAE with an expired Emirates ID if your residence visa is valid, but renewal is required upon return.'
      },
      {
        question: 'What is the fine for late Emirates ID renewal?',
        answer: 'Fines start at AED 20 and increase daily. Maximum penalty can reach several hundred dirhams for extended delays.'
      }
    ]
  },

  // PRO Services
  'pro-services-uae': {
    slug: 'pro-services-uae',
    title: 'PRO Services UAE',
    metaDescription: 'Professional PRO services in UAE. Government liaison, license renewal, municipality approvals, and regulatory compliance services.',
    h1: 'Professional PRO Services for UAE Businesses',
    primaryKeyword: 'pro services uae',
    secondaryKeywords: ['government liaison dubai', 'trade license renewal uae', 'municipality approvals dubai', 'corporate pro services'],
    
    sections: {
      what: {
        title: 'What are PRO Services',
        content: 'PRO (Public Relations Officer) services involve handling all government-related transactions, documentation, and regulatory compliance on behalf of businesses and individuals. PRO services ensure smooth interaction with UAE government departments.'
      },
      who: {
        title: 'Who Needs PRO Services',
        content: 'Businesses without dedicated PRO staff, companies requiring license renewals and amendments, employers processing employee visas, and organizations seeking regulatory approvals and compliance services.'
      },
      documents: {
        title: 'Common Documents Handled',
        items: [
          'Trade license applications and renewals',
          'Immigration documents and visa applications',
          'Municipality permits and approvals',
          'Labour contracts and MOHRE submissions',
          'Company amendments and partner changes',
          'Vehicle registration and renewals',
          'Commercial contract attestations'
        ]
      },
      process: {
        title: 'Service Process',
        items: [
          'Client consultation and requirement assessment',
          'Document collection and verification',
          'Preparation of applications and forms',
          'Submission to relevant government departments',
          'Follow-up and status tracking',
          'Payment of government fees',
          'Collection of approved documents and licenses',
          'Delivery to client with completion report'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: 'Varies by service type. Simple renewals: 3 to 5 days. Complex approvals: 10 to 20 working days. Urgent services available.'
      },
      rejection: {
        title: 'Common Issues Encountered',
        items: [
          'Incomplete or incorrect documentation',
          'Outstanding government fines or penalties',
          'Non-compliance with regulatory requirements',
          'Expired licenses or permits',
          'Unauthorized business activities',
          'Quota limitations or restrictions'
        ]
      },
      why: {
        title: 'Why Businesses Need PRO Services',
        content: 'Government transactions require knowledge of procedures, regulations, and documentation requirements. PRO services save time, prevent costly errors, ensure compliance, and allow businesses to focus on core operations while experts handle government interactions.'
      }
    },
    
    relatedServices: ['trade-license-renewal', 'visa-processing-corporate', 'municipality-approvals'],
    
    faqs: [
      {
        question: 'Do all companies in UAE need PRO services?',
        answer: 'While not mandatory, PRO services are highly recommended for efficient government transactions, especially for companies without internal PRO staff.'
      },
      {
        question: 'What is the difference between in-house PRO and outsourced PRO?',
        answer: 'In-house PROs are company employees handling only that company. Outsourced PRO services are external professionals serving multiple clients with expertise across various departments.'
      },
      {
        question: 'Can PRO services help with business license amendments?',
        answer: 'Yes, PRO services handle all license amendments including activity changes, partner additions, location changes, and name modifications.'
      }
    ]
  },

  // Trade License Mainland
  'trade-license-mainland-uae': {
    slug: 'trade-license-mainland-uae',
    title: 'Mainland Trade License UAE',
    metaDescription: 'Mainland trade license in UAE. Company registration, DED license processing, and business setup services for Dubai mainland.',
    h1: 'Mainland Trade License and Company Formation UAE',
    primaryKeyword: 'mainland trade license uae',
    secondaryKeywords: ['dubai mainland company', 'ded license dubai', 'commercial license uae', 'mainland business setup'],
    
    sections: {
      what: {
        title: 'What is a Mainland Trade License',
        content: 'A mainland trade license is a commercial license issued by the Department of Economic Development (DED) that allows businesses to operate anywhere in the UAE and trade with the local market without restrictions. It requires a local service agent (for certain business structures).'
      },
      who: {
        title: 'Who Should Apply',
        content: 'Entrepreneurs and investors seeking unrestricted UAE market access, businesses requiring government contracts, companies needing physical presence in UAE cities, and investors planning multi-emirate operations.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Passport copies of shareholders and managers',
          'Visa copies of UAE resident shareholders',
          'No objection certificate from sponsor (if employed)',
          'Tenancy contract for office space (ejari registered)',
          'Business activity approvals (if required)',
          'Memorandum of Association (prepared by registered agent)',
          'Initial approval certificate from DED'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Select business activity and legal structure',
          'Choose and reserve trade name',
          'Obtain initial approval from DED',
          'Secure office space and register ejari',
          'Obtain external approvals (if required for activity)',
          'Draft Memorandum of Association with local agent',
          'Pay license fees and submit final application',
          'Receive trade license certificate',
          'Register with Chamber of Commerce',
          'Open corporate bank account'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '7 to 14 working days from initial approval to license issuance, excluding external approvals which may add 5 to 10 days.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Restricted or prohibited business activity',
          'Trade name not approved or already registered',
          'Insufficient office space for selected activity',
          'Missing external approvals from relevant authorities',
          'Local service agent agreement not properly executed',
          'Outstanding dues with DED or other entities'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Mainland company formation involves legal documentation, coordination with multiple authorities, local service agent arrangements, and compliance with DED requirements. Professional services ensure correct structure selection, complete documentation, and expedited approvals.'
      }
    },
    
    relatedServices: ['pro-services-uae', 'office-space-solutions', 'business-bank-account'],
    
    faqs: [
      {
        question: 'Do I need a local sponsor for mainland company setup?',
        answer: 'As of 2021, 100% foreign ownership is allowed for most business activities, eliminating the need for a local sponsor. A local service agent is required for certain activities.'
      },
      {
        question: 'What is the minimum office space requirement?',
        answer: 'Minimum office space varies by business activity, typically starting from 200 square feet for service companies. Larger spaces required for trading and industrial activities.'
      },
      {
        question: 'Can I operate from home with a mainland license?',
        answer: 'Home-based business licenses are available for specific activities and require approval. Not all business activities qualify for home-based licensing.'
      }
    ]
  },

  // Free Zone Company
  'free-zone-company-uae': {
    slug: 'free-zone-company-uae',
    title: 'Free Zone Company Setup UAE',
    metaDescription: 'Free zone company formation in UAE. 100% foreign ownership, tax benefits, and complete business setup in Dubai free zones.',
    h1: 'Free Zone Company Formation in UAE',
    primaryKeyword: 'free zone company uae',
    secondaryKeywords: ['dubai free zone business', 'jafza company setup', 'dmcc license', 'free zone license dubai'],
    
    sections: {
      what: {
        title: 'What is a Free Zone Company',
        content: 'A free zone company is a business entity registered within designated economic zones in the UAE that offer 100% foreign ownership, tax exemptions, full profit repatriation, and simplified company setup processes. Each free zone specializes in specific industries.'
      },
      who: {
        title: 'Who Should Consider Free Zones',
        content: 'Foreign investors seeking 100% ownership, businesses focused on international trade, companies requiring tax benefits, startups with limited capital, and businesses in specialized sectors like technology, media, and logistics.'
      },
      documents: {
        title: 'Documents Required',
        items: [
          'Passport copies of shareholders and directors',
          'Passport-size photographs',
          'Business plan (for some free zones)',
          'Bank reference letter',
          'Proof of address (utility bill or bank statement)',
          'No objection certificate from current sponsor (if applicable)',
          'Company name reservation approval',
          'Shareholder agreement or Memorandum of Association'
        ]
      },
      process: {
        title: 'Process Steps',
        items: [
          'Select appropriate free zone based on business activity',
          'Choose business activity and license type',
          'Reserve company name',
          'Submit application with required documents',
          'Obtain initial approval from free zone authority',
          'Lease office space or flexi-desk (if required)',
          'Pay license and registration fees',
          'Receive license certificate and establishment card',
          'Apply for shareholder and employee visas',
          'Open corporate bank account'
        ]
      },
      timeline: {
        title: 'Estimated Timeline',
        content: '5 to 10 working days from application submission to license issuance, depending on free zone and completeness of documents.'
      },
      rejection: {
        title: 'Common Reasons for Rejection or Delay',
        items: [
          'Activity not permitted in selected free zone',
          'Incomplete or incorrect documentation',
          'Company name not approved',
          'Shareholder background verification issues',
          'Missing bank reference or address proof',
          'Insufficient business plan (if required)',
          'Outstanding payments or documentation fees'
        ]
      },
      why: {
        title: 'Why Use Professional Services',
        content: 'Free zone selection, license type determination, and compliance requirements vary significantly across 40+ UAE free zones. Professional services ensure optimal free zone selection, complete documentation, cost-effective packages, and coordinated visa processing.'
      }
    },
    
    relatedServices: ['business-visa-processing', 'office-space-solutions', 'business-bank-account'],
    
    faqs: [
      {
        question: 'Which free zone is best for my business?',
        answer: 'Selection depends on business activity, target market, budget, and office requirements. Professional consultation helps identify the most suitable free zone.'
      },
      {
        question: 'Can a free zone company trade in UAE mainland?',
        answer: 'Free zone companies can trade in UAE mainland by appointing a local distributor or obtaining a mainland trade license (additional cost).'
      },
      {
        question: 'What are the renewal costs for free zone licenses?',
        answer: 'Renewal costs vary by free zone and license type, typically ranging from AED 10,000 to AED 30,000 annually including office lease.'
      }
    ]
  }
};

module.exports = services;
