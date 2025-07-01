"use client";

import { baseURL } from "@/API/baseURL";
import { PlayCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

const fetchProcessData = async (): Promise<ProcessItem[]> => {
  const res = await axios.get(`${baseURL}/homedata`);
  return res.data.process;
};

export default function ProcessSection() {
  const {
    data: processData,
    isLoading,
    isError,
    error,
  } = useQuery<ProcessItem[]>({
    queryKey: ["processData"],
    queryFn: fetchProcessData,
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error: {(error as Error).message}</p>;

  return (
    <section className="relative py-28 mt-10">
      <div className="">
        <div className="relative mx-auto max-w-[95%] xl:max-w-6xl">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src="/images/videos/below_process.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-xl"
            />

            {false && (
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50">
                <PlayCircle className="h-16 w-16 text-white" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[-250px] bg-[#0E0E47] pt-80 pb-32 text-white">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 md:grid-cols-2 xl:grid-cols-4">
            {processData?.map((step, index) => (
              <div key={index} className="text-start">
                <h2 className="text-4xl font-bold text-gray-400">
                  {step.number}
                </h2>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs text-gray-300 leading-[20px] [word-spacing:0.15em]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
