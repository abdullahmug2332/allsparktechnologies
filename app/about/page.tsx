// app/about/page.tsx

import { Metadata } from "next";
import Script from "next/script";

// Dynamically import the client component
import AboutClient from "@/components/AboutClient";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: 'About AllSpark Technologies | US-Based Software Development & AI Company',
//     description:
//       'Learn more about AllSpark Technologies, a trusted software development and AI company in the USA. Discover how our experienced developers deliver innovative, tech-enabled digital solutions.',
//     metadataBase: new URL('https://allsparktechnologies.com'),
//     alternates: {
//       canonical: '/about/',
//     },
//     openGraph: {
//       title: 'About AllSpark Technologies | US-Based Software Development Company',
//       description:
//         'Meet AllSpark Technologies — a trusted software development and AI company in the USA. Learn how we help businesses grow with innovative digital solutions.',
//       url: 'https://allsparktechnologies.com/about/',
//       type: 'website',
//       siteName: 'AllSpark Technologies',
//       images: [
//         {
//           url: 'https://allsparktechnologies.com/assets/og-image.jpg',
//           width: 1200,
//           height: 630,
//           alt: 'AllSpark Technologies',
//         },
//       ],
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: 'About AllSpark Technologies | US-Based Software Development & AI Company',
//       description:
//         'AllSpark Technologies is a leading software development and AI company in the USA. Discover our trusted digital solutions and expert software team.',
//       images: ['https://allsparktechnologies.com/assets/og-image.jpg'],
//     },
// };

export default function AboutPage() {

  return (
    <>
      <AboutClient />{" "}
      <Script
      id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
           
                "@type": "Organization",
                name: "AllSpark Technologies",
                url: "https://allsparktechnologies.com",
                logo: "https://allsparktechnologies.com/logo.png",
                sameAs: [
                  "https://www.linkedin.com/company/allspark-technologies",
                  "https://twitter.com/allsparktech",
                ],
                description:
                  "AllSpark Technologies is a US-based software development and AI company offering custom software solutions, cloud systems, and tech-enabled services.",
                foundingDate: "2010",
                founders: [
                  {
                    "@type": "Person",
                    name: "AllSpark Founders",
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "USA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  availableLanguage: ["English"],
                  email: "info@allsparktechnologies.com",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
