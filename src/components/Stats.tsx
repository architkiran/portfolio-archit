"use client"

import Counter from "./motion/Counter"
import { FadeUp } from "./motion/Reveal"

const stats = [
  { value: 5000, suffix: "+", label: "support tickets validated", note: "BU Spark" },
  { value: 30, suffix: "%", label: "faster reporting turnaround", note: "Millicent" },
  { value: 1200, suffix: "+", label: "users on dashboards I built", note: "Millicent" },
  { value: 8.1, prefix: "$", suffix: "M", decimals: 1, label: "unreconciled exposure surfaced", note: "Position Break" },
]

export default function Stats() {
  return (
    <section className="bg-cream border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <FadeUp
            key={s.label}
            delay={i * 0.08}
            className={`py-10 md:py-14 pr-6 ${i % 2 === 1 ? "pl-6 border-l border-border" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-border" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i === 3 ? "lg:pl-6" : ""}`}
          >
            <p className="font-serif text-5xl md:text-6xl text-ink tracking-tight leading-none">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-3 text-sm text-ink">{s.label}</p>
            <p className="mt-1 text-[11px] tracking-[0.16em] uppercase text-ink-muted">{s.note}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
