// app/blogs/[urlName]/page.tsx

import { notFound } from "next/navigation";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import BlogHeroSection from "@/components/BlogHeroSection";
import { baseURL } from "@/API/baseURL";

interface BlogProps {
  params: {
    urlName: string;
  };
}

interface Blogdata {
  id: number;
  title: string;
  description: string;
  urlName: string;
  image: string;
  createdAt: string;
  content: string;
}
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

export default async function BlogDetailPage({ params }: BlogProps) {
  const res = await fetch(`${baseURL}/blogs/${params.urlName}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  const blog: Blogdata = await res.json();
  console.log("Blog data: ", blog.content);

  return (
    <div>
      <Topnav />
      <Navbar2 />
      <BlogHeroSection title={blog.title} backgroundImage={blog.image} />
      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[20px] px-[20px] py-[30px]">
          <p className="text-[14px] text-[#4b5563]">{blog.description}</p>
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>

        <div className="w-full md:w-[25%] hidden md:block p-[20px] max-h-[420px] md:sticky top-[40px] mb-[20px] md:mb-[0px] ">
          <p className=" text-[21px] font-semibold mt-[10px] mb-[6] ml-1">
            Table of Contents
          </p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {cardText?.map((item, index) => {
              // Remove extra HTML entities and trim
              const cleanText = item.text
                .replace(/&nbsp;/g, " ") // remove &nbsp;
                .replace(/<[^>]*>/g, "") // remove any HTML tags
                .replace(/\s+/g, " ") // collapse whitespace
                .trim();

              // Capitalize each word
              const capitalizedText = cleanText
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className="text-[14px] text-[#4b5563] hover:underline"
                >
                  {capitalizedText}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`${baseURL}/blogs`);
  const blogs = await res.json();

  return blogs.map((blog: any) => ({
    urlName: blog.urlName,
  }));
}
