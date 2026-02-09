"use client";

import Link from "next/link";
import { ProgressSteps } from "../components/ProgressSteps";

export default function GetReady() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ProgressSteps current="ready" />
      <main className="max-w-xl w-full rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-valentine">
          Ab nach Hause! 🏠
        </h1>

        <div className="space-y-6 text-lg text-black">
          <p className="opacity-60">
            Der Tag ist noch nicht vorbei! Nach unserem Anatomie-Abenteuer ist es Zeit, zurückzukehren und uns frisch zu machen.
          </p>

          <div className="py-4 text-6xl">
            👗👔💄✨
          </div>

          <p className="opacity-60">
            Außerdem erwartet dich dort ein weiteres Geschenk.
          </p>

          <div className="rounded-lg bg-white p-6 border border-valentine">
             <h3 className="font-bold text-valentine mb-2">
               Das letzte Ziel
             </h3>
             <p className="italic text-black opacity-60">
               Du konntest bereits einen Ort aussuchen, jetzt bin ich dran. Der Ort bleibt vorerst geheim für dich!
             </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/final-gift"
            className="rounded-full bg-valentine px-8 py-3 font-bold text-white"
          >
            Drücken, wenn du beim Abendessen ankommst
          </Link>
        </div>
      </main>
    </div>
  );
}
