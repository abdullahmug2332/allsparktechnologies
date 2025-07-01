"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { baseURL } from "@/API/baseURL";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const fetchTestimonials = async (): Promise<TestimonialsData> => {
  const res = await axios.get(`${baseURL}/homedata`);
  return res.data.testimonials; // Adjust if structure differs
};

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

  if (isLoading) return <div>Loading testimonials...</div>;
  if (isError || !data) return <div>Failed to load testimonials.</div>;

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 mt-8 text-center">
        {/* Section header */}
        <div className="flex items-center justify-center space-x-4 text-sm font-semibold uppercase text-blue-700">
          <ArrowLeft className="h-4 w-4" />
          <span>{data.subtitle}</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <h2 className="mb-20 mt-5 text-4xl font-bold text-gray-900">
          {data.title}
        </h2>

        {/* Swiper carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="!pb-8"
        >
          {data.testimonials.map((t, idx) => (
            <SwiperSlide key={t.id}>
              <div
                className={`h-[250px] flex flex-col justify-between rounded-xl p-4 shadow-lg transition-colors duration-300 ${
                  active === idx ? "bg-blue-600 text-white" : "bg-white text-gray-900"
                }`}
              >
                {/* Stars */}
                <div className="mb-6 mt-3 flex justify-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <div key={i} className="h-6 w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#ffbb00"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed">{t.text}</p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                    unoptimized
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-semibold">{t.name}</h3>
                    <p
                      className={`text-sm ${
                        active === idx ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                  <Quote
                    className={`ml-auto h-7 w-7 ${
                      active === idx ? "text-blue-200" : "text-gray-300"
                    }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
