'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

interface HeroProps {
  videoSrc?: string;
  title: string;
  subtitle: string;
  highlights?: string[];
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export const Hero = ({
  videoSrc,
  title,
  subtitle,
  highlights = [],
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA = { text: 'Learn More', href: '/services' },
}: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sage-100 via-tan-100 to-peach-100">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-tan-100 to-peach-100" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 mb-6"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-sage-700 mb-8"
            >
              {subtitle}
            </motion.p>

            {highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 space-y-3"
              >
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sage-800">{highlight}</span>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={primaryCTA.href}>
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  {primaryCTA.text}
                </Button>
              </Link>
              <Link href={secondaryCTA.href}>
                <Button variant="outline" size="lg">
                  {secondaryCTA.text}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

