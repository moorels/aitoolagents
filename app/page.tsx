'use client'
import TypewriterText from './components/TypewriterText';
import FloatingImage from './components/FloatingImage';
import ClientCarousel from './components/ClientCarousel';
import Chat from './components/Chat'
import Link from 'next/link'
import ScrollToTop from './components/ScrollToTop';

import BorderWave from './components/BorderWave';
import MovingWaves from './components/MovingWaves';
import TabView from './components/TabView';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <MovingWaves />
      
      <div className="w-full">
      
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mt-12 text-xl md:text-2xl font-thin px-4 text-[#c49d17]">
          
          Welcome to AI Business Tools Australia
          </div>
        <div className="text-center mt-12 text-xl md:text-2xl font-thin px-4">
          Transform Your Business with Smart Automation.
          <div className="mt-4 align-center text-lg md:text-xl px-2">Discover how AI agents can streamline your operations and enhance customer experiences.</div>
          <div className="relative mt-2 h-[100px] w-full max-w-[800px] mx-auto group">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              
            </div>
            <Link 
              href="/ai-agents-explained" 
              className="relative inline-flex items-center justify-center w-full h-full text-white hover:text-white/90 transition-colors duration-300"
            >
              
              <span className="flex items-center text-[15px] md:text-[15px] font-light">
                <span className="mr-2 text-2xl md:text-1xl text-[#c49d17] bg-blue-500/30 bg-opacity-70 rounded px-2 md:px-4 py-1 md:py-2">Click here to learn about AI Agents</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
            <Link 
              href="/demos" 
              className="relative inline-flex items-center justify-center w-full h-[10px] text-white hover:text-white/90 transition-colors duration-300"
            >
              
              <span className="flex items-center text-[15px] md:text-[15px] font-light">
                <span className="mr-2 text-2xl md:text-1xl text-[#c49d17] bg-blue-500/30 bg-opacity-70 rounded px-2 md:px-4 py-1 md:py-2">Click here to view our live demos</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
          <div className=" align-center text-[15px] md:text-[25px] px-2 mt-20">Welcome to AI Tool Agents Australia Business Solutions, your trusted partner in the future of AI.</div>
         
        <div className="mt-4 align-center text-[15px] md:text-[25px] px-2">Where innovation meets intelligence, and possibilities are limitless.</div>
        
        </div>
        <div className="mt-4 align-center text-[15px] md:text-[15px] px-2"> Our company can offer a variety of business service solutions to its clients.</div>
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-16 gap-[200px]">
            
            <div className="hidden md:block">
              <FloatingImage src="/robo1.png" alt="Robot" width={100} height={100} />
            </div>
            <div className="flex items-center">
            
              <div className="flex-1 w-full max-w-2xl">
                <div className="hidden md:block">
                  <TypewriterText />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 align-center text-[15px] md:text-[15px] px-2">Our solutions can significantly enhance operational efficiency, improve customer satisfaction, and drive business growth for a wide range of industries.</div>
          
          <motion.section 
        className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        
        <h2 className="text-2xl font-bold mb-6 text-[#c49d17] text-center mt-4">Below are some examples of Basic Workflow Agents we&apos;ve created for our existing customers.</h2>
        <TabView />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#c49d17]">Ready to Explore AI Agents?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s start with a friendly chat about your business and how AI agents could help. We&apos;ll explain everything in plain language and help you find the perfect starting point for your journey into AI.
          </p>
          
        </div>
        <div className="max-w-4xl mx-auto text-center">
         
          <a 
            href="/contact" 
            className="inline-block bg-[#c49d17] text-white px-8 py-4 text-lg font-semibold hover:bg-[#f49d17] transition-colors duration-300"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </motion.section>
      <ClientCarousel />
          <div className="mt-4">
            <Chat />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}
