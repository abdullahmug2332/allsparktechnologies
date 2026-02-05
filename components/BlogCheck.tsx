// import { notFound } from "next/navigation";
"use client";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer from "@/components/Footer";
import { baseURL } from "@/API/baseURL";
import type { Metadata } from "next";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import BlogFaqs from "@/components/BlogFaqs";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar4 from "./Narbar4";

// =========================
// ✅ Metadata SSR
// =========================
// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   try {
//     const res = await axios.get(`${baseURL}/blogs/${params.urlName}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     const data = res.data;

//     const metatitle = data.metatitle?.trim();
//     const metadescription = data.metadescription?.trim();

//     const defaultMeta: Metadata = {
//       title: "AllSpark Technologies",
//       description:
//         "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
//     };

//     return {
//       title: metatitle || defaultMeta.title,
//       description: metadescription || defaultMeta.description,
//     };
//   } catch (err) {
//     console.error("Metadata fetch failed:", err);
//     return {
//       title: "AllSpark Technologies",
//       description:
//         "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
//     };
//   }
// }

// =========================
// ✅ Helper functions
// =========================
const slugify = (text: string) =>
  (text || "")
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-") || "section";

const makeUnique = (base: string, taken: Set<string>) => {
  let id = base;
  let n = 2;
  while (taken.has(id)) id = `${base}-${n++}`;
  taken.add(id);
  return id;
};

// =========================
// ✅ Page SSR
// =========================
interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface BlogData {
  id: number;
  title: string;
  description: string;
  urlName: string;
  image: string;
  created_at: string;
  content: string;
  faqs: Faq[];
}

export default  function BlogCheck({ params }: {params: string}) {
  console.log("params:", params);
  console.log("urlName:", params);

  const [blog, setBlog] = useState<BlogData>();
  // 🔥 SSR fetch via axios
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${baseURL}/blogs/${params}`);
        setBlog(res.data);
      } catch (error) {
        return <h1>No detail fetch</h1>;
      }
    };
    fetch();
  }, []);

  if (blog == undefined) {
    return <p>not found</p>;
  }
  const takenIds = new Set<string>();
  const headings: { id: string; text: string }[] = [];

  let updatedContent = blog.content.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attributes, innerHTML) => {
      const plainText = innerHTML.replace(/<[^>]+>/g, "").trim();
      if (!plainText) return match;

      const id = makeUnique(slugify(plainText), takenIds);
      headings.push({ id, text: plainText });

      if (/\sid\s*=/.test(attributes)) {
        attributes = attributes.replace(
          /\sid\s*=\s*["'][^"']*["']/,
          ` id="${id}"`,
        );
      } else {
        attributes = `${attributes} id="${id}"`;
      }

      if (/class\s*=/.test(attributes)) {
        attributes = attributes.replace(
          /class\s*=\s*["']([^"']*)["']/,
          (_m: any, classes: any) => `class="${classes} scroll-mt-20"`,
        );
      } else {
        attributes = `${attributes} class="scroll-mt-20"`;
      }

      return `<h2${attributes}>${innerHTML}</h2>`;
    },
  );

  // =========================
  // ✅ Optimize images
  // =========================
  updatedContent = updatedContent.replace(
    /<img(.*?)>/gi,
    (_match, attributes) => {
      if (!/loading\s*=/.test(attributes)) {
        attributes += ' loading="lazy"';
      }
      if (!/decoding\s*=/.test(attributes)) {
        attributes += ' decoding="async"';
      }
      if (!/class\s*=/.test(attributes)) {
        attributes += ' class="w-full h-auto rounded-md my-4"';
      }
      return `<img${attributes}>`;
    },
  );

  return (
    <div>
      <Topnav />
      {/* <Navbar2 /> */}
      <Navbar4 />

      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row">
        {/* Content */}
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[10px] px-[20px] py-[30px] lg:pr-[60px]">
          <h1 className="heading font-bold leading-[32px] text-[#111827]">
            {blog.title}
          </h1>

          <div className="-mt-4">
            <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
          </div>

          <div className="flex items-center gap-[5px]">
            <MdOutlineDateRange className="text-[20px] text-blue-500" />
            <p className="para text-[#4b5563]">
              {new Date(blog.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <Image
            src={`${baseURL}/images/blogs/${blog.image}`}
            width={400}
            height={400}
            unoptimized
            className="rounded-[10px] !w-[100%]"
            alt="MainImg"
            loading="lazy"
          />

          <p className="para text-[#1f2937]">{blog.description}</p>

          <div className="blogcontent">
            <div dangerouslySetInnerHTML={{ __html: updatedContent }} />
          </div>

          {/* FAQs */}
          <BlogFaqs faqs={blog.faqs} />
        </div>

        {/* TOC */}
        <div className="w-full md:w-[25%] hidden md:block p-[20px] max-h-[95vh] overflow-y-auto hide-scrollbar md:sticky top-[40px] mb-[20px] z-10">
          <p className="font-semibold mt-[10px] mb-[6px] ml-1 subheading">
            Table of Contents
          </p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {headings.length ? (
              headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="para text-[#4b5563] hover:text-blue-500 scroll-smooth"
                >
                  {h.text}
                </a>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">No sections</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

