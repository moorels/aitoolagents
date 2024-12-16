'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text?: string
  delay?: number
}

const defaultText = "Welcome to the future of AI. Where innovation meets intelligence, and possibilities are limitless."

export default function TypewriterText({ text = defaultText, delay = 150 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <div className="text-3xl font-bold text-gray-200">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
