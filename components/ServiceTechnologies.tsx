"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; // 👈 import Framer Motion
import { baseURL } from "@/API/baseURL";
import globe from "@/public/globe.png";

interface Technology {
  name: string;
  Icon: string | StaticImageData;
}

interface TechnologyCategory {
  name: string;
  techs: Technology[];
}

interface Technologies {
  title: string;
  des: string;
  technologies: TechnologyCategory[];
}

interface ServiceTechnologiesProps {
  serviceTechnologies?: Technologies;
}

export default function ServiceTechnologies({
  serviceTechnologies,
}: ServiceTechnologiesProps) {
  const [select, setSelect] = useState<string>(
    serviceTechnologies?.technologies[0]?.name || "Frontend"
  );

  return (
    <div className="bg-[#181965] pad relative overflow-hidden techlogies-section">
      <Image
        src={globe}
        alt="globe"
        width={300}
        height={200}
        className="absolute right-0 h-[100%] object-cover w-auto opacity-40 z-[1] pointer-events-none"
      />

      <div className="container relative z-[2]">
        <div className="text-white text-center">
          {/* Heading Animation */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[70%] xl:w-[55%] mx-auto heading font-[800]"
          >
            {serviceTechnologies?.title}
          </motion.p>

          {/* Description Animation */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]"
          >
            {serviceTechnologies?.des}
          </motion.p>

          {/* Tabs */}
          <div className="flex mt-[60px] border-b justify-center  gap-[10px] z-[2]">
            {serviceTechnologies?.technologies.map((category) => (
              <p
                key={category.name}
                onClick={() => setSelect(category.name)}
                className={`cursor-pointer py-[5px] px-[7px] flex items-center md:px-[25px] text-[8px] md:text-[15px] rounded-t-xl duration-300 ${select === category.name ? "bg-[#384bff]" : ""
                  }`}
              >
                {category.name.toUpperCase()}
              </p>
            ))}
          </div>

          {/* Technologies Animation */}
          <div className="mt-[30px] flex flex-wrap gap-3 gap-y-6 md:gap-3 justify-center">
            {serviceTechnologies?.technologies
              .find((category) => category.name === select)
              ?.techs.map((tec, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="w-[47%] md:w-[23%] lg:w-[14%] flex flex-col items-center border py-[10px] pt-[30px] rounded-[5px] relative mt-[20px]"
                >
                  <div className="w-[60px] h-[60px] bg-[#384bff] rounded-full translate-y-[-100%] absolute flex items-center justify-center p-[5px] hover:scale-[1.04] duration-300">
                    <Image
                      src={`${baseURL}/images/services/${tec.Icon}`}
                      alt={tec.name}
                      width={200}
                      height={200}
                      className="!w-[80%] h-[80%] object-contain "
                       loading="lazy"  

                       

                    />
                  </div>
                  <p className="mt-2 para capitalize px-[5px]">{tec.name}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
