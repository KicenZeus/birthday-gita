"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";

export default function QuestionPage() {
  const router = useRouter();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("birthday-auth");
    if (!auth) {
      router.push("/");
      return;
    }
    setMounted(true);
  }, [router]);

  const noMessages = [
    "lah kabur kemana ",
    "jangan gitu dong ",
    "ayo jawab jujur! 😤",
    "hmm kayaknya salah itu 🤔",
    "pilih yang bener dong 🙈",
    "udahhh jawab yang bener ",
  ];

  const moveButton = () => {
    const maxMove = 140;
    const x = (Math.random() - 0.5) * maxMove * 2;
    const y = (Math.random() - 0.5) * maxMove * 2;
    setNoPosition({ x, y });
    setNoCount((c) => c + 1);
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0608] flex items-center justify-center px-5">
      <FloatingHearts />

      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-700/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-700/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[180px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold mb-5 leading-tight"
        >
          kamu sayang <br />
          aku ga? ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/40 mb-4 text-lg"
        >
          jawab yang jujur ya sayang
        </motion.p>

        {/* Pesan saat no diklik */}
        <div className="h-6 mb-10">
          <AnimatePresence mode="wait">
            {noCount > 0 && (
              <motion.p
                key={noCount}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400/70 text-sm"
              >
                {noMessages[(noCount - 1) % noMessages.length]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="relative flex items-center justify-center gap-6 min-h-[80px]">
          {/* YES */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(255,0,0,0.5)",
            }}
            whileTap={{ scale: 0.92 }}
            onClick={() => router.push("/birthday")}
            className="bg-gradient-to-r from-red-700 to-red-500 text-white px-10 py-4 rounded-2xl text-xl shadow-2xl shadow-red-900/50 font-semibold"
          >
            iya ❤️
          </motion.button>

          {/* NO — kabur */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{
              opacity: { delay: 1.2 },
              scale: { delay: 1.2, type: "spring" },
              x: { type: "spring", stiffness: 300, damping: 20 },
              y: { type: "spring", stiffness: 300, damping: 20 },
            }}
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            onClick={moveButton}
            className="bg-white/[0.08] border border-white/10 text-white/60 px-10 py-4 rounded-2xl text-xl backdrop-blur-xl select-none touch-none cursor-pointer"
          >
            tidak 😔
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}