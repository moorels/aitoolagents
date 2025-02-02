'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProcessAutomationModal from './ProcessAutomationModal';
import { processAutomationDescriptions } from '../data/processAutomationData';

interface ProcessAutomationPageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: { title: string; description: string }[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProcessAutomationPage({ title, description, features, benefits, useCases }: ProcessAutomationPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleItemClick = (title: string) => {
    const content = processAutomationDescriptions[title];
    if (content) {
      setModalContent({ title, content });
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#c49d17]">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#c49d17] mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-gray-900/50 border border-gray-800/50 hover:border-[#c49d17] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleItemClick(feature)}
              >
                <p className="text-gray-300 group-hover:text-[#c49d17] transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#c49d17] mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-gray-900/50 border border-gray-800/50 hover:border-[#c49d17] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleItemClick(benefit)}
              >
                <p className="text-gray-300 group-hover:text-[#c49d17] transition-colors">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#c49d17] mb-8 text-center">Use Cases</h2>
          <div className="grid grid-cols-1 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gray-900/50 border border-gray-800/50 hover:border-[#c49d17] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleItemClick(useCase.title)}
              >
                <h3 className="text-xl font-bold text-[#c49d17] mb-4 group-hover:text-[#c49d17] transition-colors">{useCase.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-[#c49d17] leading-relaxed mb-8">
            Ready to transform your business with our {title.toLowerCase()}?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#c49d17] text-white px-8 py-4 text-lg font-semibold hover:bg-[#e49d17] transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </motion.section>

      {/* Modal */}
      <ProcessAutomationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
}
