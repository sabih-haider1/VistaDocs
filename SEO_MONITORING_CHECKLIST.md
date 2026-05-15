# VistaDocs SEO Monitoring Checklist

**Start Date:** May 15, 2026  
**Baseline Setting:** NOW (after Phase 1 implementation)

---

## 📌 Before You Start Monitoring

**IMPORTANT:** Changes take time to appear in Google Search results.
- Small changes (titles/descriptions): 1-4 weeks
- Schema implementation: 2-4 weeks
- New content: 4-12 weeks
- Major content changes: 6-12 weeks

**When to check:** After 2-3 weeks, then every 2 weeks.

---

## 🔍 Google Search Console - Key Reports to Check

### 1. **Performance Report**
**What to look for:**
- [ ] Total Impressions (how many times you appear in search)
- [ ] Total Clicks (how many people click through)
- [ ] Average CTR (click-through rate - target 4-6% for service pages)
- [ ] Average Position (where you rank - target page 1, ideally top 5)

**Key Metrics to Track:**
```
Homepage:
  - Impressions: [baseline] → Target: +50% in 8 weeks
  - Clicks: [baseline] → Target: +100% in 8 weeks
  - Position: [baseline] → Target: <5 for "uae business services"

/visa-services:
  - Position for "uae visa services": [baseline] → Target: <3
  - Position for "employment visa dubai": [baseline] → Target: <5

/technical-services:
  - Position for "pos system dubai": [baseline] → Target: <5
  - Position for "crm solutions uae": [baseline] → Target: <10

/faq:
  - Position for "uae business faq": [baseline] → Target: <3
  - Rich results eligible: [YES/NO] ✓
```

### 2. **Coverage Report**
**Check every 2 weeks:**
- [ ] Total pages indexed (should be 50+)
- [ ] Errors: 0 (fix immediately if any)
- [ ] Valid pages with warnings: 0 (no critical issues)
- [ ] Excluded pages: Review if important pages are excluded

**Expected:**
```
Indexed: 50-80 pages
Errors: 0
Warnings: 0
```

### 3. **Core Web Vitals Report**
**Check every 2 weeks:**
- [ ] Good (>90% URLs passing): Goal
- [ ] Needs Improvement: Fix identified issues
- [ ] Poor: Priority fix

**Current status after Phase 1:** TBD (run PageSpeed Insights first)

---

## 📊 Tracking Template

### Monthly Check-in (Copy this template)

**Date: ___________**

| Metric | Baseline | Current | Change | Status |
|--------|----------|---------|--------|--------|
| **Total Impressions** | | | | |
| **Total Clicks** | | | | |
| **Avg CTR** | | | | |
| **Avg Position** | | | | |
| **Pages Indexed** | | | | |
| **Core Web Vitals (Pass %)** | | | | |

### Keyword Rankings Tracking

| Keyword | Page | Baseline Pos | Current Pos | Clicks | Status |
|---------|------|--------------|-------------|--------|--------|
| uae visa services | /visa-services | | | | |
| dubai employment visa | /visa-services | | | | |
| company formation dubai | /visa-services | | | | |
| pos system dubai | /technical-services | | | | |
| crm solutions uae | /technical-services | | | | |
| uae business faq | /faq | | | | |

---

## 🎯 What Changed in Phase 1 (Expected Impact)

| Change | Where | Expected Impact | Timeline |
|--------|-------|-----------------|----------|
| Title optimization | Contact, About, FAQ, Blog | +CTR from SERPs | 2-4 weeks |
| Description enhancement | All pages | +Click rate | 2-4 weeks |
| FAQPage schema | /faq | Rich results eligible | 2-4 weeks |
| LocalBusiness schema | /locations/[city] | Local pack visibility | 2-4 weeks |
| Keyword additions | Service pages | Long-tail query coverage | 4-8 weeks |
| Internal linking strategy | Site-wide | Better crawlability | Ongoing |

---

## ⚠️ Common Issues to Watch For

### Red Flags (Fix immediately)
- [ ] Indexing errors in Search Console
- [ ] Duplicate content warnings
- [ ] Mobile usability issues
- [ ] Pages not indexing (301 redirects, noindex, blocked in robots.txt?)

### Yellow Flags (Monitor closely)
- [ ] CTR dropping (may indicate title/description issues)
- [ ] Impressions dropping (may indicate content needs refresh)
- [ ] Core Web Vitals failing (>10% URLs failing)
- [ ] Rich results not showing for /faq

### Green Flags (You're on track!)
- [ ] Impressions increasing
- [ ] Clicks increasing
- [ ] Average position improving (moving toward page 1)
- [ ] Zero indexing errors
- [ ] Rich results showing
- [ ] Core Web Vitals: >90% good

---

## 📅 Monitoring Schedule

### Weekly (5 minutes)
- [ ] Any critical errors in Search Console?
- [ ] Any manual actions/penalties?

### Every 2 Weeks (15 minutes)
- [ ] Check Performance Report (impressions, clicks, position)
- [ ] Review Coverage Report (any errors?)
- [ ] Review Core Web Vitals Report

### Monthly (30 minutes)
- [ ] Full deep-dive into Search Console
- [ ] Analyze trending keywords
- [ ] Check competitor rankings (optional)
- [ ] Update tracking template above
- [ ] Plan next content/optimization round

### Quarterly (1 hour)
- [ ] Comprehensive SEO audit
- [ ] Review all pages for ranking changes
- [ ] Identify new keyword opportunities
- [ ] Plan next 3-month strategy

---

## 🚨 Troubleshooting: Pages Not Indexing?

**Check these in order:**

1. **Is it in robots.txt?** Check `/app/robots.ts` - ensure page path is allowed
2. **Does page have `noindex`?** Check page metadata - should have `index, follow`
3. **Is it redirected?** Check for 301 redirects to other pages
4. **Canonical pointing elsewhere?** Check canonical tags
5. **New page?** Submit to Search Console, wait 2 weeks
6. **Request indexing:** Go to Search Console → URL Inspection → "Request Indexing"

---

## 📈 Success Indicators (By 12 Weeks)

### If on track:
- ✅ Impressions: +50% to +200%
- ✅ Clicks: +100% to +300%
- ✅ 10+ keywords page 1 of Google
- ✅ FAQ rich results showing
- ✅ No indexing/Core Web Vitals errors
- ✅ CTR: 4%+ for service pages

### If need adjustment:
- ❌ Impressions flat or declining → Need more content/links
- ❌ CTR low (<2%) → Revise titles/descriptions
- ❌ Click trends down → Check Core Web Vitals, page speed
- ❌ Rich results not showing → Check FAQ schema in Rich Results Test

---

## 🔗 Quick Links

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 💡 Pro Tips

1. **Set up notifications:** Search Console → Settings → Email notifications
2. **Share reports:** Search Console reports can be shared with your team
3. **Combine with GA4:** Cross-reference Search Console clicks with GA4 conversions
4. **Competitor intelligence:** Check competitor keywords using search operators
5. **Content calendar:** Plan blog posts around high-volume keywords you don't rank for

---

**Remember:** SEO is a marathon, not a sprint. Consistency beats perfection!
