'use client';

import Image from 'next/image';
import {
  Award,
  Target,
  Heart,
  CheckCircle,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Container, Section, Heading, Subheading, GlassCard, Card } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { JESSIKA_BIO } from '@/lib/types';

const VALUES = [
  {
    icon: <Award size={32} />,
    title: 'Expertise',
    description: 'Decades of HR experience across all industries and business sizes.',
  },
  {
    icon: <Target size={32} />,
    title: 'Results-Driven',
    description: 'Practical solutions that deliver measurable business impact.',
  },
  {
    icon: <Heart size={32} />,
    title: 'People-First',
    description: 'Building cultures where employees and businesses thrive together.',
  },
];

const CREDENTIALS = [
  'Certified HR Professional (PHR/SPHR)',
  'Decades of HR consulting experience',
  'Expertise in federal & multi-state compliance',
  'Workplace investigation specialist',
  'Strategic HR planning & implementation',
  'Training & leadership development',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Bio */}
      <Section padding="xl" background="gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <GlassCard padding="lg" className="relative">
                <div className="relative w-full aspect-[4/5] rounded-glass overflow-hidden">
                  <Image
                    src="/images/jessika-hanger.jpeg"
                    alt="Jessika Hanger - Founder of Rooted People Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/jessika-hanger-1a5b9011a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-glass bg-sage-500/80 text-white hover:bg-sage-600/90 transition-all"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href="mailto:contact@rootedpeopleservices.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-glass bg-tan-500/80 text-white hover:bg-tan-600/90 transition-all"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <Heading level={1} gradient>
                Meet Jessika Hanger
              </Heading>
              <Subheading className="mt-4 mb-6">
                Founder & HR Consultant
              </Subheading>

              <div className="space-y-6 text-sage-800">
                <p className="text-lg leading-relaxed">
                  {JESSIKA_BIO.main}
                </p>
                <p className="text-lg leading-relaxed">
                  {JESSIKA_BIO.approach}
                </p>
                <div className="glass-container p-6 border-l-4 border-sage-500">
                  <p className="text-lg font-semibold text-sage-900 italic">
                    {JESSIKA_BIO.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} gradient centered>
              Our Core Values
            </Heading>
            <Subheading centered className="mt-4">
              The principles that guide every client engagement
            </Subheading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <Card key={index} hover delay={index * 0.2} className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-800 mb-3">{value.title}</h3>
                <p className="text-sage-700">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials & Expertise */}
      <Section padding="xl" background="glass">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Credentials */}
            <GlassCard padding="xl">
              <Heading level={3} className="mb-6">
                Credentials & Expertise
              </Heading>
              <ul className="space-y-4">
                {CREDENTIALS.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sage-800 text-lg">{credential}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Approach */}
            <GlassCard padding="xl">
              <Heading level={3} className="mb-6">
                Our Approach
              </Heading>
              <div className="space-y-4 text-sage-800">
                <p className="text-lg leading-relaxed">
                  At Rooted People Services, we believe that strong HR practices are the
                  foundation of business success. We don't just check compliance boxes —
                  we build systems that support growth, protect your business, and create
                  environments where people excel.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you need a comprehensive audit, ongoing fractional HR support,
                  or help with a specific project, we bring clarity, strategy, and
                  actionable solutions to every engagement.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-sage-900">
                  Let's root your business in strong people practices and watch your
                  organization flourish.
                </p>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

