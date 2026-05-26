"use client";

import { motion } from "framer-motion";

export default function LetterAnimation() {
  return (
    <div className="relative w-[320px] h-[260px] flex items-center justify-center">

      {/* ENVELOPE */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute bottom-0 w-[320px] h-[200px] bg-[#7a1d1d] rounded-b-[20px] shadow-2xl overflow-hidden"
      >

        {/* TOP FLAP */}
        <motion.div
          initial={{
            rotateX: 0,
          }}
          animate={{
            rotateX: 180,
          }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
          style={{
            transformOrigin: "top",
          }}
          className="absolute top-0 left-0 w-full h-[120px] bg-[#a32929]"
        />

      </motion.div>

      {/* LETTER */}
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: -40,
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 1.5,
        }}
        className="absolute w-[270px] bg-[#f5e6d3] rounded-[20px] p-6 shadow-2xl z-20"
      >

        <h2 className="text-2xl font-bold text-black mb-4">
          for Sayangku ❤️
        </h2>

        <p className="text-black leading-7 text-sm">
          happy birthday sayangkuuu,
          semoga semua hal baik selalu datang ke hidup kamu ✨
          <br /><br />
          makasih udah jadi rumah ternyaman buat aku.
          sayang banget sama kamu 
          Love You Sayangku❤️
        </p>

      </motion.div>

    </div>
  );
}