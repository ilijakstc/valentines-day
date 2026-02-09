"use client";

import { useState } from "react";
import Link from "next/link";
import { ProgressSteps } from "../components/ProgressSteps";

const coffeeSpots = [
	{
		id: "fokus",
		name: "Café Fokus",
		emoji: "☕️",
	},
	{
		id: "misa",
		name: "Misa Matcha",
		emoji: "??",
	},
	{
		id: "ototo",
		name: "Ototo",
		emoji: "??",
	},
];

export default function CoffeeDate() {
	const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		if (selectedSpot) {
			setSubmitted(true);
		}
	};

	return (
		<div
			className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
			style={{ backgroundColor: "var(--background)" }}
		>
			<ProgressSteps current="coffee" />
			<main className="max-w-2xl w-full rounded-2xl bg-white p-8 shadow-xl">
				{!submitted ? (
					<>
						<h1 className="mb-6 text-2xl font-bold text-valentine">
							Ich weiß du hast Lust auf Kaffee / Matcha, du Junkie.
						</h1>
						<h2 className="mb-4 text-xl font-semibold text-black opacity-80">
							Such unseren nächsten Spot aus!
						</h2>

						<div className="grid gap-4 md:grid-cols-3 mb-8">
							{coffeeSpots.map((spot) => (
								<div
									key={spot.id}
									onClick={() => setSelectedSpot(spot.id)}
									className={`cursor-pointer rounded-xl border-2 p-4 ${
										selectedSpot === spot.id
											? "border-valentine bg-white ring-2 ring-valentine"
											: "border-gray-200"
									}`}
								>
									<div className="text-2xl mb-2">{spot.emoji}</div>
									<h3 className="font-bold text-lg mb-1 text-black opacity-80">
										{spot.name}
									</h3>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-4 items-center">
							<button
								onClick={handleSubmit}
								disabled={!selectedSpot}
								className="rounded-full bg-valentine px-8 py-3 font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
							>
								Lass uns dorthin gehen!
							</button>
						</div>
					</>
				) : (
					<div className="py-10">
						<h1 className="text-2xl font-bold text-valentine mb-4">
							Top Wahl
						</h1>
						<p className="text-xl text-black opacity-60 mb-8">
							{
								coffeeSpots.find((s) => s.id === selectedSpot)?.name
							}{" "}
							wird wundervoll mit dir.
						</p>

						<div className="mt-8">
							<Link
								href="/location-guess"
								className="inline-block rounded-full bg-valentine px-8 py-3 font-bold text-white shadow-lg"
							>
								Errate die nächste Aktivität
							</Link>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
