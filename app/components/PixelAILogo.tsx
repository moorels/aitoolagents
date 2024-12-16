'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PixelAILogo = () => {
  // Pixel patterns for letters A and I
  const letterA = [
    [0,1,1,0],
    [1,0,0,1],
    [1,1,1,1],
    [1,0,0,1],
    [1,0,0,1]
  ];

  const letterI = [
    [1,1,1],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [1,1,1]
  ];

  const colors = [
    '#9CA3AF',  // gray-400
    '#4B5563',  // gray-600
    '#1F2937',  // gray-800
    '#111827',  // gray-900
    '#4B5563',  // gray-600
  ];

  const renderLetter = (pattern: number[][], xOffset: number = 0) => {
    return (
      <div className="grid gap-[2px]" style={{ gridTemplateRows: `repeat(${pattern.length}, 1fr)` }}>
        {pattern.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[2px]">
            {row.map((pixel, pixelIndex) => {
              if (!pixel) return <div key={pixelIndex} className="w-2 h-2" />;

              return (
                <motion.div
                  key={pixelIndex}
                  className="w-2 h-2"
                  initial={{ backgroundColor: colors[0] }}
                  animate={{
                    backgroundColor: colors,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (rowIndex + pixelIndex + xOffset) * 0.1,
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }}
                  style={{
                    boxShadow: '0 0 8px rgba(156, 163, 175, 0.6)'
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 blur-xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(156,163,175,0.2) 0%, rgba(75,85,99,0.1) 50%, transparent 100%)',
          zIndex: -1
        }}
      />

      {/* Logo container */}
      <motion.div 
        className="flex items-center justify-center gap-4 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {renderLetter(letterA, 0)}
        {renderLetter(letterI, 5)}

        {/* Circuit lines decoration */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M10,50 H90 M50,10 V90"
              stroke="url(#circuit-gradient)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9CA3AF">
                  <animate
                    attributeName="stop-color"
                    values="#9CA3AF; #4B5563; #1F2937; #9CA3AF"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#4B5563">
                  <animate
                    attributeName="stop-color"
                    values="#4B5563; #1F2937; #9CA3AF; #4B5563"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PixelAILogo;
