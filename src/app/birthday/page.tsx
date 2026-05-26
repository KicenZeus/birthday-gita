"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import MusicPlayer from "@/components/MusicPlayer";
import Link from "next/link";
import LetterAnimation from "@/components/LetterAnimation";
import FloatingHearts from "@/components/FloatingHearts";


const photos = [
  { src: "/photos/1.jpg", top: "5%", left: "10%", rotate: "-6deg" },
  { src: "/photos/2.jpg", top: "12%", left: "70%", rotate: "8deg" },
  { src: "/photos/3.jpg", top: "25%", left: "20%", rotate: "-4deg" },
  { src: "/photos/4.jpg", top: "38%", left: "75%", rotate: "5deg" },
  { src: "/photos/5.jpg", top: "52%", left: "8%", rotate: "-7deg" },
  { src: "/photos/6.jpg", top: "60%", left: "68%", rotate: "6deg" },
  { src: "/photos/7.jpg", top: "72%", left: "18%", rotate: "-5deg" },
  { src: "/photos/8.jpg", top: "78%", left: "75%", rotate: "7deg" },
  { src: "/photos/9.jpg", top: "18%", left: "45%", rotate: "-3deg" },
  { src: "/photos/10.jpg", top: "65%", left: "45%", rotate: "4deg" },
  { src: "/photos/11.jpg", top: "8%", left: "35%", rotate: "-8deg" },
  { src: "/photos/12.jpg", top: "30%", left: "55%", rotate: "5deg" },
  { src: "/photos/13.jpg", top: "45%", left: "28%", rotate: "-5deg" },
  { src: "/photos/14.jpg", top: "55%", left: "82%", rotate: "7deg" },
  { src: "/photos/15.jpg", top: "70%", left: "58%", rotate: "-4deg" },
];

export default function BirthdayPage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#120909]">
      <FloatingHearts />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-700 opacity-20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-700 opacity-20 blur-[140px]"
        />

      </div>

      {/* FLOATING PHOTOS */}
      <div className="absolute inset-0 overflow-hidden z-0">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 0.18,
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            style={{
              position: "absolute",
              top: photo.top,
              left: photo.left,
              rotate: photo.rotate,
            }}
            className="block"
          >

            <div className="bg-white p-2 rounded-md shadow-2xl">

              <Image
                src={photo.src}
                alt="memory"
                width={90}
                height={120}
                className="rounded-sm object-cover"
              />

            </div>

          </motion.div>
        ))}

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-5">

        <motion.h1
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-white text-5xl font-bold text-center mb-4"
        >
          Happy Birthday ❤️
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="text-gray-300 text-center mb-16 max-w-md"
        >
          buat cewe paling spesial yang selalu bikin hidup aku bahagia ✨
        </motion.p>

        <LetterAnimation />
        <Link href="/gift">

        <motion.button
            whileHover={{
            scale: 1.05,
            }}
            whileTap={{
            scale: 0.95,
            }}
            className="mt-12 bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-2xl shadow-2xl"
        >
            buka hadiah 🎁
        </motion.button>

        </Link>
      </div>

      <MusicPlayer />

    </main>
  );
}