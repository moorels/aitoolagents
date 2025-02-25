'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './ClientCarousel.module.css';

interface ClientCarouselProps {
  speed?: number; // pixels per second
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ speed = 50 }) => {
  const [images, setImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef<number>(0);
  const directionRef = useRef<1 | -1>(1); // 1 for right, -1 for left

  useEffect(() => {
    const loadImages = async () => {
      const imageCount = 15;
      const imageList: string[] = [];
      for (let i = 1; i <= imageCount; i++) {
        try {
          const img = `/clients/${i}.png`;
          imageList.push(img);
        } catch (error) {
          console.log(`Image ${i} not found`);
        }
      }
      setImages(imageList);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!containerRef.current || images.length === 0) return;

    let lastTime = performance.now();
    const maxScroll = containerRef.current.scrollWidth / 3;

    const animate = () => {
      const currentTime = performance.now();
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Update position based on direction
      positionRef.current += directionRef.current * (speed * delta) / 1000;

      // Check bounds and reverse direction if needed
      if (positionRef.current <= -maxScroll) {
        positionRef.current = -maxScroll;
        directionRef.current = 1; // Start moving right
      } else if (positionRef.current >= 0) {
        positionRef.current = 0;
        directionRef.current = -1; // Start moving left
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lastTime = performance.now();
          animationRef.current = requestAnimationFrame(animate);
        } else if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [speed, images]);

  return (
    <div className={styles.carouselContainer}>
      <div ref={containerRef} className={styles.scrollingWrapper}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Client ${index + 1}`}
            className={styles.clientImage}
            loading="eager"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
