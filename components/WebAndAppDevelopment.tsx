"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/API/baseURL";

import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ServicesTabs from "@/components/ServicesTabs";
import Script from "next/script";

// Define all necessary types
type Breadcrumb = { label: string; href: string };
type HeroSectionData = {
  title: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
  breadcrumbs: Breadcrumb[];
  subtitle: string;
};
type ServiceCard = { title: string; content: string };
type ServicesSectionData = { title: string; cards: ServiceCard[] };
type ApproachCard = { iconColor: string; title: string; content: string };
type ApproachSectionData = { title: string; cards: ApproachCard[] };
type FAQItem = { question: string; answer: string };
type FAQsSectionData = { title: string; items: FAQItem[] };
type Stat = { id: number; label: string; value: number; suffix: string };
type WhyChooseData = { title: string; stats: Stat[] };
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
  script?: any;
};

export default function CustomSoftwareDevelopment() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const service = "web-and-app-development"; // 🔁 Change this per page

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const res = await axios.post(`${baseURL}/service`, { name: service });
        if (res.data) {
          setContentData(res.data);
        } else {
          console.error("Empty response from server.");
        }
      } catch (error) {
        console.error("Failed to fetch service content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContentData();
  }, [service]);

  if (loading || !contentData) return null;

  return (
    <>
      <Topnav />
      <Navbar2 />
      <ServicesTabs data={contentData} />
      {contentData.script && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contentData.script),
          }}
        />
      )}
      <Footer2 />
    </>
  );
}
