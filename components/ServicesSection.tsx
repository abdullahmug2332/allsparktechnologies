"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/API/baseURL";

interface ServiceItem {
  id: string;
  title: string;
  imageUrl: string;
}
interface ServicesData {
  subTitle: string;
  title: string;
  allServices: ServiceItem[];
}

const fetchServices = async (): Promise<ServicesData> => {
  const res = await axios.get(`${baseURL}/homedata`);
  return res.data.homeServices;
};

export default function ServicesSection() {
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery<ServicesData>({
    queryKey: ["homeServices"],
    queryFn: fetchServices,
  });

  const displayedServices = Array.isArray(services?.allServices)
    ? services.allServices.slice(0, 10)
    : [];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    hover: { y: -10 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error: {(error as Error).message}</>;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <div className="mx-auto max-w-7xl text-start">
        {/* Title Section */}
        <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
          <ArrowLeft className="h-4 w-4" />
          <span>{services?.subTitle}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative">
          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            {services?.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <AnimatePresence>
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <Link
                href={{
                  pathname: `/${service.id}`,
                }}
                className="w-full h-full"
              >
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${baseURL}/images/home/${service.imageUrl})`,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
