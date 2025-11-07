'use client';

import { Shield, FileCheck, Scale, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Subheading, Button, GlassCard } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 3: Professional Classic + Compliance & Audits Focus
// Traditional layout, trust-focused messaging, for companies needing compliance overhaul

const COMPLIANCE_AREAS = [
  {
    icon: <FileCheck size={36} />,
    title: 'HR Policy Audits',
    description: 'Comprehensive review of all HR policies, procedures, and employee documentation.',
    features: ['Policy gap analysis', 'Handbook compliance', 'Documentation review'],
  },
  {
    icon: <Scale size={36} />,
    title: 'Wage & Hour Compliance',
    description: 'FLSA classification audits ensuring proper employee classification and pay practices.',
    features: ['Exempt vs non-exempt', 'Overtime calculations', 'Minimum wage compliance'],
  },
  {
    icon: <Shield size={36} />,
    title: 'Leave Administration',
    description: 'FMLA, ADA, and state leave law compliance to protect your business.',
    features: ['Leave tracking', 'Accommodation review', 'Return-to-work programs'],
  },
  {
    icon: <AlertTriangle size={36} />,
    title: 'Risk Assessment',
    description: 'Identify and mitigate HR-related risks before they become costly problems.',
    features: ['Exposure analysis', 'Corrective action plans', '90-day roadmap'],
  },
];

export default function Variation3Page() {
  return (
    <div className="bg-gray-50">
      {/* Classic Hero */}
      <Section padding="xl" className="bg-white border-b border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-md mb-6 text-sm font-semibold">
              <Shield size={16} />
              <span>Certified HR Compliance Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Protect Your Business with Expert HR Compliance
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive HR audits and compliance services that identify risks, ensure regulatory
              adherence, and provide peace of mind for your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#audit">
                <Button variant="primary" size="lg">
                  Request Free Audit
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Badge Section */}
      <Section padding="md" className="bg-sage-50 border-b border-sage-200">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            {[
              '20+ Years Experience',
              'PHR/SPHR Certified',
              '100% Compliance Record',
              'Multi-State Expertise',
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sage-800">
                <CheckCircle2 size={20} className="text-sage-600" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Compliance Services */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} centered className="font-serif">
              Comprehensive Compliance Services
            </Heading>
            <Subheading centered className="mt-4 max-w-2xl mx-auto">
              Protecting your business from costly violations and legal exposure
            </Subheading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COMPLIANCE_AREAS.map((area, index) => (
              <GlassCard key={index} padding="lg" className="hover:shadow-lg transition-shadow">
                <div className="text-sage-600 mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sage-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Compliance Matters */}
      <Section padding="xl" className="bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="font-serif mb-6">
                The Cost of Non-Compliance
              </Heading>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  HR compliance violations can result in devastating consequences for businesses of all sizes.
                  From FLSA misclassification to FMLA violations, the average settlement ranges from
                  <strong className="text-gray-900"> $50,000 to $500,000+</strong>.
                </p>
                <p className="text-lg">
                  Beyond financial penalties, non-compliance damages your reputation, disrupts operations,
                  and diverts resources from growth initiatives.
                </p>
                <p className="text-lg font-semibold text-sage-800">
                  Our audits identify and fix compliance gaps before they become costly problems.
                </p>
              </div>
            </div>

            <GlassCard padding="xl" className="bg-sage-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Our Audit</h3>
              <ul className="space-y-4">
                {[
                  'Complete HR policy and procedure review',
                  'Employee file and I-9 verification',
                  'Wage and hour classification analysis',
                  'Leave policy compliance check',
                  'Job description and offer letter review',
                  'Written risk assessment report',
                  'Customized 90-day action plan',
                  'Ongoing support and guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section padding="xl" className="bg-gray-50">
        <Container>
          <Heading level={2} centered className="font-serif mb-12">
            Our Audit Process
          </Heading>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                phase: 'Phase 1',
                title: 'Document Collection',
                description: 'We gather all relevant HR policies, handbooks, job descriptions, and employee files.',
                duration: '1-2 Days',
              },
              {
                phase: 'Phase 2',
                title: 'Comprehensive Review',
                description: 'Our certified HR professionals conduct a thorough analysis of all documentation against federal and state requirements.',
                duration: '3-5 Days',
              },
              {
                phase: 'Phase 3',
                title: 'Report & Recommendations',
                description: 'Receive a detailed report identifying compliance gaps and prioritized action items.',
                duration: '2-3 Days',
              },
              {
                phase: 'Phase 4',
                title: 'Implementation Support',
                description: 'We guide you through corrections with templates, policies, and ongoing consultation.',
                duration: 'Ongoing',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-sm text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">{step.phase}</p>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="xl" className="bg-sage-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Don't Wait for a Compliance Crisis
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your comprehensive HR audit today and protect your business from costly violations.
            </p>
            <Link href="#audit">
              <Button size="lg" className="bg-white text-sage-900 hover:bg-gray-100" icon={ArrowRight} iconPosition="right">
                Request Your Free Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="audit">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered className="font-serif">
              Schedule Your HR Compliance Audit
            </Heading>
            <p className="text-lg text-gray-700 mt-4">
              Fill out the form below and we'll contact you to discuss your compliance needs
            </p>
          </div>
          <GlassCard padding="xl" className="max-w-2xl mx-auto">
            <ContactForm sourcePage="variation3" />
          </GlassCard>
        </Container>
      </Section>
    </div>
  );
}

