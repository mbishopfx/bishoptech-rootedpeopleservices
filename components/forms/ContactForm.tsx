'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Input, Textarea, Select } from '@/components/ui';
import { SERVICE_CATEGORIES } from '@/lib/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service_interest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  sourcePage?: string;
}

export const ContactForm = ({ sourcePage = 'contact' }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source_page: sourcePage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="glass-container p-4 border-l-4 border-sage-500 flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sage-900">Thank you for reaching out!</p>
            <p className="text-sage-700 text-sm mt-1">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="glass-container p-4 border-l-4 border-peach-500 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-peach-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-peach-900">Oops! Something went wrong</p>
            <p className="text-peach-700 text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Input
          label="Company Name"
          placeholder="Your Company"
          {...register('company')}
          error={errors.company?.message}
        />
      </div>

      <Select
        label="Service Interest"
        options={SERVICE_CATEGORIES.map((service) => ({
          value: service,
          label: service,
        }))}
        {...register('service_interest')}
        error={errors.service_interest?.message}
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your HR needs..."
        required
        rows={6}
        {...register('message')}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        icon={Send}
        iconPosition="right"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

