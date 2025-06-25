"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { baseURL } from "@/API/baseURL";


interface LogoItem {
  id: number;
  src: string;
  alt: string;
}

export default function Logos() {
  const [loading, setLoading] = useState(true);
  const [logos, setLogos] = useState<LogoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/homedata`);
        const result = await response.json();
        if (result.logos) {
          setLogos(result.logos); 
        }
      } catch (error) {
        console.error("Error fetching logo data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-8 border-b border-gray-400">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex h-16 w-auto items-center">
            <Image
              src={`${baseURL}/images/home/${logo.src}`}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
