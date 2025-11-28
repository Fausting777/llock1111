export type PageView = 'home' | 'impressum' | 'datenschutz';

export interface PricingTier {
  timeRange: string;
  price: number;
  description: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  id: string; // for scroll to anchor
}