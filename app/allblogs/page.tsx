import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GoTriangleRight } from "react-icons/go";
import HeroSection from "@/components/HeroSection";

export default function page() {
  const cardText = [
    { id: 1, text: "What Is SEO?" },
    { id: 2, text: "Search Engine Positioning" },
    { id: 3, text: "SEO vs. SEM" },
    { id: 4, text: "Search Engine Ranking Factors" },
    { id: 5, text: "SEO Friendly Web Design" },
    { id: 6, text: "What Are SERPs?" },
    { id: 7, text: "SEO Metrics" },
    { id: 8, text: "10 Best Practice to Improve Your SEO Rankings" },
  ];
  return (
    <div>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="Blogs"
        backgroundImage="/images/breadcrum.webp"
      />
      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">
        <div className="w-full md:w-[70%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[20px] px-[20px] py-[30px]">
          <p className="text-[36px] text-[#1F2937] font-extrabold">
            We are increasing business Success with{" "}
            <span className="text-[#253AC7] ">Technology</span>
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
          <p className="text-[14px] text-[#4b5563]">
            Back in 2010, a group of forward-thinking software engineers and
            technology enthusiasts came together to tackle one of the biggest
            challenges in the industry: How can businesses truly leverage
            technology to scale, automate, and grow?
          </p>
          <p className="text-[14px] text-[#4b5563]">
            What started as a passion driven initiative quickly turned into a
            full-scale tech powerhouse. We worked on cutting-edge research,
            large-scale cloud infrastructure, and custom built enterprise
            solutions helping businesses unlock unparalleled efficiency, cost
            savings, and revenue growth.
          </p>
        </div>
        <div className="w-full md:w-[30%] hidden md:block p-[20px] max-h-[420px] md:sticky top-[40px] mb-[20px] md:mb-[0px] ">
            <p className=" text-[21px] font-semibold mt-[10px] mb-[6] ml-1">Table of Contents</p>
            <hr />
          <div className="flex flex-col gap-[10px] my-[10px]">
            {cardText.map((card) => (
              <div className="flex flex-col gap-[5px]">
                <p className="text-[14px] text-[#4b5563]">{card.text}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
