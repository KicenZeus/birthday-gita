"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-[#0c0608] flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-7xl mb-6"
      >
        ❤️
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-white/80 text-xl font-light tracking-wide"
      >
        loading for someone special...
      </motion.h1>

      {/* Bouncing dots */}
      <div className="flex gap-2 mt-5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
            className="w-2 h-2 rounded-full bg-red-500"
          />
        ))}
      </div>
    </motion.div>
  );
}