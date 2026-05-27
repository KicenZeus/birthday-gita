"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipForward, Music2 } from "lucide-react";

const songs = [
  { title: "Risk It All", file: "/music/song1.mp3" },
  { title: "Until I Found You", file: "/music/song2.mp3" },
  { title: "Who Knows", file: "/music/song3.mp3" },
  { title: "MBG", file: "/music/song4.mp3" },
  { title: "If I Had A Gun", file: "/music/song5.mp3" },
  { title: "K", file: "/music/song6.mp3" },
  { title: "Tejano Blue", file: "/music/song7.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.4;
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextSong = async () => {
    const next = (currentSong + 1) % songs.length;
    setCurrentSong(next);
    setTimeout(async () => {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  return (
    <>
      <audio ref={audioRef} src={songs[currentSong].file} loop />
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-full px-4 py-3 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center">
              <Music2 className="text-white" size={18} />
            </div>
            <div className="min-w-[120px]">
              <p className="text-white text-sm font-medium truncate">
                {songs[currentSong].title}
              </p>
              <p className="text-gray-400 text-[11px]">our memories ❤️</p>
            </div>
            <button onClick={togglePlay} className="text-white hover:scale-110 transition-all">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button onClick={nextSong} className="text-white hover:scale-110 transition-all">
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}