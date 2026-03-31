export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  metric?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  deliverables: string[];
  icon?: string;
}

export interface WorkItem {
  client?: string;
  title: string;
  project?: string;
  services?: string[];
  result?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}
