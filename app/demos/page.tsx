'use client';

import React from 'react';
import { motion } from "framer-motion";
import { FaRobot, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { MdBusinessCenter, MdStorefront } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoLanguage } from 'react-icons/io5';
import { RiCustomerService2Line } from 'react-icons/ri';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-[#edce54] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold mb-8">AI Tool Agents and Chatbots Demos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Demo cards will be added here */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <RiCustomerService2Line className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Customer Service Demo</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience how our AI agents handle customer inquiries and support tickets in real-time.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <FaRobot className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Process Automation Demo</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Watch our AI agents streamline and automate complex business processes.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <BiBrain className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">AI Integration Demo</h3>
            </div>
            <p className="text-gray-300 mb-4">
              See how seamlessly our AI agents integrate with existing business systems.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <FaUserGraduate className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Interactive Training Assistant</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience personalized employee training with our AI that adapts to individual learning styles and progress.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <FaChartLine className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Skill Assessment AI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              See how our AI evaluates employee skills, tracks progress, and provides targeted learning recommendations.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <MdBusinessCenter className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Smart Property Management</h3>
            </div>
            <p className="text-gray-300 mb-4">
              See our AI agents handle property inspections, maintenance requests, and tenant communications automatically.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <MdStorefront className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Retail Inventory Manager</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience intelligent inventory optimization and automated stock replenishment in action.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <AiOutlineTeam className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Multi-Agent Collaboration</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Witness multiple AI agents working together to solve complex business challenges in real-time.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center mb-4">
              <IoLanguage className="text-[#edce54] text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Natural Language Assistant</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Try our advanced NLP-powered assistant that understands context, sentiment, and intent in multiple languages.
            </p>
            <button className="bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
