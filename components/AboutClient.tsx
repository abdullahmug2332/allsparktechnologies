"use client";
import { useQuery } from "@tanstack/react-query";
import { getAboutDataQuery } from "@/utils/queries";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import AboutPageComponent from "@/components/AboutPageComponent";
import CoreValuesSemiCircle from "@/components/CoreValuesSemiCircle";
import React, { Suspense } from "react";
import { baseURL } from "@/API/baseURL";
import Script from "next/script";
import Navbar4 from "./Narbar4";

export interface aboutData {
  heroimg: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
  subheading: string;
  mainHeading: string;
  split: string;
  paragraphs: string[];
  cards: {
    title: string;
    description: string;
  }[];
  metadata: any;
  script: any;
}


const AboutClient = ({ aboutData }: { aboutData: aboutData }) => {
  const { data } = useQuery({
    ...getAboutDataQuery(),
    initialData: aboutData,
  });
  const dataToUse = data || aboutData;

  return (
    <>
      <Topnav />
      {/* <Navbar2 /> */}
      <Navbar4 />
      <div className="w-[100vw]  overflow-x-hidden">
        <Hero2Section
          title="About"
          backgroundImage={`${baseURL}/images/about/${dataToUse.heroimg}`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About", href: "/About" },
          ]}
        />
        <ServiceCards aboutData={dataToUse} />
        <Suspense fallback={<div>Loading About Page...</div>}>
          <AboutPageComponent aboutData={dataToUse} />
        </Suspense>
        <CoreValuesSemiCircle />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "AllSpark Technologies",
                  "url": "https://allsparktechnologies.com",
                  "logo": "https://allsparktechnologies.com/logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/allspark-technologies",
                    "https://twitter.com/allsparktech"
                  ],
                  "description": "AllSpark Technologies is a US-based software development and AI company offering custom software solutions, cloud systems, and tech-enabled services.",
                  "foundingDate": "2010",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "AllSpark Founders"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "USA"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "availableLanguage": [
                      "English"
                    ],
                    "email": "info@allsparktechnologies.com"
                  }
                }
              ]
            }),
          }}
        />
        <Footer />
      </div>
    </>
  );
};

export default AboutClient;
