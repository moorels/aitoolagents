import { cn } from "../lib/utils";
import { useState } from "react";
import { playTone } from "../utils/audio";

interface KeypadButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
  isSpecial?: boolean;
}

const KeypadButton = ({ value, onClick, className, isSpecial }: KeypadButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    // Play different tones based on the button type
    if (value === "C") {
      playTone(800, 150); // Higher pitch for Clear
    } else if (value === "Enter") {
      playTone(1200, 150); // Highest pitch for Enter
    } else {
      // Calculate frequency based on number (higher numbers = higher pitch)
      const baseFrequency = 600;
      const frequency = baseFrequency + (parseInt(value) || 0) * 50;
      playTone(frequency, 100);
    }
    onClick(value);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <button
      className={cn(
        "w-16 h-16 md:w-20 md:h-20 rounded-lg bg-[#c49d17]",
        "text-2xl md:text-3xl font-light",
        "transition-all duration-200 ease-in-out",
        " hover:scale-105 hover:bg-white",
        
        "shadow-lg hover:shadow-keypad-glow",
        isPressed 
          ? "text-[#FFD700] scale-95 animate-key-press" 
          : "text-black",
        isSpecial && !isPressed && "text-white",
        className
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default KeypadButton;