'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle, User, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';
import { Container, Section, Button, Input, Textarea } from '@/components/ui';
import { useForm } from 'react-hook-form';

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const services = [
    'HR Audit & Compliance Review',
    'Fractional HR Director Services',
    'Employee Handbook Development',
    'Workplace Investigation',
    'Recruiting & Onboarding Support',
    'Training & Workshops',
    'Other / Not Sure',
  ];

  const timeSlots = [
    'Morning (9am - 12pm)',
    'Afternoon (12pm - 3pm)',
    'Late Afternoon (3pm - 6pm)',
  ];

  const onSubmit = async (data: any) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          service_interest: selectedService,
          message: `Consultation Request - Preferred Time: ${selectedTime}. ${data.message || ''}`,
          source_page: 'consultation',
        }),
      });
      setIsComplete(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-tan-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center max-w-2xl mx-auto"
          >
            <CheckCircle size={80} className="text-sage-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-sage-900 mb-4">Consultation Scheduled!</h2>
            <p className="text-xl text-sage-700 mb-6">
              We'll send you a calendar invite within the next hour. Check your email for confirmation.
            </p>
            <div className="bg-sage-100 p-6 rounded-glass">
              <p className="text-sage-800 font-semibold mb-2">What Happens Next:</p>
              <ul className="text-left text-sage-700 space-y-2">
                <li>✓ Calendar invite sent to your email</li>
                <li>✓ Preparation materials shared</li>
                <li>✓ 30-minute consultation call</li>
                <li>✓ Custom proposal within 24 hours</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative py-12">
      {/* Animated Amber Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-gradient-amber"></div>
      </div>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-sage-700">
              3 simple steps to get expert HR guidance
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 max-w-2xl mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    s <= step ? 'bg-sage-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-20 md:w-32 h-1 transition-all ${
                      s < step ? 'bg-sage-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-card p-8"
                >
                  <div className="text-center mb-8">
                    <Briefcase size={48} className="text-sage-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-sage-900 mb-2">
                      What service are you interested in?
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setSelectedService(service);
                          setTimeout(() => setStep(2), 300);
                        }}
                        className={`p-6 rounded-glass border-2 transition-all text-left ${
                          selectedService === service
                            ? 'border-sage-600 bg-sage-100'
                            : 'border-gray-300 hover:border-sage-400 bg-white'
                        }`}
                      >
                        <p className="font-semibold text-sage-900">{service}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-card p-8"
                >
                  <div className="text-center mb-8">
                    <Clock size={48} className="text-sage-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-sage-900 mb-2">
                      When works best for you?
                    </h2>
                    <p className="text-sage-600">We'll find a specific time that works</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto mb-6">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          setTimeout(() => setStep(3), 300);
                        }}
                        className={`p-6 rounded-glass border-2 transition-all ${
                          selectedTime === time
                            ? 'border-sage-600 bg-sage-100'
                            : 'border-gray-300 hover:border-sage-400 bg-white'
                        }`}
                      >
                        <p className="font-semibold text-sage-900 text-lg">{time}</p>
                      </button>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="mx-auto"
                  >
                    Back
                  </Button>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-card p-8"
                >
                  <div className="text-center mb-8">
                    <User size={48} className="text-sage-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-sage-900 mb-2">
                      Tell us about yourself
                    </h2>
                  </div>

                  <div className="space-y-6 max-w-xl mx-auto">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      required
                      {...register('name', { required: true })}
                      error={errors.name && 'Name is required'}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@company.com"
                      required
                      {...register('email', { required: true })}
                      error={errors.email && 'Email is required'}
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                      {...register('phone', { required: true })}
                      error={errors.phone && 'Phone is required'}
                    />

                    <Input
                      label="Company Name"
                      placeholder="Your Company"
                      {...register('company')}
                    />

                    <Textarea
                      label="What would you like to discuss?"
                      placeholder="Tell us about your HR needs..."
                      rows={4}
                      {...register('message')}
                    />

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={() => setStep(2)}>
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        icon={ArrowRight}
                        iconPosition="right"
                      >
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </Container>
    </div>
  );
}

