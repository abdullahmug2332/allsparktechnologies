
"use client";
import { useQuery } from "@tanstack/react-query";
import { getHomeDataQuery } from "@/utils/queries";
import React from "react";
import Logos from "@/components/Logos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import { MetaTitle } from "./MetaTitle";
import HomeProcess from "./HomeProcess";
import { StaticImageData } from "next/image";
import HomePage from "./HomePage";
import Marquee from "@/components/Marquee";
import Navbar from "./Navbar";
export interface HomePageData {
  hero: {
    bg: string;
    topBtn: string;
    topBtnLink: string;
    title: string;
    des: string;
    bottomBtn: string;
    bottomBtnLink: string;
  }[];
  logos: {
    id: number;
    src: string;
    alt: string;
  }[];
  homeServices: {
    subTitle: string;
    title: string;
    allServices: {
      id: string;
      title: string;
      imageUrl: string;
      alt: string;
    }[];
  };
  about: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subheading: string;
    mainHeading: string;
    paragraphs: string[];
    features: {
      title: string;
      subtitle: string;
    }[];
  };
  titles: string[];
  process: {
    title: string;
    des: string;
    image: string | StaticImageData;
    link: string;
    process: {
      heading: string;
      des: string;
      image: string | StaticImageData;
      dir?: string | StaticImageData;
    }[];
  };

  faq: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subtitle: string;
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  contactBanner: {
    img: string;
    alt: string;
    subTitle: string;
    title: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: {
      id: number;
      name: string;
      role: string;
      text: string;
      image: string;
      rating: number;
    }[];
  };
  metadata: any;
  script: any;
}


export default function Home({ homeData }: { homeData: HomePageData }) {
  const { data } = useQuery({
    ...getHomeDataQuery(),
    initialData: homeData,
  });
  const dataToUse = data || homeData;
  return (
    <div className="w-[100vw]  overflow-x-hidden">
      {/* <Navbar /> */}
      <MetaTitle />
      <HomePage hero={dataToUse.hero} />
      <ServicesSection homeServices={dataToUse.homeServices} />
      <AboutSection about={dataToUse.about} />
      <Marquee titles={dataToUse.titles} />
      <HomeProcess homeProcess={dataToUse.process} />
      <FaqSection faq={dataToUse.faq} />
      <ContactSection contactBanner={dataToUse.contactBanner} />
      <TestimonialsSection testimonials={dataToUse.testimonials} />
      <Logos logos={dataToUse.logos} />
      <Footer />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://allsparktechnologies.com/#organization",
            "name": "Allspark Technologies",
            "legalName": "Allspark Technologies LLC",
            "url": "https://allsparktechnologies.com",
            "logo": "https://allsparktechnologies.com/images/footer-logo.svg",
            "foundingDate": "2016",
            "description": "Allspark Technologies is a US-based software development and AI company offering custom software, web and app development, AI solutions, cloud and DevOps, BPO, and digital marketing services.",
            "email": "info@allsparktechnologies.com",
            "telephone": "+1-616-308-1863",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "638 Knollwood Road",
              "addressLocality": "Franklin Lakes",
              "addressRegion": "NJ",
              "postalCode": "07417",
              "addressCountry": "US"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-616-308-1863",
                "contactType": "Customer Support",
                "areaServed": "US",
                "availableLanguage": ["English"]
              },
              {
                "@type": "ContactPoint",
                "contactType": "Sales Inquiry",
                "email": "info@allsparktechnologies.com",
                "areaServed": "US",
                "availableLanguage": ["English"]
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/all-spark-technologies",
              "https://www.facebook.com/allsparktechnologies.official",
              "https://www.instagram.com/allspark_technologies/"
            ],
            "knowsAbout": [
              "Custom Software Development",
              "Web Development",
              "Mobile App Development",
              "AI and Machine Learning",
              "Cloud and DevOps Solutions",
              "UI UX Design",
              "Ecommerce Development",
              "BPO and Customer Support",
              "Email Support",
              "Live Chat Support",
              "Digital Marketing",
              "SEO"
            ],
            "department": [
              {
                "@type": "Organization",
                "name": "Software Development Division",
                "description": "Custom software, web, and app development for businesses in the US."
              },
              {
                "@type": "Organization",
                "name": "AI & Machine Learning Division",
                "description": "AI-driven automation, analytics, and data intelligence solutions."
              },
              {
                "@type": "Organization",
                "name": "BPO & Support Division",
                "description": "Professional customer support, email handling, and live chat services."
              },
              {
                "@type": "Organization",
                "name": "Marketing & SEO Division",
                "description": "Performance-based digital marketing, SEO, and brand promotion services."
              }
            ]
          }
          ),
        }}
      />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://allsparktechnologies.com/#localbusiness",
            "name": "Allspark Technologies",
            "image": "https://allsparktechnologies.com/images/footer-logo.svg",
            "url": "https://allsparktechnologies.com",
            "logo": "https://allsparktechnologies.com/images/footer-logo.svg",
            "priceRange": "$$",
            "telephone": "+1-616-308-1863",
            "email": "info@allsparktechnologies.com",
            "description": "Allspark Technologies is a US-based technology company in Franklin Lakes, New Jersey. We provide software development, web and app design, AI solutions, cloud and DevOps, BPO, and digital marketing services to businesses across the United States.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "638 Knollwood Road",
              "addressLocality": "Franklin Lakes",
              "addressRegion": "NJ",
              "postalCode": "07417",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0160",
              "longitude": "-74.2057"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "sameAs": [
              "https://www.linkedin.com/company/all-spark-technologies",
              "https://www.facebook.com/allsparktechnologies.official",
              "https://www.instagram.com/allspark_technologies/"
            ],
            "founder": {
              "@type": "Person",
              "name": "Allspark Technologies Team"
            },
            "foundingDate": "2016",
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Tailored software solutions designed to match your business workflow."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI and Machine Learning Solutions",
                  "description": "AI-powered systems to automate, predict and optimize business operations."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital Marketing and SEO",
                  "description": "Data-driven online marketing and search optimization services for US businesses."
                }
              }
            ],
            "hasMap": "https://www.google.com/maps/place/638+Knollwood+Rd,+Franklin+Lakes,+NJ+07417"
          }
          ),
        }}
      />
    </div>
  );
}
