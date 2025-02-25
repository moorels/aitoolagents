'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Website5Demo() {
  const router = useRouter();

  return (
    <div className="w-full h-screen relative">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => router.back()}
        className="absolute top-4 right-4 mr-8 z-10 bg-gray-800 text-[#edce54] px-4 py-2 rounded-lg border border-blue-500/20 hover:bg-gray-700 transition-colors"
      >
        Back to Demos →
      </motion.button>
      <iframe 
        src="https://language-learning-demo.vercel.app"
        className="w-full h-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
