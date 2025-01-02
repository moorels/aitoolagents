'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const HumanHead3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Create gradient texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(0.5, '#FFD700');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const gradientTexture = new THREE.CanvasTexture(canvas);
    gradientTexture.wrapS = THREE.RepeatWrapping;
    gradientTexture.wrapT = THREE.RepeatWrapping;

    // Materials with updated gradient
    const materials = {
      primary: new THREE.MeshPhysicalMaterial({
        map: gradientTexture,
        metalness: 0.9,
        roughness: 0.1,
        envMapIntensity: 1,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
      }),
      secondary: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#9CA3AF'),
        metalness: 0.8,
        roughness: 0.2,
        envMapIntensity: 1,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3,
      }),
      glow1: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFD700'),
        emissive: new THREE.Color('#FFD700'),
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9,
      }),
      glow2: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFFFFF'),
        emissive: new THREE.Color('#FFFFFF'),
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.8,
      })
    };

    // Create environment map for reflections
    const envMapLoader = new THREE.CubeTextureLoader();
    const envMap = envMapLoader.load([
      'px.jpg', 'nx.jpg',
      'py.jpg', 'ny.jpg',
      'pz.jpg', 'nz.jpg'
    ]);
    scene.environment = envMap;

    // Helper function to create segments
    const createSegment = (
      geometry: THREE.BufferGeometry,
      position: THREE.Vector3,
      material: THREE.Material,
    ): THREE.Mesh => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    };

    // Create head parts
    const main = createSegment(
      new THREE.BoxGeometry(2.4, 2.8, 2.4),
      new THREE.Vector3(0, 0, 0),
      materials.primary
    );

    const visor = createSegment(
      new THREE.BoxGeometry(1.6, 0.4, 0.6),
      new THREE.Vector3(0, 0.2, 1.2),
      materials.glow1
    );

    const antenna1 = createSegment(
      new THREE.CylinderGeometry(0.1, 0.1, 0.8),
      new THREE.Vector3(-0.8, 1.4, 0),
      materials.glow2
    );

    const antenna2 = createSegment(
      new THREE.CylinderGeometry(0.1, 0.1, 0.8),
      new THREE.Vector3(0.8, 1.4, 0),
      materials.glow2
    );

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xFFD700, 0.4);
    fillLight.position.set(-5, 0, 5);
    scene.add(fillLight);

    // Add point lights for the swirling effect
    const createSwirlingLight = (color: number, intensity: number) => {
      const light = new THREE.PointLight(color, intensity, 10);
      scene.add(light);
      return light;
    };

    const swirlingLights = [
      createSwirlingLight(0xFFD700, 1),
      createSwirlingLight(0xFFFFFF, 0.8),
      createSwirlingLight(0xFFD700, 1)
    ];

    // Camera position
    camera.position.z = 4;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 10;

    // Animation loop with enhanced effects
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Update swirling lights positions
      swirlingLights.forEach((light, index) => {
        const radius = 3;
        const phase = (2 * Math.PI * index) / swirlingLights.length;
        light.position.x = radius * Math.cos(time + phase);
        light.position.y = radius * Math.sin(time + phase);
        light.position.z = 2 * Math.sin(time * 0.5 + phase);
      });

      // Update gradient texture rotation
      if (main.material instanceof THREE.MeshPhysicalMaterial && main.material.map) {
        main.material.map.offset.x = Math.sin(time * 0.2) * 0.2;
        main.material.map.offset.y = Math.cos(time * 0.2) * 0.2;
        main.material.needsUpdate = true;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default HumanHead3D;