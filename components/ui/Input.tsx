'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sage-800 font-medium mb-2">
            {label}
            {props.required && <span className="text-peach-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`glass-input w-full ${error ? 'border-peach-400' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-peach-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sage-800 font-medium mb-2">
            {label}
            {props.required && <span className="text-peach-400 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`glass-input w-full min-h-[120px] resize-y ${error ? 'border-peach-400' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-peach-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sage-800 font-medium mb-2">
            {label}
            {props.required && <span className="text-peach-400 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`glass-input w-full ${error ? 'border-peach-400' : ''} ${className}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-peach-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

