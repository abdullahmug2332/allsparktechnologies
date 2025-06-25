// ServiceAccordionGroup.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCollapseProps {
  faqs: {
    title: string;
    items: FaqItem[];
  };
}

const ServiceAccordionGroup: React.FC<ServiceCollapseProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight = openIndex === idx ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="pb-16 max-w-3xl mx-auto px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-800 mb-12">{faqs.title}</h2>
      <div className="space-y-3">
        {faqs.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-colors duration-300 hover:bg-[#2B4EFF]/50  "
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
            >
              <span className="text-gray-900 text-left flex-1">{item.question}</span>
              <ChevronRight
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-90 text-[#2B4EFF]" : "text-gray-500"
                }`}
                size={20}
              />
            </button>
            <div
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
              <div className="px-4 pb-4">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAccordionGroup;
