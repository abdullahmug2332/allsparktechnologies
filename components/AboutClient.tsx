// app/about/AboutClient.tsx
'use client';

import Topnav from '@/components/Topnav';
import Navbar2 from '@/components/Navbar2';
import Hero2Section from '@/components/Hero2Section';
import Footer2 from '@/components/Footer2';
import ServiceCards from '@/components/ServiceCards';
import AboutPageComponent from '@/components/AboutPageComponent';
import CoreValuesSemiCircle from '@/components/CoreValuesSemiCircle';
import React, { Suspense, useEffect, useState } from 'react';
import { baseURL } from "@/API/baseURL";


const AboutClient = () => {
       const [imgPath, setImgPath] = useState("");
    useEffect(() => {
      const fetchPageData = async () => {
        try {
          const res = await fetch(`${baseURL}/aboutdata`);
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
        title="About Us"
        backgroundImage={`${baseURL}/images/about/${imgPath}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/About' },
        ]}
      />
      <ServiceCards />

      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPageComponent />
      </Suspense>

      <CoreValuesSemiCircle />
      <Footer2 />
    </>
  );
};

export default AboutClient;
