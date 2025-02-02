import { useRef, useState } from 'react';
import Image from 'next/image';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

export default function ZoomableImage({ src, alt, width, height, style }: ZoomableImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('scale(1) translate(0, 0)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Calculate the transform offset based on mouse position
    const offsetX = (x - 0.5) * 200;
    const offsetY = (y - 0.5) * 200;

    setTransform(`scale(1.25) translate(${-offsetX}px, ${-offsetY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('scale(1) translate(0, 0)');
  };

  return (
    <div
      ref={imageRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: style?.borderRadius || '16px',
        width: '100%',
        maxWidth: style?.maxWidth || '600px',
        margin: style?.margin || '20px auto',
        aspectRatio: width / height,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform,
          transition: 'transform 0.1s ease-out',
          ...style,
        }}
      />
    </div>
  );
}
