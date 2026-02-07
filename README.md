# VistaDocs Center - Professional Visa & Technical Services

A Next.js-powered portfolio website for VistaDocs, featuring comprehensive visa processing and technical services in the UAE.

## 🚀 Features

- **Dynamic Blog System** powered by MongoDB
- **SEO-Optimized** with comprehensive strategy for organic growth
- **Structured Data** (Organization, Article, Breadcrumb schemas)
- **ISR (Incremental Static Regeneration)** for optimal performance
- **Responsive Design** with Tailwind CSS
- **Contact Form** with email notifications
- **Service Pages** for visa and technical services

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB (blog posts)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier)
- Vercel account (for deployment)

### Installation

1. **Clone and install dependencies:**

```bash
git clone <your-repo-url>
cd VistaDocs
npm install
```

2. **Configure environment variables:**

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vistadocs
```

3. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 SEO Implementation

This project includes a comprehensive SEO strategy designed for long-term organic growth.

### Documentation

- **[SEO_STRATEGY.md](SEO_STRATEGY.md)** - Master SEO strategy (8,000+ words)
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Step-by-step implementation guide
- **[SEO_CHECKLIST.md](SEO_CHECKLIST.md)** - Daily/weekly/monthly task checklist
- **[CONTENT_CALENDAR.md](CONTENT_CALENDAR.md)** - 3-month content plan with examples
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Overview of all changes

### Quick Start: Add Your First Blog Post

```bash
# Edit the blog post content in scripts/insert-blog-post.js
node scripts/insert-blog-post.js
```

Then visit `http://localhost:3000/blog` to see your post.

### Blog Features

- ✅ Dynamic content from MongoDB
- ✅ ISR with configurable revalidation
- ✅ Article structured data (JSON-LD)
- ✅ Automatic sitemap generation
- ✅ Internal linking to service pages
- ✅ Author bios and read time
- ✅ Category and tag support
- ✅ Pagination

## 📊 Project Structure

```
VistaDocs/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages (MongoDB-driven)
│   ├── visa-services/     # Visa service pages
│   ├── technical-services/# Technical service pages
│   ├── layout.tsx         # Root layout with Organization schema
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # SEO robots configuration
├── components/            # Reusable React components
├── data/                  # Static service data
├── lib/                   # Utility functions
│   └── mongodb.ts         # MongoDB connection with pooling
├── types/                 # TypeScript type definitions
│   ├── services.ts        # Service types
│   └── blog.ts            # Blog post types
├── scripts/               # Helper scripts
│   ├── insert-blog-post.js
│   └── example-blog-post.json
└── public/                # Static assets
```

## 🎯 SEO Strategy Overview

### Content Pillars

1. **Technical Implementation** - Next.js, MongoDB, development guides
2. **Regulatory & Compliance** - UAE visa regulations, updates
3. **Case Studies** - Real client projects and outcomes
4. **Industry Analysis** - Market insights, trends

### Key Metrics (6-Month Goals)

- 500+ organic sessions/month
- 10+ keywords in top 10 positions
- 30-50 blog posts published
- 10+ quality backlinks

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `MONGODB_URI`
   - `EMAIL_USER` (for contact form)
   - `EMAIL_PASS`
4. Deploy

The site will auto-deploy on every push to main.

### Environment Variables

Required:
- `MONGODB_URI` - MongoDB connection string
- `EMAIL_USER` - SMTP email for contact form
- `EMAIL_PASS` - SMTP password

Optional:
- `NEXT_PUBLIC_SITE_URL` - Production URL
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp contact

## 📈 Monitoring

- **Google Search Console** - Indexing, rankings, queries
- **Vercel Analytics** - Core Web Vitals, traffic
- **MongoDB Atlas** - Database metrics

## 🧪 Development

```bash
# Development server
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

### SEO Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Vercel Analytics](https://vercel.com/docs/analytics)

## 📝 License

Private project - All rights reserved

## 🤝 Support

For questions or issues, refer to:
- [SETUP_GUIDE.md](SETUP_GUIDE.md) for implementation help
- [SEO_CHECKLIST.md](SEO_CHECKLIST.md) for troubleshooting
