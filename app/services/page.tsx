import { Metadata } from 'next';
import {
  ClipboardCheck,
  Briefcase,
  BookOpen,
  Target,
  UserPlus,
  TrendingUp,
  Users,
  GraduationCap,
  Settings,
  Search,
  Heart,
  Shield,
  Wrench,
  Globe,
  Award,
  Lightbulb,
} from 'lucide-react';
import { Container, Section, Heading, Subheading, ServiceCard, GlassCard } from '@/components/ui';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'HR Services | Rooted People Services',
  description: 'Comprehensive HR consulting services including audits, compliance, recruiting, training, and fractional HR director services.',
};

const ALL_SERVICES = [
  {
    icon: <ClipboardCheck size={40} />,
    title: 'HR Audits & Compliance Reviews',
    description: 'Ensure your business is compliant, efficient, and risk-free.',
    features: [
      'Full HR policy and procedure review',
      'Employee file audits and compliance checks',
      'I-9 and documentation verification',
      'Wage, hour, and classification audits (FLSA compliance)',
      'Leave policy compliance (FMLA, ADA, etc.)',
      'Risk & exposure report with corrective recommendations',
      'Custom HR Action Plan (90-day improvement roadmap)',
    ],
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Retainer HR Services',
    description: 'Your outsourced HR department. Ideal for growing companies that need HR support without full-time overhead.',
    features: [
      'Essential Plan: Compliance + Employee Relations Support',
      'Professional Plan: Includes Recruiting + Onboarding',
      'Executive Plan: Strategic HR Consulting, Training, and Policy Oversight',
      'Employee relations management',
      'On-call HR consultation',
      'Employee handbook upkeep',
      'Job descriptions and role alignment',
      'Compliance updates and alerts',
    ],
  },
  {
    icon: <BookOpen size={40} />,
    title: 'Employee Handbook Creation',
    description: 'Your handbook is your first line of defense — make it bulletproof.',
    features: [
      'Custom Employee Handbook (Federal + State compliant)',
      'Policy creation & revision (remote work, DEI, dress code, etc.)',
      'Digital or printed delivery',
      'Annual updates to reflect new legislation',
    ],
  },
  {
    icon: <Target size={40} />,
    title: 'HR Strategy & Business Planning',
    description: 'Align your people strategy with your business goals.',
    features: [
      'Workforce planning & org chart development',
      'Compensation & benefits strategy',
      'Succession planning',
      'Culture & engagement strategies',
      'KPI alignment and HR metric tracking',
    ],
  },
  {
    icon: <UserPlus size={40} />,
    title: 'Recruiting & Onboarding Solutions',
    description: 'Streamline how you attract, hire, and retain top talent.',
    features: [
      'Job postings and candidate sourcing',
      'Interview coordination',
      'Background check coordination',
      'Offer letter and onboarding documentation',
      'New hire orientation materials',
      '30/60/90-day performance templates',
    ],
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Performance Management Systems',
    description: 'Build a culture of accountability and growth.',
    features: [
      'Performance review frameworks',
      'Progressive discipline policies',
      'Leadership coaching for managers',
      'Goal-setting and KPI tracking systems',
      'Employee feedback and survey setup',
    ],
  },
  {
    icon: <Users size={40} />,
    title: 'Employee Relations & Conflict Resolution',
    description: 'Protect your company and maintain a healthy workplace.',
    features: [
      'Employee complaint investigations',
      'Mediation and resolution facilitation',
      'Disciplinary documentation',
      'Termination guidance & compliance',
      'Sensitive case advisory (harassment, retaliation, etc.)',
    ],
  },
  {
    icon: <GraduationCap size={40} />,
    title: 'HR Training & Workshops',
    description: 'Build confident, compliant managers and teams.',
    features: [
      'HR Compliance 101 (for business owners)',
      'Manager Essentials: Hiring & Discipline',
      'Preventing Harassment & Discrimination',
      'Performance Review Best Practices',
      'Leadership Development',
      'Custom workshops (on-site or virtual)',
    ],
  },
  {
    icon: <Settings size={40} />,
    title: 'Technology & HR System Setup',
    description: 'Modernize your HR processes with the right tools.',
    features: [
      'HRIS and payroll system selection & implementation',
      'ATS (Applicant Tracking System) setup',
      'Employee self-service portals',
      'Digital file systems and automation workflows',
      'Data privacy & record retention compliance',
    ],
  },
  {
    icon: <Search size={40} />,
    title: 'Workplace Investigations',
    description: 'Protect your organization with objective third-party oversight.',
    features: [
      'Independent workplace investigations',
      'Documentation & reporting',
      'Corrective action and follow-up plan',
      'Legal collaboration support (if applicable)',
    ],
  },
  {
    icon: <Heart size={40} />,
    title: 'DEI & Company Culture Initiatives',
    description: 'Build inclusive, engaging workplaces that attract top talent.',
    features: [
      'DEI policy design',
      'Diversity hiring practices',
      'Inclusive leadership training',
      'Employee engagement surveys',
      'Culture improvement roadmap',
    ],
  },
  {
    icon: <Shield size={40} />,
    title: 'Fractional HR Director Services',
    description: 'Strategic HR leadership — without a full-time hire.',
    features: [
      'Perfect for startups or small businesses scaling quickly',
      'Companies undergoing M&A or restructuring',
      'Businesses needing interim HR leadership',
      'Strategic oversight and executive guidance',
    ],
  },
  {
    icon: <Wrench size={40} />,
    title: 'HR Project Support',
    description: 'When you just need extra hands on deck.',
    features: [
      'Merger/acquisition integration',
      'Handbook rollouts',
      'Employee engagement campaigns',
      'HRIS migration projects',
      'Large-scale recruiting efforts',
    ],
  },
  {
    icon: <Globe size={40} />,
    title: 'Multi-State & Remote Workforce Support',
    description: 'Compliance and consistency — across every state you hire in.',
    features: [
      'State-by-state compliance mapping',
      'Remote work policy creation',
      'Multi-state payroll coordination',
      'Labor law posting compliance',
    ],
  },
  {
    icon: <Award size={40} />,
    title: 'Executive & Leadership Coaching',
    description: 'Equip leaders to drive results through people.',
    features: [
      'One-on-one leadership development',
      'Manager communication training',
      'Change management coaching',
      'Emotional intelligence and conflict resolution sessions',
    ],
  },
  {
    icon: <Lightbulb size={40} />,
    title: 'Custom HR Solutions',
    description: 'We tailor every engagement to your business\'s size, goals, and industry.',
    features: [
      'HR Startup Kit (for new businesses)',
      'HR Compliance Overhaul (for companies scaling fast)',
      'Employee Retention Strategy Plan',
      'HR Technology + Policy Integration Bundle',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-tan-50 to-peach-50 animate-gradient-shift"></div>
      </div>

      {/* Hero Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} gradient centered>
              Comprehensive HR Services
            </Heading>
            <Subheading centered className="mt-6">
              From compliance audits to strategic planning, we provide full-spectrum HR consulting
              tailored to your business needs. Choose one-time projects or ongoing partnership.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.05}
                className="h-full"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Partner Section */}
      <Section padding="xl" background="glass">
        <Container size="lg">
          <GlassCard padding="xl">
            <div className="text-center mb-8">
              <Heading level={2} gradient centered>
                Why Partner With Us
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              {[
                'Fractional HR experts with decades of experience',
                'Scalable monthly plans or one-time projects',
                'Compliance-first approach with business practicality',
                'Dedicated consultant support',
                'Transparent pricing & no hidden fees',
              ].map((benefit, index) => (
                <div key={index} className="p-4">
                  <p className="text-sage-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}

