'use client';

import { FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import RobotFooter from './Robotfooter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-black animated-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-0 md:mr-8">
            <RobotFooter />
          </div>
          <div className="flex-1">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-2xl font-bold">AI TOOL AGENTS AUSTRALIA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-3">
                  <FaGlobe className="text-blue-400 mr-2 text-xl" />
                  <a href="http://www.aitoolagents.com.au" className="hover:text-blue-400 transition-colors">
                    www.aitoolagents.com.au
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-400 mr-2 text-xl" />
                  <a href="mailto:info@aitoolagents.com.au" className="hover:text-blue-400 transition-colors">
                    info@aitoolagents.com.au
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-400 mr-2 text-xl" />
                  <a href="mailto:help@aitoolagents.com.au" className="hover:text-blue-400 transition-colors">
                    help@aitoolagents.com.au
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-400 mr-2 text-xl" />
                  <a href="mailto:sales@aitoolagents.com.au" className="hover:text-blue-400 transition-colors">
                    sales@aitoolagents.com.au
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                  <FaPhone className="text-blue-400 mr-2 text-xl" />
                  <a href="tel:0390163533" className="hover:text-blue-400 transition-colors">
                    (03) 9016 3533
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-400 mr-2 text-xl" />
                  <a href="tel:0468609702" className="hover:text-blue-400 transition-colors">
                    0468 609 702
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-400 mr-2 text-xl" />
                  <address className="not-italic">
                    350 Collins St,<br />
                    Melbourne VIC 3000
                  </address>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <p>&copy; {new Date().getFullYear()} AI Tool Agents Australia. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;