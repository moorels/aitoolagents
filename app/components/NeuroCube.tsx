'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface CubeInfo {
  mesh: THREE.Mesh;
  x: number;
  y: number;
  z: number;
}

export default function NeuroCube() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)  // Half the size
    containerRef.current.appendChild(renderer.domElement)

    // Array of colors
    const colors = [0x4F46E5, 0xEC4899, 0x10B981, 0xF59E0B, 0x6366F1, 0xEF4444];
    const cubes: CubeInfo[] = [];

    const createMiniCubes = () => {
      const size = 0.1; // Size of the smaller cubes
      const spacing = 0.2; // Space between cubes
      const gridSize = 5; // Number of cubes along each dimension

      for (let x = -gridSize; x <= gridSize; x++) {
        for (let y = -gridSize; y <= gridSize; y++) {
          for (let z = -gridSize; z <= gridSize; z++) {
            const geometry = new THREE.BoxGeometry(size, size, size);
            const material = new THREE.MeshBasicMaterial({
              color: colors[0],
              transparent: true,
              opacity: 0.5
            });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x * spacing, y * spacing, z * spacing);
            scene.add(cube);
            cubes.push({ mesh: cube, x, y, z });
          }
        }
      }
    };

    createMiniCubes();

    // Position camera
    camera.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.05; // Control the speed of the color wave

      // Update cube colors based on position and time
      cubes.forEach(({ mesh, x, y, z }) => {
        if (mesh.material instanceof THREE.MeshBasicMaterial) {
          // Create a wave pattern using sine waves
          const wave = Math.sin(x * 0.5 + y * 0.3 + z * 0.4 + time);
          const colorIndex = Math.floor(((wave + 1) / 2) * colors.length);
          
          // Smoothly interpolate between colors
          const currentColor = new THREE.Color(colors[colorIndex]);
          const nextColor = new THREE.Color(colors[(colorIndex + 1) % colors.length]);
          const mixFactor = ((wave + 1) / 2) * colors.length - colorIndex;
          
          mesh.material.color.copy(currentColor).lerp(nextColor, mixFactor);
          
          // Adjust opacity based on the wave
          mesh.material.opacity = 0.3 + ((wave + 1) / 2) * 0.4;
        }
      });

      // Rotate the scene around the vertical axis
      scene.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width / 2, height / 2)  // Half the size
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="relative m-0 p-0" style={{ margin: 0, padding: 0 }} />
}
