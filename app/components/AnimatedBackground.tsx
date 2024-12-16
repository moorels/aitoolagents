'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingText {
  id: number
  x: number
  y: number
  text: string
  opacity: number
  scale: number
  rotation: number
  velocity: {
    x: number
    y: number
  }
  rotationVelocity: number
}

const mathEquations = [
  // Machine Learning Equations
  'y = σ(Wx + b)',
  'H(p,q) = -Σ p(x)log(q(x))',
  'L = -Σ yᵢlog(ŷᵢ)',
  '∇θJ(θ)',
  'P(y|x) = softmax(z)',
  'ReLU(x) = max(0,x)',
  'θ = θ - α∇θJ(θ)',
  'MSE = 1/n Σ(yᵢ-ŷᵢ)²',
  'KL(P||Q) = Σ P(x)log(P(x)/Q(x))',
  'tanh(x) = (eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)',
  'accuracy = (TP+TN)/(TP+TN+FP+FN)',
  'R² = 1 - SSres/SStot',
  'z = W·a + b',
  'dropout(x) = x·Bernoulli(p)',
  'L₂ = λΣθᵢ²',
  
  // Linear Algebra Equations
  'A⃗ × B⃗ = |A⃗||B⃗|sin(θ)n̂',
  'det(A) = ad - bc',
  'A = QR',
  'Ax = λx',
  'A = UΣVᵀ',
  'tr(A) = λ₁ + λ₂ + ... + λₙ',
  '|A - λI| = 0',
  'ker(A) = {x | Ax = 0}',
  'rank(A) + null(A) = n',
  'A⁻¹A = AA⁻¹ = I',
  '[x]ᵦ = P⁻¹[x]ₐ',
  '⟨u,v⟩ = uᵀv',
  'span{v₁,...,vₙ}',
  '∥v∥ = √(v₁² + v₂²)',
  
  // Classic Physics/Math
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
  'i∂ψ/∂t = Ĥψ',
  '∇ · B = 0',
  'Δx·Δp ≥ ℏ/2',
  'S = k·ln(W)',
  'c = λf',
  'E = hf'
]

const FloatingEquation = ({ 
  x, 
  y, 
  text,
  opacity,
  scale,
  rotation
}) => (
  <motion.g
    style={{
      transformOrigin: `${x}px ${y}px`,
      filter: 'drop-shadow(0 0 3px rgb(147, 197, 253))'
    }}
    animate={{
      opacity: [opacity, opacity * 1.5, opacity],
      scale: [scale, scale * 1.1, scale],
      rotate: rotation
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <motion.text
      x={x}
      y={y}
      fill="rgb(191, 219, 254)"
      fontSize="10"
      fontFamily="monospace"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {text}
    </motion.text>
  </motion.g>
)

export default function AnimatedBackground() {
  const [equations, setEquations] = useState<FloatingText[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 48 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 48
      })
    }

    updateDimensions()

    const initEquations = () => {
      const newEquations: FloatingText[] = []
      const numEquations = Math.floor(window.innerWidth / 200)

      for (let i = 0; i < numEquations; i++) {
        newEquations.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          text: mathEquations[Math.floor(Math.random() * mathEquations.length)],
          opacity: Math.random() * 0.5 + 0.3,
          scale: Math.random() * 0.3 + 0.8,
          rotation: Math.random() * 360,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          },
          rotationVelocity: (Math.random() - 0.5) * 2
        })
      }
      setEquations(newEquations)
    }

    initEquations()

    window.addEventListener('resize', () => {
      updateDimensions()
      initEquations()
    })

    // Animation loop
    const animationFrame = setInterval(() => {
      setEquations(prevEquations => {
        return prevEquations.map(eq => {
          let newX = eq.x + eq.velocity.x
          let newY = eq.y + eq.velocity.y
          let newRotation = eq.rotation + eq.rotationVelocity

          // Smooth wrapping around edges
          if (newX < -50) newX = dimensions.width + 50
          if (newX > dimensions.width + 50) newX = -50
          if (newY < -20) newY = dimensions.height + 20
          if (newY > dimensions.height + 20) newY = -20

          // Keep rotation between 0 and 360
          newRotation = newRotation % 360

          return {
            ...eq,
            x: newX,
            y: newY,
            rotation: newRotation
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
        {equations.map(eq => (
          <FloatingEquation
            key={eq.id}
            x={eq.x}
            y={eq.y}
            text={eq.text}
            opacity={eq.opacity}
            scale={eq.scale}
            rotation={eq.rotation}
          />
        ))}
      </svg>
    </div>
  )
}
