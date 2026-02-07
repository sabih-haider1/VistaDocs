# SEO Quick Reference Checklist

## For Every New Blog Post

### Before Writing
- [ ] Keyword research done (target 1 primary, 2-3 secondary keywords)
- [ ] Search intent understood (what does the searcher want?)
- [ ] Competing content analyzed (what's missing?)
- [ ] Outline created with H2/H3 structure

### While Writing
- [ ] H1 includes primary keyword naturally
- [ ] First 100 words answer the query directly
- [ ] H2s use secondary keywords or related terms
- [ ] Content is 1,500+ words (technical) or 1,200+ (regulatory)
- [ ] Includes specific examples, code, or data
- [ ] Internal links to 1-2 related services added
- [ ] Images have descriptive alt text (no keyword stuffing)

### Before Publishing
- [ ] Title is ≤60 characters
- [ ] Meta description is 150-155 characters
- [ ] Excerpt summarizes the post in 1-2 sentences
- [ ] Read time calculated (word count ÷ 200)
- [ ] Author bio added/updated
- [ ] Related services linked (`seo.relatedServices`)
- [ ] Category assigned (technical/regulatory/case-study/analysis)
- [ ] `featured` set to `true` if highlighting on homepage
- [ ] `seo.noindex` is `false`
- [ ] Content is HTML (not Markdown)

### After Publishing
- [ ] Post appears at `/blog/[slug]`
- [ ] Post listed on `/blog` index
- [ ] Sitemap includes post (`/sitemap.xml`)
- [ ] Google Rich Results Test validates Article schema
- [ ] Share on LinkedIn/Twitter (optional)

---

## For Service Pages

### Content Depth
- [ ] Minimum 800 words
- [ ] "What You Get" section (deliverables)
- [ ] "Who Qualifies" section (eligibility)
- [ ] "Documents Required" section (checklist)
- [ ] "Timeline & Process" section (expectations)
- [ ] "Pricing" section (if applicable)

### SEO Elements
- [ ] Title: `[Primary Keyword] | [USP]` (≤60 chars)
- [ ] Meta description: 150-155 chars with CTA
- [ ] H1 uses primary keyword naturally
- [ ] H2s cover main sections
- [ ] Related services linked (if applicable)
- [ ] Service schema added (optional)

---

## Monthly SEO Tasks

### Week 1: Content Planning
- [ ] Review Google Search Console queries
- [ ] Identify content gaps (high impressions, low CTR)
- [ ] Plan 2-4 blog posts for the month
- [ ] Update content calendar

### Week 2: Content Creation
- [ ] Write and publish 1-2 blog posts
- [ ] Update 1 old blog post (if outdated)
- [ ] Optimize underperforming service pages

### Week 3: Technical Audit
- [ ] Check for indexing errors in GSC
- [ ] Verify sitemap is up to date
- [ ] Review Core Web Vitals in Vercel Analytics
- [ ] Fix any broken internal links

### Week 4: Analysis & Reporting
- [ ] Track keyword rankings (Ahrefs/Semrush or manual)
- [ ] Analyze top-performing content (GA4)
- [ ] Document insights for next month
- [ ] Plan backlink outreach (1-2 targets)

---

## Pre-Launch Checklist

### Technical Setup
- [ ] MongoDB connected and tested
- [ ] Environment variables configured (`.env.local`)
- [ ] Blog routes working (`/blog`, `/blog/[slug]`)
- [ ] Sitemap generates correctly (`/sitemap.xml`)
- [ ] robots.txt configured (`/robots.txt`)
- [ ] Structured data validates (Organization, Breadcrumb, Article)

### Google Search Console
- [ ] Site ownership verified
- [ ] Sitemap submitted
- [ ] URL Inspection tested on 3-5 key pages
- [ ] No manual actions or penalties

### Analytics
- [ ] Vercel Analytics enabled (Core Web Vitals)
- [ ] Google Analytics 4 property created (optional)
- [ ] Conversion goals set up (contact form)

### Content
- [ ] 8-12 blog posts published (minimum)
- [ ] All service pages have 800+ words
- [ ] About page has team/founder info
- [ ] Contact page has clear CTA

---

## Red Flags to Avoid

### Content
- ❌ Keyword stuffing (using keyword in every sentence)
- ❌ Duplicate content (copying from competitors)
- ❌ AI-generated fluff ("In today's fast-paced world...")
- ❌ Thin content (<500 words on important pages)
- ❌ Broken internal/external links

### Technical
- ❌ Slow page load (LCP >2.5s)
- ❌ Missing meta descriptions
- ❌ Duplicate title tags
- ❌ Non-mobile-friendly pages
- ❌ 404 errors on important pages

### SEO Tactics
- ❌ Buying backlinks
- ❌ Keyword-stuffed anchor text
- ❌ Hidden text or cloaking
- ❌ Automatically generated content
- ❌ Misleading titles/descriptions

---

## Success Metrics (6-Month Goals)

### Traffic
- [ ] 500+ organic sessions/month
- [ ] 300+ blog-specific sessions/month
- [ ] 3-5% average CTR on organic results

### Rankings
- [ ] 10+ target keywords in top 10 positions
- [ ] 30+ keywords in top 50 positions
- [ ] Service pages ranking for primary keywords

### Engagement
- [ ] 5+ contact form submissions from organic traffic
- [ ] 10+ backlinks from real sites
- [ ] 3+ blog posts cited by others

### Content
- [ ] 30-50 blog posts published
- [ ] All service pages optimized
- [ ] 2-3 case studies published

---

## Quick Wins (Do First)

1. **Fix low-hanging fruit:**
   - Add missing meta descriptions
   - Optimize title tags (60 chars or less)
   - Add alt text to images

2. **Internal linking:**
   - Link blog posts to service pages
   - Add "Related Services" sections
   - Create content hubs (pillar pages)

3. **Update old content:**
   - Refresh dates in regulatory posts
   - Add new examples to technical posts
   - Fix broken links

4. **Optimize for featured snippets:**
   - Add FAQ sections to high-traffic posts
   - Use lists and tables (easier to parse)
   - Answer queries directly in first paragraph

---

## Tools Reference

### Free Tools
- **Google Search Console:** Indexing, queries, performance
- **Google Rich Results Test:** Validate structured data
- **PageSpeed Insights:** Core Web Vitals
- **Vercel Analytics:** Built-in performance monitoring

### Paid Tools (Optional)
- **Ahrefs/Semrush:** Keyword research, competitor analysis
- **Screaming Frog:** Technical SEO audits (free up to 500 URLs)
- **MongoDB Compass:** GUI for managing blog posts

---

## Emergency Troubleshooting

### "My pages aren't being indexed"
1. Check robots.txt isn't blocking
2. Verify sitemap is submitted to GSC
3. Use URL Inspection tool in GSC
4. Check for `noindex` meta tags
5. Ensure content is high-quality (not thin)

### "Traffic dropped suddenly"
1. Check Google Search Console for penalties
2. Review recent code changes (broke something?)
3. Check for server errors (5xx)
4. Verify sitemap is still accessible
5. Look for algorithm updates (Google Search Status)

### "Blog posts aren't updating"
1. Check ISR revalidation time (24 hours for posts)
2. Clear Next.js cache (delete `.next` folder)
3. Verify MongoDB connection is working
4. Check browser cache (hard refresh)

---

**Refer to `SEO_STRATEGY.md` for detailed strategy and `SETUP_GUIDE.md` for implementation steps.**
