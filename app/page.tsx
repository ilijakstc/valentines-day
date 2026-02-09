"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressSteps } from "./components/ProgressSteps";

export default function Home() {
  const router = useRouter();
  const [noClicked, setNoClicked] = useState(false);

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
              className="rounded-full bg-valentine px-8 py-4 text-xl font-bold text-white shadow-lg"
            >
              Ja 😍
            </button>

            <button
              onClick={handleNoClick}
              className="rounded-full border-2 border-valentine bg-white px-8 py-4 text-xl font-bold text-valentine shadow-lg"
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
