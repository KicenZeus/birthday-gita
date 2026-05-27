"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Loader from "@/components/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (password === "26022026") {
      localStorage.setItem("birthday-auth", "true"); // ← FIX UTAMA
      router.push("/question");
    } else {
      setShake(true);
      setError(true);
      setPassword("");
      setTimeout(() => {
        setShake(false);
        setError(false);
        inputRef.current?.focus();
      }, 700);
    }
  };

  return (
    <>
      {/* Loader dengan exit animation yang smooth */}
      <AnimatePresence>{showLoader && <Loader key="loader" />}</AnimatePresence>

      {!showLoader && (
        <main className="min-h-screen bg-[#0c0608] flex items-center justify-center px-5 relative overflow-hidden">
          <FloatingHearts />

          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/15 blur-[100px] rounded-full" />
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-red-800/10 blur-3xl rounded-full animate-pulse" />
            <div
              className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-pink-900/10 blur-3xl rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 shadow-2xl">
              {/* Animated icon */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], rotate: [0, 6, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-5xl text-center mb-6"
              >
                💌
              </motion.div>

              <h1 className="text-white text-2xl font-bold text-center mb-2">
                For Ur Birthday Ame❤️
              </h1>
              <p className="text-white/40 text-center text-sm mb-8">
                tebak password 
              </p>

              {/* Input + shake animation */}
              <motion.div
                animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  ref={inputRef}
                  type="password"
                  inputMode="numeric"
                  placeholder="DDMMYYYY"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value.replace(/\D/g, "").slice(0, 8))
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full bg-black/30 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-center tracking-widest outline-none transition-all mb-2 placeholder:text-white/20"
                />

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs text-center mb-3"
                    >
                      coba ingat lagi ya 
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleLogin}
                className="w-full mt-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-red-900/30"
              >
                masuk ❤️
              </motion.button>
            </div>
          </motion.div>
        </main>
      )}
    </>
  );
}