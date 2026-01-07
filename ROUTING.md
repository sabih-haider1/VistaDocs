# VistaDocs Routing and Navigation Structure

## Route Hierarchy

### Visa Services
- Base: `/services/visa`
- Individual Services: `/services/visa/:slug`
- Indexable Services Only:
  - `/services/visa/employment-visa-uae`
  - `/services/visa/family-visa-uae`
  - `/services/visa/golden-visa-uae`
  - `/services/visa/tourist-visa-uae`
  - `/services/visa/business-setup-uae`
  - `/services/visa/document-attestation-uae`
  - `/services/visa/corporate-pro-services`

### Technical Services
- Base: `/services/technical`
- Individual Services: `/services/technical/:slug`
- All Services:
  - `/services/technical/pos-system-setup`
  - `/services/technical/wordpress-development`
  - `/services/technical/opencart-development`
  - `/services/technical/suitecrm-customization`
  - `/services/technical/custom-web-application`
  - `/services/technical/system-integration`

### Legacy Routes (301 Redirects)
- `/services` → `/services/visa`
- `/services/:slug` → `/services/visa/:slug`
- `/technical` → `/services/technical`
- `/technical/:slug` → `/services/technical/:slug`

## Navigation Menu

```
Home (/)
About (/about)
Visa Services (/services/visa)
  ├─ Employment Visa Processing
  ├─ Family Visa Sponsorship
  ├─ Golden Visa Application
  ├─ Tourist Visa Processing
  ├─ Company Formation UAE
  ├─ Document Attestation
  └─ Corporate PRO Services
Technical Services (/services/technical)
  ├─ POS System Setup
  ├─ WordPress Development
  ├─ OpenCart Development
  ├─ SuiteCRM Customization
  ├─ Custom Web Application
  └─ System Integration
FAQ (/faq)
Contact (/contact)
```

## Breadcrumb Patterns

### Visa Service Page
`Home > Visa Services > [Service Name]`

### Technical Service Page
`Home > Technical Services > [Service Name]`

### Listing Pages
- Visa: `Home > Visa Services`
- Technical: `Home > Technical Services`

## Cross-Linking Rules

### Prohibited Links
- No visa service page may link to technical service pages
- No technical service page may link to visa service pages
- Dependency services (medical-fitness, emirates-id) may not appear in navigation
- Merged services redirect to canonical parent

### Allowed Links
- Visa services may link to other visa services (dependencies, upsells, related)
- Technical services may link to other technical services (integrations, implementations)
- All services may link to Contact page

## Route Guards

### Validation Rules
1. Service must exist in data source (services-data.js or technical-services-data.js)
2. Visa services must be indexable (isIndexable !== false)
3. Merged/deprecated services return 301 redirect to canonical parent
4. Invalid slugs return 404

### Implementation
- `routeValidator.isValidVisaService(slug)` - checks service exists and is indexable
- `routeValidator.isValidTechnicalService(slug)` - checks service exists
- `routeValidator.shouldRedirect(slug, category)` - returns redirect target if merged

## Sitemap Structure

```javascript
{
  static: [
    { url: '/', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/services/visa', priority: 0.9 },
    { url: '/services/technical', priority: 0.9 },
    { url: '/faq', priority: 0.7 },
    { url: '/contact', priority: 0.8 }
  ],
  visaServices: [
    { url: '/services/visa/employment-visa-uae', priority: 0.9 },
    // ... other indexable visa services
  ],
  technicalServices: [
    { url: '/services/technical/pos-system-setup', priority: 0.85 },
    // ... other technical services
  ]
}
```

## Frontend Consumption

Navigation configuration is exported from `navigation-config.js`:

```javascript
const { 
  navigationStructure,    // Main menu items with active states
  serviceCategories,      // Service listings by category
  breadcrumbGenerator,    // Breadcrumb generation utility
  routeValidator,         // Route validation functions
  sitemapData            // Sitemap structure
} = require('./navigation-config');
```

## SEO-Friendly URLs

All service URLs follow pattern:
- `/services/[category]/[slug]`
- Category: `visa` or `technical`
- Slug: kebab-case service identifier from data files
- No trailing slashes
- No query parameters for service identification
