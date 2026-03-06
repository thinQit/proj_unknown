"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: "Do you accept my insurance plan?",
    answer:
      "We work with most major insurers and employer plans. Visit our insurance page or call our team to confirm coverage.",
  },
  {
    question: "How quickly can I get a same-day appointment?",
    answer:
      "Same-day and next-day visits are available for urgent needs. Telehealth slots are often available within hours.",
  },
  {
    question: "Can I access my medical records online?",
    answer:
      "Yes, our patient portal gives you secure access to visit summaries, lab results, and care plans.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a photo ID, insurance card, a list of current medications, and any recent medical records.",
  },
];

export default function FAQAccordion({
  headline = "Questions? We’re here to help",
  subheadline = "Find quick answers about appointments, insurance, and our care experience.",
  items = defaultItems,
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-12 space-y-4">
          {items.map(function (item, i) {
            var isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-lg border bg-background">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={function () {
                    setOpenIndex(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground">
                    {item.question}
                  </span>
                  <span
                    className={
                      "text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180" : "")
                    }
                  >
                    &#9660;
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
