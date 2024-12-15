'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface AnimatedLine {
  line: THREE.Line
  startPoint: THREE.Vector3
  endPoint: THREE.Vector3
  currentPoint: THREE.Vector3
  progress: number
  speed: number
  color: number
}

const COLORS = [
  0x4F46E5, // indigo
  0xEC4899, // pink
  0x10B981, // emerald
  0xF59E0B, // amber
  0x6366F1, // violet
  0xEF4444, // red
]

// Get a random point on the cube's surface
const getRandomCubePoint = (size: number): THREE.Vector3 => {
  const face = Math.floor(Math.random() * 6)
  const halfSize = size / 2
  
  switch(face) {
    case 0: // front
      return new THREE.Vector3(
        (Math.random() * 2 - 1) * halfSize,
        (Math.random() * 2 - 1) * halfSize,
        halfSize
      )
    case 1: // back
      return new THREE.Vector3(
        (Math.random() * 2 - 1) * halfSize,
        (Math.random() * 2 - 1) * halfSize,
        -halfSize
      )
    case 2: // top
      return new THREE.Vector3(
        (Math.random() * 2 - 1) * halfSize,
        halfSize,
        (Math.random() * 2 - 1) * halfSize
      )
    case 3: // bottom
      return new THREE.Vector3(
        (Math.random() * 2 - 1) * halfSize,
        -halfSize,
        (Math.random() * 2 - 1) * halfSize
      )
    case 4: // right
      return new THREE.Vector3(
        halfSize,
        (Math.random() * 2 - 1) * halfSize,
        (Math.random() * 2 - 1) * halfSize
      )
    default: // left
      return new THREE.Vector3(
        -halfSize,
        (Math.random() * 2 - 1) * halfSize,
        (Math.random() * 2 - 1) * halfSize
      )
  }
}

// Get the opposite point on the cube
const getOppositePoint = (point: THREE.Vector3, size: number): THREE.Vector3 => {
  const halfSize = size / 2
  const x = Math.abs(point.x) === halfSize ? -point.x : point.x
  const y = Math.abs(point.y) === halfSize ? -point.y : point.y
  const z = Math.abs(point.z) === halfSize ? -point.z : point.z
  return new THREE.Vector3(x, y, z)
}

const createGridLines = () => {
  const gridSize = 20
  const size = 2 // Size of the cube
  const geometry = new THREE.BufferGeometry()
  const vertices = []
  const spacing = size / gridSize

  // Create grid lines for each face
  for (let i = 0; i <= gridSize; i++) {
    const pos = (i * spacing) - (size / 2)

    // Front face
    vertices.push(-size/2, pos, size/2, size/2, pos, size/2)
    vertices.push(pos, -size/2, size/2, pos, size/2, size/2)

    // Back face
    vertices.push(-size/2, pos, -size/2, size/2, pos, -size/2)
    vertices.push(pos, -size/2, -size/2, pos, size/2, -size/2)

    // Top face
    vertices.push(-size/2, size/2, pos, size/2, size/2, pos)
    vertices.push(pos, size/2, -size/2, pos, size/2, size/2)

    // Bottom face
    vertices.push(-size/2, -size/2, pos, size/2, -size/2, pos)
    vertices.push(pos, -size/2, -size/2, pos, -size/2, size/2)

    // Left face
    vertices.push(-size/2, pos, -size/2, -size/2, pos, size/2)
    vertices.push(-size/2, -size/2, pos, -size/2, size/2, pos)

    // Right face
    vertices.push(size/2, pos, -size/2, size/2, pos, size/2)
    vertices.push(size/2, -size/2, pos, size/2, size/2, pos)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  const material = new THREE.LineBasicMaterial({ 
    color: 0x4F46E5,
    transparent: true,
    opacity: 0.3
  })

  return new THREE.LineSegments(geometry, material)
}

export default function NeuroCube() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.autoRotate = true
    controls.autoRotateSpeed = 2.0
    
    // Optional: Stop auto-rotation when user interacts
    controls.addEventListener('start', () => {
      controls.autoRotate = false
    })

    // Optional: Resume auto-rotation after a period of inactivity
    let autoRotateTimeout: NodeJS.Timeout
    controls.addEventListener('end', () => {
      clearTimeout(autoRotateTimeout)
      autoRotateTimeout = setTimeout(() => {
        controls.autoRotate = true
      }, 3000) // Resume after 3 seconds of inactivity
    })

    // Create animated lines inside the cube
    const createAnimatedLine = (): AnimatedLine => {
      const size = 2
      const geometry = new THREE.BufferGeometry()
      const startPoint = getRandomCubePoint(size)
      const endPoint = getOppositePoint(startPoint, size)
      
      geometry.setFromPoints([startPoint, startPoint]) // Start as a point
      
      const material = new THREE.LineBasicMaterial({ 
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        transparent: true,
        opacity: 0.8,
        linewidth: 2
      })

      const line = new THREE.Line(geometry, material)
      
      return {
        line,
        startPoint,
        endPoint,
        currentPoint: startPoint.clone(),
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
        color: material.color.getHex()
      }
    }

    const cube = createGridLines()
    scene.add(cube)

    // Create multiple animated lines
    const animatedLines: AnimatedLine[] = []
    for (let i = 0; i < 20; i++) {
      const animatedLine = createAnimatedLine()
      scene.add(animatedLine.line)
      animatedLines.push(animatedLine)
    }

    // Position camera
    camera.position.z = 5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Update controls
      controls.update()

      // Update animated lines
      animatedLines.forEach(line => {
        line.progress += line.speed

        if (line.progress >= 1) {
          // Reset line with new points
          line.startPoint = getRandomCubePoint(2)
          line.endPoint = getOppositePoint(line.startPoint, 2)
          line.currentPoint.copy(line.startPoint)
          line.progress = 0
          ;(line.line.material as THREE.LineBasicMaterial).color.setHex(
            COLORS[Math.floor(Math.random() * COLORS.length)]
          )
        }

        // Interpolate current point
        line.currentPoint.lerpVectors(line.startPoint, line.endPoint, line.progress)

        // Update line geometry
        const positions = line.line.geometry.attributes.position.array as Float32Array
        positions[0] = line.startPoint.x
        positions[1] = line.startPoint.y
        positions[2] = line.startPoint.z
        positions[3] = line.currentPoint.x
        positions[4] = line.currentPoint.y
        positions[5] = line.currentPoint.z

        line.line.geometry.attributes.position.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(autoRotateTimeout)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of resources
      cube.geometry.dispose()
      ;(cube.material as THREE.Material).dispose()
      
      animatedLines.forEach(({ line }) => {
        line.geometry.dispose()
        ;(line.material as THREE.Material).dispose()
      })
      
      controls.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}
