'use client';

import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FaRobot, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { MdBusinessCenter, MdStorefront } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoLanguage } from 'react-icons/io5';
import { RiCustomerService2Line } from 'react-icons/ri';
import ScrollToTop from '../components/ScrollToTop';

export default function DemoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-[#edce54] pt-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold mb-8">AI Tool Agents and Chatbots Demos</h1>
        
        <h2 className="text-3xl font-bold mb-6">Demo Website Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website1')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #2c5282 0%, #1a365d 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-white rounded-sm" />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
              <h3 className="text-xl font-semibold mb-4">AI Powered Car Mechanic</h3>
              <p className="text-gray-300">
                Booking System for a car mechanic workshop.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website2')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #d53f8c 0%, #702459 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-sm" style={{ transform: 'rotate(45deg)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <h3 className="text-xl font-semibold mb-4 relative z-10">AI Powered Gift Shop</h3>
            <p className="text-gray-300 relative z-10">
              Modern AI powered gift shop demo.
            </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website3')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #68d391 0%, #2f855a 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full transform rotate-45" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white" style={{ clipPath: 'circle(50% at 50% 50%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <h3 className="text-xl font-semibold mb-4 relative z-10">AI Powered Yoga Studio</h3>
            <p className="text-gray-300 relative z-10">
              Yoga Studio demo with AI.
            </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website4')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white rounded-full" />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <h3 className="text-xl font-semibold mb-4 relative z-10">AI Powered Dental Clinic</h3>
            <p className="text-gray-300 relative z-10">
              AI-powered dental clinic demo.
            </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website5')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #ed8936 0%, #c05621 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-white rounded-full" />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <h3 className="text-xl font-semibold mb-4 relative z-10">AI Powered Teaching Platform</h3>
            <p className="text-gray-300 relative z-10">
              Interactive teaching platform with AI.
            </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/demos/website6')}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 cursor-pointer relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #805ad5 0%, #553c9a 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-12 h-12 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white rounded-lg" />
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <h3 className="text-xl font-semibold mb-4 relative z-10">AI Powered Internal Office App</h3>
            <p className="text-gray-300 relative z-10">
              AI-powered office with tasks and workflows.
            </p>
            </div>
          </motion.div>
        </div>
        <h2 className="text-3xl font-bold mb-6">Chatbot Contextualization Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #2c5282 0%, #1a365d 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-white rounded-sm" />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <RiCustomerService2Line className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Customer Bookings Demo</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 mt-2 relative z-10">
              Experience how our AI agents handle customer inquiries and appointments in real-time.
            </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button 
                onClick={() => router.push('/demos/customer-service')}
                className="moving-gold-border bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors"
              >
                View Demo
              </button>
              <span className="text-[#edce54] font-semibold text-md">Live</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #d53f8c 0%, #702459 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-sm" style={{ transform: 'rotate(45deg)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <FaRobot className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Process Automation Demo</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              Watch our AI agents streamline and automate complex business processes.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/process-automation')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors  mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #68d391 0%, #2f855a 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full transform rotate-45" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white" style={{ clipPath: 'circle(50% at 50% 50%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <BiBrain className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">AI Integration Demo</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              See how seamlessly our AI agents integrate with existing business systems.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/ai-integration')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors  mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white rounded-full" />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <FaUserGraduate className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Interactive Training Assistant</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              Experience personalized employee training with our AI that adapts to individual learning styles and progress.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/interactive-training')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #ed8936 0%, #c05621 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-white rounded-full" />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <FaChartLine className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Skill Assessment AI</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              See how our AI evaluates employee skills, tracks progress, and provides targeted learning recommendations.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/skill-assessment')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #805ad5 0%, #553c9a 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-12 h-12 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white rounded-lg" />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <MdBusinessCenter className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Smart Property Management</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              See our AI agents handle property inspections, maintenance requests, and tenant communications automatically.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/property-management')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #2c5282 0%, #1a365d 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-white rounded-sm" />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <MdStorefront className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Retail Inventory Manager</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              Experience intelligent inventory optimization and automated stock replenishment in action.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/retail-inventory')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #d53f8c 0%, #702459 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-sm" style={{ transform: 'rotate(45deg)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <AiOutlineTeam className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Multi-Agent Collaboration</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              Witness multiple AI agents working together to solve complex business challenges in real-time.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/multi-agent')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #68d391 0%, #2f855a 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full transform rotate-45" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white" style={{ clipPath: 'circle(50% at 50% 50%)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
            </div>
            <div className="flex items-center mb-4 relative z-10">
              <IoLanguage className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Natural Language Assistant</h3>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 relative z-10">
            <p className="text-gray-300 mb-4 relative z-10">
              Try our advanced NLP-powered assistant that understands context, sentiment, and intent in multiple languages.
            </p>
            </div>
            <button 
              onClick={() => router.push('/demos/natural-language')}
              className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors mt-4"
            >
              View Demo
            </button>
          </motion.div>
        </div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
}
