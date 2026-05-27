"use client";

import { motion } from "framer-motion";

export default function LetterAnimation() {
  return (
    <div
      className="relative w-[310px] h-[290px] flex items-end justify-center"
      style={{ perspective: "900px" }}
    >
      {/* ENVELOPE BODY */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 w-[310px] h-[200px] bg-[#7a1d1d] rounded-b-[20px] shadow-2xl overflow-hidden"
      >
        {/* Decoration lines di dalam amplop */}
        <div
          className="absolute bottom-0 left-0 w-1/2 h-full bg-[#5e1515] opacity-50"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full bg-[#5e1515] opacity-50"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        />
      </motion.div>

      {/* ENVELOPE FLAP — bentuk segitiga, flip ke atas */}
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: -180 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transformOrigin: "top",
          transformStyle: "preserve-3d",
          position: "absolute",
          top: 90,
          left: 0,
          width: "100%",
          height: 110,
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <div
          className="w-full h-full bg-[#a32929]"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
        />
      </motion.div>

      {/* LETTER — slide keluar dari amplop */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -55, opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-[268px] bg-[#fdf6ee] rounded-[18px] p-5 shadow-2xl z-20"
        style={{ bottom: 20 }}
      >
        <h2 className="text-xl font-bold text-[#7a1d1d] mb-3">
          for Sayangku ❤️
        </h2>
        <p className="text-gray-700 leading-7 text-[13px]">
          happy birthday sayangkuuu,
          semoga semua hal baik selalu datang ke hidup kamu ✨
          <br /><br />
          makasih udah jadi rumah ternyaman buat aku.
          sayang banget sama kamu
          <br />
          Love You Sayangku ❤️
        </p>
      </motion.div>
    </div>
  );
}