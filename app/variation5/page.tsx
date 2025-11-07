'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sprout, Sun, Smile, Leaf } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Button, Card } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 5: Warm Organic + Culture & DEI Initiatives
// Heavy use of greens/tans, nature-inspired elements, for companies focused on culture transformation

export default function Variation5Page() {
  return (
    <div className="bg-gradient-to-br from-sage-50 via-tan-50 to-sage-50">
      {/* Warm, Nature-Inspired Hero */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto py-12"
          >
            <div className="inline-flex items-center gap-2 bg-sage-200/50 text-sage-800 px-6 py-3 rounded-full mb-8 font-medium">
              <Sprout size={20} />
              <span>Grow a Thriving Workplace Culture</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sage-900 mb-6 leading-tight">
              Build Inclusive,
              <span className="block text-gradient mt-2">People-First Workplaces</span>
            </h1>

            <p className="text-xl md:text-2xl text-sage-700 mb-8 leading-relaxed">
              Transform your company culture with DEI initiatives, engagement strategies, and authentic
              values that attract and retain top talent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button variant="primary" size="lg" icon={Heart} iconPosition="left">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Values Section with Nature Icons */}
      <Section padding="xl">
        <Container>
          <Heading level={2} centered className="mb-12">
            Our Culture Transformation Approach
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf size={48} />,
                title: 'Rooted in Values',
                description: 'Define and embed authentic organizational values that guide decision-making.',
                color: 'sage',
              },
              {
                icon: <Sun size={48} />,
                title: 'Inclusive Growth',
                description: 'Create environments where diverse perspectives are valued and everyone can thrive.',
                color: 'tan',
              },
              {
                icon: <Sprout size={48} />,
                title: 'Sustainable Change',
                description: 'Build lasting cultural shifts through strategic planning and genuine commitment.',
                color: 'sage',
              },
            ].map((value, index) => (
              <Card key={index} hover delay={index * 0.15} className="p-8 text-center bg-white/60">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${value.color}-100 text-${value.color}-600 mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">{value.title}</h3>
                <p className="text-sage-700 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* DEI Services */}
      <Section padding="xl" className="bg-gradient-to-r from-sage-100/50 to-tan-100/50">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} centered>
              Comprehensive DEI & Culture Services
            </Heading>
            <p className="text-xl text-sage-700 mt-4 max-w-3xl mx-auto">
              From policy design to training programs, we help you build inclusive workplaces where everyone belongs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart size={32} />,
                title: 'DEI Strategy & Policy Design',
                description: 'Comprehensive DEI frameworks aligned with your mission and values.',
              },
              {
                icon: <Users size={32} />,
                title: 'Diversity Hiring Practices',
                description: 'Inclusive recruiting strategies that expand your talent pool.',
              },
              {
                icon: <Smile size={32} />,
                title: 'Employee Engagement Programs',
                description: 'Surveys, focus groups, and initiatives that boost morale and retention.',
              },
              {
                icon: <Sprout size={32} />,
                title: 'Inclusive Leadership Training',
                description: 'Equip leaders with skills to create psychologically safe environments.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex gap-6 items-start p-6 bg-white/70 rounded-glass-lg border border-sage-200/50 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 text-sage-600">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-sage-900 mb-2">{service.title}</h3>
                  <p className="text-sage-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact Testimonial */}
      <Section padding="xl">
        <Container size="md">
          <div className="glass-card p-8 md:p-12 text-center">
            <Sprout size={48} className="text-sage-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-sage-900 mb-6 leading-relaxed">
              "Our culture transformation wasn't just about policies—it was about creating a workplace
              where every voice matters and everyone can flourish."
            </blockquote>
            <p className="text-sage-700 font-semibold">— Jessika Hanger, Founder</p>
          </div>
        </Container>
      </Section>

      {/* Culture Journey */}
      <Section padding="xl" className="bg-white/40">
        <Container>
          <Heading level={2} centered className="mb-12">
            Your Culture Transformation Journey
          </Heading>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: 'Assess',
                title: 'Current State Analysis',
                description: 'We evaluate your existing culture, identify gaps, and uncover opportunities through surveys and stakeholder interviews.',
              },
              {
                step: 'Design',
                title: 'Strategic Roadmap',
                description: 'Together, we create a customized culture transformation plan with clear milestones and success metrics.',
              },
              {
                step: 'Implement',
                title: 'Launch & Training',
                description: 'Roll out new initiatives with comprehensive training, communication, and leadership support.',
              },
              {
                step: 'Sustain',
                title: 'Continuous Improvement',
                description: 'Monitor progress, gather feedback, and refine programs to ensure lasting cultural change.',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6 items-center"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-sage-500 to-tan-500 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-grow p-6 bg-white rounded-glass border border-sage-200">
                  <div className="text-sm uppercase tracking-wide text-sage-600 mb-2">{phase.step}</div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">{phase.title}</h3>
                  <p className="text-sage-700">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="contact">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered>
              Let's Grow Together
            </Heading>
            <p className="text-xl text-sage-700 mt-4">
              Ready to cultivate a culture where everyone thrives? Let's talk.
            </p>
          </div>
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto bg-white/70">
            <ContactForm sourcePage="variation5" />
          </div>
        </Container>
      </Section>
    </div>
  );
}

