import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/business";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal
                key={faq.question}
                delay={i * 60}
                className="bg-white rounded-2xl border border-brand-beige overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-heading font-bold"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-brown transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-brand-charcoal/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
