/**
 * VistaDocs Center - Express Server
 * Serves static pages using EJS templating
 */

const express = require('express');
const path = require('path');

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
app.post('/contact', (req, res) => {
  // In a real application, you would process the form data here
  // For now, we'll just acknowledge receipt
  console.log('Contact form submitted:', req.body);
  
  res.render('contact', {
    title: 'Contact Us - VistaDocs Center',
    currentPage: 'contact',
    formSubmitted: true
  });
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
