"use client"
import React, { useEffect, useState } from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer2 from "@/components/Footer2";
import Contact from "@/components/Contact";
// import { Metadata } from "next";
import Script from "next/script";
import { baseURL } from "@/API/baseURL";


// export const metadata: Metadata = {
//   title:
//     "Contact AllSpark Technologies | Custom Software Development & AI Experts",
//   description:
//     "Get in touch with AllSpark Technologies, a US-based software development company. Call, email, or schedule a consultation with our software and AI experts today.",
//   metadataBase: new URL("https://allsparktechnologies.com"),
//   alternates: {
//     canonical: "/contact/",
//   },
//   openGraph: {
//     title:
//       "Contact AllSpark Technologies | Custom Software Development & AI Experts",
//     description:
//       "Call, email, or schedule a consultation with our US-based software development and AI experts.",
//     url: "https://allsparktechnologies.com/contact/",
//     type: "website",
//     siteName: "AllSpark Technologies",
//     images: [
//       {
//         url: "https://allsparktechnologies.com/assets/contact-og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Contact AllSpark",
//       },
//     ],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Contact AllSpark Technologies | Custom Software Development & AI Experts",
//     description:
//       "Connect with a US-based software development company. Discuss your project, request a quote, or consult our AI and software experts.",
//     images: ["https://allsparktechnologies.com/assets/contact-og.jpg"],
//   },
// };

const ContactPage = () => {
   const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await fetch(`${baseURL}/contactdata`);
        if (!res.ok) throw new Error("Failed to fetch page data");
        const data = await res.json();
        setImgPath(data.heroimg);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchPageData();
  }, []);
  return (
    <>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="Contact Us"
        backgroundImage={`${baseURL}/images/contact/${imgPath}`}
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                mainEntity: {
                  "@type": "Organization",
                  name: "AllSpark Technologies",
                  url: "https://allsparktechnologies.com",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-762-777-7275",
                    email: "info@allsparktechnologies.com",
                    contactType: "Customer Support",
                    availableLanguage: "English",
                    areaServed: "US",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "638 Knollwood Road",
                    addressLocality: "Franklin Lakes",
                    addressRegion: "NJ",
                    postalCode: "07417",
                    addressCountry: "USA",
                  },
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default ContactPage;
