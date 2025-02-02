import { useState } from "react";
import KeypadButton from "./KeypadButton";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useRouter } from "next/navigation";
import SHA256 from "crypto-js/sha256";
import { useAuth } from "../contexts/AuthContext";

const Keypad = () => {
  const [pin, setPin] = useState<string>("");
  const maxLength = 6;
  const router = useRouter();
  const { login } = useAuth();

  // Encrypted password hash for "578879"
  const CORRECT_PIN_HASH = SHA256("578879").toString();

  const handleKeyPress = (value: string) => {
    if (value === "C") {
      setPin("");
      return;
    }

    if (value === "Enter") {
      if (pin.length < maxLength) {
        toast.error("Please enter a 6-digit PIN");
        return;
      }
      
      // Check if PIN is correct
      const hashedPin = SHA256(pin).toString();
      if (hashedPin === CORRECT_PIN_HASH) {
        toast.success("Login successful!");
        login();
        router.push("/admin/dashboard");
      } else {
        toast.error("Incorrect PIN");
        setPin("");
      }
      return;
    }

    if (pin.length < maxLength) {
      setPin(prev => prev + value);
    }
  };

  const renderPinDisplay = () => {
    const dots = [];
    for (let i = 0; i < maxLength; i++) {
      dots.push(
        <div
          key={i}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 bg-[#c49d17]",
            i < pin.length
              ? "bg-keypad-gold shadow-[0_0_10px_#FFD700] animate-glow bg-[#c49d17]"
              : "bg-gray-600"
          )}
        />
      );
    }
    return dots;
  };

  const buttons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["C", "0", "Enter"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8"
    >
      <div className="flex gap-4 mb-8">{renderPinDisplay()}</div>
      <div className="grid grid-cols-3 gap-4">
        {buttons.map((row, rowIndex) =>
          row.map((btn, btnIndex) => (
            <KeypadButton
              key={`${rowIndex}-${btnIndex}`}
              value={btn}
              onClick={handleKeyPress}
              isSpecial={btn === "C" || btn === "Enter"}
              className={btn === "Enter" ? "bg-[#c49d17] hover:bg-white hover:text-[#c49d17] text-black" :
               btn === "C" ? "bg-[#c49d17] hover:bg-white hover:text-[#c49d17] text-black" : undefined
              }
             
            />
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Keypad;