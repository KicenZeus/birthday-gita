"use client";

import { motion } from "framer-motion";

export default function Loader() {

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="fixed inset-0 z-[999] bg-[#120909] flex flex-col items-center justify-center"
    >

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="text-6xl"
      >
        ❤️
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="text-white text-2xl mt-6"
      >
        loading for someone special...
      </motion.h1>

    </motion.div>
  );
}