const servicesData = require('./services-data');
const technicalServicesData = require('./technical-services-data');

/**
 * Navigation and Routing Configuration
 * Enforces complete separation between visa and technical services
 */

const navigationStructure = {
  main: [
    {
      label: 'Home',
      path: '/',
      active: 'home'
    },
    {
      label: 'About',
      path: '/about',
      active: 'about'
    },
    {
      label: 'Visa Services',
      path: '/services/visa',
      active: 'visa',
      children: Object.keys(servicesData)
        .filter(slug => servicesData[slug].meta.isIndexable !== false)
        .map(slug => ({
          label: servicesData[slug].seo.h1,
          path: `/services/visa/${slug}`,
          slug: slug
        }))
    },
    {
      label: 'Technical Services',
      path: '/services/technical',
      active: 'technical',
      children: Object.keys(technicalServicesData).map(slug => ({
        label: technicalServicesData[slug].seo.h1,
        path: `/services/technical/${slug}`,
        slug: slug
      }))
    },
    {
      label: 'FAQ',
      path: '/faq',
      active: 'faq'
    },
    {
      label: 'Contact',
      path: '/contact',
      active: 'contact'
    }
  ]
};

const serviceCategories = {
  visa: {
    label: 'Visa Services',
    basePath: '/services/visa',
    services: Object.keys(servicesData)
      .filter(slug => servicesData[slug].meta.isIndexable !== false)
      .reduce((acc, slug) => {
        acc[slug] = {
          slug: slug,
          title: servicesData[slug].seo.title,
          h1: servicesData[slug].seo.h1,
          path: `/services/visa/${slug}`,
          type: servicesData[slug].meta.serviceType
        };
        return acc;
      }, {})
  },
  technical: {
    label: 'Technical Services',
    basePath: '/services/technical',
    services: Object.keys(technicalServicesData).reduce((acc, slug) => {
      acc[slug] = {
        slug: slug,
        title: technicalServicesData[slug].seo.title,
        h1: technicalServicesData[slug].seo.h1,
        path: `/services/technical/${slug}`,
        type: technicalServicesData[slug].meta.serviceType
      };
      return acc;
    }, {})
  }
};

const breadcrumbGenerator = {
  generate: function(currentPage, serviceSlug = null, serviceCategory = null) {
    const breadcrumbs = [
      { label: 'Home', path: '/' }
    ];

    if (currentPage === 'visa') {
      breadcrumbs.push({ label: 'Visa Services', path: '/services/visa' });
    } else if (currentPage === 'technical') {
      breadcrumbs.push({ label: 'Technical Services', path: '/services/technical' });
    } else if (currentPage === 'about') {
      breadcrumbs.push({ label: 'About', path: '/about' });
    } else if (currentPage === 'faq') {
      breadcrumbs.push({ label: 'FAQ', path: '/faq' });
    } else if (currentPage === 'contact') {
      breadcrumbs.push({ label: 'Contact', path: '/contact' });
    }

    if (serviceSlug && serviceCategory === 'visa' && servicesData[serviceSlug]) {
      breadcrumbs.push({
        label: servicesData[serviceSlug].seo.h1,
        path: `/services/visa/${serviceSlug}`
      });
    } else if (serviceSlug && serviceCategory === 'technical' && technicalServicesData[serviceSlug]) {
      breadcrumbs.push({
        label: technicalServicesData[serviceSlug].seo.h1,
        path: `/services/technical/${serviceSlug}`
      });
    }

    return breadcrumbs;
  }
};

const routeValidator = {
  isValidVisaService: function(slug) {
    return servicesData[slug] && servicesData[slug].meta.isIndexable !== false;
  },
  isValidTechnicalService: function(slug) {
    return technicalServicesData[slug] !== undefined;
  },
  shouldRedirect: function(slug, category) {
    if (category === 'visa' && servicesData[slug]) {
      if (servicesData[slug].meta.lifecycleStatus === 'merged' && servicesData[slug].meta.redirectTo) {
        return servicesData[slug].meta.redirectTo;
      }
    }
    return null;
  }
};

const sitemapData = {
  static: [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services/visa', priority: 0.9, changefreq: 'weekly' },
    { url: '/services/technical', priority: 0.9, changefreq: 'weekly' },
    { url: '/faq', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' }
  ],
  visaServices: Object.keys(servicesData)
    .filter(slug => servicesData[slug].meta.isIndexable !== false)
    .map(slug => ({
      url: `/services/visa/${slug}`,
      priority: 0.9,
      changefreq: 'weekly'
    })),
  technicalServices: Object.keys(technicalServicesData).map(slug => ({
    url: `/services/technical/${slug}`,
    priority: 0.85,
    changefreq: 'weekly'
  }))
};

module.exports = {
  navigationStructure,
  serviceCategories,
  breadcrumbGenerator,
  routeValidator,
  sitemapData
};
