'use client'
import React, { useEffect, useState } from 'react';
import styles from './ClientCarousel.module.css';

interface ClientCarouselProps {
}

const ClientCarousel: React.FC<ClientCarouselProps> = () => {
  const [images, setImages] = useState<string[]>([]);

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

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollingWrapper}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Client ${index + 1}`} className={styles.clientImage} />
        ))}
        {/* Duplicate images for seamless scrolling */}
        {images.map((img, index) => (
          <img key={`duplicate-${index}`} src={img} alt={`Client ${index + 1}`} className={styles.clientImage} />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
