'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Button, Card } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 2: Bold Creative + Recruiting & Onboarding Focus
// Vibrant colors, dynamic animations, modern, targets companies hiring/scaling teams

const RECRUITING_SERVICES = [
  {
    icon: <Target size={48} />,
    title: 'Strategic Sourcing',
    description: 'Find the right talent with targeted job postings and candidate sourcing strategies.',
  },
  {
    icon: <Users size={48} />,
    title: 'Interview Excellence',
    description: 'Structured interview processes that identify top performers and cultural fits.',
  },
  {
    icon: <Rocket size={48} />,
    title: 'Onboarding Programs',
    description: '30/60/90-day plans that accelerate new hire productivity and engagement.',
  },
  {
    icon: <Zap size={48} />,
    title: 'Retention Strategy',
    description: 'Keep your best people with proven engagement and development systems.',
  },
];

export default function Variation2Page() {
  return (
    <div className="overflow-hidden">
      {/* Bold Hero with Gradient */}
      <Section padding="xl" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-100 via-tan-100 to-sage-100 opacity-60"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-peach-500 text-white px-6 py-2 rounded-full mb-8 font-semibold"
            >
              <Rocket size={20} />
              <span>Hiring? We've Got You Covered</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Scale Your Team</span>
              <br />
              <span className="text-sage-900">With Confidence</span>
            </h1>

            <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-3xl mx-auto">
              Expert recruiting and onboarding services that help fast-growing companies
              hire smarter, faster, and better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Let's Talk Hiring
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  See How We Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Dynamic Stats */}
      <Section padding="lg" className="bg-sage-900 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '95%', label: 'Retention Rate', color: 'text-peach-300' },
              { number: '30', label: 'Days to Hire', color: 'text-tan-300' },
              { number: '200+', label: 'Positions Filled', color: 'text-sage-300' },
              { number: '4.9', label: 'Client Rating', color: 'text-peach-300' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services with Bold Cards */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} gradient centered>
              Your Complete Hiring Solution
            </Heading>
            <p className="text-xl text-sage-700 mt-4">
              From sourcing to onboarding, we handle the entire talent acquisition process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {RECRUITING_SERVICES.map((service, index) => (
              <Card key={index} hover delay={index * 0.15} className="p-8 border-2 border-peach-200 hover:border-peach-400">
                <div className="text-peach-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-3">{service.title}</h3>
                <p className="text-sage-700 text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Timeline */}
      <Section padding="xl" className="bg-gradient-to-br from-sage-50 to-tan-50">
        <Container>
          <Heading level={2} gradient centered className="mb-16">
            Our Proven Process
          </Heading>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '1',
                title: 'Define Your Needs',
                description: 'We analyze your business goals and create detailed job profiles.',
              },
              {
                step: '2',
                title: 'Source Top Talent',
                description: 'Strategic outreach across multiple channels to find the best candidates.',
              },
              {
                step: '3',
                title: 'Streamline Interviews',
                description: 'Coordinated scheduling and structured interview frameworks.',
              },
              {
                step: '4',
                title: 'Seamless Onboarding',
                description: 'Comprehensive orientation programs that set new hires up for success.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-peach-500 to-tan-500 text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-sage-700">{item.description}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-sage-500 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bold CTA */}
      <Section padding="xl" className="bg-gradient-to-r from-sage-600 to-peach-500 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a hiring strategy that brings you the talent you need to scale.
            </p>
            <Link href="#contact">
              <Button variant="secondary" size="lg" icon={Rocket} iconPosition="right" className="bg-white text-sage-900 hover:bg-gray-100">
                Start Hiring Smarter
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="contact">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered>
              Let's Talk About Your Hiring Needs
            </Heading>
            <p className="text-xl text-sage-700 mt-4">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </div>
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
            <ContactForm sourcePage="variation2" />
          </div>
        </Container>
      </Section>
    </div>
  );
}

