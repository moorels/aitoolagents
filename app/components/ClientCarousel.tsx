'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './ClientCarousel.module.css';

interface ClientCarouselProps {
  speed?: number; // pixels per second
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ speed = 40 }) => { 
  const [images, setImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef<number>(0);
  const directionRef = useRef<1 | -1>(1); // 1 for right, -1 for left
  const lastTimeRef = useRef<number>(0);

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

    const maxScroll = containerRef.current.scrollWidth / 3;
    let prevPosition = positionRef.current;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = timestamp - lastTimeRef.current;
      const clampedDelta = Math.min(deltaTime, 32); 

      const targetPosition = positionRef.current + (directionRef.current * speed * clampedDelta) / 1000;
      
      positionRef.current = prevPosition + (targetPosition - prevPosition) * 0.3;
      prevPosition = positionRef.current;

      if (positionRef.current <= -maxScroll) {
        positionRef.current = -maxScroll;
        directionRef.current = 1; 
        prevPosition = positionRef.current;
      } else if (positionRef.current >= 0) {
        positionRef.current = 0;
        directionRef.current = -1; 
        prevPosition = positionRef.current;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      lastTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = 0;
    animationRef.current = requestAnimationFrame(animate);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lastTimeRef.current = 0;
          prevPosition = positionRef.current;
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
