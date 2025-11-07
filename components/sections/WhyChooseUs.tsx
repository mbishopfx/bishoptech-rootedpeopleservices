'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Zap, Heart, TrendingUp } from 'lucide-react';
import { Container, Section, Heading, Subheading, Card } from '@/components/ui';

const BENEFITS = [
  {
    icon: <Award size={32} />,
    title: 'Expert Guidance',
    description: 'Decades of combined HR experience across all industries and company sizes.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Compliance First',
    description: 'Stay protected with up-to-date knowledge of federal and state regulations.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Rapid Implementation',
    description: 'Get actionable solutions quickly without the overhead of a full-time hire.',
  },
  {
    icon: <Users size={32} />,
    title: 'Scalable Solutions',
    description: 'From startups to enterprises, our services grow with your business.',
  },
  {
    icon: <Heart size={32} />,
    title: 'People-First Approach',
    description: 'Build cultures where employees thrive and businesses flourish.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Strategic Impact',
    description: 'Transform HR from a cost center into a competitive advantage.',
  },
];

export const WhyChooseUs = () => {
  return (
    <Section padding="xl" background="glass">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} gradient centered>
            Why Choose Rooted People Services?
          </Heading>
          <Subheading centered className="mt-4 max-w-3xl mx-auto">
            We combine deep regulatory expertise with practical business acumen to deliver
            results that matter.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <Card key={index} hover delay={index * 0.1} className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-600 mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-sage-800 mb-3">{benefit.title}</h3>
              <p className="text-sage-700">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

