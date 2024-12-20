import { useEffect, useRef } from 'react';

export const useHoverSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/hover.mp3');
    audioRef.current.volume = 0.2; // Adjust volume to be subtle
    
    return () => {
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  };

  return playSound;
};
