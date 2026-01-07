# SERVICE TAXONOMY

## Core Visa Services (Indexable)
- employment-visa-uae
  - Type: core_visa
  - Intent: acquisition
  - Children: None
  - Dependencies: medical-fitness-uae, emirates-id-processing
  
- family-visa-uae
  - Type: core_visa
  - Intent: acquisition
  - Children: None
  - Dependencies: medical-fitness-uae, emirates-id-processing, document-attestation-uae
  
- golden-visa-uae
  - Type: core_visa
  - Intent: acquisition
  - Children: None
  - Dependencies: medical-fitness-uae, emirates-id-processing
  
- tourist-visa-uae
  - Type: core_visa
  - Intent: acquisition
  - Children: None
  - Dependencies: None

## Core Business Services (Indexable)
- business-setup-uae
  - Type: core_business
  - Intent: acquisition
  - Children: None (mainland and freezone as sections)
  - Dependencies: None

## Supporting Services (Indexable)
- document-attestation-uae
  - Type: supporting
  - Intent: information
  - Children: None
  - Dependencies: None
  
- corporate-pro-services
  - Type: supporting
  - Intent: information
  - Children: None
  - Dependencies: None

## Dependency Services (Not Indexable)
- medical-fitness-uae
  - Type: dependency
  - Intent: information
  - Parent: employment-visa-uae
  - SEO: noindex,follow
  
- emirates-id-processing
  - Type: dependency
  - Intent: information
  - Parent: employment-visa-uae
  - SEO: noindex,follow

## Merged Services (301 Redirect)
- labour-card-uae
  - Lifecycle: merged
  - Redirect: employment-visa-uae#labour-card
  - Reason: Keyword cannibalization with employment-visa
  
- trade-license-mainland-uae
  - Lifecycle: merged
  - Redirect: business-setup-uae#mainland
  - Reason: Intent overlap with business-setup
  
- free-zone-company-uae
  - Lifecycle: merged
  - Redirect: business-setup-uae#freezone
  - Reason: Intent overlap with business-setup
  
- pro-services-uae
  - Lifecycle: merged
  - Redirect: corporate-pro-services
  - Reason: Naming consolidation

---

# PAGE DEFINITIONS

## employment-visa-uae
- Title: UAE Work Visa Processing | Employment Residence Permit
- H1: UAE Employment Visa Processing
- Meta: Get UAE work visa and residence permit in 7-14 days. Employment visa sponsorship with labour card included.
- Primary Keyword: uae work visa
- Sections: what-you-get, who-qualifies, documents-required, what-we-handle, labour-card, timeline
- Dependencies: medical-fitness-uae, emirates-id-processing
- Upsells: golden-visa-uae
- Related Guides: document-attestation-uae, corporate-pro-services

## family-visa-uae
- Title: UAE Family Residence Visa | Sponsor Wife Children Parents
- H1: UAE Family Sponsorship Visa
- Meta: Sponsor family members for UAE residence. Wife, children, and parents visa sponsorship with salary requirements met.
- Primary Keyword: uae family visa
- Sections: what-you-get, sponsor-requirements, documents-required, what-we-handle, timeline
- Dependencies: medical-fitness-uae, emirates-id-processing, document-attestation-uae
- Related Guides: document-attestation-uae

## golden-visa-uae
- Title: UAE Golden Visa Application | 5-10 Year Residence Permit
- H1: UAE Golden Visa Application
- Meta: Apply for UAE golden visa. Long-term residence for investors, entrepreneurs, and skilled professionals.
- Primary Keyword: uae golden visa
- Sections: what-you-get, eligibility-categories, documents-required, what-we-handle, timeline
- Dependencies: medical-fitness-uae, emirates-id-processing

## tourist-visa-uae
- Title: UAE Tourist Visa Application | Dubai Visit Visa 30-90 Days
- H1: UAE Tourist Visa Service
- Meta: Get UAE tourist visa in 3-5 days. 30-day and 90-day visit visas for tourism, family visit, or business meetings.
- Primary Keyword: uae tourist visa
- Sections: what-you-get, who-qualifies, documents-required, what-we-handle, timeline
- Upsells: employment-visa-uae

## business-setup-uae
- Title: Company Formation UAE | Business Setup Dubai Mainland & Freezone
- H1: UAE Business Setup Services
- Meta: Register company in UAE mainland or freezone. Trade license, investor visa, and bank account setup included.
- Primary Keyword: company formation uae
- Sections: what-you-get, mainland-vs-freezone, documents-required, what-we-handle, timeline
- Related Guides: corporate-pro-services

## document-attestation-uae
- Title: UAE Certificate Attestation | Embassy Attestation Dubai
- H1: Document Attestation for UAE
- Meta: Attest educational, personal, and commercial documents for UAE use. Embassy and MOFA attestation handled.
- Primary Keyword: uae certificate attestation
- Sections: what-attestation-does, attestation-process, document-types, what-we-need, timeline

## corporate-pro-services
- Title: Corporate PRO Services UAE | Government Relations Dubai
- H1: Corporate PRO Services
- Meta: Corporate PRO services for visa processing, license renewals, and government approvals in UAE.
- Primary Keyword: pro services uae
- Sections: what-pro-services-are, when-needed, services-covered, what-we-need

## medical-fitness-uae (noindex)
- Title: Medical Fitness Test for UAE Visa
- H1: Medical Fitness Test
- Meta: (empty)
- SEO: noindex,follow
- Parent: employment-visa-uae
- Sections: requirement, tests-included, process, failure

## emirates-id-processing (noindex)
- Title: Emirates ID Application
- H1: Emirates ID
- Meta: (empty)
- SEO: noindex,follow
- Parent: employment-visa-uae
- Sections: requirement, process, validity

---

# DEPENDENCY AND CANONICAL RULES

## Indexability Rules
- Index: core_visa, core_business, supporting services only
- Noindex: All dependency services
- 301 Redirect: All merged services to canonical parent

## Canonical Parents
- medical-fitness-uae → employment-visa-uae
- emirates-id-processing → employment-visa-uae
- labour-card-uae → employment-visa-uae#labour-card
- trade-license-mainland-uae → business-setup-uae#mainland
- free-zone-company-uae → business-setup-uae#freezone
- pro-services-uae → corporate-pro-services

## Linking Logic
- Dependencies: Core services may link to dependency services (one-way)
- Upsells: Core services may link to higher-value core services (one-way)
- Alternatives: Core services may link to equivalent core services (bidirectional)
- Related Guides: Any indexable service may link to supporting services (one-way)
- Prohibited: Dependency services may not link to other dependency services

## Service Elimination
Removed services (broken references eliminated):
- property-investment-consultation
- wps-registration-uae
- translation-services-uae
- trade-license-renewal
- visa-processing-corporate
- municipality-approvals
- office-space-solutions
- business-bank-account
- business-visa-processing

Consolidated services:
- labour-card-uae merged into employment-visa-uae
- trade-license-mainland-uae merged into business-setup-uae
- free-zone-company-uae merged into business-setup-uae
- pro-services-uae renamed to corporate-pro-services
