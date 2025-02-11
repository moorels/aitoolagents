'use client';

import React from 'react';
import { motion } from "framer-motion";
import { AiOutlineTeam } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function MultiAgentDemo() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-[#edce54] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center">
            <AiOutlineTeam className="text-[#edce54] text-3xl sm:text-4xl mr-3" />
            <h1 className="text-2xl sm:text-4xl font-bold">Multi-Agent Collaboration</h1>
          </div>
          <button
            onClick={() => router.push('/demos')}
            className="flex items-center justify-center bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors w-full sm:w-auto"
          >
            <IoArrowBack className="mr-2" />
            Back to Demos
          </button>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Interactive Demo Coming Soon</h2>
            <p className="text-gray-300 mb-4">
              Experience our advanced multi-agent collaboration platform that showcases:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>Real-time agent coordination</li>
              <li>Task distribution and management</li>
              <li>Collaborative problem solving</li>
              <li>Resource optimization</li>
              <li>Performance monitoring</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Smart Coordination</h3>
                <p className="text-gray-300">
                  Intelligent task distribution and agent coordination.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Real-time Communication</h3>
                <p className="text-gray-300">
                  Seamless information sharing between AI agents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Resource Optimization</h3>
                <p className="text-gray-300">
                  Efficient allocation and utilization of resources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Comprehensive metrics on collaborative efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
