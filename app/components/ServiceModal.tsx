'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIBenefitsChart from './AIBenefitsChart';

const chartTitleMapping: { [key: string]: "Virtual Customer Service Agents" | "AI-Powered Sales Assistants" | "AI-Driven Content Creation" | "Predictive Analytics & Forecasting" | "AI-Powered Lead Scoring & Qualification" | "Real-Time Translation Services" } = {
  'Customer Service': 'Virtual Customer Service Agents',
  'AI Agents': 'AI-Powered Sales Assistants',
  'Office Automation': 'AI-Driven Content Creation',
  'Retail Automation': 'Predictive Analytics & Forecasting',
  'Healthcare': 'Predictive Analytics & Forecasting',
  'Insurance': 'AI-Powered Lead Scoring & Qualification',
  'Property Management': 'AI-Driven Content Creation',
  'Customer Care': 'Virtual Customer Service Agents',
  'Custom AI Solutions': 'AI-Driven Content Creation',
  'AI Agentic Solutions': 'AI-Powered Sales Assistants',
  'AI Process Automation': 'Predictive Analytics & Forecasting',
  'AI Integrations': 'AI-Powered Lead Scoring & Qualification',
  'Security': 'AI-Powered Lead Scoring & Qualification',
  'Deployment': 'Real-Time Translation Services'
};

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    benefits: string[];
    implementation: string[];
    metrics: string[];
  };
}

export default function ServiceModal({ isOpen, onClose, title, content }: ServiceModalProps) {
  if (!isOpen) return null;

  const chartTitle = chartTitleMapping[title] || 'Virtual Customer Service Agents';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto mt-24 relative z-50 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#dfb406] scrollbar-track-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#dfb406] hover:text-[#efb406] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#dfb406] mb-4">{title}</h2>
            
            <div className="space-y-6">
              {/* Description */}
              <div>
                <p className="text-gray-300 leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Benefits Chart */}
              <div className="my-8">
                <h3 className="text-xl font-semibold text-[#dfb406] mb-3">Performance Metrics</h3>
                <div className="bg-gray-800 rounded-lg p-4">
                  <AIBenefitsChart service={chartTitle} />
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-[#dfb406] mb-3">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-2">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300">{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Implementation Steps */}
              <div>
                <h3 className="text-xl font-semibold text-[#dfb406] mb-3">Implementation Process</h3>
                <ul className="list-decimal list-inside space-y-2">
                  {content.implementation.map((step, index) => (
                    <li key={index} className="text-gray-300">{step}</li>
                  ))}
                </ul>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-xl font-semibold text-[#dfb406] mb-3">Success Metrics</h3>
                <ul className="list-disc list-inside space-y-2">
                  {content.metrics.map((metric, index) => (
                    <li key={index} className="text-gray-300">{metric}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
