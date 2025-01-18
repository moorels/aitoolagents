'use client'

import Keypad from "../components/Keypad";
import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-keypad-gold text-3xl md:text-4xl font-light mb-4">
          Enter PIN
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Please enter your 6-digit security code
        </p>
      </motion.div>
      <Keypad />
    </div>
  );
}
