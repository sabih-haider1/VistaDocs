# SEO Implementation Setup Guide

This guide walks you through implementing the blog-based SEO strategy for VistaDocs.

## Phase 1: Blog Infrastructure Setup

### 1. Install Dependencies

```bash
npm install
```

This installs the MongoDB driver (already added to package.json).

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection URI:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vistadocs?retryWrites=true&w=majority
```

**To get MongoDB URI:**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier M0 is sufficient)
3. Create a database user
4. Whitelist your IP or allow access from anywhere (0.0.0.0/0) for development
5. Click "Connect" → "Connect your application" → Copy the connection string
6. Replace `<password>` with your database user password

### 3. Set Up MongoDB Database

Once connected, MongoDB will auto-create the `vistadocs` database and `posts` collection on first insert.

**Create indexes for performance:**

```javascript
// In MongoDB Compass or mongosh:
use vistadocs

// Create indexes
db.posts.createIndex({ slug: 1 }, { unique: true })
db.posts.createIndex({ publishedAt: -1 })
db.posts.createIndex({ category: 1 })
db.posts.createIndex({ 'seo.noindex': 1 })
db.posts.createIndex({ featured: 1 })
```

### 4. Test the Blog Routes

Start the development server:

```bash
npm run dev
```

Navigate to:
- `http://localhost:3000/blog` - Should load (empty if no posts)
- `http://localhost:3000/sitemap.xml` - Should include blog section
- `http://localhost:3000/robots.txt` - Should reference sitemap

## Phase 2: Create Your First Blog Post

### Option A: Using MongoDB Compass (GUI)

1. Install [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your MongoDB URI
3. Navigate to `vistadocs` database → `posts` collection
4. Click "Add Data" → "Insert Document"
5. Paste the example blog post JSON (see `scripts/example-blog-post.json`)
6. Save and refresh `/blog` on localhost

### Option B: Using a Script

Use the provided insertion script:

```bash
node scripts/insert-blog-post.js
```

Edit the script to customize the blog post content.

### Example Blog Post Structure

```json
{
  "slug": "next-js-isr-mongodb-guide",
  "title": "Next.js ISR with MongoDB: Complete Implementation Guide",
  "metaDescription": "Learn how to implement ISR (Incremental Static Regeneration) with MongoDB in Next.js 15. Includes connection pooling, caching, and error handling.",
  "h1": "How to Implement ISR with MongoDB in Next.js 15",
  "publishedAt": { "$date": "2026-02-08T10:00:00.000Z" },
  "category": "technical",
  "tags": ["next.js", "mongodb", "isr", "performance"],
  "content": "<p>Full HTML content here...</p>",
  "excerpt": "A comprehensive guide to implementing Incremental Static Regeneration with MongoDB in Next.js 15.",
  "author": {
    "name": "Sabih Haider",
    "role": "Founder, VistaDocs",
    "bio": "Full-stack developer with 5+ years building scalable web applications. Specializes in Next.js, MongoDB, and serverless architectures."
  },
  "seo": {
    "noindex": false,
    "relatedServices": ["web-development", "custom-software-development"]
  },
  "featured": true,
  "readTime": 12
}
```

## Phase 3: SEO Validation

### 1. Verify Indexability

In Google Search Console:

1. Add your site (if not already added)
2. Go to URL Inspection
3. Test a blog post URL: `https://vistadocs.ae/blog/your-slug`
4. Check for errors

### 2. Submit Sitemap

In Google Search Console:
1. Go to Sitemaps
2. Submit: `https://vistadocs.ae/sitemap.xml`
3. Wait 24-48 hours for indexing

### 3. Check Structured Data

Use [Google Rich Results Test](https://search.google.com/test/rich-results):

1. Enter blog post URL
2. Verify Article schema is detected
3. Check for Breadcrumb schema
4. Fix any errors

### 4. Monitor Core Web Vitals

In Vercel Dashboard:
1. Go to Analytics
2. Check Core Web Vitals scores
3. Ensure all pages are in "Good" range

## Phase 4: Content Publishing Workflow

### Writing Process

1. **Research keyword:**
   - Use Google Search Console to find queries you're already ranking for
   - Use Ahrefs/Semrush for keyword research (optional)
   - Focus on long-tail queries with clear intent

2. **Write content:**
   - Follow the content pillar guidelines in SEO_STRATEGY.md
   - Aim for 1,500-3,000 words for technical posts
   - Include code examples, screenshots, real data
   - Use headings (H2, H3) for structure

3. **Convert to HTML:**
   - Use a Markdown-to-HTML converter or write HTML directly
   - Ensure proper semantic markup
   - Add `class="..."` for styling where needed

4. **Insert into MongoDB:**
   - Use MongoDB Compass or the insert script
   - Set `featured: true` for homepage
   - Link 1-2 related services in `seo.relatedServices`
   - Calculate read time: word count / 200 = minutes

5. **Publish:**
   - Commit changes (if any code updates)
   - Deploy to Vercel (auto-deploys on push)
   - Wait for ISR revalidation (1 hour for /blog index)

### Post-Publishing Checklist

- [ ] Blog post appears at `/blog/[slug]`
- [ ] Post is listed on `/blog` index
- [ ] Sitemap includes the post (check `/sitemap.xml`)
- [ ] Breadcrumbs render correctly
- [ ] Related services links work
- [ ] Article schema validates (Rich Results Test)
- [ ] Meta description appears correctly in search preview

## Troubleshooting

### "Cannot connect to MongoDB"

- Check `.env.local` has correct `MONGODB_URI`
- Verify database user credentials
- Check IP whitelist in MongoDB Atlas
- Restart dev server after adding env vars

### "Blog post not appearing"

- Check `seo.noindex` is `false`
- Verify `slug` matches URL
- Wait for ISR revalidation (or restart server)
- Check browser console for errors

### "Sitemap not updating"

- Sitemap revalidates every 24 hours
- Force regeneration: delete `.next` folder and rebuild
- Check MongoDB connection is working

### "Structured data errors"

- Validate JSON-LD with Google Rich Results Test
- Ensure dates are in ISO 8601 format
- Check all required fields are present

## Monitoring & Optimization

### Weekly Tasks

- [ ] Check Google Search Console for indexing errors
- [ ] Review new queries bringing traffic
- [ ] Update old posts if regulations/APIs changed
- [ ] Write 1-2 new blog posts

### Monthly Tasks

- [ ] Analyze top-performing posts (GA4)
- [ ] Identify content gaps (queries with impressions, no clicks)
- [ ] Update service page content based on blog insights
- [ ] Build 1-2 backlinks (guest posts, community contributions)

### Quarterly Review

- [ ] Audit all blog posts for accuracy
- [ ] Remove or consolidate thin content
- [ ] Update author bios
- [ ] Refresh featured posts on homepage

## Next Steps

After completing Phase 1-4:

1. **Build content library:** Aim for 30-50 posts in 6 months
2. **Monitor rankings:** Track target keywords monthly
3. **Optimize conversion:** Add CTAs to high-traffic posts
4. **Expand content types:** Add videos, infographics, case studies
5. **Build authority:** Guest post on industry blogs, contribute to open source

Refer to `SEO_STRATEGY.md` for the complete strategic framework.
