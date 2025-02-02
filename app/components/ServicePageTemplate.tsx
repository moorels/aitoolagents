'use client';
import { motion } from 'framer-motion';
import ServiceMetricsChart from './ServiceMetricsChart';
import LiquidBackground from './LiquidBackground';
import React from 'react';

interface UseCase {
  title: string;
  description: string;
  impact: string;
}

interface ServicePageTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  useCases?: UseCase[];
}

export default function ServicePageTemplate({
  title,
  description,
  benefits,
  features,
  useCases = []
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <LiquidBackground />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-[#dfb406]">{title}</h1>
          <p className="text-lg mb-8">{description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#dfb406]">Key Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#dfb406] mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#dfb406]">Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#dfb406] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#dfb406]">Performance Metrics</h2>
            <ServiceMetricsChart service={title} />
          </motion.div>

          {useCases && useCases.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#dfb406]">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#dfb406]">{useCase.title}</h3>
                    <p className="mb-4 text-gray-300">{useCase.description}</p>
                    <div className="text-sm text-gray-400">
                      <strong className="text-[#dfb406]">Impact: </strong>
                      {useCase.impact}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
