'use client';

import React from 'react';
import { motion } from "framer-motion";
import { MdBusinessCenter } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function PropertyManagementDemo() {
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
            <MdBusinessCenter className="text-[#edce54] text-3xl sm:text-4xl mr-3" />
            <h1 className="text-2xl sm:text-4xl font-bold">Smart Property Management</h1>
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
              Experience our AI-powered property management platform that handles:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>Automated property inspections</li>
              <li>Maintenance request processing</li>
              <li>Tenant communication management</li>
              <li>Rent collection automation</li>
              <li>Property performance analytics</li>
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
                <h3 className="text-xl font-semibold mb-3">Smart Inspections</h3>
                <p className="text-gray-300">
                  AI-powered property inspection and maintenance tracking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Automated Communications</h3>
                <p className="text-gray-300">
                  Intelligent handling of tenant inquiries and notifications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Financial Management</h3>
                <p className="text-gray-300">
                  Automated rent collection and payment processing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
                <p className="text-gray-300">
                  Real-time analytics on property performance and maintenance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
