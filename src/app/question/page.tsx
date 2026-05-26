"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

export default function QuestionPage() {
  const router = useRouter();

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {

    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120909] flex items-center justify-center px-5">
      <FloatingHearts />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-700 opacity-20 blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-700 opacity-20 blur-[140px]" />

      </div>

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 text-center"
      >

        <h1 className="text-white text-4xl md:text-5xl font-bold mb-5 leading-tight">
          kamu sayang <br />
          aku ga? ❤️
        </h1>

        <p className="text-gray-400 mb-16">
          jawab yang jujur ya
        </p>

        <div className="relative flex items-center justify-center gap-8">

          {/* YES BUTTON */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => router.push("/birthday")}
            className="bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-2xl text-xl shadow-2xl"
          >
            iya ❤️
          </motion.button>

          {/* NO BUTTON */}
          <motion.button
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            onMouseEnter={moveButton}
            onClick={moveButton}
            className="bg-white/10 border border-white/10 text-white px-10 py-4 rounded-2xl text-xl backdrop-blur-xl"
          >
            tidak 
          </motion.button>

        </div>

      </motion.div>

    </main>
  );
}