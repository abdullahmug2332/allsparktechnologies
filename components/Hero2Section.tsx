"use client";
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
  overlayColor?: string;
  heightClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  overlayColor = 'bg-blue-900/50',
  heightClass = 'h-96',
}) => {

  return (
    <section
      className={`relative w-full ${heightClass} bg-cover bg-center`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
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
