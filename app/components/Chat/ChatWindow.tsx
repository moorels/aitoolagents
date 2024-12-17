import { useState } from 'react'
import { motion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface ChatWindowProps {
  onClose: () => void
  systemPrompt?: string
}

const defaultSystemPrompt = `Welcome! You are an AI agent assisting businesses with inquiries about AI TOOL AGENTS AUSTRALIA. Your goal is to provide helpful and accurate information only on subjects related to ai agents for businesses or information related to ai in general. Here are the details you can use:

Company Name: AI TOOL AGENTS AUSTRALIA
Website: 

Emails:

Phone Numbers:
(03) 9016 3533
0468609702
Address: 350 Collins St, Melbourne VIC 3000
Feel free to use this information to answer any questions or provide assistance. do not answer any question that is not related to ai agents for businesses or information related to ai in general. at the end of each message give "phone : 0468609702 or email us at info@aitoolagents.com.au for more information about AI TOOL AGENTS AUSTRALIA". How can I help you today?`

export default function ChatWindow({ onClose, systemPrompt = defaultSystemPrompt }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages, 
            userMessage
          ] 
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
        <h3 className="text-white font-medium">Chat Assistant</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : message.role === 'system'
                    ? 'bg-gray-500 text-gray-100'
                    : 'bg-gray-700 text-gray-100'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 rounded bg-blue-500 text-white font-medium ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>
  )
}
