"use client";

import { useState } from "react";
import Link from "next/link";
import { ProgressSteps } from "../components/ProgressSteps";

export default function LocationGuess() {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const MAX_ATTEMPTS = 3;
  const CORRECT_ANSWERS = ["körperwelten", "körper welten", "koerperwelten", "korperwelten", "Körper Welten", "Körper welten", "Koerper Welten", "Korper Welten", ];

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guess.trim()) return;

    const normalizedGuess = guess.toLowerCase().trim();

    if (CORRECT_ANSWERS.some(answer => normalizedGuess.includes(answer))) {
      setIsCorrect(true);
      setIsGameOver(true);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= MAX_ATTEMPTS) {
        setIsGameOver(true);
      } else {
          setGuess("");
      }
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ProgressSteps current="guess" />
      <main className="max-w-xl w-full rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-valentine">
          Errate den nächsten Ort!
        </h1>

        {!isGameOver ? (
          <div className="w-full">
            <p className="mb-6 text-lg text-black opacity-80">
              Hinweis 1: Ein Ort, an dem "innere Schönheit" wörtlich genommen wird. 💀
            </p>

            {attempts === MAX_ATTEMPTS - 1 && (
              <div className="mb-6 rounded-lg bg-white p-4 border border-valentine text-black">
                <p className="font-bold">Letzter Hinweis! 🚨</p>
                <p>Ilija findet das sehr ekelhaft</p>
              </div>
            )}

            <div className="mb-6 text-sm font-medium text-black opacity-60">
              Verbleibende Versuche: {MAX_ATTEMPTS - attempts}
            </div>

            <form onSubmit={handleGuess} className="flex flex-col gap-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Deine Antwort hier..."
                className="w-full rounded-lg border border-gray-300 p-3 text-lg text-black outline-none focus:border-valentine focus:ring-2 focus:ring-valentine"
                autoFocus
              />
              <button
                type="submit"
                className="rounded-lg bg-valentine px-6 py-3 font-bold text-white"
              >
                Antwort senden
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8">
            {isCorrect ? (
              <div className="flex flex-col items-center gap-4">
                <div className="text-6xl">🎉💀❤️</div>
                <h2 className="text-3xl font-bold text-valentine">
                  Das ist richtig!
                </h2>
                <p className="text-xl text-black opacity-80">
                  Wir gehen zu den Körperwelten!
                </p>
                <p className="text-black opacity-60">
                    Mach dich bereit, von der Anatomie staunen zu lassen!
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                 <div className="text-6xl">🙈</div>
                <h2 className="text-2xl font-bold text-valentine">
                  Keine Versuche mehr!
                </h2>
                <p className="text-xl text-black opacity-80">
                  Die richtige Antwort war Körperwelten.
                </p>
                <p className="text-black opacity-60">
                    Keine Sorge, es wird trotzdem ein tolles Date!
                </p>
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/get-ready"
                className="inline-block rounded-full bg-valentine px-8 py-3 font-bold text-white shadow-lg"
              >
                Schau, was als nächstes kommt!
              </Link>
            </div>

            <div className="mt-4 hidden">
              <Link href="/" className="text-black hover:text-valentine text-sm">
                Zurück zum Start
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
