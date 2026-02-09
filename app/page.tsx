"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProgressSteps } from "./components/ProgressSteps";

export default function Home() {
  const router = useRouter();
  const [noClicked, setNoClicked] = useState(false);
  const [showHearts, setShowHearts] = useState(true);
  const hearts = useMemo(() => {
    const palette = ["❤️", "💗", "💖", "💕", "💘", "💝", "💞", "💓"];
    return Array.from({ length: 30 }, (_, idx) => {
      const emoji = palette[idx % palette.length];
      return {
        id: idx,
        emoji,
        left: 5 + Math.random() * 90,
        delay: Math.random() * 1.2,
        duration: 1.6 + Math.random() * 1.4,
        size: 22 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 30,
      };
    });
  }, []);

  useEffect(() => {
    // Long enough for all hearts (max ~4.2s) to finish fading before removal
    const timer = setTimeout(() => setShowHearts(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = () => {
    setNoClicked(true);
  };

  const handleYesClick = () => {
    router.push("/breakfast");
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      {showHearts && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {hearts.map((h) => (
            <span
              key={h.id}
              className="absolute"
              style={{
                left: `${h.left}%`,
                bottom: "-10%",
                fontSize: `${h.size}px`,
                animation: `floatUp ${h.duration}s ease-out ${h.delay}s forwards`,
                // @ts-ignore custom property for drift
                "--drift": `${h.drift}px`,
              }}
            >
              {h.emoji}
            </span>
          ))}
          <style jsx>{`
            @keyframes floatUp {
              0% { transform: translate(0, 0); opacity: 0.85; }
              100% { transform: translate(var(--drift, 0px), -80vh); opacity: 0; }
            }
          `}</style>
        </div>
      )}
      <ProgressSteps current="ask" />
      <main className="flex max-w-lg flex-col items-center gap-8 rounded-3xl bg-white p-10 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-valentine">
          Will you be my Valentine?
        </h1>

        <p className="text-lg text-black opacity-60">Bitte sag &quot;Ja&quot;! 🥺</p>

        <div className="flex flex-col items-center gap-4 w-full">
          {/* Buttons Container */}
          <div className="flex gap-6 justify-center w-full">
            <button
              onClick={handleYesClick}
              className="rounded-full bg-valentine px-4 py-4 text-xl font-bold text-white shadow-lg"
            >
              Ja 😍
            </button>

            <button
              onClick={handleNoClick}
              className="rounded-full border-2 border-valentine bg-white px-4 py-4 text-xl font-bold text-valentine shadow-lg"
            >
              Nein 😢
            </button>
          </div>

          {/* Response Message */}
          {noClicked && (
            <div className="mt-4 rounded-xl bg-white p-4 text-black font-bold border-2 border-valentine opacity-60">
              Guter Versuch, aber du hast keine andere Wahl! 😈
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
