'use client';

import { FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import FloatingImage from './FloatingImage';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-[#915b07] animated-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="hidden md:block w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-0 md:mr-8">
            <FloatingImage src="/robo1.png" alt="Robot" width={96} height={96} />
          </div>
          <div className="flex-1">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-2xl font-bold text-[#dfb406]">AI TOOL AGENTS AUSTRALIA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-3">
                  <FaGlobe className="text-[#dfb406] mr-2 text-xl" />
                  <a href="https://www.aitoolagents.com.au" className="hover:text-[#dfb406] transition-colors">
                    www.aitoolagents.com.au
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="text-[#dfb406] mr-2 text-xl" />
                  <a href="mailto:info@aitoolagents.com.au" className="hover:text-[#dfb406] transition-colors">
                    info@aitoolagents.com.au
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-[#dfb406] mr-2 text-xl" />
                  <a href="mailto:help@aitoolagents.com.au" className="hover:text-[#dfb406] transition-colors">
                    help@aitoolagents.com.au
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-[#dfb406] mr-2 text-xl" />
                  <a href="mailto:sales@aitoolagents.com.au" className="hover:text-[#dfb406] transition-colors">
                    sales@aitoolagents.com.au
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                  <FaPhone className="text-[#dfb406] mr-2 text-xl" />
                  <a href="tel:0390163533" className="hover:text-[#dfb406] transition-colors">
                    (03) 9016 3533
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-[#dfb406] mr-2 text-xl" />
                  <a href="tel:0468609702" className="hover:text-[#dfb406] transition-colors">
                    0468 609 702
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#dfb406] mr-2 text-xl " />
                  <address className="not-italic">
                    350 Collins St,<br />
                    Melbourne VIC 3000
                  </address>
                </div>
                <div className="flex items-center mt-8">
                AI BUSINESS TOOLS AUSTRALIA
                 
                </div>
                <div className="flex items-center mt-4">
                ABN <div className="pl-2 text-[#dfb406]">79 338 920 277</div>
                </div>
              </div>
              
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-700 ">
              <p className="text-[#dfb406]">&copy; {new Date().getFullYear()} AI TOOL AGENTS AUSTRALIA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
