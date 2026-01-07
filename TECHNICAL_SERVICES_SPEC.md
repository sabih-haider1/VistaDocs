# TECHNICAL SERVICES TAXONOMY

## Core Technical Services (Indexable)
- pos-system-setup
  - Type: core_technical
  - Intent: implementation
  - Scale: small_business (single location, up to 10 terminals)
  
- wordpress-development
  - Type: core_technical
  - Intent: customization
  - Scale: sme (custom themes, up to 20 plugins, under 100k monthly visitors)
  
- opencart-development
  - Type: core_technical
  - Intent: customization
  - Scale: sme (single store, up to 50,000 products)
  
- suitecrm-customization
  - Type: core_technical
  - Intent: customization
  - Scale: sme (up to 50 users)
  
- custom-web-application
  - Type: core_technical
  - Intent: implementation
  - Scale: small_business (up to 10,000 monthly users)

## Supporting Technical Services (Indexable)
- system-integration
  - Type: supporting
  - Intent: customization
  - Scale: sme (up to 5 systems)

---

# SERVICE PAGE DEFINITIONS

## pos-system-setup
- Title: POS System Setup for Retail and F&B | Dubai
- H1: POS System Setup and Configuration
- Meta: Install and configure POS systems for retail stores and restaurants. Hardware setup, software configuration, payment integration.
- Primary Keyword: pos system setup dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: integrations → system-integration

## wordpress-development
- Title: WordPress Custom Theme Development | Dubai
- H1: WordPress Development and Customization
- Meta: Custom WordPress theme development and plugin customization. Business websites and content management setup.
- Primary Keyword: wordpress development dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: relatedImplementations → opencart-development

## opencart-development
- Title: OpenCart Store Setup and Module Development | Dubai
- H1: OpenCart Development and Customization
- Meta: OpenCart e-commerce setup, payment integration, and custom module development for online stores in UAE.
- Primary Keyword: opencart development dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: integrations → system-integration

## suitecrm-customization
- Title: SuiteCRM Customization and Integration | Dubai
- H1: SuiteCRM Customization Services
- Meta: SuiteCRM customization, workflow automation, and third-party integration for sales and customer management.
- Primary Keyword: suitecrm customization dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: integrations → system-integration, crmConnections → pos-system-setup

## custom-web-application
- Title: Custom Web Application Development | Dubai
- H1: Custom Web Application Development
- Meta: Custom web application development for business workflows, client portals, and internal tools.
- Primary Keyword: custom web application dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: integrations → system-integration

## system-integration
- Title: System Integration and API Development | Dubai
- H1: System Integration Services
- Meta: Connect business systems, automate data flow, and integrate third-party APIs for operational efficiency.
- Primary Keyword: system integration dubai
- Sections: service-scope, deliverables, requirements, tech-stack, engagement, limitations
- Linking: none (terminal service)

---

# LINKING AND SCOPE RULES

## Linking Rules
- **Integrations**: POS, OpenCart, SuiteCRM, Custom Web App → System Integration (one-way)
- **Related Implementations**: WordPress → OpenCart (one-way, migration context only)
- **CRM Connections**: SuiteCRM → System Integration, POS (one-way)
- **Prohibited**: No technical service links to visa services
- **Prohibited**: No circular links within technical services
- **Prohibited**: No dependency service links from technical pages

## Navigation Separation
- Technical services must appear under dedicated "Technical Services" or "Business Solutions" menu
- No technical services in visa services category
- No visa services in technical services category
- No shared CTAs or contact forms between categories

## Capability Limits

### POS System Setup
- Supported: Single location, up to 10 terminals, standard retail, basic F&B
- Unsupported: Multi-location, franchise networks, enterprise ERP integration, custom hardware

### WordPress Development
- Supported: Custom themes, plugin customization, up to 20 plugins, content migration, basic WooCommerce
- Unsupported: Multisite, page builders, high traffic over 100k, custom authentication, complex e-commerce

### OpenCart Development
- Supported: Single store, up to 50,000 products, UAE payment gateways, basic shipping, custom modules
- Unsupported: Multi-vendor, B2B complex pricing, POS integration, mobile apps, subscriptions

### SuiteCRM Customization
- Supported: Up to 50 users, workflow automation, email integration, custom fields and reports
- Unsupported: Over 100 users, custom module development from scratch, server management, real-time ERP sync

### Custom Web Application
- Supported: Client portals, workflow automation, CRUD applications, up to 10,000 monthly users
- Unsupported: Real-time apps, mobile native, AI/ML features, high concurrency over 1,000 users

### System Integration
- Supported: Up to 5 systems, API-based integration, scheduled sync, webhook triggers
- Unsupported: Legacy systems without API, real-time sync, screen scraping, over 5 systems

## Maximum Realistic Project Sizes
- POS: Single location, 10 terminals maximum
- WordPress: 100,000 monthly visitors maximum, 20 plugins maximum
- OpenCart: 50,000 products maximum, single store only
- SuiteCRM: 50 users maximum
- Custom Web App: 10,000 monthly active users maximum
- System Integration: 5 systems maximum

## Unsupported Scenarios (Never Promise)
- Multi-location or franchise operations (POS)
- High-traffic sites over 100k monthly (WordPress)
- Multi-vendor marketplaces (OpenCart)
- Enterprise deployments over 100 users (SuiteCRM)
- Real-time features (websockets, live updates)
- Mobile native app development
- AI, ML, or blockchain features
- Legacy system integration without APIs
- Server infrastructure management
- DevOps or cloud architecture design
