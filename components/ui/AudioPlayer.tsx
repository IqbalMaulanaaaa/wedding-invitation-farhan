"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  isPlaying: boolean;
  onToggle: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  isPlaying,
  onToggle,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) =>
          console.log("Autoplay blocked or waiting for user interaction:", err),
        );
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Floating Audio Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggle}
          aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-sage-300 text-sage-700 shadow-lg hover:bg-sage-50 transition-all active:scale-95"
        >
          {/* Subtle Rotating Disc indicator when active */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full border border-sage-400/50 animate-spin-slow" />
          )}

          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-sage-600 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-400" />
          )}

          {/* Tooltip on hover */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1 text-xs font-sans text-sage-800 bg-white/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-sage-200">
            {isPlaying ? "Pause Musik" : "Play Musik"}
          </span>
        </button>
      </div>
    </>
  );
};
