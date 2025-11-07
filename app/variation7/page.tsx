'use client';

import { motion } from 'framer-motion';
import { Shield, Search, Scale, FileText, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Button, GlassCard, Card } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 7: Single Page Scroll + Employee Relations & Conflict Focus
// Smooth scroll sections, storytelling layout, crisis management and workplace investigations

export default function Variation7Page() {
  return (
    <div className="bg-white">
      {/* Hero - Crisis Management */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-tan-100 opacity-50"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center py-20"
          >
            <div className="inline-flex items-center gap-2 bg-peach-100 text-peach-800 px-6 py-3 rounded-full mb-8 font-semibold">
              <AlertTriangle size={20} />
              <span>Workplace Crisis? We're Here to Help</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sage-900 mb-6 leading-tight">
              Expert Employee Relations & Workplace Investigation Services
            </h1>

            <p className="text-xl md:text-2xl text-sage-700 mb-10 leading-relaxed">
              Confidential, objective, and thorough investigations that protect your business
              and restore workplace harmony.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services">
                <Button variant="primary" size="lg">
                  Explore Services
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Urgent Inquiry
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-sage-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-sage-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center bg-gradient-to-b from-white to-sage-50/50 py-20">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} gradient centered>
              Comprehensive Employee Relations Services
            </Heading>
            <p className="text-xl text-sage-700 mt-6 max-w-3xl mx-auto">
              From conflict mediation to sensitive investigations, we provide objective third-party support
              that protects your organization and employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Search size={40} />,
                title: 'Workplace Investigations',
                description: 'Independent, thorough investigations of harassment, discrimination, and policy violations.',
              },
              {
                icon: <Users size={40} />,
                title: 'Conflict Mediation',
                description: 'Professional facilitation to resolve disputes and restore productive relationships.',
              },
              {
                icon: <FileText size={40} />,
                title: 'Documentation & Reporting',
                description: 'Comprehensive investigation reports with findings and corrective action recommendations.',
              },
              {
                icon: <Scale size={40} />,
                title: 'Termination Guidance',
                description: 'Legally compliant separation processes that minimize risk and maintain dignity.',
              },
            ].map((service, index) => (
              <Card key={index} hover delay={index * 0.15} className="p-6 text-center h-full">
                <div className="text-sage-600 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-lg font-bold text-sage-900 mb-3">{service.title}</h3>
                <p className="text-sage-700 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Investigation Process */}
      <section id="process" className="min-h-screen flex items-center bg-white py-20">
        <Container>
          <Heading level={2} gradient centered className="mb-16">
            Our Investigation Process
          </Heading>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'Intake & Planning',
                description: 'We meet with stakeholders to understand the allegations, review policies, and develop an investigation plan.',
                icon: <Shield size={32} />,
              },
              {
                step: '02',
                title: 'Evidence Gathering',
                description: 'Conduct confidential interviews with complainants, respondents, and witnesses. Review relevant documentation and communications.',
                icon: <Search size={32} />,
              },
              {
                step: '03',
                title: 'Analysis & Findings',
                description: 'Evaluate evidence objectively, apply relevant policies and laws, and determine findings on a preponderance of evidence standard.',
                icon: <Scale size={32} />,
              },
              {
                step: '04',
                title: 'Report & Recommendations',
                description: 'Deliver comprehensive written report with findings, analysis, and recommended corrective actions.',
                icon: <FileText size={32} />,
              },
              {
                step: '05',
                title: 'Follow-Up Support',
                description: 'Assist with implementation of corrective actions and provide ongoing consultation as needed.',
                icon: <CheckCircle size={32} />,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mb-4">
                    {phase.icon}
                  </div>
                  <div className="text-4xl font-bold text-sage-200 text-center">{phase.step}</div>
                </div>
                <div className="flex-grow pt-4">
                  <h3 className="text-2xl font-bold text-sage-900 mb-3">{phase.title}</h3>
                  <p className="text-lg text-sage-700">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="min-h-screen flex items-center bg-sage-50/50 py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <Heading level={2} gradient centered className="mb-16">
              Why Organizations Trust Us with Sensitive Matters
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Objective Third-Party',
                  description: 'Independent investigations free from internal politics or bias, ensuring credibility and fairness.',
                },
                {
                  title: 'Legal Expertise',
                  description: 'Deep understanding of employment law, regulatory compliance, and best practices in workplace investigations.',
                },
                {
                  title: 'Confidential & Discreet',
                  description: 'Sensitive handling of all matters with strict confidentiality protocols and professional discretion.',
                },
                {
                  title: 'Thorough Documentation',
                  description: 'Comprehensive reports that withstand legal scrutiny and provide clear action paths forward.',
                },
                {
                  title: 'Trauma-Informed Approach',
                  description: 'Respectful, empathetic interviewing techniques that prioritize participant wellbeing.',
                },
                {
                  title: 'Fast Response Time',
                  description: 'Available for urgent matters with investigations typically completed within 2-3 weeks.',
                },
              ].map((reason, index) => (
                <GlassCard key={index} padding="lg" className="hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-sage-900 mb-3">{reason.title}</h3>
                  <p className="text-sage-700">{reason.description}</p>
                </GlassCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <GlassCard padding="xl" className="bg-sage-100/50">
                <p className="text-lg text-sage-800 italic">
                  <strong>Our commitment:</strong> Every investigation is conducted with professionalism, integrity,
                  and a focus on finding the truth while protecting all parties involved.
                </p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* When to Call */}
      <section id="when-to-call" className="min-h-screen flex items-center bg-white py-20">
        <Container>
          <Heading level={2} gradient centered className="mb-6">
            When to Seek Investigation Services
          </Heading>
          <p className="text-center text-xl text-sage-700 mb-16 max-w-3xl mx-auto">
            Don't wait until a small issue becomes a major liability. Contact us if you're facing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Harassment or discrimination complaints',
              'Workplace violence threats or concerns',
              'Policy violation allegations',
              'Retaliation claims',
              'Hostile work environment reports',
              'Theft or fraud suspicions',
              'Ethics violations',
              'Inappropriate conduct by leadership',
              'Bullying or intimidation concerns',
            ].map((situation, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-sage-50 rounded-lg border border-sage-200 hover:border-sage-400 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-peach-600 flex-shrink-0 mt-0.5" />
                <span className="text-sage-800 font-medium">{situation}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#contact">
              <Button variant="primary" size="lg">
                Request Urgent Consultation
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center bg-gradient-to-br from-sage-50 to-tan-50 py-20">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} gradient centered>
              Confidential Consultation
            </Heading>
            <p className="text-xl text-sage-700 mt-6">
              All inquiries are handled with strict confidentiality. Reach out to discuss your situation
              and learn how we can help.
            </p>
          </div>

          <GlassCard padding="xl" className="max-w-2xl mx-auto">
            <ContactForm sourcePage="variation7" />
          </GlassCard>

          <div className="mt-8 text-center text-sm text-sage-600">
            <p>
              <Shield className="inline w-4 h-4 mr-1" />
              All communications are confidential and protected
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

