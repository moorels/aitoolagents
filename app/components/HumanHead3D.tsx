'use client'

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

    // Materials

    const materials = {

      primary: new THREE.MeshPhysicalMaterial({

        color: new THREE.Color('#FDD017'), // Rich gold color

        metalness: 0.9,

        roughness: 0.1,

        envMapIntensity: 1.5,

        clearcoat: 0.8,

        clearcoatRoughness: 0.2,

      }),

      secondary: new THREE.MeshPhysicalMaterial({

        color: new THREE.Color('#FFE5B4'), // Peach gold for contrast

        metalness: 0.8,

        roughness: 0.2,

        envMapIntensity: 1,

        clearcoat: 0.5,

        clearcoatRoughness: 0.3,

      }),

      eyes: new THREE.MeshPhysicalMaterial({

        color: new THREE.Color('#000000'),

        metalness: 0.1,

        roughness: 0.9,

        emissive: new THREE.Color('#222222'),

      }),

      lips: new THREE.MeshPhysicalMaterial({

        color: new THREE.Color('#CD7F32'), // Bronze gold for lips

        metalness: 0.7,

        roughness: 0.3,

      })

    };

    // Helper function to create segments

    const createSegment = (

      geometry: THREE.BufferGeometry,

      position: THREE.Vector3,

      material: THREE.Material,

      rotation?: THREE.Euler

    ): THREE.Mesh => {

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.copy(position);

      if (rotation) {

        mesh.rotation.copy(rotation);

      }

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

    // Add eyes

    const leftEye = createSegment(

      new THREE.SphereGeometry(0.2, 32, 32),

      new THREE.Vector3(-0.5, 0.3, 1.1),

      materials.eyes

    );

    const rightEye = createSegment(

      new THREE.SphereGeometry(0.2, 32, 32),

      new THREE.Vector3(0.5, 0.3, 1.1),

      materials.eyes

    );

    // Add eyebrows

    const leftEyebrow = createSegment(

      new THREE.BoxGeometry(0.4, 0.1, 0.1),

      new THREE.Vector3(-0.5, 0.6, 1.1),

      materials.secondary,

      new THREE.Euler(0, 0, -0.2)

    );

    const rightEyebrow = createSegment(

      new THREE.BoxGeometry(0.4, 0.1, 0.1),

      new THREE.Vector3(0.5, 0.6, 1.1),

      materials.secondary,

      new THREE.Euler(0, 0, 0.2)

    );

    // Add nose

    const nose = createSegment(

      new THREE.ConeGeometry(0.2, 0.4, 32),

      new THREE.Vector3(0, 0, 1.2),

      materials.secondary,

      new THREE.Euler(Math.PI / 2, 0, 0)

    );

    // Add mouth

    const mouth = createSegment(

      new THREE.BoxGeometry(0.8, 0.15, 0.1),

      new THREE.Vector3(0, -0.4, 1.1),

      materials.lips,

      new THREE.Euler(0, 0, 0.1)

    );

    // Enhanced lighting for gold material

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);

    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);

    mainLight.position.set(5, 5, 5);

    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xFFF5EE, 0.5); // Warm fill light

    fillLight.position.set(-5, 0, 5);

    scene.add(fillLight);

    // Add rim light for gold shine

    const rimLight = new THREE.DirectionalLight(0xFFD700, 0.3);

    rimLight.position.set(0, 0, -5);

    scene.add(rimLight);

    // Camera position

    camera.position.z = 4;

    // Add OrbitControls

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;

    controls.dampingFactor = 0.05;

    controls.minDistance = 2;

    controls.maxDistance = 10;

    // Animation loop

    let time = 0;

    const animate = () => {

      requestAnimationFrame(animate);

      

      // Subtle head movement

      main.rotation.y = Math.sin(time * 0.5) * 0.1;

      main.rotation.x = Math.sin(time * 0.3) * 0.05;

      

      time += 0.02;

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