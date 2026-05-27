"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import InfiniteMenu from "@/components/InfiniteMenu";
import Folder from "@/components/Folder";
import DomeGallery from "@/components/DomeGallery";
import SplitText from "@/components/SplitText";
import MusicPlayer from "@/components/MusicPlayer";
import LetterAnimation from "@/components/LetterAnimation";
import { FaHeart } from "react-icons/fa";

const photos = [
  "/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg", "/photos/4.jpg",
  "/photos/5.jpg", "/photos/6.jpg", "/photos/7.jpg", "/photos/8.jpg",
  "/photos/9.jpg", "/photos/10.jpg", "/photos/11.jpg", "/photos/12.jpg",
  "/photos/13.jpg", "/photos/14.jpg", "/photos/15.jpg", "/photos/16.jpg",
  "/photos/17.jpg", "/photos/18.jpg", "/photos/19.jpg", "/photos/20.jpg",
  "/photos/21.jpg", "/photos/22.jpg", "/photos/23.jpg", "/photos/24.jpg",
  "/photos/25.jpg",
];

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ← FIX: ganti sessionStorage ke localStorage, key sama
    const access = localStorage.getItem("birthday-auth");
    if (!access) {
      window.location.href = "/";
      return;
    }
    setMounted(true);
  }, []);

  const randomPhotos = useMemo(() => {
    return photos.map((photo, index) => ({
      src: photo,
      top: `${(index * 13) % 90}%`,
      left: `${(index * 17) % 85}%`,
      rotate: `${index % 2 === 0 ? "-" : ""}${(index * 3) % 10}deg`,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Background photo blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/1.jpg"
          alt=""
          className="w-full h-full object-cover blur-xl scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/40 to-black" />
      </div>

      {/* Music */}
      <MusicPlayer />

      {/* Floating Photos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {randomPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1, y: [0, -20, 0] }}
            transition={{ duration: 6 + index, repeat: Infinity }}
            className="absolute"
            style={{
              top: photo.top,
              left: photo.left,
              transform: `rotate(${photo.rotate})`,
            }}
          >
            <div className="bg-white p-2 rounded-xl shadow-[0_0_40px_rgba(255,0,0,0.25)]">
              <img
                src={photo.src}
                alt=""
                className="w-[170px] h-[230px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white text-center mb-12"
        >
          Happy Birthday Sayang ❤️
        </motion.h1>

        {/* Letter */}
        <LetterAnimation />

        {/* Sweet message */}
        <div className="mt-24 text-center max-w-4xl">
          <SplitText
            text="makasih udah bertahan sejauh ini, aku bangga banget sama kamu ❤️"
            className="text-3xl md:text-5xl font-bold text-white leading-relaxed"
          />
        </div>

        {/* Infinite Menu */}
        <section className="relative z-10 mt-40 w-full">
          <h1 className="text-white text-3xl font-bold text-center mb-16">
            Our Memories 🌊❤️
          </h1>
          <div className="h-[500px]">
            <InfiniteMenu
          items ={[
            { image: "/photos/berdua/1.jpg", title: "sunset bareng", link: "", description: "" },
            { image: "/photos/berdua/2.jpg", title: "ketawa random", link: "", description: "" },
            { image: "/photos/berdua/3.jpg", title: "pantai sore", link: "", description: "" },
            { image: "/photos/berdua/4.jpg", title: "foto candid", link: "", description: "" },
            { image: "/photos/berdua/5.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/6.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/7.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/8.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/9.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/10.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/11.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/12.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/13.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/14.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/15.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/16.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/17.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/18.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/19.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/20.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/21.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/22.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/23.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/24.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/25.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/26.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/27.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/28.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/29.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/30.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/31.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/32.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/33.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/34.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/35.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/36.jpg", title: "", link: "", description: "" },
            { image: "/photos/berdua/37.jpg", title: "", link: "", description: "" }
          ]}
            />
          </div>
        </section>

        {/* Folder */}
        <section className="relative z-10 mt-40 flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold mb-16">foto fav ku 📂❤️</h1>
          <Folder
            size={2}
            color="#7f1d1d"
            items={[
              <img key="1" src="/photos/fav/1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />,
              <img key="2" src="/photos/fav/2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />,
              <img key="3" src="/photos/fav/3.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />,
            ]}
          />
        </section>

        {/* Dome Gallery */}
        <section className="relative z-10 mt-40 w-full">
          <h1 className="text-white text-3xl font-bold text-center mb-16">
            Ur Gallery 📸
          </h1>
          <div className="h-[700px]">
            <DomeGallery
images = {[
  "/photos/memories/1.jpg", "/photos/memories/2.jpg", "/photos/memories/3.jpg", "/photos/memories/4.jpg",
  "/photos/memories/5.jpg", "/photos/memories/6.jpg", "/photos/memories/7.jpg", "/photos/memories/8.jpg",
  "/photos/memories/9.jpg", "/photos/memories/10.jpg", "/photos/memories/11.jpg", "/photos/memories/12.jpg",
  "/photos/memories/13.jpg", "/photos/memories/14.jpg", "/photos/memories/15.jpg", "/photos/memories/16.jpg",
  "/photos/memories/17.jpg", "/photos/memories/18.jpg", "/photos/memories/19.jpg", "/photos/memories/20.jpg",
  "/photos/memories/21.jpg", "/photos/memories/22.jpg", "/photos/memories/23.jpg", "/photos/memories/24.jpg",
  "/photos/memories/25.jpg", "/photos/memories/26.jpg", "/photos/memories/27.jpg", "/photos/memories/28.jpg",
  "/photos/memories/29.jpg", "/photos/memories/30.jpg", "/photos/memories/31.jpg", "/photos/memories/32.jpg",
  "/photos/memories/33.jpg", "/photos/memories/34.jpg", "/photos/memories/35.jpg", "/photos/memories/36.jpg",
  "/photos/memories/37.jpg", "/photos/memories/38.jpg", "/photos/memories/39.jpg", "/photos/memories/40.jpg",
  "/photos/memories/41.jpg", "/photos/memories/42.jpg", "/photos/memories/43.jpg", "/photos/memories/44.jpg",
  "/photos/memories/45.jpg", "/photos/memories/46.jpg", "/photos/memories/47.jpg", "/photos/memories/48.jpg",
  "/photos/memories/49.jpg", "/photos/memories/50.jpg", "/photos/memories/51.jpg", "/photos/memories/52.jpg",
  "/photos/memories/53.jpg", "/photos/memories/54.jpg", "/photos/memories/55.jpg", "/photos/memories/56.jpg",
  "/photos/memories/57.jpg", "/photos/memories/58.jpg", "/photos/memories/59.jpg", "/photos/memories/60.jpg",
  "/photos/memories/61.jpg", "/photos/memories/62.jpg", "/photos/memories/63.jpg", "/photos/memories/64.jpg",
  "/photos/memories/65.jpg"
]}
                overlayBlurColor="transparent"
                grayscale={false}
            />
          </div>
        </section>

        {/* Message */}
        <div className="mt-20 text-center px-6">
          <h2 className="text-3xl font-bold text-red-400 mb-6">buat sayangku 🤍</h2>
          <p className="text-zinc-300 leading-8 text-lg max-w-2xl mx-auto">
            jangan capek jadi hebat ya sayang,
            aku tau kamu sering kuat sendirian,
            tapi sekarang ada aku yang bakal selalu
            nemenin kamu pelan-pelan 🤍
            <br /><br />
            semoga semua mimpi kamu satu-satu tercapai,
            dan semoga di setiap langkah kamu,
            selalu ada bahagia yang nemenin.
          </p>
        </div>

        {/* Final message */}
        <section className="relative z-10 py-40 px-6 text-center">
          <SplitText
            text="semoga semua hal baik selalu datang ke kamu ya sayang ❤️"
            className="text-4xl md:text-6xl font-bold text-white leading-relaxed"
          />
        </section>

        {/* Gift button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { window.location.href = "/gift"; }}
          className="mb-32 px-10 py-5 rounded-full bg-red-700 hover:bg-red-600 text-white text-xl font-semibold shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all"
        >
          buka kado 🎁
        </motion.button>
      </div>

      {/* Floating Hearts deco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FaHeart
            key={i}
            className="absolute text-red-500/20 animate-pulse"
            style={{
              top: `${(i * 13) % 100}%`,
              left: `${(i * 17) % 100}%`,
              fontSize: `${12 + (i % 5) * 6}px`,
            }}
          />
        ))}
      </div>
    </main>
  );
}