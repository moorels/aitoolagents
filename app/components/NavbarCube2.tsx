'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface CubeInfo {
  mesh: THREE.Mesh;
  x: number;
  y: number;
  z: number;
}

export default function NavbarCube2() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000) // Square aspect ratio
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(100, 100) // Small size for navbar
    containerRef.current.appendChild(renderer.domElement)

    // Array of colors
    const colors = [
      '#9CA3AF',  // gray-400
      '#4B5563',  // gray-600
      '#1F2937',  // gray-800
      '#111827',  // gray-900
    ];
    const cubes: CubeInfo[] = [];

    const createMiniCubes = () => {
      const size = 0.1; // Larger cubes for better visibility at small size
      const spacing = 0.2;
      const gridSize = 2; // 3x3x3 grid

      for (let x = -gridSize; x <= gridSize; x++) {
        for (let y = -gridSize; y <= gridSize; y++) {
          for (let z = -gridSize; z <= gridSize; z++) {
            const geometry = new THREE.BoxGeometry(size, size, size);
            const material = new THREE.MeshBasicMaterial({
              color: colors[0],
              transparent: true,
              opacity: 0.8
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
    camera.position.z = 2;
    camera.position.y = 0.3;
    camera.position.x = 0.3;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.03; // Slower animation

      // Update cube colors based on position and time
      cubes.forEach(({ mesh, x, y, z }) => {
        if (mesh.material instanceof THREE.MeshBasicMaterial) {
          const wave = Math.sin(x * 0.5 + y * 0.3 + z * 0.4 + time);
          const colorIndex = Math.floor(((wave + 1) / 2) * colors.length);
          
          const currentColor = new THREE.Color(colors[colorIndex % colors.length]);
          const nextColor = new THREE.Color(colors[(colorIndex + 1) % colors.length]);
          const mixFactor = ((wave + 1) / 2) * colors.length - colorIndex;
          
          mesh.material.color.copy(currentColor).lerp(nextColor, mixFactor);
          mesh.material.opacity = 0.6 + ((wave + 1) / 2) * 0.3;
        }
      });

      // Rotate the scene
      scene.rotation.y += 0.01;
      scene.rotation.x = 0.3; // Fixed tilt

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
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

  return <div ref={containerRef} className="w-10 h-10" />
}
