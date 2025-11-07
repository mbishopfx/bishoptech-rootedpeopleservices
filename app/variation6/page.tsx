'use client';

import { motion } from 'framer-motion';
import { Award, Crown, Star, TrendingUp, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Heading, Button, GlassCard } from '@/components/ui';
import { ContactForm } from '@/components/forms';

// Variation 6: Executive Premium + Executive Coaching & Training
// Luxurious feel, premium positioning, sophisticated, for leadership development and C-suite consulting

export default function Variation6Page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-sage-900 to-gray-900 text-white">
      {/* Premium Hero */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto py-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tan-400 to-peach-400 text-gray-900 px-6 py-2 rounded-full mb-8 font-semibold">
              <Crown size={20} />
              <span>Executive HR Consulting</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Elevate Your
              <span className="block bg-gradient-to-r from-tan-300 via-peach-300 to-tan-300 bg-clip-text text-transparent mt-2">
                Leadership Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Bespoke executive coaching and strategic HR consulting for C-suite leaders who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-gradient-to-r from-tan-500 to-peach-500 hover:from-tan-600 hover:to-peach-600 text-white">
                  Schedule Executive Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Premium Value Props */}
      <Section padding="xl" className="bg-gradient-to-b from-transparent to-gray-800/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={40} />,
                title: 'Elite Expertise',
                description: 'Work directly with seasoned HR executives who understand C-suite challenges.',
              },
              {
                icon: <Star size={40} />,
                title: 'Personalized Approach',
                description: 'Tailored coaching programs designed specifically for your leadership goals.',
              },
              {
                icon: <Crown size={40} />,
                title: 'Confidential Partnership',
                description: 'Discreet, trusted advisory that respects the sensitivity of executive matters.',
              },
            ].map((value, index) => (
              <GlassCard key={index} padding="xl" className="text-center bg-white/5 border-tan-500/20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-tan-500/20 to-peach-500/20 text-tan-300 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Executive Services */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} centered className="text-white mb-4">
              Executive Services Portfolio
            </Heading>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive leadership development and strategic HR consulting for high-performing executives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp size={36} />,
                title: 'One-on-One Executive Coaching',
                description: 'Personalized coaching sessions focused on leadership effectiveness, communication, and strategic thinking.',
                features: [
                  'Leadership assessment & development plan',
                  'Monthly 1:1 coaching sessions',
                  '360-degree feedback integration',
                  'Confidential executive mentorship',
                ],
              },
              {
                icon: <Users size={36} />,
                title: 'Team Leadership Development',
                description: 'Build high-performing leadership teams through targeted training and cohesive strategy.',
                features: [
                  'Executive team workshops',
                  'Strategic alignment sessions',
                  'Conflict resolution facilitation',
                  'Communication & influence training',
                ],
              },
              {
                icon: <Briefcase size={36} />,
                title: 'Change Management Coaching',
                description: 'Navigate organizational transitions with confidence and clear strategic direction.',
                features: [
                  'Change leadership strategies',
                  'Stakeholder management',
                  'Communication planning',
                  'Transition support',
                ],
              },
              {
                icon: <Star size={36} />,
                title: 'Emotional Intelligence Training',
                description: 'Develop self-awareness, empathy, and interpersonal skills that drive results.',
                features: [
                  'EQ assessment',
                  'Self-awareness development',
                  'Relationship management skills',
                  'Stress & resilience coaching',
                ],
              },
            ].map((service, index) => (
              <GlassCard key={index} padding="xl" className="bg-white/5 border border-tan-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-tan-400">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 border-t border-gray-700 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-tan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Premium Testimonial */}
      <Section padding="xl" className="bg-gradient-to-r from-tan-900/20 to-peach-900/20">
        <Container size="lg">
          <div className="glass-card p-12 md:p-16 text-center bg-white/5 border border-tan-500/20">
            <Crown size={56} className="text-tan-400 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-8 leading-relaxed">
              "True leadership isn't about having all the answers—it's about asking the right questions,
              building the right teams, and creating environments where excellence becomes the standard."
            </blockquote>
            <p className="text-tan-300 text-lg font-semibold">— Executive Leadership Philosophy</p>
          </div>
        </Container>
      </Section>

      {/* Investment Tiers */}
      <Section padding="xl">
        <Container>
          <Heading level={2} centered className="mb-4 text-white">
            Investment Levels
          </Heading>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Premium executive coaching packages tailored to your development goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Foundation',
                investment: '$10,000',
                period: '/quarter',
                description: 'Essential executive coaching',
                features: ['6 coaching sessions', 'Leadership assessment', 'Development plan', 'Email support'],
              },
              {
                name: 'Mastery',
                investment: '$25,000',
                period: '/quarter',
                description: 'Comprehensive leadership development',
                features: ['12 coaching sessions', '360 feedback', 'Team workshops', 'Priority access', 'Custom curriculum'],
                featured: true,
              },
              {
                name: 'Transformation',
                investment: 'Custom',
                period: '',
                description: 'Full executive partnership',
                features: ['Unlimited coaching', 'Board advisory', 'Crisis support', 'On-site sessions', 'Executive team development'],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`p-8 rounded-glass-lg ${
                  tier.featured
                    ? 'bg-gradient-to-br from-tan-600/30 to-peach-600/30 border-2 border-tan-400/50 transform scale-105'
                    : 'bg-white/5 border border-gray-700'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-tan-300">{tier.investment}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-tan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? 'primary' : 'outline'}
                  fullWidth
                  className={tier.featured ? 'bg-gradient-to-r from-tan-500 to-peach-500' : ''}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" id="contact" className="bg-gray-800/50">
        <Container size="md">
          <div className="text-center mb-12">
            <Heading level={2} centered className="text-white">
              Begin Your Leadership Journey
            </Heading>
            <p className="text-gray-300 text-lg mt-4">
              Schedule a confidential consultation to discuss your executive development goals
            </p>
          </div>
          <GlassCard padding="xl" className="max-w-2xl mx-auto bg-white/5">
            <ContactForm sourcePage="variation6" />
          </GlassCard>
        </Container>
      </Section>
    </div>
  );
}

