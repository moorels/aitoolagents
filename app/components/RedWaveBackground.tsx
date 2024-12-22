'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface CubeMaterial extends THREE.ShaderMaterial {
  uniforms: {
    time: { value: number };
    color: { value: THREE.Color };
  };
}

export default function BlueWaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 500 / 100, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    renderer.setSize(500, 100)
    containerRef.current.appendChild(renderer.domElement)

    // Create glowing background
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x3b82f6) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        
        void main() {
          vec2 center = vec2(0.5, 0.5);
          float dist = length(vUv - center);
          
          float glow = 0.3 * (1.0 - smoothstep(0.0, 0.5, dist));
          float sparkle = noise(vUv + time * 0.1) * 0.1;
          
          float alpha = glow + sparkle;
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,
      transparent: true
    }) as CubeMaterial

    const glowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 2),
      glowMaterial
    )
    glowPlane.position.z = -0.2
    scene.add(glowPlane)

    // Function to generate random bright colors
    const getRandomColor = () => {
      const hue = Math.random()
      const saturation = 0.7 + Math.random() * 0.3 // 0.7-1.0 for bright colors
      const lightness = 0.5 + Math.random() * 0.3 // 0.5-0.8 for bright colors
      return new THREE.Color().setHSL(hue, saturation, lightness)
    }

    // Create floating cubes
    const cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
    const createCubeMaterial = (color: THREE.Color): CubeMaterial => {
      return new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: color }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vPosition = position;
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vec3 light = normalize(vec3(1.0, 1.0, 2.0));
            float brightness = dot(vNormal, light) * 0.5 + 0.5;
            float pulse = sin(time * 2.0) * 0.2 + 0.8;
            gl_FragColor = vec4(color * brightness * pulse, 0.6);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide
      }) as CubeMaterial
    }

    const cubes: THREE.Mesh<THREE.BoxGeometry, CubeMaterial>[] = []
    const cubeCount = 100
    
    for(let i = 0; i < cubeCount; i++) {
      const randomColor = getRandomColor()
      const cube = new THREE.Mesh(cubeGeometry, createCubeMaterial(randomColor))
      cube.position.set(
        Math.random() * 10 - 5,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      )
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      scene.add(cube)
      cubes.push(cube)
    }

    camera.position.z = 2.5

    // Animation
    const animate = (currentTime: number) => {
      requestAnimationFrame(animate)
      
      const time = currentTime * 0.001

      // Update glow effect
      glowMaterial.uniforms.time.value = time

      // Update cubes
      cubes.forEach((cube, i) => {
        // Rotation
        cube.rotation.x += 0.002
        cube.rotation.y += 0.003
        
        // Floating motion
        cube.position.x += Math.sin(time + i) * 0.003
        cube.position.y += Math.cos(time + i) * 0.002
        
        // Keep within bounds
        if (cube.position.x > 5) cube.position.x = -5
        if (cube.position.x < -5) cube.position.x = 5
        if (cube.position.y > 1) cube.position.y = -1
        if (cube.position.y < -1) cube.position.y = 1
        
        // Update material time uniform
        cube.material.uniforms.time.value = time
      })

      renderer.render(scene, camera)
    }
    animate(0)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = 500
      const height = 100
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      glowPlane.geometry.dispose()
      glowMaterial.dispose()
      cubeGeometry.dispose()
      cubes.forEach(cube => {
        cube.geometry.dispose()
        cube.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute pointer-events-none" 
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        top: '0',
        width: '500px',
        height: '100px'
      }}
    />
  )
}
