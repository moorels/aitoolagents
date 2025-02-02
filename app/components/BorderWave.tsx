'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface BorderWaveProps {
  width?: number
  height?: number
  className?: string
}

const BorderWave: React.FC<BorderWaveProps> = ({ 
  width = 300, 
  height = 200,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const wavePositionRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      1,
      1000
    )
    camera.position.z = 100

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create a plane geometry for the thick line
    const planeGeometry = new THREE.PlaneGeometry(23, 2)
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffd700, // Brighter gold
      specular: 0xffffff,
      shininess: 100,
      transparent: false,
      opacity: 0,
      side: THREE.DoubleSide
    })

    // Create glow plane geometry (slightly larger)
    const glowGeometry = new THREE.PlaneGeometry(1, 15)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xfffacd, // Light golden rod
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    })

    // Add lights for metallic effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 2)
    scene.add(directionalLight)

    // Create inner glow for extra brightness
    const innerGlowGeometry = new THREE.PlaneGeometry(0.5, 0.5)
    const innerGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffe0, // Light yellow
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    })

    // Create segments for the wave
    const segments = 12 // Number of segments in the trail
    const planes: THREE.Mesh[] = []
    const glowPlanes: THREE.Mesh[] = []
    const innerGlowPlanes: THREE.Mesh[] = []
    
    // Calculate spacing between segments for complete border coverage
    const perimeter = 1 * (width + height)
    const segmentSpacing = perimeter / segments // Evenly space segments around perimeter
    
    for (let i = 0; i < segments; i++) {
      // Main plane
      const plane = new THREE.Mesh(planeGeometry.clone(), planeMaterial.clone())
      planes.push(plane)
      scene.add(plane)

      // Inner glow plane
      const innerGlowPlane = new THREE.Mesh(innerGlowGeometry.clone(), innerGlowMaterial.clone())
      innerGlowPlanes.push(innerGlowPlane)
      scene.add(innerGlowPlane)

      // Outer glow plane
      const glowPlane = new THREE.Mesh(glowGeometry.clone(), glowMaterial.clone())
      glowPlanes.push(glowPlane)
      scene.add(glowPlane)
    }

    // Animation
    const animate = () => {
      const perimeter = 2 * (width + height)
      wavePositionRef.current = (wavePositionRef.current + 2) % perimeter

      // Animate directional light for sheen effect
      const time = Date.now() * 0.001
      directionalLight.position.x = Math.sin(time) * 2
      directionalLight.position.y = Math.cos(time) * 2

      // Update all segments positions
      for (let i = 0; i < segments; i++) {
        // Calculate position for each segment to create continuous loop
        const position = (wavePositionRef.current + (i * segmentSpacing)) % perimeter
        let x = 0, y = 0, rotation = 0
        
        if (position < width) {
          x = position - width/2
          y = -height/2
          rotation = 0
        } else if (position < width + height) {
          x = width/2
          y = (position - width) - height/2
          rotation = Math.PI / 2
        } else if (position < 2 * width + height) {
          x = width/2 - (position - (width + height))
          y = height/2
          rotation = 0
        } else {
          x = -width/2
          y = height/2 - (position - (2 * width + height))
          rotation = Math.PI / 2
        }

        // Update main plane
        const plane = planes[i]
        plane.position.set(x, y, 0)
        plane.rotation.z = rotation

        // Update inner glow
        const innerGlowPlane = innerGlowPlanes[i]
        innerGlowPlane.position.set(x, y, -0.5)
        innerGlowPlane.rotation.z = rotation

        // Update outer glow
        const glowPlane = glowPlanes[i]
        glowPlane.position.set(x, y, -1)
        glowPlane.rotation.z = rotation
      }

      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      renderer.dispose()
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
      planeGeometry.dispose()
      planeMaterial.dispose()
      glowGeometry.dispose()
      glowMaterial.dispose()
      innerGlowGeometry.dispose()
      innerGlowMaterial.dispose()
      planes.forEach(plane => {
        plane.geometry.dispose()
       
      })
      glowPlanes.forEach(plane => {
        plane.geometry.dispose()
        
      })
      innerGlowPlanes.forEach(plane => {
        plane.geometry.dispose()
        
      })
    }
  }, [width, height])

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{
        width,
        height,
        position: 'relative',
        display: 'inline-block',
        pointerEvents: 'none'
      }}
    />
  )
}

export default BorderWave