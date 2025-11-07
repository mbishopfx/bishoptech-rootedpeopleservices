'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, Button, GlassCard } from '@/components/ui';

export const CTASection = () => {
  return (
    <Section background="gradient" padding="xl">
      <Container size="lg">
        <GlassCard padding="xl" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6">
              Ready to Build a{' '}
              <span className="text-gradient">People-First Workplace?</span>
            </h2>
            <p className="text-lg md:text-xl text-sage-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your HR function into a competitive advantage.
              Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Get Started
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button variant="secondary" size="lg" icon={Phone} iconPosition="left">
                  Call Us
                </Button>
              </a>
              <a href="mailto:contact@rootedpeopleservices.com">
                <Button variant="outline" size="lg" icon={Mail} iconPosition="left">
                  Email Us
                </Button>
              </a>
            </div>
          </motion.div>
        </GlassCard>
      </Container>
    </Section>
  );
};

