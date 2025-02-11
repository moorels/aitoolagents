'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { RiCustomerService2Line } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function CustomerServiceDemo() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <RiCustomerService2Line className="text-[#edce54] text-3xl sm:text-4xl mr-3" />
            <h1 className="text-2xl sm:text-4xl font-bold">Customer Service and Bookings Demo</h1>
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center bg-green-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-green-500/30 transition-colors w-full sm:w-auto"
            >
              <FaPlay className="mr-2" />
              Run Demo
            </button>
            <button
              onClick={() => router.push('/demos')}
              className="flex items-center justify-center bg-blue-500/20 text-[#edce54] px-4 py-2 rounded hover:bg-blue-500/30 transition-colors w-full sm:w-auto"
            >
              <IoArrowBack className="mr-2" />
              Back to Demos
            </button>
          </div>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
            <p className="text-gray-300 mb-4">
              Experience our AI-powered customer service and booking system that provides:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>24/7 customer support</li>
              <li>Customer booking and scheduling</li>
              <li>Intelligent query resolution</li>
              <li>Multi-language support</li>
              <li>Seamless ticket management</li>
              <li>Real-time response generation</li>
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
                <h3 className="text-xl font-semibold mb-3">Smart Responses</h3>
                <p className="text-gray-300">
                  AI-driven responses based on context and user history.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quick Resolution</h3>
                <p className="text-gray-300">
                  Efficient appointments with minimal wait times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
                <p className="text-gray-300">
                  Round-the-clock support for global customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
                <p className="text-gray-300">
                  Comprehensive insights into customer interactions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-lg shadow-xl w-full max-w-7xl h-[90vh] relative overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#edce54] hover:text-[#edce54]/80 transition-colors z-10"
              >
                <IoClose size={24} />
              </button>
              <div className="flex flex-col lg:flex-row h-full p-4 gap-4 overflow-y-auto">
                <div className="w-full lg:w-[750px]">
                  <h2 className="text-2xl font-semibold mb-2">Customer Service Dental Practice</h2>
                  <iframe
                    src="https://aiui.com.au/#/public-chat/CustomerService"
                    className="w-full h-[800px] rounded-lg border border-gray-700"
                    title="Customer Service Demo"
                  />
                </div>
                <div className="w-full lg:w-[400px] bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">How to Use</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>Welcome to our AI Customer Service Demo for a dental practice!</p>
                    <p>We have Created some patient records on our database for you to use in the demo.</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li className='text-[#edce54]'>Susan Rogers</li>
                      <li className='text-[#edce54]'>Jane Smith</li>
                      <li className='text-[#edce54]'>Michael Brown</li>                      
                    </ul>
                    <p>Use these names above to start a conversation.</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li className='text-[#edce54]'>Ask questions about dental services</li>
                      <li className='text-[#edce54]'>Inquire about appointments</li>
                      <li className='text-[#edce54]'>Get information about pricing</li>
                      <li className='text-[#edce54]'>Ask about emergency services</li>
                    </ul>
                    <p className="mt-4 text-sm">The AI will respond naturally and provide relevant information based on your queries.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
