"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";

interface LogoItem {
  id: number;
  src: string;
  alt: string;
}

// Axios fetcher
const fetchLogos = async (): Promise<LogoItem[]> => {
  const response = await axios.get(`${baseURL}/homedata`);
  const data = response.data;
  if (!data.logos) throw new Error("Logo data not found");
  return data.logos;
};

export default function Logos() {
  const {
    data: logos,
    isLoading,
    isError,
    error,
  } = useQuery<LogoItem[]>({
    queryKey: ["logos"],
    queryFn: fetchLogos,
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error: {(error as Error).message}</>;

  return (
    <section className="py-8 border-b border-gray-400">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4">
        {logos?.map((logo) => (
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
