export interface NavigationItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionHeading {
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface ServiceDetails {
  intensity: string;
  duration: string;
  room: string;
  goodFor: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  details: ServiceDetails;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  specialties: string[];
  featuredClasses?: string[];
  availability?: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface RatingSummary {
  average: string;
  source: string;
  count: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ScheduleClass {
  time: string;
  name: string;
  duration: string;
  instructor: string;
  room: string;
}

export interface ScheduleDay {
  day: string;
  classes: ScheduleClass[];
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
}
