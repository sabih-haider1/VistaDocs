# VistaDocs Internal Linking Strategy

## Objective
Guide Google crawlers to important pages, distribute PageRank, and improve user navigation through strategic internal links.

## Hub-and-Spoke Model

### Primary Hubs
- `/visa-services` - Visa & compliance hub
- `/technical-services` - Digital systems hub
- `/services` - Master services hub

### Link Distribution Map

```
Homepage (/)
├─→ /visa-services [Primary hub link]
├─→ /technical-services [Primary hub link]
├─→ /services [Secondary hub - all services]
├─→ /about [Trust/authority]
├─→ /contact [Conversion]
├─→ /blog [Latest content]
└─→ /locations [Geo-targeting]

/visa-services
├─→ /visa-services/employment-visa-uae
├─→ /visa-services/family-visa-uae
├─→ /visa-services/company-formation-uae
├─→ /visa-services/pro-services-uae
├─→ /blog [3-5 related blog posts]
└─→ /contact

/technical-services
├─→ /technical-services/pos-system-setup
├─→ /technical-services/suitecrm-customization
├─→ /technical-services/wordpress-development
├─→ /blog [3-5 related blog posts]
└─→ /contact

/blog
├─→ Related service pages (link visa posts to /visa-services)
├─→ Related blog posts (internal blog linking)
└─→ /contact
```

## Anchor Text Guidelines

### Good Examples
- "Learn more about employment visa sponsorship"
- "Get company formation support in Dubai"
- "Explore POS system options for restaurants"
- "Read our complete guide to UAE business setup"

### Bad Examples (Avoid)
- "Click here"
- "More info"
- "Read more"
- "Services"

## Implementation Checklist

- [ ] Homepage: Add links to 3 service hubs in hero/CTA area
- [ ] Homepage: Link to 3-5 latest/evergreen blog posts
- [ ] Service hubs: Link to child service pages
- [ ] Service pages: Link to related pages and blog
- [ ] Blog: Add contextual links to relevant service pages
- [ ] Footer: Ensure all main categories are represented
- [ ] Breadcrumbs: Add schema.org BreadcrumbList

## Expected Impact
- ✅ Better crawl efficiency (all pages discoverable within 3 clicks)
- ✅ Improved keyword relevance signaling
- ✅ Better user flow from high-value to conversion pages
- ✅ Reduced bounce rate on service pages
- ✅ Increased internal traffic distribution
