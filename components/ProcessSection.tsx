"use client"; // Required for Next.js App Router

import { PlayCircle } from "lucide-react"; // Lucide icons
import { useState } from "react";

interface process {
  number: string;
  title: string;
  description: string;
}
export default function ProcessSection() {
  const [data,setData]=useState<process[]>([
              {
                "number": "1",
                "title": "Planning & Strategy",
                "description":
                  "We start by understanding business requirements, defining objectives, and creating a roadmap. This phase includes market research, competitor analysis, and choosing the right tech stack for custom software development.",
              },
              {
                "number": "2",
                "title": "Design & Development",
                "description":
                  "Our team designs intuitive UI/UX and builds scalable software using full-stack software development practices. We follow agile methods, ensure seamless integration, and apply AI development for smarter automation.",
              },
              {
                "number": "3",
                "title": "Testing & Quality Assurance",
                "description":
                  "We perform comprehensive QA—including functionality, performance, security, and user testing. Our mix of automated/manual testing ensures compliance with top software development standards.",
              },
              {
                "number": "4",
                "title": "Optimization & Support",
                "description":
                  "After deployment, we provide ongoing monitoring, updates, and feature enhancements. Our software development agency USA also ensures post-launch support for long-term product success.",
              },
            ])
  return (
    <section className="relative py-28 mt-10">
      <div className=" ">
        <div className="relative mx-auto max-w-[95%] xl:max-w-6xl">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src="/images/videos/below_process.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-xl"
            />

            {false && (
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50">
                <PlayCircle className="h-16 w-16 text-white" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[-250px] bg-[#0E0E47] pt-80 pb-32 text-white">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 md:grid-cols-2 xl:grid-cols-4">
            {data?.map((step, index) => (
              <div key={index} className="text-start">
                <h2 className="text-4xl font-bold text-gray-400">
                  {step.number}
                </h2>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs text-gray-300 leading-[20px] [word-spacing:0.15em]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
