'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';
import { serviceModalContent } from '../data/serviceModalContent';

interface TypeWriterProps {
  messages: string[];
  typingSpeed?: number;
  delayBetweenMessages?: number;
}

export default function TypeWriter({
  messages,
  typingSpeed = 50,
  delayBetweenMessages = 1000,
}: TypeWriterProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setIsTyping(false);
      return;
    }

    if (currentText.length < messages[currentMessageIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(messages[currentMessageIndex].slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedMessages(prev => [...prev, currentText]);
      setCurrentMessageIndex(prev => prev + 1);
      setCurrentText('');
    }, delayBetweenMessages);

    return () => clearTimeout(timeout);
  }, [currentText, currentMessageIndex, messages, typingSpeed, delayBetweenMessages]);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="space-y-2">
      {displayedMessages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => handleServiceClick(message)}
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-left w-full"
          >
            {message}
          </button>
        </motion.div>
      ))}
      {isTyping && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300"
        >
          {currentText}
          <span className="animate-pulse">|</span>
        </motion.div>
      )}

      {selectedService && serviceModalContent[selectedService] && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService}
          content={serviceModalContent[selectedService]}
        />
      )}
    </div>
  );
}
