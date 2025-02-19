'use client'

import { useState, useEffect } from 'react'
import TypeWriter from './TypeWriter'
import AIBenefitsChart from './AIBenefitsChart';
import ServiceModal from './ServiceModal';

interface TypewriterTextProps {
  text?: string
  delay?: number
}

const defaultText = "" 

const services = [
  "Virtual Customer Service Agents",
  "Employee Training Agents",
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

const modalContent = {
  'Employee Training Agents': {
    description: "Our Employee Training Agents leverage advanced AI to deliver personalized, context-aware training experiences. These intelligent agents understand your company's policies, procedures, and best practices, providing consistent, round-the-clock training support while adapting to each employee's learning pace and style.",
    benefits: [
      "24/7 availability for training and support",
      "Personalized learning paths based on role and experience",
      "Consistent delivery of training materials across the organization",
      "Real-time tracking of employee progress and comprehension",
      "Automated assessment and certification processes",
      "Immediate answers to policy and procedure questions"
    ],
    implementation: [
      "Initial assessment of training needs and content requirements",
      "Integration with existing training materials and company policies",
      "Custom configuration of AI training agents for specific roles",
      "Deployment of interactive learning modules and assessments",
      "Implementation of progress tracking and reporting systems",
      "Continuous optimization based on employee feedback and performance metrics"
    ],
    metrics: [
      "95% increase in training completion rates",
      "80% reduction in training-related support tickets",
      "60% faster onboarding process",
      "90% employee satisfaction with training experience",
      "85% improvement in policy compliance",
      "70% reduction in training costs"
    ]
  }
};

export default function TypewriterText({ text = defaultText, delay = 35 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showServices, setShowServices] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

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

  const handleServiceClick = (service: string) => {
    if (modalContent[service as keyof typeof modalContent]) {
      setSelectedService(service);
    }
  };

  return (
    <div>
      <div className="text-3xl font-thin text-gray-200">
        {displayText}
      </div>
      {showServices && (
        <div className="text-[20px] text-gray-300 mt-8">
          <TypeWriter 
            messages={services} 
            typingSpeed={1} 
            delayBetweenMessages={20} 
            onMessageClick={handleServiceClick}
          />
        </div>
      )}
      {selectedService && modalContent[selectedService as keyof typeof modalContent] && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService}
          content={modalContent[selectedService as keyof typeof modalContent]}
        />
      )}
    </div>
  )
}
