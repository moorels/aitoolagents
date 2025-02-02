'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ChatButton from './ChatButton'
import ChatWindow from './ChatWindow'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ChatButton onClick={() => setIsOpen(true)} />
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Chat Window Container */}
            <div className="fixed w-[90%] h-[500px] max-w-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <ChatWindow onClose={() => setIsOpen(false)} />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
