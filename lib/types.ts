// Service categories from services.md
export const SERVICE_CATEGORIES = [
  'HR Audits & Compliance Reviews',
  'Retainer HR Services',
  'Employee Handbook Creation',
  'HR Strategy & Business Planning',
  'Recruiting & Onboarding',
  'Performance Management',
  'Employee Relations',
  'HR Training & Workshops',
  'Technology & HR Systems',
  'Workplace Investigations',
  'DEI & Company Culture',
  'Fractional HR Director',
  'HR Project Support',
  'Multi-State & Remote Workforce',
  'Executive & Leadership Coaching',
  'Custom HR Solutions',
] as const;

export type ServiceCategory = typeof SERVICE_CATEGORIES[number];

// Navigation links
export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Landing page variations
export interface LandingPageVariation {
  slug: string;
  title: string;
  description: string;
  style: string;
  focus: string;
}

export const LANDING_VARIATIONS: LandingPageVariation[] = [
  {
    slug: 'variation1',
    title: 'Minimalist Corporate',
    description: 'Clean, professional design for established companies',
    style: 'Minimalist Corporate',
    focus: 'General HR Services',
  },
  {
    slug: 'variation2',
    title: 'Bold Creative',
    description: 'Dynamic and modern for growing teams',
    style: 'Bold Creative',
    focus: 'Recruiting & Onboarding',
  },
  {
    slug: 'variation3',
    title: 'Professional Classic',
    description: 'Traditional and trustworthy',
    style: 'Professional Classic',
    focus: 'Compliance & Audits',
  },
  {
    slug: 'variation4',
    title: 'Modern Tech Startup',
    description: 'Fast-paced and innovative',
    style: 'Modern Tech Startup',
    focus: 'Fractional HR Director',
  },
  {
    slug: 'variation5',
    title: 'Warm Organic',
    description: 'Nature-inspired and people-focused',
    style: 'Warm Organic',
    focus: 'Culture & DEI',
  },
  {
    slug: 'variation6',
    title: 'Executive Premium',
    description: 'Sophisticated and luxurious',
    style: 'Executive Premium',
    focus: 'Executive Coaching',
  },
  {
    slug: 'variation7',
    title: 'Single Page Scroll',
    description: 'Smooth storytelling experience',
    style: 'Single Page Scroll',
    focus: 'Employee Relations',
  },
];

// Form validation types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// Bio content
export const JESSIKA_BIO = {
  main: `Jessika Hanger is a seasoned HR consultant and founder of Rooted People Services, dedicated to helping businesses build compliant, people-first workplaces that scale with confidence. With extensive experience across all facets of human resources—from compliance audits and policy development to strategic planning and executive coaching—Jessika partners with organizations to transform their HR functions into competitive advantages.`,
  approach: `Her approach combines deep regulatory expertise with practical business acumen, ensuring clients not only meet compliance requirements but also foster cultures where employees thrive. Whether serving as a fractional HR director for growing startups or conducting sensitive workplace investigations for established enterprises, Jessika brings clarity, strategy, and actionable solutions to every engagement.`,
  mission: `Jessika's mission is simple: root your business in strong people practices, and watch your organization flourish.`,
};

