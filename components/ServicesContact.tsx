"use client";
import React from 'react';

const ServicesContact = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto text-center md:px-4">
        {/* Intro Text */}
        <p className="text-lg md:text-xl text-white mb-6">
          Let&apos;s create the solution that drives your business forward!
        </p>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-12">
          Get in touch today and let&apos;s discuss your project!
        </h2>

        {/* Button */}
        <a
          href="/contact"
          className="inline-block bg-white text-[#2B4EFF] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default ServicesContact;
