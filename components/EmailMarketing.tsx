"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ServicesTabs from "@/components/ServicesTabs";
import Script from "next/script";

type Breadcrumb = { label: string; href: string };
type HeroSectionData = { title: string; backgroundImage: string; mobileBackgroundImage: string; breadcrumbs: Breadcrumb[]; subtitle: string };
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
  const service = "email-marketing";

  const fetchContentData = async (): Promise<ContentData> => {
    const res = await axios.post(`${baseURL}/service`, { name: service });
    return res.data;
  };

  const {
    data: contentData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["serviceContent", service],
    queryFn: fetchContentData,
    enabled: !!service,
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (isError || !contentData)
    return <div className="text-center py-20">Failed to load content.</div>;

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
