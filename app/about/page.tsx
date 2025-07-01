"use client";
import Script from "next/script";
import AboutClient from "@/components/AboutClient";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";

export default function AboutPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutScript"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/aboutdata`);
      if (!res.ok) throw new Error("Failed to fetch About data");
      return res.json();
    },
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Failed to load data</>;

  return (
    <>
      <AboutClient />
      {data?.script && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data.script),
          }}
        />
      )}
    </>
  );
}
