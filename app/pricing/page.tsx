'use client';

import { motion } from 'framer-motion';
import PricingCalculator from '../components/PricingCalculator';
import MovingWaves from '../components/MovingWaves';
import Link from 'next/link';
import ScrollToTop from '../components/ScrollToTop';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  category: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic Starter",
    price: "$299/mo",
    description: "Essential AI automation for small businesses",
    category: "Small Business",
    features: [
      "1 AI Agent",
      "Basic Customer Service Bot",
      "3 Custom Workflows",
      "Email Support",
      "Basic Analytics Dashboard",
      "1 Integration Channel",
      "Standard API Access",
      "Community Support"
    ]
  },
  {
    name: "Starter Plus",
    price: "$499/mo",
    description: "Enhanced features for growing businesses",
    category: "Small Business",
    features: [
      "2 AI Agents",
      "Advanced Customer Service Bot",
      "5 Custom Workflows",
      "8/5 Support",
      "Enhanced Analytics",
      "2 Integration Channels",
      "Premium API Access",
      "Knowledge Base Access",
      "Basic Training Module",
      "Monthly Performance Report"
    ]
  },
  {
    name: "Professional",
    price: "$999/mo",
    description: "Comprehensive solution for medium businesses",
    category: "Medium Business",
    features: [
      "5 AI Agents",
      "Intelligent Customer Service Suite",
      "15 Custom Workflows",
      "24/7 Support",
      "Advanced Analytics & Reporting",
      "3 Integration Channels",
      "Full API Access",
      "Employee Training Module",
      "Custom AI Solutions",
      "Quarterly Strategy Review",
      "Dedicated Support Manager",
      "SLA Guarantees"
    ],
    recommended: true
  },
  {
    name: "Business Premium",
    price: "$1,999/mo",
    description: "Advanced features for larger organizations",
    category: "Medium Business",
    features: [
      "10 AI Agents",
      "Full Customer Service Suite",
      "30 Custom Workflows",
      "24/7 Priority Support",
      "Enterprise Analytics",
      "5 Integration Channels",
      "Enterprise API Access",
      "Advanced Training Platform",
      "Custom AI Development",
      "Monthly Strategy Review",
      "Dedicated Success Team",
      "Custom SLA Options",
      "Basic Security Package",
      "Deployment Assistance"
    ]
  },
  {
    name: "Enterprise Starter",
    price: "From $4,999/mo",
    description: "Enterprise-grade automation solutions",
    category: "Enterprise",
    features: [
      "25 AI Agents",
      "Enterprise Service Suite",
      "Unlimited Workflows",
      "24/7 VIP Support",
      "Custom Analytics Solutions",
      "10 Integration Channels",
      "Custom API Development",
      "Enterprise Training Platform",
      "Dedicated AI Development",
      "Weekly Strategy Sessions",
      "Dedicated Success Team",
      "Custom SLA & Support",
      "Advanced Security Package",
      "On-premises Deployment",
      "Compliance Management",
      "Disaster Recovery"
    ]
  },
  {
    name: "Enterprise Plus",
    price: "Custom",
    description: "Full-scale custom enterprise solution",
    category: "Enterprise",
    features: [
      "Unlimited AI Agents",
      "Custom Service Solutions",
      "Custom Workflow Engine",
      "24/7 Executive Support",
      "Custom Analytics Platform",
      "Unlimited Integrations",
      "Custom Development Team",
      "Custom Training Solutions",
      "Dedicated AI Research",
      "Executive Strategy Planning",
      "Multiple Success Teams",
      "Custom Support Structure",
      "Enterprise Security Suite",
      "Global Deployment Options",
      "Custom Compliance Solutions",
      "High Availability Setup",
      "Source Code Access",
      "White Label Options"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-[#c49d17] relative">
      <MovingWaves />
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold mb-4 text-[#c49d17]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tailored Solutions for Your Business
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We understand that every business is unique. Our pricing is customized to ensure 
              you only pay for the features and capabilities that add value to your organization.
            </motion.p>
            <motion.div
              className="text-lg text-[#c49d17] max-w-2xl mx-auto p-4 border border-[#c49d17]/20 rounded-lg bg-gray-900/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="font-semibold mb-2">First-Time Setup Fee: $299</p>
              <p className="text-white/90">Includes initial implementation and configuration of your selected features with your current systems and data.</p>
              <p className="text-white/90 mt-2">All future modifications and feature additions <span className="text-[#c49d17] font-semibold">have no setup costs</span>.</p>
              <p className="text-white/90">Pricing estimates below are provided for small businesses of 1 to 10 employees.</p>
              <p className="text-white/90">For larger businesses, contact us for a customized quote.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl border border-[#c49d17]/20"
          >
            <PricingCalculator />
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#c49d17]">Need a More Specialized Solution?</h2>
            <p className="text-gray-400 mb-2">
              Contact our team for a personalized consultation and custom pricing tailored to your specific requirements.
            </p>
            <p className="text-gray-400 mb-6">
              Remember, after the initial setup fee, all modifications and feature additions are included at no extra cost!
            </p>
            <Link href="/contact" className="inline-block bg-[#c49d17] text-black px-8 py-3 rounded-lg hover:bg-[#dfb406] transition-colors font-medium">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
