/**
 * Service Classification Taxonomy
 */

const SERVICE_TYPES = {
  CORE_VISA: 'core_visa',
  CORE_BUSINESS: 'core_business',
  SUPPORTING: 'supporting',
  DEPENDENCY: 'dependency',
  COMPLIANCE: 'compliance'
};

const INTENT_TYPES = {
  ACQUISITION: 'acquisition',
  RENEWAL: 'renewal',
  CONVERSION: 'conversion',
  INFORMATION: 'information'
};

const LIFECYCLE_STATUS = {
  ACTIVE: 'active',
  EXPERIMENTAL: 'experimental',
  DEPRECATED: 'deprecated',
  MERGED: 'merged'
};

const serviceHierarchy = {
  // Core Visa Services (Indexable, Revenue-Generating)
  coreVisa: {
    'employment-visa-uae': {
      type: SERVICE_TYPES.CORE_VISA,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: ['medical-fitness-uae', 'emirates-id-processing']
    },
    'family-visa-uae': {
      type: SERVICE_TYPES.CORE_VISA,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: ['medical-fitness-uae', 'emirates-id-processing', 'document-attestation-uae']
    },
    'golden-visa-uae': {
      type: SERVICE_TYPES.CORE_VISA,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: ['medical-fitness-uae', 'emirates-id-processing']
    },
    'tourist-visa-uae': {
      type: SERVICE_TYPES.CORE_VISA,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: []
    }
  },

  // Core Business Services (Indexable, Revenue-Generating)
  coreBusiness: {
    'business-setup-uae': {
      type: SERVICE_TYPES.CORE_BUSINESS,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: []
    }
  },

  // Supporting Services (Indexable, Authority Content)
  supporting: {
    'document-attestation-uae': {
      type: SERVICE_TYPES.SUPPORTING,
      intent: INTENT_TYPES.INFORMATION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: []
    },
    'corporate-pro-services': {
      type: SERVICE_TYPES.SUPPORTING,
      intent: INTENT_TYPES.INFORMATION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: true,
      children: [],
      dependencies: []
    }
  },

  // Dependency Services (Not Indexable, Functional Only)
  dependency: {
    'medical-fitness-uae': {
      type: SERVICE_TYPES.DEPENDENCY,
      intent: INTENT_TYPES.INFORMATION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: false,
      canonicalParent: 'employment-visa-uae',
      seoDirective: 'noindex,follow'
    },
    'emirates-id-processing': {
      type: SERVICE_TYPES.DEPENDENCY,
      intent: INTENT_TYPES.INFORMATION,
      lifecycle: LIFECYCLE_STATUS.ACTIVE,
      indexable: false,
      canonicalParent: 'employment-visa-uae',
      seoDirective: 'noindex,follow'
    }
  },

  // Merged/Deprecated Services
  merged: {
    'labour-card-uae': {
      type: SERVICE_TYPES.DEPENDENCY,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.MERGED,
      indexable: false,
      canonicalParent: 'employment-visa-uae',
      redirectTo: 'employment-visa-uae#labour-card'
    },
    'trade-license-mainland-uae': {
      type: SERVICE_TYPES.CORE_BUSINESS,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.MERGED,
      indexable: false,
      canonicalParent: 'business-setup-uae',
      redirectTo: 'business-setup-uae#mainland'
    },
    'free-zone-company-uae': {
      type: SERVICE_TYPES.CORE_BUSINESS,
      intent: INTENT_TYPES.ACQUISITION,
      lifecycle: LIFECYCLE_STATUS.MERGED,
      indexable: false,
      canonicalParent: 'business-setup-uae',
      redirectTo: 'business-setup-uae#freezone'
    },
    'pro-services-uae': {
      type: SERVICE_TYPES.SUPPORTING,
      intent: INTENT_TYPES.INFORMATION,
      lifecycle: LIFECYCLE_STATUS.MERGED,
      indexable: false,
      canonicalParent: 'corporate-pro-services',
      redirectTo: 'corporate-pro-services'
    }
  }
};

const linkingRules = {
  dependencies: {
    description: 'Services that must be completed as part of this service',
    allowedFrom: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS],
    allowedTo: [SERVICE_TYPES.DEPENDENCY],
    bidirectional: false
  },
  upsells: {
    description: 'Upgrade opportunities to higher-value services',
    allowedFrom: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS],
    allowedTo: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS],
    bidirectional: false
  },
  alternatives: {
    description: 'Different paths to achieve same goal',
    allowedFrom: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS],
    allowedTo: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS],
    bidirectional: true
  },
  relatedGuides: {
    description: 'Supporting content pages',
    allowedFrom: [SERVICE_TYPES.CORE_VISA, SERVICE_TYPES.CORE_BUSINESS, SERVICE_TYPES.SUPPORTING],
    allowedTo: [SERVICE_TYPES.SUPPORTING],
    bidirectional: false
  }
};

module.exports = {
  SERVICE_TYPES,
  INTENT_TYPES,
  LIFECYCLE_STATUS,
  serviceHierarchy,
  linkingRules
};
