"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { baseURL } from "@/API/baseURL";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface HeroData {
  texts: string[];
  features: string[];
}

export default function HeroSection() {
  const [texts, setTexts] = useState<HeroData["texts"]>([]);
  const [features, setFeatures] = useState<HeroData["features"]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentGridIndex, setCurrentGridIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/homedata`);
        const result = await response.json();
        if (result.hero) {
          setTexts(result.hero.texts || []);
          setFeatures(result.hero.features || []);
        }
      } catch (error) { 
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Cycle text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % (texts.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Cycle feature grid
  const gridPageCount = Math.max(Math.ceil(features.length / 2), 1);
  useEffect(() => {
    const gridInterval = setInterval(() => {
      setCurrentGridIndex((prev) => (prev + 1) % gridPageCount);
    }, 5000);
    return () => clearInterval(gridInterval);
  }, [gridPageCount]);

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative col-span-12 overflow-hidden mt-[-20px] max-w-[97%] mx-auto rounded-[50px] h-[90vh] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
      style={{ zIndex: 1 }}
    >
      {/* Video Background */}
      <video
        src="/images/process.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#384BFF]/70" />

      {/* Content */}
      <div className="relative w-full xl:w-3/5 text-center md:text-start z-10">
        {loading ? (
          <h2 className="text-white text-xl">Loading...</h2>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTextIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl !leading-normal"
              >
                {texts[currentTextIndex]}
              </motion.h1>
            </AnimatePresence>

            {/* Feature Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGridIndex + 2}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-2 mx-auto md:mx-0 gap-6 w-fit mt-5 text-lg text-white"
              >
                {features
                  .slice(currentGridIndex * 2, currentGridIndex * 2 + 2)
                  .map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-1 text-white" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA Button */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex + "btn"}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-12 flex justify-center md:justify-start"
              >
                <Link
                  href="/contact"
                  className={`${plusJakartaSans.className} bg-[#F98600] rounded-full px-10 !py-3 text-white hover:bg-yellow-500`}
                >
                  Get in touch
                </Link>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
