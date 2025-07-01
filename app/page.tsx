"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";

const fetchHomeData = async () => {
  const res = await fetch(`${baseURL}/homedata`);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
};

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["homeData"],
    queryFn: fetchHomeData,
  });

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError) return <div className="text-center py-10">Failed to load data</div>;

  const script = data?.script;

  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />

      {script && (
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(script),
          }}
        />
      )}
    </>
  );
}
