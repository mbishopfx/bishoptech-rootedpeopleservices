'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Users,
  BookOpen,
  Target,
  UserPlus,
  TrendingUp,
  Shield,
  GraduationCap,
  Settings,
  Search,
  Heart,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Subheading, ServiceCard, Button } from '@/components/ui';

const FEATURED_SERVICES = [
  {
    icon: <ClipboardCheck size={32} />,
    title: 'HR Audits & Compliance',
    description: 'Comprehensive reviews to ensure your business is compliant, efficient, and risk-free.',
    features: ['Policy review', 'I-9 verification', 'FLSA compliance', 'Risk assessment'],
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Fractional HR Director',
    description: 'Strategic HR leadership without a full-time hire. Perfect for scaling businesses.',
    features: ['Strategic planning', 'Interim leadership', 'M&A support', 'HR oversight'],
  },
  {
    icon: <UserPlus size={32} />,
    title: 'Recruiting & Onboarding',
    description: 'Streamline how you attract, hire, and retain top talent with proven systems.',
    features: ['Job postings', 'Interview coordination', 'Onboarding materials', '90-day plans'],
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Employee Handbooks',
    description: 'Bulletproof handbooks that are compliant, clear, and customized for your business.',
    features: ['Custom policies', 'Federal & state compliant', 'Digital delivery', 'Annual updates'],
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'HR Training & Workshops',
    description: 'Build confident, compliant managers and teams through expert-led training.',
    features: ['Manager training', 'Compliance 101', 'Harassment prevention', 'Leadership dev'],
  },
  {
    icon: <Heart size={32} />,
    title: 'DEI & Company Culture',
    description: 'Build inclusive, engaging workplaces that attract and retain top talent.',
    features: ['DEI policy design', 'Diversity hiring', 'Engagement surveys', 'Culture roadmap'],
  },
];

export const ServicesOverview = () => {
  return (
    <Section padding="xl">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} gradient centered>
            Comprehensive HR Solutions
          </Heading>
          <Subheading centered className="mt-4 max-w-3xl mx-auto">
            From compliance audits to strategic planning, we provide full-spectrum HR support
            tailored to your business needs.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/services">
            <Button variant="primary" size="lg">
              View All 17 Services
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
};

