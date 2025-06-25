"use client";
import React from "react";

// Individual card data shape


// Props for the Card component
type CardProps = {
  services: {
    title: string; // Introductory paragraph above the cards
    cards: {
      title: string;
      content: string;
    }[]; // Array of card objects
  };
};

const Card: React.FC<CardProps> = ({ services }) => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Intro Paragraph */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed ">
            {services.title}
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          {services.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 ">
                {card.title}
                <div className="-mt-2">
                  <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                </div>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed ">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
