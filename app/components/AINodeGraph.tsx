'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

const CSS2DRenderer = dynamic(() => import('three/examples/jsm/renderers/CSS2DRenderer').then(mod => mod.CSS2DRenderer), { ssr: false });
const CSS2DObject = dynamic(() => import('three/examples/jsm/renderers/CSS2DRenderer').then(mod => mod.CSS2DObject), { ssr: false });

interface Node {
  x: number;
  y: number;
  text: string;
  color: string;
  connections: number[];
}

interface CubeInfo {
  mesh: THREE.Mesh;
  label: CSS2DObject;
}

interface Particle {
  mesh: THREE.Points;
  progress: number;
  speed: number;
  fromNode: number;
  toNode: number;
}

const AINodeGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = 400;
    const height = 800;
    const camera = new THREE.PerspectiveCamera(70, width/height, 0.1, 2000);

    // Main renderer for 3D
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    containerRef.current.appendChild(renderer.domElement);

    // Label renderer for text
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.left = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    containerRef.current.appendChild(labelRenderer.domElement);

    // Create grid
    

    // Business tasks nodes
    const tasks: Node[] = [
      { x: width/2, y: 80, text: "AI Agent", color: "#6366f1", connections: [1,2,3,4,5,6,7,8,9,10,11,12,13,14] },
      // Communication
      { x: 100, y: 180, text: "Email", color: "#3b82f6", connections: [] },
      { x: 300, y: 180, text: "Call", color: "#10b981", connections: [] },
      { x: 200, y: 240, text: "Chat", color: "#f59e0b", connections: [] },
      // Information
      { x: 100, y: 320, text: "Search", color: "#ec4899", connections: [] },
      { x: 300, y: 320, text: "Research", color: "#8b5cf6", connections: [] },
      { x: 200, y: 380, text: "Analytics", color: "#14b8a6", connections: [] },
      // Organization
      { x: 100, y: 460, text: "Schedule", color: "#f43f5e", connections: [] },
      { x: 300, y: 460, text: "Tasks", color: "#6366f1", connections: [] },
      { x: 200, y: 520, text: "Projects", color: "#3b82f6", connections: [] },
      // Documentation
      { x: 100, y: 600, text: "Document", color: "#10b981", connections: [] },
      { x: 300, y: 600, text: "Report", color: "#f59e0b", connections: [] },
      { x: 200, y: 660, text: "Present", color: "#ec4899", connections: [] },
      // Management
      { x: 100, y: 740, text: "Monitor", color: "#8b5cf6", connections: [] },
      { x: 300, y: 740, text: "Optimize", color: "#14b8a6", connections: [] }
    ];

    // Create cubes and labels
    const cubes: CubeInfo[] = [];
    tasks.forEach(task => {
      // Create cube
      const geometry = new THREE.BoxGeometry(40, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(task.color),
        transparent: true,
        opacity: 0.8
      });
      const cube = new THREE.Mesh(geometry, material);
      
      // Convert coordinates
      const worldX = (task.x / width) * width - width/2;
      const worldY = -(task.y / height) * height + height/2;
      cube.position.set(worldX, worldY, 0);
      scene.add(cube);

      // Create label
      const labelDiv = document.createElement('div');
      labelDiv.className = 'text-white text-sm';
      labelDiv.textContent = task.text;
      const label = new CSS2DObject(labelDiv);
      cube.add(label);

      cubes.push({ mesh: cube, label });
    });

    // Create connections
    tasks[0].connections.forEach(targetIndex => {
      const fromNode = tasks[0];
      const toNode = tasks[targetIndex];
      
      const fromVec = new THREE.Vector3(
        (fromNode.x / width) * width - width/2,
        -(fromNode.y / height) * height + height/2,
        0
      );
      const toVec = new THREE.Vector3(
        (toNode.x / width) * width - width/2,
        -(toNode.y / height) * height + height/2,
        0
      );
      
      const points = [fromVec, toVec];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1
      });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    });

    // Create particle system
    const particles: Particle[] = [];
    const createParticle = (fromNode: Node, toNode: Node) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        color: new THREE.Color(toNode.color),
        size: 4,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: false
      });
      
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      return {
        mesh: points,
        progress: 0,
        speed: 0.5 + Math.random() * 0.5,
        fromNode: tasks.indexOf(fromNode),
        toNode: tasks.indexOf(toNode)
      };
    };

    // Position camera
    camera.position.z = 800;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes
      cubes.forEach(({ mesh }) => {
        mesh.rotation.y += 0.01;
      });

      // Update particles
      if (Math.random() < 0.03) {
        tasks[0].connections.forEach(targetIndex => {
          particles.push(createParticle(tasks[0], tasks[targetIndex]));
        });
      }

      particles.forEach((particle, index) => {
        particle.progress += particle.speed / 100;
        if (particle.progress >= 1) {
          scene.remove(particle.mesh);
          particle.mesh.geometry.dispose();
          (particle.mesh.material as THREE.PointsMaterial).dispose();
          particles.splice(index, 1);
          return;
        }

        const fromNode = tasks[particle.fromNode];
        const toNode = tasks[particle.toNode];
        const fromVec = new THREE.Vector3(
          (fromNode.x / width) * width - width/2,
          -(fromNode.y / height) * height + height/2,
          0
        );
        const toVec = new THREE.Vector3(
          (toNode.x / width) * width - width/2,
          -(toNode.y / height) * height + height/2,
          0
        );
        
        const currentPos = fromVec.lerp(toVec, particle.progress);
        const positions = particle.mesh.geometry.attributes.position.array;
        positions[0] = currentPos.x;
        positions[1] = currentPos.y;
        positions[2] = currentPos.z;
        particle.mesh.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      labelRenderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[350px] h-[700px] flex items-center justify-center" />
  );
};

export default AINodeGraph;
