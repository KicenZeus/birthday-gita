"use client";

import { motion } from "framer-motion";

const ITEMS = ["❤️", "🩷", "💕", "💖", "✨", "🌹", "💝", "🫶", "🎀", "⭐"];

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 14 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg select-none"
          initial={{
            x: `${(i * 7.3) % 95}vw`,
            y: "110vh",
            opacity: 0,
            scale: 0.5 + (i % 3) * 0.25,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.55, 0.55, 0],
          }}
          transition={{
            duration: 9 + (i % 4) * 2,
            delay: i * 0.9,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {ITEMS[i % ITEMS.length]}
        </motion.div>
      ))}
    </div>
  );
}