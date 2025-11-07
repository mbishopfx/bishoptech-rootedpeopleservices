'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';
import { Container, Button, Input } from '@/components/ui';
import { useForm } from 'react-hook-form';

export default function QuickStartPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          message: `Quick Start Request - ${data.urgency}`,
          source_page: 'quickstart',
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Animated Amber Gradient Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 animate-gradient-amber"></div>
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center max-w-2xl mx-auto"
          >
            <CheckCircle size={80} className="text-sage-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-sage-900 mb-4">We're On It!</h2>
            <p className="text-xl text-sage-700 mb-8">
              A member of our team will call you within the next 2 hours during business hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sage-100 p-6 rounded-glass">
                <Phone size={32} className="text-sage-600 mx-auto mb-3" />
                <h3 className="font-bold text-sage-900 mb-2">Immediate Call</h3>
                <p className="text-sm text-sage-700">We'll call you directly</p>
              </div>
              <div className="bg-tan-100 p-6 rounded-glass">
                <Calendar size={32} className="text-tan-600 mx-auto mb-3" />
                <h3 className="font-bold text-sage-900 mb-2">Calendar Invite</h3>
                <p className="text-sm text-sage-700">Meeting scheduled</p>
              </div>
            </div>

            <p className="text-sage-600">
              Check your email for confirmation and next steps
            </p>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Amber Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-gradient-amber"></div>
      </div>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-peach-500 text-white px-6 py-3 rounded-full mb-6 font-bold">
                <Zap size={24} />
                <span>2-Hour Response Guarantee</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sage-900 mb-6">
                Get HR Help
                <span className="block text-peach-600">Right Now</span>
              </h1>

              <p className="text-2xl md:text-3xl text-sage-800 mb-8">
                Fill out 3 fields. Get a call within 2 hours.*
              </p>

              <p className="text-sm text-sage-600">*During business hours (M-F, 9am-6pm ET)</p>
            </motion.div>

            {/* Simple Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Your Name"
                  placeholder="John Doe"
                  required
                  {...register('name', { required: true })}
                  error={errors.name && 'Name is required'}
                  className="text-lg"
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  {...register('phone', { required: true })}
                  error={errors.phone && 'Phone is required'}
                  className="text-lg"
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  required
                  {...register('email', { required: true })}
                  error={errors.email && 'Email is required'}
                  className="text-lg"
                />

                {/* Urgency Selector */}
                <div>
                  <label className="block text-sage-800 font-medium mb-3">
                    How urgent is your need? <span className="text-peach-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'critical', label: '🔥 Critical - Need help today', color: 'peach' },
                      { value: 'urgent', label: '⚡ Urgent - This week', color: 'tan' },
                      { value: 'soon', label: '📅 Soon - Within 2 weeks', color: 'sage' },
                      { value: 'planning', label: '💭 Planning ahead', color: 'sage' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register('urgency', { required: true })}
                          className="peer sr-only"
                        />
                        <div className="p-4 rounded-glass border-2 border-gray-300 peer-checked:border-sage-600 peer-checked:bg-sage-100 hover:border-sage-400 transition-all">
                          <p className="font-medium text-sage-900">{option.label}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.urgency && (
                    <p className="text-peach-500 text-sm mt-1">Please select urgency level</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={ArrowRight}
                  iconPosition="right"
                  className="!text-xl !py-6 bg-gradient-to-r from-peach-500 to-tan-500 hover:from-peach-600 hover:to-tan-600"
                >
                  Get My Call Within 2 Hours
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-sage-200">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="font-bold text-sage-900">500+</p>
                    <p className="text-sage-600">Clients</p>
                  </div>
                  <div>
                    <p className="font-bold text-sage-900">20+</p>
                    <p className="text-sage-600">Years</p>
                  </div>
                  <div>
                    <p className="font-bold text-sage-900">4.9★</p>
                    <p className="text-sage-600">Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-sage-900 text-center mb-8">
                What Happens Next
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: '1', title: 'Instant Confirmation', desc: 'Email sent immediately' },
                  { step: '2', title: 'Quick Call', desc: 'Within 2 business hours' },
                  { step: '3', title: 'Custom Proposal', desc: 'Sent within 24 hours' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-sage-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-sage-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

