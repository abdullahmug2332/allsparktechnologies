
import React, { useEffect, useState } from "react";
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

export const metadata = {
  title: "AllSpark Technologies",
  description:
    "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
  openGraph: {
    title: "AllSpark Technologies",
    description:
      "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    url: "https://allsparktechnologies.com/",
    images: [
      {
        url: "https://allsparktechnologies.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AllSpark Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://allsparktechnologies.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
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
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://allsparktechnologies.com/#organization",
                    name: "AllSpark Technologies",
                    url: "https://allsparktechnologies.com",
                    logo: "https://allsparktechnologies.com/logo.png",
                    sameAs: [
                      "https://www.linkedin.com/company/allspark-technologies",
                      "https://www.facebook.com/allsparktechnologies",
                    ],
                    description:
                      "AllSpark Technologies is a leading software development company and AI development agency in the USA, offering custom software, cloud, DevOps, and full-stack solutions.",
                    foundingDate: "2010",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "US",
                    },
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://allsparktechnologies.com/#website",
                    url: "https://allsparktechnologies.com",
                    name: "AllSpark Technologies",
                    publisher: {
                      "@id": "https://allsparktechnologies.com/#organization",
                    },
                    potentialAction: {
                      "@type": "SearchAction",
                      target:
                        "https://allsparktechnologies.com/search?q={search_term_string}",
                      "query-input": "required name=search_term_string",
                    },
                  },
                  {
                    "@type": "WebPage",
                    "@id": "https://allsparktechnologies.com/#webpage",
                    url: "https://allsparktechnologies.com",
                    name: "Custom Software Development Company & AI Solutions | AllSpark Technologies",
                    description:
                      "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
                    inLanguage: "en-US",
                    isPartOf: {
                      "@id": "https://allsparktechnologies.com/#website",
                    },
                    about: {
                      "@id": "https://allsparktechnologies.com/#organization",
                    },
                  },
                  {
                    "@type": "FAQPage",
                    mainEntity: [
                      {
                        "@type": "Question",
                        name: "What services does your software house offer?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "We provide custom software development services, mobile and web app development, AI-powered solutions, UI/UX design, full-stack software development, cloud computing, DevOps, and ongoing support. As a software development agency USA, we serve startups to enterprises.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "How long does it take to develop a software product?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Timelines vary by project complexity. A basic MVP may take 3–6 months, while enterprise software may take 6–12 months. As an AI development company and SaaS development agency, we use agile processes to ensure rapid delivery.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Do you offer post-launch support and maintenance?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. We provide maintenance, updates, performance optimization, and security patches post-deployment. Our software development solutions are designed for long-term success.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "What industries do you work with?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "We work across fintech, healthcare, logistics, real estate, e-commerce, education, and enterprise SaaS. We deliver tailored solutions for scalable digital growth.",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
