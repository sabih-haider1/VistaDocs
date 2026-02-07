#!/usr/bin/env node

/**
 * Script to insert a blog post into MongoDB
 * 
 * Usage:
 * 1. Update the blogPost object below with your content
 * 2. Ensure .env.local has MONGODB_URI set
 * 3. Run: node scripts/insert-blog-post.js
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...values] = line.split('=');
    if (key && values.length) {
      process.env[key.trim()] = values.join('=').trim();
    }
  });
}

const blogPost = {
  slug: 'uae-employment-visa-guide-2026',
  title: 'UAE Employment Visa Processing: Complete 2026 Guide',
  metaDescription: 'Everything you need to know about UAE employment visa processing in 2026. Requirements, documents, timeline, and costs explained.',
  h1: 'UAE Employment Visa Processing: Complete 2026 Guide',
  publishedAt: new Date('2026-02-08T10:00:00Z'),
  category: 'regulatory',
  tags: ['uae visa', 'employment visa', 'work permit', 'sponsorship'],
  content: `
    <h2>What is a UAE Employment Visa?</h2>
    <p>
      A UAE employment visa (also called a work visa or residence visa) allows foreign nationals
      to legally work and reside in the United Arab Emirates. It's sponsored by an employer
      registered in the UAE and is typically valid for 2 years.
    </p>

    <h2>Who Qualifies for an Employment Visa?</h2>
    <p>To qualify for a UAE employment visa, you need:</p>
    <ul>
      <li>A valid job offer from a UAE-registered company</li>
      <li>An employer willing to sponsor your visa</li>
      <li>Educational certificates (attested for degree-level positions)</li>
      <li>No active visa ban or deportation record</li>
      <li>Medical fitness (tested after entry permit approval)</li>
    </ul>

    <h2>Required Documents</h2>
    
    <h3>From the Employer:</h3>
    <ul>
      <li>Trade license copy</li>
      <li>Establishment card</li>
      <li>Immigration card</li>
      <li>Authorized signatory passport copy</li>
    </ul>

    <h3>From the Employee:</h3>
    <ul>
      <li>Passport copy (valid 6+ months)</li>
      <li>Passport-size photos (white background)</li>
      <li>Educational certificates (attested by UAE embassy/MOFA)</li>
      <li>Previous employment contract (if applicable)</li>
    </ul>

    <h2>Step-by-Step Process</h2>

    <h3>1. Entry Permit Application (3-5 days)</h3>
    <p>
      Employer applies for entry permit through GDRFA or ICP (depending on emirate).
      Requires company documents and employee passport copy.
    </p>

    <h3>2. Visa Stamping in Passport (1-2 days)</h3>
    <p>
      Once approved, entry permit is stamped in passport. Employee can now enter UAE.
    </p>

    <h3>3. Medical Fitness Test (1-2 days)</h3>
    <p>
      After arrival, employee undergoes medical screening at approved MOHAP centers.
      Tests for infectious diseases (TB, HIV, Hepatitis B).
    </p>

    <h3>4. Emirates ID Application (2-3 days)</h3>
    <p>
      Biometrics collected at typing centers. Emirates ID card delivered within 7-10 days.
    </p>

    <h3>5. Residence Visa Stamping (2-3 days)</h3>
    <p>
      Final step: residence visa stamped in passport. Valid for 2 years.
    </p>

    <h2>Total Timeline and Costs</h2>
    
    <table>
      <tr>
        <th>Step</th>
        <th>Duration</th>
        <th>Approximate Cost (AED)</th>
      </tr>
      <tr>
        <td>Entry Permit</td>
        <td>3-5 days</td>
        <td>500-700</td>
      </tr>
      <tr>
        <td>Medical Test</td>
        <td>1-2 days</td>
        <td>300-500</td>
      </tr>
      <tr>
        <td>Emirates ID</td>
        <td>7-10 days</td>
        <td>300-400</td>
      </tr>
      <tr>
        <td>Visa Stamping</td>
        <td>2-3 days</td>
        <td>1,200-1,500</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>14-20 days</strong></td>
        <td><strong>2,300-3,100</strong></td>
      </tr>
    </table>

    <h2>Common Mistakes to Avoid</h2>
    
    <h3>1. Incorrect Passport Photos</h3>
    <p>
      UAE visa applications require white background photos. Blue or gray backgrounds
      will be rejected. Ensure compliance before applying.
    </p>

    <h3>2. Missing Attestation</h3>
    <p>
      Educational certificates must be attested by UAE embassy in the issuing country,
      then by MOFA in UAE. Missing attestation causes 2-3 week delays.
    </p>

    <h3>3. Expired Passport</h3>
    <p>
      Passport must be valid for at least 6 months. Renew before applying if close to expiry.
    </p>

    <h2>Changes in 2026</h2>
    
    <p>
      As of January 2026, UAE introduced several updates to employment visa processing:
    </p>
    <ul>
      <li><strong>Digital Emirates ID:</strong> Available for download via UAE Pass app</li>
      <li><strong>5-year visas:</strong> Now available for select professions (engineers, doctors, specialists)</li>
      <li><strong>Remote work visas:</strong> Separate category for remote workers (not employment visas)</li>
    </ul>

    <h2>When to Hire a PRO Service</h2>
    
    <p>
      While possible to process employment visas independently, consider a PRO service if:
    </p>
    <ul>
      <li>Employer is a startup unfamiliar with UAE visa processes</li>
      <li>Employee has complex background (previous bans, name changes)</li>
      <li>Speed is critical (expedited processing available)</li>
      <li>Batch processing (10+ employees)</li>
    </ul>

    <h2>Next Steps</h2>
    
    <p>
      Ready to start your UAE employment visa process? We handle everything from
      entry permit to Emirates ID, with guaranteed timelines and transparent pricing.
    </p>
  `,
  excerpt: 'Complete guide to UAE employment visa processing in 2026. Learn about requirements, documents, timeline, costs, and common mistakes to avoid.',
  author: {
    name: 'Sabih Haider',
    role: 'Founder, VistaDocs',
    bio: '5+ years processing UAE visas for startups and SMBs. Built custom automation systems for visa tracking and compliance.'
  },
  seo: {
    noindex: false,
    relatedServices: ['employment-visa-uae', 'emirates-id-application'],
  },
  featured: true,
  readTime: 8,
};

async function insertBlogPost() {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('vistadocs');
    const collection = db.collection('posts');

    // Check if post already exists
    const existing = await collection.findOne({ slug: blogPost.slug });
    
    if (existing) {
      console.log(`⚠️  Post with slug "${blogPost.slug}" already exists`);
      console.log('   Update it manually in MongoDB Compass or delete and re-run');
      return;
    }

    // Insert the post
    const result = await collection.insertOne(blogPost);
    console.log(`✅ Blog post inserted with ID: ${result.insertedId}`);
    console.log(`   View at: http://localhost:3000/blog/${blogPost.slug}`);

  } catch (error) {
    console.error('❌ Error inserting blog post:', error);
  } finally {
    await client.close();
    console.log('✅ MongoDB connection closed');
  }
}

insertBlogPost();
