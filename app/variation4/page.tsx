'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Target, Zap, Code, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Button, Card } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 4: Modern Tech Startup + Fractional HR Director
// Dark mode option, tech aesthetic, fast-paced, for startups needing strategic HR leadership

export default function Variation4Page() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Tech Hero with Dark Mode */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-900/20 via-gray-900 to-peach-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peach-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center py-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sage-500 to-peach-500 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              <Code size={16} />
              <span>Built for Startups</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your Fractional
              <span className="block text-gradient mt-2">HR Director</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic HR leadership without the full-time cost. Scale fast, hire smart, and build a
              people-first culture from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button variant="primary" size="lg">
                  Book Strategy Call
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  See Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section padding="xl" className="bg-gray-800">
        <Container>
          <Heading level={2} centered className="mb-12 text-white">
            What You Get
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={32} />,
                title: 'Strategic Planning',
                description: 'Workforce planning, org design, and HR roadmaps aligned with your growth goals.',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Scalable Systems',
                description: 'Build HR processes that grow with you—from 10 to 100+ employees.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Rapid Implementation',
                description: 'Fast turnaround on policies, handbooks, and compliance fixes.',
              },
              {
                icon: <Briefcase size={32} />,
                title: 'Executive Guidance',
                description: 'C-suite advisory on people strategy, culture, and leadership development.',
              },
              {
                icon: <Rocket size={32} />,
                title: 'Startup Expertise',
                description: 'We understand the fast pace and unique challenges of startup life.',
              },
              {
                icon: <Code size={32} />,
                title: 'Tech Stack Integration',
                description: 'Help selecting and implementing HRIS, ATS, and other HR tech.',
              },
            ].map((feature, index) => (
              <Card key={index} hover delay={index * 0.1} className="p-6 bg-gray-700/50 border border-gray-600 text-white">
                <div className="text-sage-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Tiers */}
      <Section padding="xl" className="bg-gray-900">
        <Container>
          <Heading level={2} centered className="mb-4 text-white">
            Flexible Engagement Models
          </Heading>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Choose the level of support that matches your stage and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Advisor',
                price: '$2,500',
                period: '/month',
                description: 'Strategic guidance when you need it',
                features: ['10 hours/month', 'Email support', 'Policy review', 'Quarterly planning'],
              },
              {
                name: 'Director',
                price: '$5,000',
                period: '/month',
                description: 'Ongoing HR leadership',
                features: ['20 hours/month', 'Priority support', 'Full HR oversight', 'Weekly check-ins', 'Recruiting support'],
                popular: true,
              },
              {
                name: 'Executive',
                price: 'Custom',
                period: '',
                description: 'Comprehensive HR partnership',
                features: ['40+ hours/month', '24/7 availability', 'C-suite advisory', 'M&A support', 'Custom solutions'],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`p-8 rounded-glass ${
                  tier.popular
                    ? 'bg-gradient-to-br from-sage-600 to-peach-600 transform scale-105 shadow-xl'
                    : 'bg-gray-800 border border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-300">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.popular ? 'secondary' : 'outline'} fullWidth>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="contact" className="bg-gray-800">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered className="text-white">
              Let's Talk Strategy
            </Heading>
            <p className="text-gray-300 text-lg mt-4">
              Schedule a call to discuss your HR needs and growth plans
            </p>
          </div>
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto bg-white/90 backdrop-blur-md">
            <ContactForm sourcePage="variation4" />
          </div>
        </Container>
      </Section>
    </div>
  );
}

