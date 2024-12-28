'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import { useState } from 'react'
import InfinityLogo from './InfinityLogo'
import HumanHead3D from '../components/HumanHead3D';

const NavLink = ({ 
  children, 
  href, 
  onClick 
}: { 
  children: React.ReactNode; 
  href: string;
  onClick?: () => void;
}) => {
  const router = useRouter()
  
  return (
    <button
      onClick={() => {
        router.push(href)
        onClick?.()
      }}
      className="px-3 py-1 text-sm text-gold hover:text-green transition-colors duration-200 bg-gray-800 hover:bg-blue-500/20 hover:text-gold transition-colors duration-100"
    >
      {children}
    </button>
  )
}

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [showDesktopSolutions, setShowDesktopSolutions] = useState(false)
  const [showDesktopPlatforms, setShowDesktopPlatforms] = useState(false)
  const [showMobileSolutions, setShowMobileSolutions] = useState(false)
  const [showMobilePlatforms, setShowMobilePlatforms] = useState(false)
  const Links = ['Home', 'Platforms', 'Solutions', 'About', 'Contact']
  const paths = ['/', '#', '#', '/about', '/contact']
  
  const solutionsLinks = [
    { name: 'Customer Service', path: '/services/customer-service' },
    { name: 'Office Automation', path: '/services/office-automation' },
    { name: 'Retail Automation', path: '/services/retail-automation' },
    { name: 'HealthCare', path: '/services/healthcare' },
    { name: 'Insurance', path: '/services/insurance' },
    { name: 'Property Management', path: '/services/property-management' },
    { name: 'Customer Care', path: '/services/customer-care' },
    { name: 'Custom AI Solutions', path: '/services/custom-ai-solutions' },
  ]

  const platformsLinks = [
    { name: 'AI Agents', path: '/services/ai-agents' },
    { name: 'AI Agentic Solutions', path: '/services/ai-agentic-solutions' },
    { name: 'AI Process Automation', path: '/services/ai-process-automation' },
    { name: 'AI Integrations', path: '/services/ai-integrations' },
    { name: 'Security', path: '/services/security' },
    { name: 'Deployment', path: '/services/deployment' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
    >
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 h-full">
        
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-24 h-24">
              <HumanHead3D />
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-1 hidden md:block">
                <InfinityLogo />
              </div>
              
              <button
                onClick={() => router.push('/')}
                className="text-sm font-medium text-white px-3 py-1 bg-gray-800 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
              >
                AI TOOL AGENTS
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {Links.map((link, index) => (
                <div
                  key={link}
                  className="relative"
                  onMouseEnter={() => {
                    if (link === 'Solutions') setShowDesktopSolutions(true)
                    if (link === 'Platforms') setShowDesktopPlatforms(true)
                  }}
                  onMouseLeave={() => {
                    if (link === 'Solutions') setShowDesktopSolutions(false)
                    if (link === 'Platforms') setShowDesktopPlatforms(false)
                  }}
                >
                  <NavLink href={paths[index]}>
                    {link}
                  </NavLink>
                  {link === 'Solutions' && showDesktopSolutions && (
                    <div className="absolute left-0 w-64 bg-gray-800 shadow-lg py-1">
                      {solutionsLinks.map((solution) => (
                        <button
                          key={solution.path}
                          onClick={() => {
                            router.push(solution.path)
                            setShowDesktopSolutions(false)
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                        >
                          {solution.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {link === 'Platforms' && showDesktopPlatforms && (
                    <div className="absolute left-0 w-64 bg-gray-800 shadow-lg py-1">
                      {platformsLinks.map((platform) => (
                        <button
                          key={platform.path}
                          onClick={() => {
                            router.push(platform.path)
                            setShowDesktopPlatforms(false)
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                        >
                          {platform.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`absolute top-12 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-blue-500/20 ${
            isOpen ? 'block' : 'hidden'
          } md:hidden`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-3 space-y-1">
            {Links.map((link, index) => (
              <div key={link} className="block">
                {link === 'Solutions' ? (
                  <div>
                    <button
                      onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                      className="px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                    {showMobileSolutions && (
                      <div className="pl-4 mt-1 space-y-1">
                        {solutionsLinks.map((solution) => (
                          <button
                            key={solution.path}
                            onClick={() => {
                              router.push(solution.path)
                              setIsOpen(false)
                              setShowMobileSolutions(false)
                            }}
                            className="block w-full text-left px-3 py-1 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                          >
                            {solution.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link === 'Platforms' ? (
                  <div>
                    <button
                      onClick={() => setShowMobilePlatforms(!showMobilePlatforms)}
                      className="px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                    {showMobilePlatforms && (
                      <div className="pl-4 mt-1 space-y-1">
                        {platformsLinks.map((platform) => (
                          <button
                            key={platform.path}
                            onClick={() => {
                              router.push(platform.path)
                              setIsOpen(false)
                              setShowMobilePlatforms(false)
                            }}
                            className="block w-full text-left px-3 py-1 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
                          >
                            {platform.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink href={paths[index]} onClick={() => setIsOpen(false)}>
                    {link}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
