'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingText {
  id: number
  x: number
  y: number
  text: string
  velocity: {
    x: number
    y: number
  }
  scale: number
  opacity: number
  rotation: number
  rotationVelocity: number
}

interface NeuralNode {
  id: number
  x: number
  y: number
  layer: number
  color: string
  connections: Array<{
    targetId: number
    opacity: number
    color: string
  }>
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

const COLORS = [
  'rgb(147, 197, 253)', // blue
  'rgb(167, 139, 250)', // purple
  'rgb(248, 113, 113)', // red
  'rgb(52, 211, 153)',  // green
  'rgb(251, 146, 60)',  // orange
  'rgb(236, 72, 153)',  // pink
  'rgb(251, 191, 36)',  // yellow
  'rgb(79, 70, 229)'    // indigo
]

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

const NETWORK_CONFIG = {
  layers: [3, 4, 4, 2], // Number of nodes in each layer
  nodeRadius: 4,
  layerSpacing: 80,
  verticalSpacing: 30,
}

const generateNetwork = (width: number, height: number): NeuralNode[] => {
  const nodes: NeuralNode[] = []
  let nodeId = 0
  
  // Calculate starting x position to center the network
  const totalWidth = (NETWORK_CONFIG.layers.length - 1) * NETWORK_CONFIG.layerSpacing
  const startX = (width - totalWidth) / 2

  NETWORK_CONFIG.layers.forEach((nodeCount, layerIndex) => {
    const layerHeight = (nodeCount - 1) * NETWORK_CONFIG.verticalSpacing
    const startY = (height - layerHeight) / 2

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: nodeId++,
        x: startX + layerIndex * NETWORK_CONFIG.layerSpacing,
        y: startY + i * NETWORK_CONFIG.verticalSpacing,
        layer: layerIndex,
        color: getRandomColor(),
        connections: []
      })
    }
  })

  // Create connections between layers
  for (let layerIndex = 0; layerIndex < NETWORK_CONFIG.layers.length - 1; layerIndex++) {
    const currentLayerNodes = nodes.filter(n => n.layer === layerIndex)
    const nextLayerNodes = nodes.filter(n => n.layer === layerIndex + 1)

    currentLayerNodes.forEach(sourceNode => {
      nextLayerNodes.forEach(targetNode => {
        sourceNode.connections.push({
          targetId: targetNode.id,
          opacity: Math.random() * 0.5 + 0.1,
          color: getRandomColor()
        })
      })
    })
  }

  return nodes
}

const NeuralNetwork = ({ nodes, width, height }: { nodes: NeuralNode[], width: number, height: number }) => {
  return (
    <g>
      {/* Draw connections first */}
      {nodes.map(node =>
        node.connections.map((conn, idx) => {
          const targetNode = nodes.find(n => n.id === conn.targetId)
          if (!targetNode) return null
          
          return (
            <motion.path
              key={`${node.id}-${conn.targetId}-${idx}`}
              d={`M ${node.x} ${node.y} L ${targetNode.x} ${targetNode.y}`}
              stroke={conn.color}
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [conn.opacity, conn.opacity * 0.3, conn.opacity],
                pathLength: [0, 1],
                stroke: [conn.color, getRandomColor(), conn.color]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )
        })
      )}
      
      {/* Draw nodes */}
      {nodes.map(node => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={NETWORK_CONFIG.nodeRadius}
          fill={node.color}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            fill: [node.color, getRandomColor(), node.color]
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 2px currentColor)'
          }}
        />
      ))}
    </g>
  )
}

const FloatingEquation = ({ 
  x, 
  y, 
  text, 
  opacity, 
  scale, 
  rotation 
}: { 
  x: number
  y: number
  text: string
  opacity: number
  scale: number
  rotation: number
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
  const [network, setNetwork] = useState<NeuralNode[]>([])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 48
      })
    }

    updateDimensions()
    
    // Generate initial network
    setNetwork(generateNetwork(window.innerWidth, 48))

    const initEquations = () => {
      const newEquations: FloatingText[] = []
      const numEquations = Math.floor(dimensions.width / 150)
      
      for (let i = 0; i < numEquations; i++) {
        newEquations.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          text: mathEquations[Math.floor(Math.random() * mathEquations.length)],
          velocity: {
            x: (Math.random() - 0.5) * 0.4,
            y: (Math.random() - 0.5) * 0.4
          },
          scale: 0.8 + Math.random() * 0.4,
          opacity: 0.2 + Math.random() * 0.3,
          rotation: Math.random() * 360,
          rotationVelocity: (Math.random() - 0.5) * 0.5
        })
      }
      setEquations(newEquations)
    }

    initEquations()

    window.addEventListener('resize', () => {
      updateDimensions()
      initEquations()
      setNetwork(generateNetwork(window.innerWidth, 48))
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
        <NeuralNetwork nodes={network} width={dimensions.width} height={dimensions.height} />
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
