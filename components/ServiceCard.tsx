"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import shape3 from "@/public/images/shape3.png";
import { baseURL } from "@/API/baseURL";

interface ServiceCardItem {
  icon: string | StaticImageData;
  number: number | string;
  text: string;
  symbol?: string;
}

interface ServiceCardData {
  title: string;
  cards: ServiceCardItem[];
}

interface ServiceCardProps {
  serviceCard: ServiceCardData;
}

export default function ServiceCard({ serviceCard }: ServiceCardProps) {
  return (
    <div className="mar">
      <motion.div
        className="container flex flex-wrap bg-[#f4f7fb]  relative overflow-hidden rounded-[10px] border-2 bcolor"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Section Animation */}
        <div
          className="w-full lg:w-[50%] relative p-[20px] text-white font-[700] flex items-center justify-center text-center bg"
        >
          <p
            className="relative z-[50] text-center heading w-full md:w-[70%] lg:w-full"
            dangerouslySetInnerHTML={{ __html: serviceCard.title }}
          ></p>
        </div>

        {/* Right Section Animation */}
        <div
          className="w-full py-[20px] overflow-hidden lg:w-[50%] flex items-start md:items-center justify-center lg:justify-start relative"
        >
          <motion.div
            className="grid grid-cols-2 gap-6 md:gap-y-10 p-[10px] md:p-[15px] xl:p-[30px] w-[95%] mx-auto"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.35,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {serviceCard.cards.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Icon */}
                <Image
                  src={`${baseURL}/images/services/${card.icon}`}
                  alt="icon"
                  width={60}
                  height={60}
                  className="bg-white p-3 w-[50px] md:w-[70px] rounded-xl shadow-sm"
                  unoptimized
                />

                {/* Text */}
                <div className="text-center sm:text-left">
                  <p className="heading color font-bold leading-10">
                    {`${card.number}${card.symbol || ""}`}
                  </p>
                  <p className="para text-gray-600 leading-snug">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Image
            src={shape3}
            alt="img"
            className="absolute right-0 bottom-0 z-10 hidden"
          />
        </div>
      </motion.div>
    </div>
  );
}
