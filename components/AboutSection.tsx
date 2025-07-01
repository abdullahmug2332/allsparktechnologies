"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";

interface Feature {
  title: string;
  subtitle: string;
}

interface AboutData {
  img1: string;
  img2: string;
  img3: string;
  subheading: string;
  mainHeading: string;
  paragraphs: string[];
  features: Feature[];
}

const fetchAboutData = async (): Promise<AboutData> => {
  const res = await fetch(`${baseURL}/homedata`);
  const data = await res.json();
  if (!data.about) {
    throw new Error("About data not found");
  }
  return data.about;
};

export default function AboutSection() {
  const {
    data: aboutData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["aboutData"],
    queryFn: fetchAboutData,
  });

  if (isLoading) {
    return (
      <section className="py-28 text-center text-white bg-blue-600">
        <p>Loading...</p>
      </section>
    );
  }

  if (isError || !aboutData) {
    return (
      <section className="py-28 text-center text-white bg-blue-600">
        <p>Failed to load content.</p>
      </section>
    );
  }

  return (
    <section className="relative bg-blue-600 overflow-x-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse justify-between gap-10 px-3 lg:px-6 lg:flex-row">
        {/* Left Image Column */}
        <div className="relative w-full mx-auto lg:mx-0 max-w-md">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src={`${baseURL}/images/home/${aboutData.img1}`}
              alt="Main Image"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* Overlapping Image */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <Image
              src={`${baseURL}/images/home/${aboutData.img2}`}
              alt="Overlay Image"
              fill
              sizes="100px"
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Floating Shape */}
          <div
            className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[80px] xl:h-[80px] flex items-center justify-center rounded-full border-2 border-white text-white animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src={`${baseURL}/images/home/${aboutData.img3}`}
              alt="Floating Shape"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right Text Column */}
        <div className="w-full max-w-lg mx-auto lg:text-left">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>{aboutData.subheading}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          <h1 className="text-4xl font-bold !leading-normal sm:text-4xl">
            {aboutData.mainHeading}
          </h1>

          <p className="mt-4 text-base text-white/80">
            <span className="mb-5 block">{aboutData.paragraphs[0]}</span>
            <span className="mt-5 block">{aboutData.paragraphs[1]}</span>
          </p>

          {/* Features Section */}
          <div className="flex flex-wrap lg:flex-nowrap space-x-6 mt-10 gap-6 lg:gap-0 justify-center lg:justify-between">
            {aboutData?.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg"
              >
                <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                  {index === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lightbulb text-blue-600"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  ) : index === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe text-blue-600"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col">
                  <h6 className="text-white font-semibold">{feature.title}</h6>
                  <p className="text-white text-xs">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
