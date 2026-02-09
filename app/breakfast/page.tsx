"use client";

import { useState } from "react";
import Link from "next/link";
import { ProgressSteps } from "../components/ProgressSteps";

export default function Breakfast() {
  const [showFlowers, setShowFlowers] = useState(false);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ProgressSteps current="breakfast" />
      <main className="max-w-md w-full rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-valentine">
          Lass uns gemütlich starten!
        </h1>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black opacity-80">
            Frühstück im Bett
          </h2>
          <ul className="space-y-3 text-lg text-black">
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🥑</span>
              <span className="opacity-60">Avocado-Toast</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🍳</span>
              <span className="opacity-60">Spiegelei</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🍊</span>
              <span className="opacity-60">Grapefruit Saft</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🧡</span>
              <span className="opacity-60">Ingwershot</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => setShowFlowers(!showFlowers)}
            className="rounded-full bg-valentine px-6 py-3 font-bold text-white"
          >
            {showFlowers ? "Überraschung verbergen" : "Drück für eine Überraschung"}
          </button>

          {showFlowers && (
            <div className="text-3xl">
              🌷🌷🌷🌷🌷
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-valentine w-full">
            <Link
              href="/coffee-date"
              className="inline-block text-black hover:text-valentine font-medium"
            >
              Bereit für den nächsten Schritt?
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
