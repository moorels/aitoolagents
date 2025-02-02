'use client'
import React, { useEffect, useRef } from 'react';

const CurvedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const drawSimpleWaterEffect = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    // Clear with base color
    ctx.fillStyle = '#040812';
    ctx.fillRect(0, 0, width, height);

    // Draw simplified waves
    const numWaves = Math.floor(height / 100); // One wave every 100px
    const waveHeight = 40;
    const baseY = height / 2;

    ctx.beginPath();
    ctx.moveTo(0, height);

    // Draw waves from bottom to middle
    for (let i = 0; i <= numWaves; i++) {
      const y = baseY + i * 100;
      
      for (let x = 0; x <= width; x += 100) {
        const xOffset = x + Math.sin(time + i) * 50;
        const yOffset = y + Math.sin(time * 0.5 + x * 0.01) * waveHeight;
        
        if (x === 0) {
          ctx.moveTo(xOffset, yOffset);
        } else {
          ctx.lineTo(xOffset, yOffset);
        }
      }
    }

    // Fill bottom half
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();

    // Create gradient
    const gradient = ctx.createLinearGradient(0, baseY, 0, height);
    gradient.addColorStop(0, 'rgba(0, 120, 255, 0.2)');
    gradient.addColorStop(0.5, 'rgba(0, 100, 200, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 80, 160, 0.4)');

    ctx.fillStyle = gradient;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false })!;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      timeRef.current += 0.01; // Slower animation
      drawSimpleWaterEffect(ctx, canvas.width, canvas.height, timeRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default CurvedBackground;
