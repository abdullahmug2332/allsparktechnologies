"use client";
import React from 'react';
import { baseURL } from "@/API/baseURL";


interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  overlayColor?: string;
  heightClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  overlayColor = 'bg-blue-900/50',
  heightClass = 'h-96',
}) => {
const backgroundImageURL =  `${baseURL}/images/blogs/${backgroundImage}`;

  return (
    <section
      className={`relative w-full ${heightClass} bg-cover bg-center`}
      style={{ backgroundImage: `url('${backgroundImageURL}')` }}
    >
      <div className={`absolute inset-0 ${overlayColor}`} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>
        {/* Breadcrumbs can be added here */}
      </div>
    </section>
  );
};

export default HeroSection;
