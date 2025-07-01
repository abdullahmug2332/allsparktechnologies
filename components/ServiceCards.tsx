"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";

interface ServiceCard {
  title: string;
  description: string;
}

const fetchServiceCards = async (): Promise<ServiceCard[]> => {
  const res = await axios.get(`${baseURL}/aboutdata`);
  return res.data.cards;
};

export default function ServiceCards() {
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery<ServiceCard[]>({
    queryKey: ["serviceCards"],
    queryFn: fetchServiceCards,
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error: {(error as Error).message}</p>;

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16  lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-2 flex justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center"
          >
            <div className="mb-4 mt-2 text-[#1D4ED8]">
              <Image
                src={`/images/Layer_${i + 1}.svg`}
                alt={`icon ${i + 1}`}
                width={75}
                height={75}
              />
            </div>
            <div className="flex flex-col text-start items-start ml-3">
              <h5 className="mb-2 text-lg font-semibold text-gray-800">
                {services?.[i]?.title || "Title"}
              </h5>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                {services?.[i]?.description || "Description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
