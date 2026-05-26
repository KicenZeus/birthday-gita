"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(20)].map((_, i) => {

        const size = 12 + Math.random() * 20;

        return (
          <motion.div
            key={i}
            initial={{
              y: "110%",
              x: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.7, 0],
              x: `calc(${Math.random() * 100}% + ${
                Math.random() * 100 - 50
              }px)`,
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            className="absolute text-red-500"
            style={{
              fontSize: `${size}px`,
            }}
          >
            ❤️
          </motion.div>
        );
      })}

    </div>
  );
}