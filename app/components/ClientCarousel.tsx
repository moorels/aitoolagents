'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './ClientCarousel.module.css';

interface ClientCarouselProps {
  speed?: number; // pixels per second
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ speed = 50 }) => {
  const [images, setImages] = useState<string[]>([]);
  const [displayImages, setDisplayImages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);

  // Load initial images
  useEffect(() => {
    const loadImages = async () => {
      const imageCount = 19;
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

  // Set up display images when original images load
  useEffect(() => {
    if (images.length === 0) return;
    // Create a display set that's 3x the original length for smooth looping
    setDisplayImages([...images, ...images, ...images]);
  }, [images]);

  // Animation effect
  useEffect(() => {
    if (!scrollRef.current || displayImages.length === 0) return;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      
      // Update position
      offsetRef.current -= (speed * deltaTime) / 1000;
      
      if (scrollRef.current) {
        const singleSetWidth = scrollRef.current.scrollWidth / 3;
        
        // If we've scrolled past one complete set, reset to the middle set
        if (Math.abs(offsetRef.current) >= singleSetWidth) {
          offsetRef.current += singleSetWidth;
        }
        
        scrollRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      
      lastTimeRef.current = timestamp;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Intersection Observer to pause animation when not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lastTimeRef.current = 0;
            animationFrameRef.current = requestAnimationFrame(animate);
          } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, [speed, displayImages]);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }
  };

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    if (!animationFrameRef.current) {
      lastTimeRef.current = 0;
      animationFrameRef.current = requestAnimationFrame((timestamp) => {
        lastTimeRef.current = timestamp;
        animate(timestamp);
      });
    }
  };

  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const deltaTime = timestamp - lastTimeRef.current;
    
    offsetRef.current -= (speed * deltaTime) / 1000;
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current += singleSetWidth;
      }
      scrollRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
    
    lastTimeRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scrollRef} className={styles.scrollingWrapper}>
        {displayImages.map((img, index) => (
          <img
            key={`${index}-${img}`}
            src={img}
            alt={`Client ${index % images.length + 1}`}
            className={styles.clientImage}
            loading={index < images.length ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
