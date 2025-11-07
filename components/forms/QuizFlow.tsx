'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Users, Building, TrendingUp, AlertCircle } from 'lucide-react';
import { Button, Input, Select, Textarea } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const quizSchema = z.object({
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select industry'),
  hrChallenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
  urgency: z.string().min(1, 'Please select urgency level'),
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type QuizFormData = z.infer<typeof quizSchema>;

const QUIZ_STEPS = [
  {
    id: 1,
    title: 'Company Size',
    question: 'How many employees does your company have?',
    icon: <Users size={48} />,
  },
  {
    id: 2,
    title: 'Industry',
    question: 'What industry are you in?',
    icon: <Building size={48} />,
  },
  {
    id: 3,
    title: 'HR Challenges',
    question: 'What are your biggest HR challenges?',
    icon: <AlertCircle size={48} />,
  },
  {
    id: 4,
    title: 'Urgency',
    question: 'How soon do you need help?',
    icon: <TrendingUp size={48} />,
  },
  {
    id: 5,
    title: 'Your Information',
    question: 'Let\'s connect and discuss your needs',
    icon: <CheckCircle size={48} />,
  },
];

export const QuizFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
  });

  const companySize = watch('companySize');
  const industry = watch('industry');
  const urgency = watch('urgency');

  const toggleChallenge = (challenge: string) => {
    const updated = selectedChallenges.includes(challenge)
      ? selectedChallenges.filter(c => c !== challenge)
      : [...selectedChallenges, challenge];
    setSelectedChallenges(updated);
    setValue('hrChallenges', updated);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: QuizFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source_page: 'quiz',
          message: `Quiz Results - Company Size: ${data.companySize}, Industry: ${data.industry}, Challenges: ${data.hrChallenges.join(', ')}, Urgency: ${data.urgency}`,
        }),
      });

      if (response.ok) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle size={80} className="text-sage-600 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-sage-900 mb-4">Thank You!</h2>
        <p className="text-xl text-sage-700 mb-8">
          We've received your information and will contact you within 24 hours with a customized HR solution.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {QUIZ_STEPS.map((step) => (
            <div
              key={step.id}
              className={`flex-1 h-2 mx-1 rounded-full transition-all ${
                step.id <= currentStep ? 'bg-sage-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sage-700 font-medium">
          Step {currentStep} of {QUIZ_STEPS.length}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Company Size */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-sage-600 mb-4 flex justify-center">
                  {QUIZ_STEPS[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{QUIZ_STEPS[0].question}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setValue('companySize', size);
                      setTimeout(nextStep, 300);
                    }}
                    className={`p-6 rounded-glass border-2 transition-all ${
                      companySize === size
                        ? 'border-sage-600 bg-sage-100'
                        : 'border-gray-300 hover:border-sage-400 bg-white'
                    }`}
                  >
                    <p className="font-semibold text-sage-900">{size}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Industry */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-sage-600 mb-4 flex justify-center">
                  {QUIZ_STEPS[1].icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{QUIZ_STEPS[1].question}</h3>
              </div>

              <Select
                {...register('industry')}
                options={[
                  { value: 'technology', label: 'Technology' },
                  { value: 'healthcare', label: 'Healthcare' },
                  { value: 'finance', label: 'Finance' },
                  { value: 'retail', label: 'Retail' },
                  { value: 'manufacturing', label: 'Manufacturing' },
                  { value: 'professional-services', label: 'Professional Services' },
                  { value: 'education', label: 'Education' },
                  { value: 'nonprofit', label: 'Non-Profit' },
                  { value: 'other', label: 'Other' },
                ]}
                error={errors.industry?.message}
              />

              <div className="flex gap-4 mt-8">
                <Button type="button" variant="outline" onClick={prevStep} icon={ArrowLeft}>
                  Back
                </Button>
                <Button type="button" variant="primary" onClick={nextStep} icon={ArrowRight} iconPosition="right" disabled={!industry}>
                  Next
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: HR Challenges */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-sage-600 mb-4 flex justify-center">
                  {QUIZ_STEPS[2].icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{QUIZ_STEPS[2].question}</h3>
                <p className="text-sage-600">Select all that apply</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Compliance & Audits',
                  'Recruiting & Hiring',
                  'Employee Relations',
                  'Performance Management',
                  'Policy Development',
                  'Training & Development',
                  'Compensation & Benefits',
                  'Culture & Engagement',
                ].map((challenge) => (
                  <button
                    key={challenge}
                    type="button"
                    onClick={() => toggleChallenge(challenge)}
                    className={`p-4 rounded-glass border-2 transition-all text-left ${
                      selectedChallenges.includes(challenge)
                        ? 'border-sage-600 bg-sage-100'
                        : 'border-gray-300 hover:border-sage-400 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {selectedChallenges.includes(challenge) && (
                        <CheckCircle size={20} className="text-sage-600" />
                      )}
                      <p className="font-medium text-sage-900">{challenge}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Button type="button" variant="outline" onClick={prevStep} icon={ArrowLeft}>
                  Back
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  onClick={nextStep}
                  icon={ArrowRight}
                  iconPosition="right"
                  disabled={selectedChallenges.length === 0}
                >
                  Next
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Urgency */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-sage-600 mb-4 flex justify-center">
                  {QUIZ_STEPS[3].icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{QUIZ_STEPS[3].question}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: 'immediate', label: 'Immediate (This week)', color: 'peach' },
                  { value: 'soon', label: 'Soon (Within 2 weeks)', color: 'tan' },
                  { value: 'planning', label: 'Planning (Within a month)', color: 'sage' },
                  { value: 'exploring', label: 'Just exploring options', color: 'sage' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setValue('urgency', option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`p-6 rounded-glass border-2 transition-all text-left ${
                      urgency === option.value
                        ? `border-${option.color}-600 bg-${option.color}-100`
                        : 'border-gray-300 hover:border-sage-400 bg-white'
                    }`}
                  >
                    <p className="font-semibold text-sage-900 text-lg">{option.label}</p>
                  </button>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Button type="button" variant="outline" onClick={prevStep} icon={ArrowLeft}>
                  Back
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Contact Info */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-sage-600 mb-4 flex justify-center">
                  {QUIZ_STEPS[4].icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{QUIZ_STEPS[4].question}</h3>
                <p className="text-sage-600">We'll send you a customized solution</p>
              </div>

              <div className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  required
                  {...register('name')}
                  error={errors.name?.message}
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  required
                  {...register('email')}
                  error={errors.email?.message}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register('phone')}
                  error={errors.phone?.message}
                />

                <Textarea
                  label="Additional Information"
                  placeholder="Any specific concerns or questions?"
                  rows={4}
                  {...register('additionalInfo')}
                />
              </div>

              <div className="flex gap-4 mt-8">
                <Button type="button" variant="outline" onClick={prevStep} icon={ArrowLeft}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isSubmitting}
                  icon={CheckCircle}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Custom Solution'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

