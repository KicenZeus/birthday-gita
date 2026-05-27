"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "@/components/MusicPlayer";

export default function GiftPage() {
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState("");
  const router = useRouter();

  // ← DITAMBAH: auth check
  useEffect(() => {
    const auth = localStorage.getItem("birthday-auth");
    if (!auth) {
      router.push("/");
      return;
    }
    setMounted(true);
  }, [router]);

  const email = "AmeMemories@yahut.io";       // ← GANTI
  const password = "xxxxxxx";         // ← GANTI

  const copyText = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/1.jpg"
          alt=""
          className="w-full h-full object-cover blur-xl scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <MusicPlayer />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-10"
        >
          special gift for u 🎁❤️
        </motion.h1>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="giftbox"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 15 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpened(true)}
              className="cursor-pointer"
            >
              {/* Bouncing dipisah ke div dalam biar ga ganggu exit */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 blur-[120px] opacity-50" />
                  <div className="relative w-[220px] h-[220px] bg-gradient-to-br from-red-700 to-red-900 rounded-3xl shadow-[0_0_60px_rgba(255,0,0,0.5)] flex items-center justify-center">
                    <div className="absolute w-10 h-full bg-red-300/40" />
                    <div className="absolute h-10 w-full bg-red-300/40" />
                    <div className="absolute -top-8 flex gap-2">
                      <div className="w-14 h-14 border-[10px] border-red-300 rounded-full" />
                      <div className="w-14 h-14 border-[10px] border-red-300 rounded-full" />
                    </div>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-white text-2xl font-bold"
                    >
                      tap me 💌
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.7, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-[0_0_60px_rgba(255,0,0,0.25)]"
            >
              <h2 className="text-white text-3xl font-bold text-center mb-8">
                akun spesial buat kamu ❤️
              </h2>

              {/* Email */}
              <div className="mb-6">
                <p className="text-red-300 mb-2 text-sm">email</p>
                <div className="flex items-center justify-between gap-3 bg-black/30 rounded-2xl p-4">
                  <span className="text-white break-all text-sm">{email}</span>
                  <button
                    onClick={() => copyText(email, "email")}
                    className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-xl text-white text-sm transition-all shrink-0"
                  >
                    {copied === "email" ? "copied! ✓" : "copy"}
                  </button>
                </div>
              </div>

              {/* Password */}
              <div className="mb-8">
                <p className="text-red-300 mb-2 text-sm">password</p>
                <div className="flex items-center justify-between gap-3 bg-black/30 rounded-2xl p-4">
                  <span className="text-white break-all text-sm">{password}</span>
                  <button
                    onClick={() => copyText(password, "password")}
                    className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-xl text-white text-sm transition-all shrink-0"
                  >
                    {copied === "password" ? "copied! ✓" : "copy"}
                  </button>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-white/80 leading-relaxed"
              >
                panjang umur, sehat selalu
                <br />
                semoga kamu suka ya sayang ❤️
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}