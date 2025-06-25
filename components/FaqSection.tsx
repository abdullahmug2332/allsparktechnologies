"use client"; // Required for Next.js App Router

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { baseURL } from "@/API/baseURL";


interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  img1:string,
  img2:string,
  img3:string,
  subtitle: string;
  title: string;
  faqs: FAQ[];
}

export default function FaqSection() {
  const [faqData, setFaqData] = useState<FAQData | null>(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const res = await fetch(`${baseURL}/homedata`);
        const json = await res.json();
        const faqSection: FAQData = json.faq; 
      setFaqData(faqSection); 
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFAQData();
  }, []);

  if (!faqData) return <p className="text-center py-10">Loading FAQs...</p>;
  return (
    <section className="py-16" id="faq-section">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full max-w-md">
          {/* ───────── main photo ───────── */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src={`${baseURL}/images/home/${faqData.img1}`}
              alt="Team Working"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* ───────── bottom-right overlay ───────── */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[200px] h-[200px]">
            <Image
              src={`${baseURL}/images/home/${faqData.img2}`}
              alt="Team Discussion"
              fill
              sizes="100px"
              className="object-contain"
              unoptimized
            />
          </div>

          {/* ───────── spinning shape ───────── */}
          <div
            className="absolute top-0 right-0 w-12 h-12 [@media(min-width:375px)]:w-14 [@media(min-width:375px)]:h-14 [@media(min-width:425px)]:w-16 [@media(min-width:425px)]:h-16  [@media(min-width:768px)]:w-16 [@media(min-width:768px)]:h-16 [@media(min-width:1024px)]:w-20 [@media(min-width:1024px)]:h-20 [@media(min-width:1280px)]:!w-[80px]  [@media(min-width:1280px)]:!h-[80px]  flex items-center justify-center rounded-full border-2 border-white text-white text-xs uppercase tracking-wide animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src={`${baseURL}/images/home/${faqData.img3}`}
              alt="Explore More"
              fill
              sizes="80px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="w-full max-w-lg">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>{faqData.title}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold !leading-relaxed text-gray-900">
            {faqData.subtitle}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {faqData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
