"use client";
import React from "react";
import { Activity, ArrowRight } from "lucide-react";
import Navbar3 from "./Navbar3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { baseURL } from "@/API/baseURL";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Navbar2 from "./Navbar2";

interface heroSection {
  bg: string;
  topBtn: string;
  topBtnLink: string;
  title: string;
  des: string;
  bottomBtn: string;
  bottomBtnLink: string;
}
export default function HomePage({ hero }: { hero: heroSection[] }) {

  // ✅ Autoplay Plugin Ref
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
  );
  return (
    <main className="min-h-screen max-w-[100vw] relative  text-white antialiased">
      <Navbar2 />
      <Carousel className=" h-[100%] min-h-screen " plugins={[plugin.current]} opts={{
        loop: true, // ✅ Makes the carousel loop infinitely
      }}>
        <CarouselContent className="h-[100%]  min-h-screen  ">
          {hero.map((data, index) => (
            <CarouselItem
              key={index}
              className=" bg-cover bg-center bg-no-repeat w-[100vw] h-[100%] flex flex-col justify-center min-h-screen"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${baseURL}/images/home/${data.bg})`,
              }}
            >



              <div className="container mx-auto h-full">
                <div className="h-full flex flex-col justify-center items-center sm:items-start ">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium ring-1 ring-white"
                  >
                    <Activity className="h-4 w-4" />
                    <span className="text-white/90 ">
                      <Link href={data.topBtnLink}>{data.topBtn}</Link>
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className=" lg:w-[85%] xl:w-[65%] mt-5 text-4xl font-extrabold !leading-[1.3] tracking-[0.01em] sm:text-5xl md:text-6xl text-center sm:text-start"
                  >
                    {data.title}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-5 max-w-2xl para text-white/80  text-center sm:text-start"
                  >
                    {data.des}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-7 flex flex-wrap items-center gap-4"
                  >
                    <Link
                      href={data.bottomBtnLink}
                      className="group inline-flex text-base relative items-center justify-center rounded-full bg-white hover:bg-transparent border border-transparent hover:border hover:border-[#384bff] px-6 py-3 pr-14 text-[#384bff] font-semibold transition "
                    >
                      {data.bottomBtn}
                      <div className="transition duration-300 border-2 rounded-full border-[#384bff] p-[6px] absolute right-2">
                        <ArrowRight className="h-4 w-4 -rotate-45" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>

    </main>
  );
}

