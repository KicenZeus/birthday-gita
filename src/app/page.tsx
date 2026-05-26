"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "26022026") {
      router.push("/question");
    } else {
      alert("Parah");
    }
  };
  useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);

}, []);

if (loading) {
  return <Loader />;
}
  return (
    <main className="min-h-screen bg-[#120909] flex items-center justify-center px-5">
      <FloatingHearts />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
      >

        <h1 className="text-white text-3xl font-bold text-center mb-3">
          For Ur Birthday ❤️
        </h1>

        <p className="text-gray-400 text-center text-sm mb-8">
          tebak password
        </p>

        <input
          type="password"
          placeholder="DDMMYYYY"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none mb-5"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-700 hover:bg-red-600 transition-all text-white py-3 rounded-xl"
        >
          masuk
        </button>

      </motion.div>
        
    </main>
  );
}