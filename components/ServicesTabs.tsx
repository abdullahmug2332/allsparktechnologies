"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Correct import for App Directory
import HeroSection from "@/components/HeroSection";
import Card from "./Card";
import ServiceAccordion from "./ServiceAccordion";
import ApproachSection from "./ApproachSection";
import WhyChooseSection from "@/components/WhyChooseAST";
import ServicesContact from "./ServicesContact";
import TableOfContent from "./TableOfContent";
import Script from "next/script";
import Head from "next/head";
import axios from "axios";
import { motion } from "framer-motion"; // Import framer-motion
import { baseURL } from "@/API/baseURL";


// type ServiceKey =
//   | "custom-software-development"
//   | "web-and-app-development"
//   | "ai-and-machine-learning"
//   | "cloud-and-devops-solutions"
//   | "ui-ux-design"
//   | "ecommerce-development"
//   | "customer-support"
//   | "email-marketing"
//   | "live-chat-support"
//   | "digital-marketing-and-seo";

type Breadcrumb = {
  label: string;
  href: string;
};

type HeroSectionData = {
  title: string;
  backgroundImage: string;
  mobileBackgroundImage:string;
  breadcrumbs: Breadcrumb[];
  subtitle: string;
};

type ServiceCard = {
  title: string;
  content: string;
};

type ServicesSectionData = {
  title: string;
  cards: ServiceCard[];
};

type ApproachCard = {
  iconColor: string;
  title: string;
  content: string;
};

type ApproachSectionData = {
  title: string;
  cards: ApproachCard[];
};

type FAQItem = {
  question: string;
  answer: string;
};

type FAQsSectionData = {
  title: string;
  items: FAQItem[];
};

type Stat = {
  id: number;
  label: string;
  value: number;
  suffix: string;
};

type WhyChooseData = {
  title: string;
  stats: Stat[];
};

type Metadata = {
  title: string;
  description: string;
  robots?: { index?: boolean; follow?: boolean };
  metadataBase?: { href: string };
  alternates?: { canonical: string };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    siteName?: string;
    images?: { url: string; width: number; height: number; alt: string }[];
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
};

type ContentData = {
  hero: HeroSectionData;
  introduction: string;
  services: ServicesSectionData;
  approach: ApproachSectionData;
  faqs: FAQsSectionData;
  whyChoose: WhyChooseData;
  metadata?: Metadata;
  script?: any; // Optional: You can type this too if needed
};

export default function ServicesTabs() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchContentData = async () => {
      if (!mounted || !isClient) return;

      const service = searchParams.get("service");
      if (!service) return;

      try {
        const res = await axios.post(`${baseURL}/service`, {
          name: service,
        });

        if (res.data) {
          setContentData(res.data);
        } else {
          console.error("Empty response from server.");
        }
      } catch (error) {
        console.error("Failed to fetch service content:", error);
      }
    };

    fetchContentData();
  }, [searchParams, mounted, isClient]);

  if (!mounted || !contentData) return null; 

  return (
    <>
      <Head>
        <title>{contentData.metadata?.title}</title>
        <meta name="description" content={contentData.metadata?.description} />
        <meta
          name="robots"
          content={`${
            contentData.metadata?.robots?.index ? "index" : "noindex"
          },${contentData.metadata?.robots?.follow ? "follow" : "nofollow"}`}
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`${contentData.metadata?.metadataBase?.href}${contentData.metadata?.alternates?.canonical}`}
        />

        {/* OpenGraph Tags */}
        <meta
          property="og:title"
          content={contentData.metadata?.openGraph?.title}
        />
        <meta
          property="og:description"
          content={contentData.metadata?.openGraph?.description}
        />
        <meta
          property="og:url"
          content={contentData.metadata?.openGraph?.url}
        />
        <meta
          property="og:type"
          content={contentData.metadata?.openGraph?.type}
        />
        <meta
          property="og:site_name"
          content={contentData.metadata?.openGraph?.siteName}
        />
        <meta
          property="og:image"
          content={contentData.metadata?.openGraph?.images?.[0]?.url}
        />
        <meta
          property="og:image:width"
          content={`${contentData.metadata?.openGraph?.images?.[0]?.width}`}
        />
        <meta
          property="og:image:height"
          content={`${contentData.metadata?.openGraph?.images?.[0]?.height}`}
        />
        <meta
          property="og:image:alt"
          content={contentData.metadata?.openGraph?.images?.[0]?.alt}
        />

        {/* Twitter Card Tags */}
        <meta
          name="twitter:card"
          content={contentData.metadata?.twitter?.card}
        />
        <meta
          name="twitter:title"
          content={contentData.metadata?.twitter?.title}
        />
        <meta
          name="twitter:description"
          content={contentData.metadata?.twitter?.description}
        />
        <meta
          name="twitter:image"
          content={contentData.metadata?.twitter?.images?.[0]}
        />
      </Head>
      <div>
        <HeroSection
          title={contentData.hero.title}
          backgroundImage={contentData.hero.backgroundImage}
          mobileBackgroundImage={contentData.hero.mobileBackgroundImage}
          breadcrumbs={[
            {
              label: contentData.hero.breadcrumbs[0].label,
              href: contentData.hero.breadcrumbs[0].href,
            },
            {
              label: contentData.hero.breadcrumbs[1].label,
              href: contentData.hero.breadcrumbs[1].href,
            },
          ]}
        />
        <div className="w-full container max-w-7xl mx-auto px-4 md:px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Section: On Load Transition */}

          {/* Other Sections: Transition On View */}
          <div className="md:col-span-3">
            <section id="our-services">
              <motion.div
                // className="md:col-span-3"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                layout
              >
                <Card services={contentData.services} />
              </motion.div>
            </section>
            <motion.section
              id="our-approach"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ApproachSection approach={contentData.approach} />
            </motion.section>

            <motion.section
              id="why-choose-ast"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <WhyChooseSection whyChoose={contentData.whyChoose} />
            </motion.section>

            <motion.section
              id="faqs"
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ServiceAccordion faqs={contentData.faqs} />
            </motion.section>

            <motion.section
              id="contact"
              className="bg-[#2B4EFF] px-4 py-20 mb-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ServicesContact />
            </motion.section>
          </div>

          {/* Table of Contents: On View Transition */}
          <motion.aside
            className="hidden md:block"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            layout
          >
            <TableOfContent />
          </motion.aside>
          <Script
            id="ldjson"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(contentData.script),
            }}
          />
        </div>
      </div>
    </>
  );
}
