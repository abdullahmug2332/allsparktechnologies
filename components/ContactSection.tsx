"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { baseURL } from "@/API/baseURL";

interface Contact {
  img: string;
  subTitle: string;
  title: string;
}

export default function ContactSection() {
  const router = useRouter();
  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${baseURL}/homedata`);
        const result = await res.json();
        if (result.contactBanner) {
          setData(result.contactBanner);
        }
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if(loading == true){
    return <> Loading..</>
  }

  return (
    <section className="relative pt-16 mb-[-100px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col items-center justify-between rounded-xl bg-blue-600 py-3 px-10 text-white md:flex-row">
          {/* Left Section - Illustration and Text */}
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <Image
              src={`${baseURL}/images/home/${data?.img}`}
              alt="Consultation"
              width={250}
              height={250}
              className="mb-4 md:mb-0 md:mr-6"
              unoptimized
            />

            <div className="text-center md:text-left">
              {/* Contact Label */}
              <div className="mb-2 flex items-center justify-center md:justify-start space-x-4 text-sm font-semibold uppercase tracking-wide">
                <ArrowLeft className="h-4 w-4" />
                <span>{data?.subTitle}</span>
                <ArrowRight className="h-4 w-4" />
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl font-bold md:text-3xl">
                {data?.title}
              </h2>
            </div>
          </div>

          {/* Right Section - Call to Action */}
          <div className="mt-6 md:mt-0">
            <Button
              className="rounded-full bg-[#F98600] hover:bg-opacity-80 text-white  px-10 py-6"
              onClick={() => {
                router.push("/contact");
              }}
            >
              TALK TO A SPECIALIST →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
