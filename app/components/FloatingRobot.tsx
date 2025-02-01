import { useEffect, useState, useRef } from 'react';
import './FloatingRobot.css';

const FloatingRobot = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const positionRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const moveToRandomPosition = () => {
      const MAX_DISTANCE_CM = 10;
      const PIXELS_PER_CM = 37.8;
      const MAX_PIXELS = MAX_DISTANCE_CM * PIXELS_PER_CM;

      // Calculate random movement within 10cm radius
      const randomAngle = Math.random() * 2 * Math.PI;
      const randomDistance = Math.random() * MAX_PIXELS;
      
      const deltaX = Math.cos(randomAngle) * randomDistance;
      const deltaY = Math.sin(randomAngle) * randomDistance;

      // Calculate new position
      let newX = positionRef.current.x + deltaX;
      let newY = positionRef.current.y + deltaY;

      // Keep within window bounds
      newX = Math.max(0, Math.min(newX, window.innerWidth));
      newY = Math.max(0, Math.min(newY, window.innerHeight));

      // Update both state and ref
      setPosition({ x: newX, y: newY });
      positionRef.current = { x: newX, y: newY };
    };

    moveToRandomPosition(); // Initial position
    const interval = setInterval(moveToRandomPosition, 3000); // Change position every 3 seconds

    const handleResize = () => {
      // Keep robot in bounds when window resizes
      const newX = Math.min(positionRef.current.x, window.innerWidth);
      const newY = Math.min(positionRef.current.y, window.innerHeight);
      setPosition({ x: newX, y: newY });
      positionRef.current = { x: newX, y: newY };
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="floating-robot-container">
      <img 
        src="/robo1.png" 
        alt="Floating Robot" 
        className="floating-robot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </div>
  );
};

export default FloatingRobot;