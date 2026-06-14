"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Do students need prior coding experience?",
    answer:
      "Not at all! The workshop is designed for complete beginners. We start from the very basics and use kid-friendly, visual tools so every child can follow along and have fun, regardless of their experience.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes. Every child who completes the 4-week program receives a digital Certificate of Completion that celebrates their new AI and robotics skills — perfect for sharing with family and school.",
  },
  {
    question: "What tools are required?",
    answer:
      "All you need is a laptop or desktop with a stable internet connection and a web browser. We use free, browser-based coding and robotics simulators, so there's no expensive hardware or software to buy.",
  },
  {
    question: "What is the class schedule like?",
    answer:
      "Classes run as live, interactive online sessions across 4 weeks with small batch sizes. You'll receive the full schedule and joining details by email right after you enroll.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions? We&apos;ve Got Answers
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors data-[open=true]:border-primary/40"
                data-open={isOpen}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-heading text-lg font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
