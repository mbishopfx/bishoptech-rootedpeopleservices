'use client';

import { Mail, Phone, Linkedin, MapPin, Clock } from 'lucide-react';
import { Container, Section, Heading, Subheading, GlassCard } from '@/components/ui';
import { ContactForm } from '@/components/forms';

const CONTACT_INFO = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    content: 'contact@rootedpeopleservices.com',
    link: 'mailto:contact@rootedpeopleservices.com',
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    content: '(555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: <Linkedin size={24} />,
    title: 'LinkedIn',
    content: 'Connect with Jessika',
    link: 'https://www.linkedin.com/in/jessika-hanger-1a5b9011a/',
  },
  {
    icon: <Clock size={24} />,
    title: 'Response Time',
    content: 'Within 24 hours',
    link: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gradient">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} gradient centered>
              Let's Build Your People-First Workplace
            </Heading>
            <Subheading centered className="mt-6">
              Schedule a free consultation to discuss your HR needs. We're here to help you
              build compliant, efficient, and thriving workplaces.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info Section */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard padding="xl">
                <Heading level={2} className="mb-6">
                  Send Us a Message
                </Heading>
                <ContactForm sourcePage="contact" />
              </GlassCard>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <GlassCard padding="lg">
                <Heading level={3} className="mb-6">
                  Contact Information
                </Heading>
                <div className="space-y-4">
                  {CONTACT_INFO.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sage-900">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sage-600 hover:text-sage-800 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sage-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Quick Links */}
              <GlassCard padding="lg">
                <Heading level={3} className="mb-6 text-xl">
                  Quick Links
                </Heading>
                <div className="space-y-3">
                  <a
                    href="/services"
                    className="block text-sage-700 hover:text-sage-900 hover:bg-white/30 px-4 py-2 rounded-glass transition-all"
                  >
                    View All Services
                  </a>
                  <a
                    href="/about"
                    className="block text-sage-700 hover:text-sage-900 hover:bg-white/30 px-4 py-2 rounded-glass transition-all"
                  >
                    About Jessika
                  </a>
                  <a
                    href="/#faq"
                    className="block text-sage-700 hover:text-sage-900 hover:bg-white/30 px-4 py-2 rounded-glass transition-all"
                  >
                    FAQs
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* What to Expect Section */}
      <Section padding="xl" background="glass">
        <Container size="lg">
          <div className="text-center mb-12">
            <Heading level={2} gradient centered>
              What to Expect
            </Heading>
            <Subheading centered className="mt-4">
              Our consultation process is designed to understand your needs and deliver results
            </Subheading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your business, challenges, and HR needs in a free 30-minute consultation.',
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'Receive a tailored proposal outlining services, timeline, and transparent pricing.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We get to work delivering solutions that transform your HR function.',
              },
            ].map((item, index) => (
              <GlassCard key={index} padding="lg" className="text-center">
                <div className="text-5xl font-bold text-sage-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">{item.title}</h3>
                <p className="text-sage-700">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

