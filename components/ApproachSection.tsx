import React from "react";
import { BarChart2, Layers, UserCheck, RefreshCw } from "lucide-react";

export interface CardConfig {
  iconColor: string; // e.g. "blue", "green", "red", "yellow"
  title: string;
  content: string;
}

export interface ApproachConfig {
  title: string;
  cards: CardConfig[];
}

export interface ApproachSectionProps {
  id?: string;
  approach: ApproachConfig;
}

// Array of icon components to cycle through for each card
const iconComponents = [BarChart2, Layers, UserCheck, RefreshCw];

const ApproachSection: React.FC<ApproachSectionProps> = ({ id, approach }) => {
  const { title, cards } = approach;

  return (
    <section id={id} className="pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-800 mb-12">
          {title}
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, idx) => {
            // Pick icon by index, wrapping if more cards than icons
            const Icon = iconComponents[idx % iconComponents.length];
            const bgClass = `bg-${card.iconColor}-100`;
            const textClass = `text-${card.iconColor}-600`;

            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 border border-gray-200 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`${bgClass} p-3 rounded-full`}>
                    <Icon className={`w-6 h-6 ${textClass}`} />
                  </div>
                  <h3 className="ml-4 text-lg  font-semibold text-gray-800">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
