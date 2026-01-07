/**
 * VistaDocs Center - Express Server
 * Serves static pages using EJS templating
 */

require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const servicesData = require('./services-data');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (for contact form)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

/**
 * Route: Home Page
 * Displays hero section with features and CTAs
 */
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home - VistaDocs Center',
    currentPage: 'home'
  });
});

/**
 * Route: About Us Page
 * Company information, mission, and values
 */
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - VistaDocs Center',
    currentPage: 'about'
  });
});

/**
 * Route: Services Page
 * Grid of all available services
 */
app.get('/services', (req, res) => {
  res.render('services', {
    title: 'Services - VistaDocs Center',
    currentPage: 'services'
  });
});

/**
 * Route: Individual Service Pages
 * Dynamic service pages from services-data.js
 */
app.get('/services/:slug', (req, res) => {
  const serviceSlug = req.params.slug;
  const service = servicesData[serviceSlug];
  
  if (!service) {
    return res.status(404).send('<h1>404 - Service Not Found</h1><p>The service you are looking for does not exist.</p>');
  }

  // Handle merged/deprecated services with 301 redirects
  if (service.meta.lifecycleStatus === 'merged' && service.meta.redirectTo) {
    return res.redirect(301, `/services/${service.meta.redirectTo}`);
  }
  
  res.render('service-page', {
    title: service.seo.title,
    currentPage: 'services',
    service: service
  });
});

/**
 * Route: FAQ Page
 * Frequently asked questions
 */
app.get('/faq', (req, res) => {
  res.render('faq', {
    title: 'FAQ - VistaDocs Center',
    currentPage: 'faq'
  });
});

/**
 * Route: Contact Page
 * Contact form and business information
 */
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us - VistaDocs Center',
    currentPage: 'contact',
    formSubmitted: false
  });
});

/**
 * POST Route: Handle Contact Form Submission
 */
app.post('/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Log form submission
  console.log('Contact form submitted:', req.body);
  
  // Prepare email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `,
    replyTo: email
  };
  
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.render('contact', {
      title: 'Contact Us - VistaDocs Center',
      currentPage: 'contact',
      formSubmitted: true
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Still show success to user, but log the error
    res.render('contact', {
      title: 'Contact Us - VistaDocs Center',
      currentPage: 'contact',
      formSubmitted: true
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`VistaDocs Center server running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
