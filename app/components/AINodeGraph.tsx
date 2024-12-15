'use client'
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  text: string;
  color: string;
  connections: number[];
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  progress: number;
  color: string;
  fromNode: number;
  toNode: number;
}

const AINodeGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 800;

    // Business tasks nodes
    const tasks: Node[] = [
      { x: canvas.width/2, y: 80, text: "AI Agent", color: "#6366f1", connections: [1,2,3,4,5,6,7,8,9,10,11,12,13,14] },
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

    // Create particles for connection lines
    let particles: Particle[] = [];
    const createParticles = () => {
      tasks[0].connections.forEach(targetIndex => {
        if (Math.random() < 0.05) { // Control particle creation rate
          particles.push({
            x: tasks[0].x,
            y: tasks[0].y,
            speed: 2 + Math.random() * 2,
            progress: 0,
            color: tasks[targetIndex].color,
            fromNode: 0,
            toNode: targetIndex
          });
        }
      });
    };

    // Update particle positions
    const updateParticles = () => {
      particles = particles.filter(p => {
        p.progress += p.speed / 100;
        if (p.progress >= 1) return false;

        const fromNode = tasks[p.fromNode];
        const toNode = tasks[p.toNode];
        p.x = fromNode.x + (toNode.x - fromNode.x) * p.progress;
        p.y = fromNode.y + (toNode.y - fromNode.y) * p.progress;
        return true;
      });
    };

    // Draw connection lines
    const drawConnections = () => {
      tasks[0].connections.forEach(targetIndex => {
        const fromNode = tasks[0];
        const toNode = tasks[targetIndex];
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      });
      ctx.shadowBlur = 0;
    };

    // Draw nodes
    const drawNode = (node: Node) => {
      const size = 40;
      
      // Draw glow
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 15;
      
      // Draw square
      ctx.fillStyle = node.color;
      ctx.fillRect(node.x - size/2, node.y - size/2, size, size);

      // Draw text
      ctx.shadowBlur = 0;
      ctx.font = '14px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.text, node.x, node.y);
    };

    // Draw grid background
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      drawConnections();
      createParticles();
      updateParticles();
      drawParticles();
      tasks.forEach(node => drawNode(node));

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate as unknown as number);
    };
  }, []);

  return (
    <div className="relative w-[350px] h-[700px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default AINodeGraph;
