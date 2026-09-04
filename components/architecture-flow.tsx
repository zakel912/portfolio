"use client";

import { useLocale } from "./locale-provider";

export function ArchitectureFlow({ label = "System flow", steps }: { label?: string; steps: string[] }) {
  const { locale } = useLocale();
  const displayLabel = label === "System flow" ? (locale === "fr" ? "Flux du système" : label) : label;
  return (
    <figure className="architecture">
      <figcaption>{displayLabel}</figcaption>
      <div className="architecture-flow">
        {steps.map((step, index) => (
          <div className="flow-part" key={step}>
            <div className="flow-node"><span>{String(index + 1).padStart(2, "0")}</span>{step}</div>
            {index < steps.length - 1 && <div className="flow-arrow" aria-hidden="true">→</div>}
          </div>
        ))}
      </div>
    </figure>
  );
}
