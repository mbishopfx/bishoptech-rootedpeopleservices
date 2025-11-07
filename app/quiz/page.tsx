'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';
import { Container, Section, Heading } from '@/components/ui';
import { QuizFlow } from '@/components/forms/QuizFlow';

export default function QuizPage() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Amber Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-gradient-amber"></div>
      </div>
      {/* Hero Section */}
      <Section padding="lg" className="border-b border-sage-200">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sage-600 text-white px-6 py-3 rounded-full mb-6 font-semibold">
              <Sparkles size={20} />
              <span>Get Your Custom HR Solution</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
              Find Your Perfect HR Solution in 60 Seconds
            </h1>

            <p className="text-xl text-sage-700 mb-8">
              Answer a few quick questions and we'll create a customized HR strategy just for you
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Target size={32} />,
                  title: 'Personalized',
                  description: 'Tailored to your specific needs',
                },
                {
                  icon: <Zap size={32} />,
                  title: 'Fast',
                  description: 'Takes less than 60 seconds',
                },
                {
                  icon: <Sparkles size={32} />,
                  title: 'Free',
                  description: 'No cost, no obligation',
                },
              ].map((benefit, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <div className="text-sage-600 mb-2 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-bold text-sage-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-sage-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Quiz Section */}
      <Section padding="xl">
        <Container>
          <QuizFlow />
        </Container>
      </Section>

      {/* Trust Indicators */}
      <Section padding="lg" className="bg-white/50">
        <Container>
          <div className="text-center">
            <p className="text-sage-700 font-medium mb-4">Trusted by 500+ businesses</p>
            <div className="flex flex-wrap justify-center gap-8 text-sage-600">
              <div>✓ 20+ Years Experience</div>
              <div>✓ Certified HR Professionals</div>
              <div>✓ 24-Hour Response Time</div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

