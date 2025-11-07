'use client';

import { ArrowRight, Shield, Users, FileText, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Subheading, Button, GlassCard, ServiceCard } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 1: Minimalist Corporate + General HR Services
// Clean lines, lots of white space, corporate trust, full service overview

const CORE_SERVICES = [
  {
    icon: <Shield size={40} />,
    title: 'Compliance & Audits',
    description: 'Comprehensive HR audits ensuring your business meets all regulatory requirements.',
    features: ['Policy reviews', 'I-9 verification', 'FLSA compliance'],
  },
  {
    icon: <Users size={40} />,
    title: 'Employee Relations',
    description: 'Professional conflict resolution and workplace investigation services.',
    features: ['Mediation', 'Investigations', 'Documentation'],
  },
  {
    icon: <FileText size={40} />,
    title: 'Policy Development',
    description: 'Custom employee handbooks and HR policies tailored to your organization.',
    features: ['Handbooks', 'Remote work policies', 'Annual updates'],
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Strategic HR',
    description: 'Align your people strategy with business goals for sustainable growth.',
    features: ['Workforce planning', 'Compensation strategy', 'KPI tracking'],
  },
];

export default function Variation1Page() {
  return (
    <div className="bg-white">
      {/* Minimalist Hero */}
      <Section padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6 leading-tight">
              Professional HR Solutions for Established Businesses
            </h1>
            <p className="text-xl text-sage-700 mb-8 leading-relaxed">
              Comprehensive human resources consulting that ensures compliance,
              reduces risk, and drives organizational excellence.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#contact">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Indicators */}
      <Section padding="md" className="border-y border-sage-200 bg-sage-50/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '500+', label: 'Clients Served' },
              { number: '100%', label: 'Compliance Rate' },
              { number: '24hr', label: 'Response Time' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-sage-800">{stat.number}</div>
                <div className="text-sm text-sage-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} centered>
              Complete HR Service Portfolio
            </Heading>
            <Subheading centered className="mt-4 max-w-2xl mx-auto">
              End-to-end HR support designed for organizations that value compliance and excellence
            </Subheading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All 17 Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section padding="xl" className="bg-sage-50/30">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <Heading level={2} centered className="mb-12">
              Why Leading Organizations Choose Us
            </Heading>
            <div className="space-y-6">
              {[
                {
                  title: 'Proven Expertise',
                  description: 'Decades of experience serving Fortune 500 companies and growing enterprises across all industries.',
                },
                {
                  title: 'Compliance-First Approach',
                  description: 'Stay ahead of regulatory changes with proactive guidance from certified HR professionals.',
                },
                {
                  title: 'Scalable Solutions',
                  description: 'From one-time audits to ongoing retainer services, we adapt to your business needs.',
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Clear, upfront pricing with no hidden fees. Know exactly what you\'re investing in.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-lg border border-sage-200">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-sage-900 mb-2">{item.title}</h3>
                    <p className="text-sage-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="contact">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered>
              Let's Discuss Your HR Needs
            </Heading>
            <Subheading centered className="mt-4">
              Schedule a complimentary consultation with our HR experts
            </Subheading>
          </div>
          <GlassCard padding="xl" className="max-w-2xl mx-auto">
            <ContactForm sourcePage="variation1" />
          </GlassCard>
        </Container>
      </Section>
    </div>
  );
}

