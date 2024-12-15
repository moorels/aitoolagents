'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  velocity: {
    x: number
    y: number
  }
}

interface FloatingText {
  id: number
  x: number
  y: number
  text: string
  velocity: {
    x: number
    y: number
  }
  opacity: number
}

const mathEquations = [
  'E = mc²',
  '∫ f(x)dx',
  'eiπ + 1 = 0',
  '∇ × F',
  'Σ(1/n²)',
  'dx/dt',
  'λ = h/p',
  '∂u/∂t',
  'P(A|B)',
  'x = -b±√(b²-4ac)/2a',
  'sin²θ + cos²θ = 1',
  'F = ma',
  'PV = nRT',
  '∮ E·dℓ',
  'i∂ψ/∂t = Ĥψ'
]

const FloatingDot = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={size}
    fill="rgb(191, 219, 254)"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.2, 0.5, 0.2] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      filter: 'blur(1px) drop-shadow(0 0 2px rgb(147, 197, 253))'
    }}
  />
)

const FloatingEquation = ({ x, y, text, opacity }: { x: number; y: number; text: string; opacity: number }) => (
  <motion.text
    x={x}
    y={y}
    fill="rgb(191, 219, 254)"
    fontSize="8"
    fontFamily="monospace"
    opacity={opacity}
    style={{
      filter: 'drop-shadow(0 0 2px rgb(147, 197, 253))'
    }}
  >
    {text}
  </motion.text>
)

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [equations, setEquations] = useState<FloatingText[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 48 })

  useEffect(() => {
    // Initialize particles and equations
    const initParticles = () => {
      const newParticles: Particle[] = []
      const newEquations: FloatingText[] = []
      const numParticles = Math.floor(dimensions.width / 100) // Reduced density for particles
      const numEquations = Math.floor(dimensions.width / 200) // One equation per 200px width
      
      // Initialize particles
      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 1.5 + 0.5,
          velocity: {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3
          }
        })
      }

      // Initialize equations
      for (let i = 0; i < numEquations; i++) {
        newEquations.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          text: mathEquations[Math.floor(Math.random() * mathEquations.length)],
          velocity: {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2
          },
          opacity: Math.random() * 0.3 + 0.1
        })
      }

      setParticles(newParticles)
      setEquations(newEquations)
    }

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 48
      })
    }

    updateDimensions()
    initParticles()

    window.addEventListener('resize', () => {
      updateDimensions()
      initParticles()
    })

    // Animation loop
    const animationFrame = setInterval(() => {
      // Update particles
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let newX = particle.x + particle.velocity.x
          let newY = particle.y + particle.velocity.y

          if (newX <= 0 || newX >= dimensions.width) {
            particle.velocity.x *= -1
            newX = particle.x + particle.velocity.x
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.velocity.y *= -1
            newY = particle.y + particle.velocity.y
          }

          return {
            ...particle,
            x: newX,
            y: newY
          }
        })
      })

      // Update equations
      setEquations(prevEquations => {
        return prevEquations.map(eq => {
          let newX = eq.x + eq.velocity.x
          let newY = eq.y + eq.velocity.y

          if (newX <= 0 || newX >= dimensions.width) {
            eq.velocity.x *= -1
            newX = eq.x + eq.velocity.x
          }
          if (newY <= 10 || newY >= dimensions.height - 5) {
            eq.velocity.y *= -1
            newY = eq.y + eq.velocity.y
          }

          return {
            ...eq,
            x: newX,
            y: newY
          }
        })
      })
    }, 1000 / 60)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearInterval(animationFrame)
    }
  }, [dimensions.width])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-500/5" />
      <svg className="w-full h-full">
        {particles.map(particle => (
          <FloatingDot
            key={particle.id}
            x={particle.x}
            y={particle.y}
            size={particle.size}
          />
        ))}
        {equations.map(eq => (
          <FloatingEquation
            key={eq.id}
            x={eq.x}
            y={eq.y}
            text={eq.text}
            opacity={eq.opacity}
          />
        ))}
      </svg>
    </div>
  )
}
