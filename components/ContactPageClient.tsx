"use client";
import { useQuery } from "@tanstack/react-query";
import { getContactDataQuery } from "@/utils/queries";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Script from "next/script";
import { baseURL } from "@/API/baseURL";
import Navbar4 from "./Narbar4";

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface ContactPageData {
  heroimg: string;
  title: string;
  description: string;
  methods: ContactMethod[];
  metadata: any;
  script: any;
}


const ContactPageClient = ({ contactData }: { contactData: ContactPageData }) => {
  const { data } = useQuery({
    ...getContactDataQuery(),
    initialData: contactData,
  });
  const dataToUse = data || contactData;
  return (
    <>
      <Topnav />
      {/* <Navbar2 /> */}
      <Navbar4 />
      <div className="w-[100vw] overflow-x-hidden">

        <Hero2Section
          title="Contact"
          backgroundImage={`${baseURL}/images/contact/${dataToUse.heroimg}`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <Contact pagedata={dataToUse} />
        <Footer />
        <Script
          id="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ContactPage",
                  "mainEntity": {
                    "@type": "Organization",
                    "name": "AllSpark Technologies",
                    "url": "https://allsparktechnologies.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-762-777-7275",
                      "email": "info@allsparktechnologies.com",
                      "contactType": "Customer Support",
                      "availableLanguage": "English",
                      "areaServed": "US"
                    },
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "638 Knollwood Road",
                      "addressLocality": "Franklin Lakes",
                      "addressRegion": "NJ",
                      "postalCode": "07417",
                      "addressCountry": "USA"
                    }
                  }
                }
              ]
            }),
          }}
        />

      </div>
    </>
  );
};

export default ContactPageClient;
