'use client'
import React, { useEffect, useRef } from 'react';

const InfinityLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 100;

    // Particle class for squares
    class Particle {
      x: number;
      y: number;
      t: number;
      color: string;
      size: number;
      speed: number;

      constructor() {
        this.t = Math.random() * Math.PI * 2;
        this.size = 2 + Math.random() * 2;
        this.speed = 0.02 + Math.random() * 0.01;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        
        // Initialize x and y with initial position on infinity curve
        const a = 30;
        const b = 30;
        this.x = canvas.width/2 + a * Math.cos(this.t) / (1 + Math.sin(this.t) * Math.sin(this.t));
        this.y = canvas.height/2 + b * Math.sin(this.t) * Math.cos(this.t) / (1 + Math.sin(this.t) * Math.sin(this.t));
      }

      update() {
        this.t += this.speed;
        // Infinity curve parametric equations
        const a = 30;
        const b = 30;
        this.x = canvas.width/2 + a * Math.cos(this.t) / (1 + Math.sin(this.t) * Math.sin(this.t));
        this.y = canvas.height/2 + b * Math.sin(this.t) * Math.cos(this.t) / (1 + Math.sin(this.t) * Math.sin(this.t));
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
      }
    }

    // Create particles
    const particles: Particle[] = Array.from({ length: 50 }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      // Cancel animation frame if component unmounts
      cancelAnimationFrame(animate as unknown as number);
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[100px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default InfinityLogo;
