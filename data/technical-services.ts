import { ServicesData, TechnicalServiceType, TechnicalIntentType } from '@/types/services';

export const technicalServicesData: ServicesData = {
  'pos-system-setup': {
    meta: {
      serviceType: TechnicalServiceType.CORE_TECHNICAL,
      intentType: TechnicalIntentType.IMPLEMENTATION,
      lifecycleStatus: 'active',
      isIndexable: true,
      category: 'technical',
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'POS System Setup for Retail and F&B | Dubai',
      metaDescription: 'Install and configure POS systems for retail stores and restaurants. Hardware setup, software configuration, payment integration.',
      h1: 'POS System Setup and Configuration',
      primaryKeyword: 'pos system setup dubai',
      secondaryKeywords: ['pos installation uae', 'retail pos configuration']
    },
    content: {
      sections: [
        {
          id: 'service-scope',
          heading: 'Service Scope',
          content: `
            <p>Installation and configuration of point-of-sale systems for single-location retail stores, cafes, and restaurants.</p>
            <h3>Problems Solved</h3>
            <ul>
              <li>Cash register replacement with digital system</li>
              <li>Sales tracking and inventory management</li>
              <li>Payment processing integration</li>
              <li>Receipt printing and tax compliance</li>
            </ul>
            <h3>Business Types</h3>
            <ul>
              <li>Retail stores (apparel, electronics, groceries)</li>
              <li>Cafes and small restaurants</li>
              <li>Service businesses requiring appointment and payment tracking</li>
            </ul>
          `
        },
        {
          id: 'deliverables',
          heading: 'What We Deliver',
          content: `
            <ul>
              <li>POS software installation on Windows or Android tablet</li>
              <li>Hardware connection (receipt printer, cash drawer, barcode scanner)</li>
              <li>Payment gateway integration (Network, Telr, or PayTabs)</li>
              <li>Product catalog setup (up to 500 items)</li>
              <li>Tax configuration (UAE VAT)</li>
              <li>Basic staff user accounts (up to 5 users)</li>
              <li>Training session (2 hours on-site)</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'Requirements From Client',
          content: `
            <ul>
              <li>POS hardware already purchased or provided by client</li>
              <li>Internet connection at location (minimum 10 Mbps)</li>
              <li>Payment gateway merchant account already approved</li>
              <li>Product list with prices in Excel or CSV format</li>
              <li>UAE trade license copy for payment gateway setup verification</li>
            </ul>
          `
        },
        {
          id: 'tech-stack',
          heading: 'Supported Platforms',
          content: `
            <h3>POS Software</h3>
            <ul>
              <li>Loyverse POS</li>
              <li>Square POS (UAE compatible version)</li>
              <li>ERPNext POS module</li>
            </ul>
            <h3>Hardware Compatibility</h3>
            <ul>
              <li>Windows 10/11 tablets and PCs</li>
              <li>Android tablets (minimum Android 8.0)</li>
              <li>Thermal receipt printers (ESC/POS protocol)</li>
              <li>USB and Bluetooth barcode scanners</li>
            </ul>
            <h3>Payment Gateways</h3>
            <ul>
              <li>Network International</li>
              <li>Telr</li>
              <li>PayTabs</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Timeline',
          content: `
            <p>2-5 business days from hardware availability and data preparation.</p>
            <h3>Breakdown</h3>
            <ul>
              <li>Day 1: Software installation and configuration</li>
              <li>Day 2: Product catalog import and testing</li>
              <li>Day 3: Payment gateway integration and testing</li>
              <li>Day 4: Staff training and handover</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['wordpress-development', 'custom-web-application']
    }
  },
  'wordpress-development': {
    meta: {
      serviceType: TechnicalServiceType.CORE_TECHNICAL,
      intentType: TechnicalIntentType.CUSTOMIZATION,
      lifecycleStatus: 'active',
      isIndexable: true,
      category: 'technical',
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'WordPress Website Development | Custom Theme & Plugins Dubai',
      metaDescription: 'Custom WordPress development for business websites. Theme customization, plugin development, and WooCommerce setup.',
      h1: 'WordPress Development Services',
      primaryKeyword: 'wordpress development dubai',
      secondaryKeywords: ['wordpress customization uae', 'woocommerce development']
    },
    content: {
      sections: [
        {
          id: 'service-scope',
          heading: 'Service Scope',
          content: `
            <p>Custom WordPress website development and customization for business websites, blogs, and online stores.</p>
            <h3>Use Cases</h3>
            <ul>
              <li>Corporate websites with custom design</li>
              <li>Blog and content publishing platforms</li>
              <li>Small to medium e-commerce stores (WooCommerce)</li>
              <li>Portfolio and service showcase sites</li>
            </ul>
          `
        },
        {
          id: 'deliverables',
          heading: 'What We Deliver',
          content: `
            <ul>
              <li>Custom theme development or premium theme customization</li>
              <li>Plugin installation and configuration</li>
              <li>Contact forms and lead capture</li>
              <li>SEO optimization (Yoast/RankMath)</li>
              <li>Performance optimization (caching, image optimization)</li>
              <li>Mobile responsive design</li>
              <li>Admin training (2 hours)</li>
              <li>3 months maintenance and bug fixes</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'Requirements From Client',
          content: `
            <ul>
              <li>Domain name registered</li>
              <li>Web hosting account (minimum 2GB storage, PHP 8.0+)</li>
              <li>Content (text, images, videos) or wireframes</li>
              <li>Logo and brand assets</li>
              <li>Reference websites for design inspiration</li>
            </ul>
          `
        },
        {
          id: 'tech-stack',
          heading: 'Technology Stack',
          content: `
            <h3>Core Platform</h3>
            <ul>
              <li>WordPress 6.x</li>
              <li>PHP 8.0+</li>
              <li>MySQL 8.0</li>
            </ul>
            <h3>Recommended Plugins</h3>
            <ul>
              <li>Elementor Pro (page builder)</li>
              <li>WooCommerce (e-commerce)</li>
              <li>Yoast SEO (search optimization)</li>
              <li>WP Rocket (caching)</li>
              <li>Contact Form 7</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Timeline',
          content: `
            <p>10-20 business days depending on complexity and content readiness.</p>
            <h3>Project Phases</h3>
            <ul>
              <li>Week 1: Design mockups and approval</li>
              <li>Week 2: Development and content integration</li>
              <li>Week 3: Testing, revisions, and launch</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['pos-system-setup', 'custom-web-application']
    }
  },
  'custom-web-application': {
    meta: {
      serviceType: TechnicalServiceType.CORE_TECHNICAL,
      intentType: TechnicalIntentType.IMPLEMENTATION,
      lifecycleStatus: 'active',
      isIndexable: true,
      category: 'technical',
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'Custom Web Application Development | Dubai UAE',
      metaDescription: 'Build custom web applications for your business. CRM, booking systems, dashboards, and internal tools.',
      h1: 'Custom Web Application Development',
      primaryKeyword: 'web application development dubai',
      secondaryKeywords: ['custom software development uae', 'business web app']
    },
    content: {
      sections: [
        {
          id: 'service-scope',
          heading: 'Service Scope',
          content: `
            <p>Development of custom web-based applications tailored to specific business workflows and requirements.</p>
            <h3>Application Types</h3>
            <ul>
              <li>Customer relationship management (CRM) systems</li>
              <li>Booking and appointment scheduling platforms</li>
              <li>Inventory and order management</li>
              <li>Internal dashboards and reporting tools</li>
              <li>Customer portals and service request systems</li>
            </ul>
            <h3>Target Businesses</h3>
            <p>SMBs and SMEs with specific workflows not supported by off-the-shelf software.</p>
          `
        },
        {
          id: 'deliverables',
          heading: 'What We Deliver',
          content: `
            <ul>
              <li>Fully functional web application</li>
              <li>User authentication and role-based access</li>
              <li>Database design and implementation</li>
              <li>Admin panel for data management</li>
              <li>API integration (if required)</li>
              <li>Responsive design (desktop and mobile)</li>
              <li>Documentation and user manual</li>
              <li>6 months maintenance and bug fixes</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'Requirements From Client',
          content: `
            <ul>
              <li>Detailed project requirements and user stories</li>
              <li>Workflow diagrams or process documentation</li>
              <li>Sample data or existing system export</li>
              <li>Hosting environment (VPS or cloud preferred)</li>
              <li>Third-party service credentials (if integration needed)</li>
            </ul>
          `
        },
        {
          id: 'tech-stack',
          heading: 'Technology Stack',
          content: `
            <h3>Frontend</h3>
            <ul>
              <li>React.js or Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>Node.js (Express.js) or Python (Django/FastAPI)</li>
              <li>PostgreSQL or MySQL database</li>
              <li>RESTful API or GraphQL</li>
            </ul>
            <h3>Deployment</h3>
            <ul>
              <li>Docker containers</li>
              <li>AWS, DigitalOcean, or client-provided hosting</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Timeline',
          content: `
            <p>30-60 business days depending on scope and complexity.</p>
            <h3>Project Phases</h3>
            <ul>
              <li>Week 1-2: Requirements analysis and wireframes</li>
              <li>Week 3-4: Database design and backend API development</li>
              <li>Week 5-6: Frontend development and integration</li>
              <li>Week 7-8: Testing, deployment, and training</li>
            </ul>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['wordpress-development', 'suitecrm-customization']
    }
  },
  'suitecrm-customization': {
    meta: {
      serviceType: TechnicalServiceType.CORE_TECHNICAL,
      intentType: TechnicalIntentType.CUSTOMIZATION,
      lifecycleStatus: 'active',
      isIndexable: true,
      category: 'technical',
      seoDirective: 'index,follow'
    },
    seo: {
      title: 'SuiteCRM Customization & Implementation | Dubai',
      metaDescription: 'Customize and deploy SuiteCRM for your business. Custom modules, workflows, and third-party integrations.',
      h1: 'SuiteCRM Customization Services',
      primaryKeyword: 'suitecrm customization dubai',
      secondaryKeywords: ['crm implementation uae', 'suitecrm development']
    },
    content: {
      sections: [
        {
          id: 'service-scope',
          heading: 'Service Scope',
          content: `
            <p>Customization and deployment of SuiteCRM open-source customer relationship management system.</p>
            <h3>Use Cases</h3>
            <ul>
              <li>Sales pipeline and lead management</li>
              <li>Customer support and ticketing</li>
              <li>Marketing campaign tracking</li>
              <li>Quote and invoice generation</li>
            </ul>
          `
        },
        {
          id: 'deliverables',
          heading: 'What We Deliver',
          content: `
            <ul>
              <li>SuiteCRM installation and configuration</li>
              <li>Custom module development</li>
              <li>Workflow automation setup</li>
              <li>Email integration (SMTP/IMAP)</li>
              <li>Report and dashboard customization</li>
              <li>Data migration from existing system</li>
              <li>User training (4 hours)</li>
              <li>3 months support</li>
            </ul>
          `
        },
        {
          id: 'requirements',
          heading: 'Requirements From Client',
          content: `
            <ul>
              <li>VPS or dedicated hosting (minimum 4GB RAM)</li>
              <li>Business process documentation</li>
              <li>Existing customer data for migration</li>
              <li>Email server credentials</li>
              <li>List of required integrations</li>
            </ul>
          `
        },
        {
          id: 'tech-stack',
          heading: 'Technology Stack',
          content: `
            <h3>Platform</h3>
            <ul>
              <li>SuiteCRM 8.x</li>
              <li>PHP 8.0+</li>
              <li>MySQL 8.0</li>
            </ul>
            <h3>Integrations</h3>
            <ul>
              <li>Email (Gmail, Outlook)</li>
              <li>WhatsApp Business API</li>
              <li>Payment gateways</li>
              <li>Accounting software (Zoho Books, QuickBooks)</li>
            </ul>
          `
        },
        {
          id: 'timeline',
          heading: 'Timeline',
          content: `
            <p>15-25 business days depending on customization requirements.</p>
          `
        }
      ]
    },
    linking: {
      relatedServices: ['custom-web-application', 'wordpress-development']
    }
  }
};
