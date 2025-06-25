"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Define the types for StatItem and WhyChooseSectionProps
export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix?: string;
}

export interface WhyChooseConfig {
  title: string;
  stats: StatItem[];
}

export interface WhyChooseSectionProps {
  whyChoose: WhyChooseConfig;
}

// Dynamically import the CountUp component with the correct types
const CountUpComponent = dynamic(
  () => import("react-countup").then((mod) => mod.default),
  { ssr: false }
);

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ whyChoose }) => {
  const { title, stats } = whyChoose;
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is mounted on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-800 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-xl shadow text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-5xl font-extrabold text-blue-600 mb-4">
                {mounted ? (
                  <CountUpComponent
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  >
                    {({ countUpRef }: { countUpRef: React.RefObject<HTMLSpanElement> }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUpComponent>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
