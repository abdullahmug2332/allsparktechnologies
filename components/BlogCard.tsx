"use client";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { baseURL } from "@/API/baseURL";

interface BlogCardProps {
  image: string;
  title: string;
  subtitle: string;
  service: string;
  date?: string; 
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <div className="group hover:cursor-pointer shadow-2xl rounded-[10px] overflow-hidden">
      <div className="relative w-full p-[15px] h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 transform group-hover:scale-[1.2]"
          style={{ backgroundImage: `url(${baseURL}/images/blogs/${props.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent transition duration-500 from-[black] opacity-9 0 group-hover:opacity-100 group-hover:from-[#384cffb7]" />
        <div className="relative z-10 flex flex-col justify-end h-full">
          <p className="absolute top-0 right-0 bg-white p-[5px] font-bold text-[11px] inline-block rounded-[4px]">
            {props.service}
          </p>
          <div className="bg-white absolute right-0 rounded-full p-[5px] duration-500 scale-[0] group-hover:scale-[1.2]">
            <IoAddOutline className="text-[20px] text-[#384BFF] duration-300 hover:rotate-90" />
          </div>
          <div className="overflow-hidden h-full flex flex-col justify-end pt-[60px]">
            <p className="text-white text-[20px] font-extrabold mb-[10px] group-hover:-translate-y-5 duration-500">
              {props.title}
            </p>
            <p className="text-white text-[17px] font-normal mb-[2px] group-hover:-translate-y-5 duration-500">
              {props.subtitle.length > 70
                ? props.subtitle.slice(0, 70) + "..."
                : props.subtitle}
            </p>
            <div className="text-[13px] text-white translate-y-9 group-hover:-translate-y-5 duration-500">
              {props.date || "Wed, Apr 13, 2023"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
