'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Website1Demo() {
  const router = useRouter();

  return (
    <div className="w-full h-screen relative">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-10 mt-24 mr-8 bg-black text-yellow-500 px-4 py-2 rounded-lg border border-4 border-yellow-500 hover:bg-gray-900 transition-colors"
      >
        Back to Demos →
      </motion.button>
      <iframe 
        src="https://datatest-wine.vercel.app"
        className="w-full h-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
