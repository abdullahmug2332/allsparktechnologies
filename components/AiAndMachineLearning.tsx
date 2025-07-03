"use client";

import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ServicesTabs from "@/components/ServicesTabs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";
import Script from "next/script";

type ContentData = {
  hero: {
    title: string;
    backgroundImage: string;
    mobileBackgroundImage: string;
    breadcrumbs: { label: string; href: string }[];
    subtitle: string;
  };
  introduction: string;
  services: {
    title: string;
    cards: { title: string; content: string }[];
  };
  approach: {
    title: string;
    cards: { iconColor: string; title: string; content: string }[];
  };
  faqs: {
    title: string;
    items: { question: string; answer: string }[];
  };
  whyChoose: {
    title: string;
    stats: { id: number; label: string; value: number; suffix: string }[];
  };
  metadata?: any;
  script?: any;
};

const fetchServiceData = async (): Promise<ContentData> => {
  const service = "ai-and-machine-learning";
  const res = await axios.post(`${baseURL}/service`, { name: service });
  return res.data;
};

export default function CustomSoftwareDevelopment() {
  const { data: contentData, isLoading, isError } = useQuery({
    queryKey: ["serviceData", "ai-and-machine-learning"],
    queryFn: fetchServiceData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !contentData) return <div>Something went wrong.</div>;

  return (
    <>
      <div>
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
      </div>
    </>
  );
}
