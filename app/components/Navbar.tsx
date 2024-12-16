'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import { useState } from 'react'
import InfinityLogo from './InfinityLogo'
import PixelAILogo from '../components/PixelAILogo';

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
      className="px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors duration-200 border-2 border-[#A9A9A9] rounded bg-[#808080] hover:bg-[#707070]"
    >
      {children}
    </button>
  )
}

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const Links = ['Home', 'Projects', 'About', 'Contact']
  const paths = ['/', '/projects', '/about', '/contact']

  return (
    <motion.nav
      className="fixed w-full h-20 bg-black/90 backdrop-blur-sm z-50 border-b border-blue-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 h-full">
        
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center space-x-2">
          <PixelAILogo />
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-1 ">
              
              <InfinityLogo />
              </div>
              
              <button
                onClick={() => router.push('/')}
                className="text-sm font-medium text-white border-2 border-[#A9A9A9] rounded px-3 py-1 bg-[#808080] hover:bg-[#707070]"
              >
                AI TOOL AGENTS
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {Links.map((link, index) => (
                <NavLink key={link} href={paths[index]}>
                  {link}
                </NavLink>
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
                <NavLink href={paths[index]} onClick={() => setIsOpen(false)}>
                  {link}
                </NavLink>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
