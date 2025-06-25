"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";


export default function ServiceCards() {
  interface ServiceCard {
  title: string;
  description: string;
}

const [services, setServices] = useState<ServiceCard[]>([]);
useEffect(() => {
  const fetchPageData = async () => {
    try {
      const res = await fetch(`${baseURL}/aboutdata`);
      if (!res.ok) throw new Error("Failed to fetch page data");
      const data = await res.json();
      setServices(data.cards); 
      console.log("Fetched services:", data.cards);
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };

  fetchPageData();
}, []);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16  lg:pt-20">
      {/* Container with three columns on md+ screens, single column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_1.svg"}
              alt="icon 1"
              width={75}
              height={75}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              {services[0]?.title}
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              {services[0]?.description}
            </p>
            {/* Button */}
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_2.svg"}
              alt="icon 1"
              width={75}
              height={75}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              {services[1]?.title}
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              {services[1]?.description}
            </p>
            {/* Button */}
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_3.svg"}
              alt="icon 1"
              width={75}
              height={75}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              {services[2]?.title}
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              {services[2]?.description}
            </p>
            {/* Button */}
          </div>
        </div>

        {/* Card 2 */}
      </div>
    </div>
  );
}
