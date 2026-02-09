interface ProgressStepsProps {
  current: StepId;
}

type StepId =
  | "ask"
  | "breakfast"
  | "coffee"
  | "guess"
  | "ready"
  | "gift";

const steps: { id: StepId; label: string }[] = [
  { id: "ask", label: "Frage" },
  { id: "breakfast", label: "Frühstück" },
  { id: "coffee", label: "Kaffee" },
  { id: "guess", label: "Ort raten" },
  { id: "ready", label: "Fertig" },
  { id: "gift", label: "Geschenk" },
];

export function ProgressSteps({ current }: ProgressStepsProps) {
  const currentIndex = steps.findIndex((step) => step.id === current);

  return (
    <nav className="w-full max-w-3xl mb-4" aria-label="Fortschritt">
      <ol className="flex flex-wrap items-start justify-between gap-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;

          return (
            <li key={step.id} className="flex flex-col items-center flex-1 min-w-[52px]">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  isActive
                    ? "border-valentine bg-valentine text-black/60"
                    : isCompleted
                    ? "border-valentine bg-valentine text-black/60"
                    : "border-gray-300 bg-white text-black"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {index + 1}
              </div>
              <span
                className={`mt-1 text-xs font-semibold text-center leading-tight ${
                  isActive || isCompleted ? "text-black/60" : "text-transparent"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
