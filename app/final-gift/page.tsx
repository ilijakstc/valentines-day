"use client";

import { useState } from "react";
import { ProgressSteps } from "../components/ProgressSteps";

export default function FinalGift() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);

    // We want to land on the first segment "Present" (0-60deg).
    // The pointer is at the top (0deg).
    // To align the center of the first segment (30deg) with the top (0deg),
    // we need to rotate the wheel such that 30deg ends up at 0deg.
    // This requires a rotation of -30deg (or 330deg).
    // Adding full spins: 360 * 5 + 330.
    // Adding randomness within the segment (+/- 20deg) to vary the landing spot slightly.
    const randomOffset = Math.floor(Math.random() * 30) - 15;
    const targetRotation = 360 * 8 + 330 + randomOffset;

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
    }, 4500); // Animation duration
  };

  const segments = [
    { label: "🎁 Geschenk", color: "#F9B9F2" },
    { label: "❌ Opfer", color: "rgba(249,185,242,0.5)" },
    { label: "💋 Kuss", color: "#ffffff" },
    { label: "🎁 Geschenk", color: "#F9B9F2" },
    { label: "🫂 Umarmung", color: "rgba(249,185,242,0.5)" },
    { label: "❓ Geheimnis", color: "#ffffff" }
  ];

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-4 text-center overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ProgressSteps current="gift" />
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <main className="flex w-full flex-col items-center gap-8">
          <h1 className="text-3xl font-bold text-valentine">
            Eine letzte Chance
          </h1>

          <p className="text-lg text-black opacity-80">
            Dreh das Rad, um zu sehen, ob du eine letzte Überraschung bekommst...
          </p>

          {/* Wheel Container */}
          <div className="relative h-80 w-80 mx-auto">
            {/* Pointer */}
            <div className="absolute -top-4 left-1/2 z-20 h-8 w-8 -translate-x-1/2 text-black drop-shadow-md">
              ▼
            </div>

            {/* The Wheel */}
            <div
              className="relative h-full w-full overflow-hidden rounded-full border-4 border-valentine shadow-2xl"
              style={{
                transition: "transform 4.5s cubic-bezier(0.1, 0, 0.1, 1)",
                transform: `rotate(${rotation}deg)`,
                background: `conic-gradient(
                  ${segments[0].color} 0deg 60deg,
                  ${segments[1].color} 60deg 120deg,
                  ${segments[2].color} 120deg 180deg,
                  ${segments[3].color} 180deg 240deg,
                  ${segments[4].color} 240deg 300deg,
                  ${segments[5].color} 300deg 360deg
                )`,
              }}
            >
              {/* Segment Labels */}
              {segments.map((segment, index) => {
                const angle = index * 60 + 210; // Center of the segment + 180deg offset
                // Right side (0,1,2) reads Center -> Outside (rotate-90)
                // Left side (3,4,5) reads Outside -> Center (-rotate-90)
                const isLeftSide = index >= 3;
                const textRotation = isLeftSide ? "-rotate-90" : "rotate-90";

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 -ml-[1px] flex h-1/2 w-0.5 flex-col justify-center items-center"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: "top center",
                    }}
                  >
                    <span
                      className={`whitespace-nowrap text-base font-bold text-black ${textRotation}`}
                    >
                      {segment.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Center Cap */}
            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"></div>
          </div>

          {/* Action Button / Result */}
          <div className="mt-4 min-h-[100px] w-full">
            {!hasSpun ? (
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                className={`w-full rounded-full px-8 py-4 text-xl font-bold text-white shadow-lg ${
                  isSpinning
                    ? "cursor-not-allowed bg-gray-300 opacity-50"
                    : "bg-valentine"
                }`}
              >
                {isSpinning ? "Dreht..." : "Drehen"}
              </button>
            ) : (
              <div className="space-y-4 rounded-xl bg-white p-6 shadow-lg border-2 border-valentine">
                <h2 className="text-2xl font-bold text-valentine">
                  🎉 GEWONNEN! 🎉
                </h2>
                <p className="text-lg text-black opacity-60">
                  Du bekommst noch ein Geschenk!
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
