"use client";

import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer2 from "@/components/Footer2";
import Contact from "@/components/Contact";
import Script from "next/script";
import { baseURL } from "@/API/baseURL";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ContactData = {
  heroimg: string;
  script: string;
};

const fetchContactData = async (): Promise<ContactData> => {
  const res = await axios.get(`${baseURL}/contactdata`);
  return res.data;
};

const ContactPageClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contactData"],
    queryFn: fetchContactData,
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (isError || !data)
    return (
      <div className="text-center py-20">Failed to load contact data.</div>
    );

  return (
    <>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="Contact Us"
        backgroundImage={`${baseURL}/images/contact/${data.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <Contact />
      <Footer2 />
      <Script
        id="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.script),
        }}
      />
    </>
  );
};

export default ContactPageClient;
