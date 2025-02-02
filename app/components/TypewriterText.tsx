'use client'

import { useState, useEffect } from 'react'
import TypeWriter from './TypeWriter'

interface TypewriterTextProps {
  text?: string
  delay?: number
}

const defaultText = "" 


  const services = [
  
  "Virtual Customer Service Agents",
  "AI-Powered Sales Assistants",
  "Automated Data Entry & Processing",
  "Customer Segmentation & Profiling",
  "Automated Email Processing",
  "Chatbot Development & Customization",
  "AI-Powered Order Fulfillment",
  "Intelligent Scheduling & Appointment Setting",
  "AI-Driven Content Creation",
  "Predictive Analytics & Forecasting",
  "AI-Powered Lead Scoring & Qualification",
  "Real-Time Translation Services"
]

export default function TypewriterText({ text = defaultText, delay = 35 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showServices, setShowServices] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setShowServices(true)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <div>
      <div className="text-3xl font-thin text-gray-200">
        {displayText}
       
      </div>
      {showServices && (
        <div className="text-[15px] text-gray-300 mt-8">
         
          <TypeWriter messages={services} typingSpeed={1} delayBetweenMessages={20} />
        
        </div>
      )}
    </div>
  )
}
