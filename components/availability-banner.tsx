"use client";

import { useLocale } from "./locale-provider";

export function AvailabilityBanner() {
  const { messages } = useLocale();

  return (
    <aside className="availability-banner" aria-label={messages.common.availabilityLabel}>
      <a className="container availability-link" href="#contact">
        <span className="availability-dot" aria-hidden="true" />
        <span>{messages.common.availability}</span>
        <span className="availability-arrow" aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
