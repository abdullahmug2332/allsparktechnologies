"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { baseURL } from "@/API/baseURL";


interface AboutData {
  heroimg:string,
  img1:string,
  img2:string,
  img3:string,
  img4:string,
  subheading: string;
  mainHeading: string;
  split: string;
  paragraphs: string[];
}
export default function AboutPageComponent() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${baseURL}/aboutdata`);
        if (!res.ok) throw new Error("Failed to fetch about data");
        const data: AboutData = await res.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return <p className="text-center py-10">Loading...</p>;
  return (
    <section className="py-10 md:py-16  lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 2-column grid: images left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Images) */}
          <div className="relative mb-10 ">
            {/* Background Shape (Positioned behind other images) */}
            <Image
              src={`${baseURL}/images/about/${aboutData.img3}`}
              alt="Decorative shape"
              width={500} // Set an appropriate width
              unoptimized
              height={500} // Set an appropriate height to maintain aspect ratio
              className="absolute top-0 right-0 lg:right-1/4 w-[25%] -z-1"
            />

            {/* Main Image (people in a meeting) */}
            <Image
              src={`${baseURL}/images/about/${aboutData.img1}`}
              alt="Team Meeting"
              width={800} // Set an appropriate width
              unoptimized
              height={600} // Set an appropriate height to maintain aspect ratio
              className="w-full right-0  lg:w-2/3 h-auto z-10"
              style={{ zIndex: 10 }}
            />

            {/* Second Image (VR headset), absolutely positioned below/overlap */}
            <div className="absolute bottom-0 right-0 lg:right-1/4 sm:right-32 border-4 shadow-md border-white transform translate-y-1/4">
              <Image
                src={`${baseURL}/images/about/${aboutData.img2}`}
                alt="VR Headset"
                width={192} // Set an appropriate width
                unoptimized
                height={192} // Set an appropriate height to maintain aspect ratio
                className="w-32 sm:w-48 h-auto"
              />
            </div>

            {/* "10 Years of Experience" Badge */}
            <div className="flex gap-2 absolute bottom-[-2.5rem] left-4 sm:left-8 bg-blue-600 text-white py-3 px-5">
              <Image
                src={`${baseURL}/${aboutData.img4}`}
                alt="Clock Icon"
                width={30}
                unoptimized
                height={30}
              />
              <div>
                <p className="text-base font-bold">
                  10 <span className="text-[10px] font-normal">Years</span>
                </p>
                <p className="text-[10px] font-medium">Of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div>
            {/* Subheading */}

            <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
              <ArrowLeft className="h-4 w-4" />
              <span>{aboutData.subheading}</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              {aboutData.mainHeading.split(aboutData.split)[0]}
              <br />
              <span className="text-blue-600">
                {"Through" + aboutData.mainHeading.split(aboutData.split)[1]}
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 mb-6 text-base">
             {aboutData.paragraphs[0]}
            </p>

            <p className="text-gray-600 mb-6 text-base">
             {aboutData.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
