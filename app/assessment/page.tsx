'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, TrendingUp, Users, FileText, Shield } from 'lucide-react';
import { Container, Section, Button, GlassCard } from '@/components/ui';

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 'handbook',
      icon: <FileText size={32} />,
      question: 'Do you have an up-to-date employee handbook?',
      options: [
        { value: 'yes-current', label: 'Yes, updated within last year', points: 3 },
        { value: 'yes-old', label: 'Yes, but it\'s outdated', points: 1 },
        { value: 'no', label: 'No employee handbook', points: 0 },
      ],
    },
    {
      id: 'compliance',
      icon: <Shield size={32} />,
      question: 'When was your last HR compliance audit?',
      options: [
        { value: 'recent', label: 'Within the last 6 months', points: 3 },
        { value: 'year', label: 'Within the last year', points: 2 },
        { value: 'never', label: 'Never had one', points: 0 },
      ],
    },
    {
      id: 'hiring',
      icon: <Users size={32} />,
      question: 'How structured is your hiring process?',
      options: [
        { value: 'very', label: 'Very structured with documented processes', points: 3 },
        { value: 'somewhat', label: 'Somewhat structured', points: 2 },
        { value: 'informal', label: 'Mostly informal', points: 0 },
      ],
    },
    {
      id: 'performance',
      icon: <TrendingUp size={32} />,
      question: 'Do you conduct regular performance reviews?',
      options: [
        { value: 'yes-formal', label: 'Yes, formal process in place', points: 3 },
        { value: 'yes-informal', label: 'Yes, but informally', points: 1 },
        { value: 'no', label: 'No regular reviews', points: 0 },
      ],
    },
    {
      id: 'issues',
      icon: <AlertTriangle size={32} />,
      question: 'How often do HR issues arise?',
      options: [
        { value: 'rarely', label: 'Rarely or never', points: 3 },
        { value: 'sometimes', label: 'Occasionally', points: 1 },
        { value: 'often', label: 'Frequently', points: 0 },
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: string, points: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      const option = q.options.find((o) => o.value === answer);
      if (option) total += option.points;
    });
    setScore(total);
    setShowResults(true);
  };

  const maxScore = questions.length * 3;
  const percentage = (score / maxScore) * 100;

  const getRecommendation = () => {
    if (percentage >= 80) {
      return {
        level: 'Excellent',
        color: 'sage',
        message: 'Your HR practices are strong! Consider advanced services like strategic planning or executive coaching to take things to the next level.',
        services: ['Strategic HR Planning', 'Executive Coaching', 'Advanced Training Programs'],
      };
    } else if (percentage >= 50) {
      return {
        level: 'Good',
        color: 'tan',
        message: 'You have a solid foundation, but there are areas for improvement. We recommend focusing on strengthening your compliance and documentation.',
        services: ['HR Audit', 'Policy Review & Updates', 'Compliance Training'],
      };
    } else {
      return {
        level: 'Needs Attention',
        color: 'peach',
        message: 'There are significant gaps in your HR practices that could expose your business to risk. We recommend a comprehensive HR audit and immediate action plan.',
        services: ['Comprehensive HR Audit', 'Employee Handbook Development', 'Compliance Overhaul', 'Fractional HR Director'],
      };
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <div className="min-h-screen relative py-12">
        {/* Animated Amber Gradient Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 animate-gradient-amber"></div>
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard padding="xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-sage-900 mb-4">Your HR Health Score</h2>
                <div className={`text-6xl font-bold text-${recommendation.color}-600 mb-2`}>
                  {score}/{maxScore}
                </div>
                <p className={`text-2xl font-semibold text-${recommendation.color}-700`}>
                  {recommendation.level}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`bg-${recommendation.color}-600 h-4 rounded-full`}
                  />
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-white/50 p-6 rounded-glass mb-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">Our Recommendation</h3>
                <p className="text-sage-700 mb-4">{recommendation.message}</p>

                <h4 className="font-semibold text-sage-800 mb-2">Recommended Services:</h4>
                <ul className="space-y-2">
                  {recommendation.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-sage-700">
                      <CheckCircle size={20} className={`text-${recommendation.color}-600`} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Your Custom Action Plan
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({});
                    setScore(0);
                  }}
                >
                  Retake Assessment
                </Button>
              </div>
            </GlassCard>
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
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
              HR Health Assessment
            </h1>
            <p className="text-xl text-sage-700">
              Discover your HR strengths and areas for improvement in 5 questions
            </p>
          </motion.div>

          <div className="space-y-8">
            {questions.map((q, index) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard padding="lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-sage-600">{q.icon}</div>
                    <div>
                      <p className="text-sm text-sage-600 mb-1">Question {index + 1} of {questions.length}</p>
                      <h3 className="text-xl font-bold text-sage-900">{q.question}</h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleAnswer(q.id, option.value, option.points)}
                        className={`w-full p-4 rounded-glass border-2 transition-all text-left ${
                          answers[q.id] === option.value
                            ? 'border-sage-600 bg-sage-100'
                            : 'border-gray-300 hover:border-sage-400 bg-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              disabled={Object.keys(answers).length !== questions.length}
              onClick={calculateScore}
            >
              See My Results
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

