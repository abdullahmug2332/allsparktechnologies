"use client";

import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer2 from "@/components/Footer2";
import ServiceCards from "@/components/ServiceCards";
import AboutPageComponent from "@/components/AboutPageComponent";
import CoreValuesSemiCircle from "@/components/CoreValuesSemiCircle";
import React, { Suspense } from "react";
import { baseURL } from "@/API/baseURL";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Script from "next/script";



// Fetch function using Axios
const fetchAboutData = async () => {
  const res = await axios.get(`${baseURL}/aboutdata`);
  return res.data;
};

const AboutClient = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutdata"],
    queryFn: fetchAboutData,
  });
  if (isLoading  ) return <div>Loading...</div>;
  if (error ) return <div>Error loading data</div>;

  return (
    <>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="About Us"
        backgroundImage={`${baseURL}/images/about/${data.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/About" },
        ]}
      />
      <ServiceCards />
      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPageComponent />
      </Suspense>
      <CoreValuesSemiCircle />
      {data?.script && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data.script),
          }}
        />
      )}
      <Footer2 />
    </>
  );
};

export default AboutClient;
