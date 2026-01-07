// Service Type Definitions

export enum ServiceType {
  CORE_VISA = 'core_visa',
  CORE_BUSINESS = 'core_business',
  SUPPORTING = 'supporting',
  DEPENDENCY = 'dependency',
  COMPLIANCE = 'compliance'
}

export enum IntentType {
  ACQUISITION = 'acquisition',
  RENEWAL = 'renewal',
  CONVERSION = 'conversion',
  INFORMATION = 'information'
}

export enum LifecycleStatus {
  ACTIVE = 'active',
  EXPERIMENTAL = 'experimental',
  DEPRECATED = 'deprecated',
  MERGED = 'merged'
}

export enum TechnicalServiceType {
  CORE_TECHNICAL = 'core_technical',
  SUPPORTING = 'supporting'
}

export enum TechnicalIntentType {
  IMPLEMENTATION = 'implementation',
  CUSTOMIZATION = 'customization',
  MAINTENANCE = 'maintenance'
}

export interface ServiceSection {
  id: string;
  heading: string;
  content: string;
}

export interface ServiceMeta {
  serviceType: ServiceType | TechnicalServiceType;
  intentType: IntentType | TechnicalIntentType;
  lifecycleStatus: LifecycleStatus | string;
  isIndexable: boolean;
  category: 'visa' | 'technical';
  seoDirective: string;
  canonicalParent?: string | null;
}

export interface ServiceSEO {
  title: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export interface ServiceContent {
  sections: ServiceSection[];
}

export interface ServiceLinking {
  relatedServices?: string[];
  dependencies?: string[];
  upgradePaths?: string[];
  upsellOpportunities?: string[];
}

export interface Service {
  meta: ServiceMeta;
  seo: ServiceSEO;
  content: ServiceContent;
  linking?: ServiceLinking;
  slug: string;
}

export type ServicesData = Record<string, Omit<Service, 'slug'>>;
