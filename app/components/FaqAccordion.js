"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="mt-10 space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[#0A2342] transition-colors hover:text-pink-500"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl text-pink-500 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="copy-body px-6 pb-5">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
