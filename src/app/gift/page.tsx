"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Gift,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

export default function GiftPage() {

  const [opened, setOpened] = useState(false);

  const [copied, setCopied] = useState("");

  const email = "example@gmail.com";
  const password = "yourpassword123";

  const handleCopy = async (
    text: string,
    type: string
  ) => {

    await navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120909] flex items-center justify-center px-5">
      <FloatingHearts />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-700 opacity-20 blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-700 opacity-20 blur-[140px]" />

      </div>

      {/* FLOATING SPARKLES */}
      {opened && (
        <>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: (i % 2 === 0 ? 1 : -1) * (80 + i * 10),
                y: -120 - i * 10,
              }}
              transition={{
                duration: 1.5,
              }}
              className="absolute z-20"
              style={{
                left: "50%",
                top: "50%",
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">

        <AnimatePresence mode="wait">

          {!opened ? (

            <motion.div
              key="giftbox"
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
            >

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-white text-4xl font-bold mb-10"
              >
                ada hadiah buat kamu 🎁
              </motion.h1>

              {/* GIFT BOX */}
              <motion.button
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setOpened(true)}
                className="relative"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-red-700 blur-[60px] opacity-50 rounded-full" />

                <div className="relative w-40 h-40 rounded-[40px] bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl">

                  <Gift
                    size={70}
                    className="text-white"
                  />

                </div>

              </motion.button>

              <p className="text-gray-400 mt-10">
                pencet kadonya sayang ❤️
              </p>

            </motion.div>

          ) : (

            <motion.div
              key="openedgift"
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
            >

              <Sparkles
                className="text-red-400 mx-auto mb-5"
                size={50}
              />

              <h1 className="text-white text-3xl font-bold mb-5">
                surpriseee ❤️
              </h1>

              <p className="text-gray-300 leading-8 mb-8">
                ini hadiah kecil buat kamu ✨
                semoga kamu suka ya sayang 😭❤️
              </p>

              {/* EMAIL */}
              <div className="bg-black/40 rounded-2xl p-5 border border-white/10 text-left mb-5">

                <p className="text-red-400 text-sm mb-2">
                  email:
                </p>

                <div className="flex items-center justify-between gap-3">

                  <p className="text-white break-all">
                    {email}
                  </p>

                  <button
                    onClick={() =>
                      handleCopy(email, "email")
                    }
                    className="text-white"
                  >
                    {copied === "email" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* PASSWORD */}
              <div className="bg-black/40 rounded-2xl p-5 border border-white/10 text-left">

                <p className="text-red-400 text-sm mb-2">
                  password:
                </p>

                <div className="flex items-center justify-between gap-3">

                  <p className="text-white break-all">
                    {password}
                  </p>

                  <button
                    onClick={() =>
                      handleCopy(password, "password")
                    }
                    className="text-white"
                  >
                    {copied === "password" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </main>
  );
}