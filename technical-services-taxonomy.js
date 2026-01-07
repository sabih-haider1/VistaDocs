const TECHNICAL_SERVICE_TYPES = {
  CORE_TECHNICAL: 'core_technical',
  SUPPORTING: 'supporting'
};

const TECHNICAL_INTENT_TYPES = {
  IMPLEMENTATION: 'implementation',
  CUSTOMIZATION: 'customization',
  MAINTENANCE: 'maintenance'
};

const technicalServiceHierarchy = {
  coreTechnical: {
    'pos-system-setup': {
      type: TECHNICAL_SERVICE_TYPES.CORE_TECHNICAL,
      intent: TECHNICAL_INTENT_TYPES.IMPLEMENTATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'small_business'
    },
    'wordpress-development': {
      type: TECHNICAL_SERVICE_TYPES.CORE_TECHNICAL,
      intent: TECHNICAL_INTENT_TYPES.CUSTOMIZATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'sme'
    },
    'opencart-development': {
      type: TECHNICAL_SERVICE_TYPES.CORE_TECHNICAL,
      intent: TECHNICAL_INTENT_TYPES.CUSTOMIZATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'sme'
    },
    'suitecrm-customization': {
      type: TECHNICAL_SERVICE_TYPES.CORE_TECHNICAL,
      intent: TECHNICAL_INTENT_TYPES.CUSTOMIZATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'sme'
    },
    'custom-web-application': {
      type: TECHNICAL_SERVICE_TYPES.CORE_TECHNICAL,
      intent: TECHNICAL_INTENT_TYPES.IMPLEMENTATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'small_business'
    }
  },
  supporting: {
    'system-integration': {
      type: TECHNICAL_SERVICE_TYPES.SUPPORTING,
      intent: TECHNICAL_INTENT_TYPES.CUSTOMIZATION,
      lifecycle: 'active',
      indexable: true,
      children: [],
      dependencies: [],
      supportedScale: 'sme'
    }
  }
};

const technicalLinkingRules = {
  integrations: {
    allowedFrom: ['pos-system-setup', 'suitecrm-customization', 'opencart-development'],
    allowedTo: ['system-integration'],
    bidirectional: false
  },
  relatedImplementations: {
    allowedFrom: ['wordpress-development'],
    allowedTo: ['opencart-development'],
    bidirectional: false
  },
  crmConnections: {
    allowedFrom: ['suitecrm-customization'],
    allowedTo: ['system-integration', 'pos-system-setup'],
    bidirectional: false
  }
};

const capabilityLimits = {
  maxProjectSize: {
    pos: 'single_location_up_to_10_terminals',
    wordpress: 'custom_themes_and_20_plugins_max',
    opencart: 'single_store_up_to_50000_products',
    suitecrm: 'up_to_50_users',
    customWeb: 'single_application_up_to_10000_monthly_users',
    integration: 'up_to_5_systems'
  },
  unsupportedScenarios: {
    pos: ['multi_location_chains', 'franchise_networks', 'enterprise_erp_integration'],
    wordpress: ['high_traffic_sites_over_100k_monthly', 'custom_page_builders', 'multisite_networks'],
    opencart: ['multi_vendor_marketplaces', 'b2b_wholesale_platforms', 'international_multi_currency_complex'],
    suitecrm: ['enterprise_deployments_over_100_users', 'custom_module_development_from_scratch', 'on_premise_server_management'],
    customWeb: ['real_time_apps', 'mobile_native_apps', 'blockchain_or_ai_features'],
    integration: ['legacy_system_reverse_engineering', 'systems_without_api', 'real_time_sync_requirements']
  }
};

module.exports = {
  TECHNICAL_SERVICE_TYPES,
  TECHNICAL_INTENT_TYPES,
  technicalServiceHierarchy,
  technicalLinkingRules,
  capabilityLimits
};
