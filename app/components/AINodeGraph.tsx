'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

interface Node {
  x: number;
  y: number;
  text: string;
  color: string;
  connections: number[];
}

interface CubeInfo {
  mesh: THREE.Mesh;
  label: HTMLDivElement;
  labelContainer: HTMLDivElement;
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
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !labelsRef.current) return;

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

    // Labels container
    const labelsContainer = labelsRef.current;
    labelsContainer.style.position = 'absolute';
    labelsContainer.style.top = '0';
    labelsContainer.style.left = '0';
    labelsContainer.style.width = `${width}px`;
    labelsContainer.style.height = `${height}px`;
    labelsContainer.style.pointerEvents = 'none';

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

    const colors = [
      '#9CA3AF',  // gray-400
      '#4B5563',  // gray-600
      '#1F2937',  // gray-800
      '#111827',  // gray-900
      '#4B5563',  // back to gray-600
    ];

    // Create cubes and labels
    const cubes: CubeInfo[] = [];
    tasks.forEach((task, index) => {
      // Create cube
      const geometry = new THREE.BoxGeometry(40, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colors[index % colors.length]),
        transparent: true,
        opacity: 0.8
      });
      const cube = new THREE.Mesh(geometry, material);
      
      // Convert coordinates
      const worldX = (task.x / width) * width - width/2;
      const worldY = -(task.y / height) * height + height/2;
      cube.position.set(worldX, worldY, 0);
      scene.add(cube);

      // Create label container
      const labelContainer = document.createElement('div');
      labelContainer.style.position = 'absolute';
      labelContainer.style.transform = 'translate(-50%, -50%)';
      labelsContainer.appendChild(labelContainer);

      // Create label
      const labelDiv = document.createElement('div');
      labelDiv.className = 'text-white text-sm px-3 py-0 rounded';
      labelDiv.style.background = 'linear-gradient(145deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.95))';
      labelDiv.style.border = '1px solid';
      labelDiv.style.borderImage = 'linear-gradient(145deg, rgba(192, 192, 192, 0.8), rgba(128, 128, 128, 0.4)) 1';
      labelDiv.style.backdropFilter = 'blur(4px)';
      labelDiv.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1)';
      labelDiv.textContent = task.text;
      labelContainer.appendChild(labelDiv);

      cubes.push({ mesh: cube, label: labelDiv, labelContainer });
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

      // Update label positions
      cubes.forEach(({ mesh, labelContainer }) => {
        mesh.rotation.y += 0.01;
        
        // Project 3D position to 2D screen coordinates
        const vector = mesh.position.clone();
        vector.project(camera);
        
        const x = (vector.x * width / 2) + width / 2;
        const y = -(vector.y * height / 2) + height / 2;
        
        labelContainer.style.left = `${x}px`;
        labelContainer.style.top = `${y}px`;
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

      // Update cube colors
      cubes.forEach((cube, index) => {
        const time = Date.now() * 0.001;
        const wave = Math.sin(cube.mesh.position.x * 0.01 + cube.mesh.position.y * 0.01 + time);
        const colorIndex = Math.floor(((wave + 1) / 2) * colors.length);
        
        const currentColor = new THREE.Color(colors[colorIndex % colors.length]);
        const nextColor = new THREE.Color(colors[(colorIndex + 1) % colors.length]);
        const mixFactor = ((wave + 1) / 2) * colors.length - colorIndex;
        
        
      });

      renderer.render(scene, camera);
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
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      if (labelsRef.current) {
        labelsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-[400px] h-[800px]">
      <div ref={containerRef} className="absolute inset-0" />
      <div ref={labelsRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default AINodeGraph;
