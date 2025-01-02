'use client'
import React from 'react';
import { motion } from 'framer-motion';

const PixelTitle = () => {
  const letters = {
    A: [
      [0,1,1,0],
      [1,0,0,1],
      [1,1,1,1],
      [1,0,0,1],
      [1,0,0,1]
    ],
    I: [
      [1,1,1],
      [0,1,0],
      [0,1,0],
      [0,1,0],
      [1,1,1]
    ],
    T: [
      [1,1,1],
      [0,1,0],
      [0,1,0],
      [0,1,0],
      [0,1,0]
    ],
    O: [
      [0,1,1,0],
      [1,0,0,1],
      [1,0,0,1],
      [1,0,0,1],
      [0,1,1,0]
    ],
    L: [
      [1,0,0],
      [1,0,0],
      [1,0,0],
      [1,0,0],
      [1,1,1]
    ],
    G: [
      [0,1,1,0],
      [1,0,0,0],
      [1,0,1,1],
      [1,0,0,1],
      [0,1,1,0]
    ],
    E: [
      [1,1,1],
      [1,0,0],
      [1,1,0],
      [1,0,0],
      [1,1,1]
    ],
    N: [
      [1,0,0,1],
      [1,1,0,1],
      [1,0,1,1],
      [1,0,0,1],
      [1,0,0,1]
    ],
    S: [
      [0,1,1],
      [1,0,0],
      [0,1,0],
      [0,0,1],
      [1,1,0]
    ]
  };

  const colors = [
    '#ffc600',  // gray-900
    '#ff9c00',  // gray-400
   
    
  ];

  const renderLetter = (pattern: number[][], xOffset: number = 0) => {
    return (
      <div className="grid gap-[0.5px]" style={{ gridTemplateRows: `repeat(${pattern.length}, 1fr)` }}>
        {pattern.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[0.5px]">
            {row.map((pixel, pixelIndex) => {
              if (!pixel) return <div key={pixelIndex} className="w-[1px] h-[1px]" />;

              return (
                <motion.div
                  key={pixelIndex}
                  className="w-[1px] h-[1px]"
                  initial={{ backgroundColor: colors[0] }}
                  animate={{
                    backgroundColor: colors,
                  }}
                  transition={{
                    duration: 4,
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

  const words = [
    { text: "AI TOOL AGENTS", offset: 0 }
  ];

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
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(156,163,175,0.2) 0%, rgba(75,85,99,0.1) 50%, transparent 100%)',
          zIndex: -1
        }}
      />

      {/* Title container */}
      <motion.div 
        className="flex items-center gap-2 p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex gap-1">
            {word.text.split('').map((letter, letterIndex) => (
              <React.Fragment key={letterIndex}>
                {letter === ' ' ? (
                  <div className="w-[3px]" />
                ) : (
                  renderLetter(letters[letter as keyof typeof letters], letterIndex)
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
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
                duration: 10,
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

export default PixelTitle;
