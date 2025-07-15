import { notFound } from "next/navigation";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import BlogHeroSection from "@/components/BlogHeroSection";
import { baseURL } from "@/API/baseURL";
import { JSDOM } from "jsdom";
import axios from "axios";
import type { Metadata } from "next"; 

// type PageProps = {
//   params: {
//     urlName: string;
//   };
// };


// npm i --save-dev @types/jsdom run this command to install types for jsdom abdullah run this command in terminal

export async function generateMetadata(props: any): Promise<Metadata> {
  try {
    const { params } = props;
    const res = await axios.get(`${baseURL}/blogs/${params.urlName}`);
    const metatitle = res.data.metatitle?.trim();
    const metadescription = res.data.metadescription?.trim();

    const defaultMeta: Metadata = {
      title: "AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    };

    return {
      title: metatitle || defaultMeta.title,
      description: metadescription || defaultMeta.description,
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: "AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    };
  }
}


interface BlogData {
  id: number;
  title: string;
  description: string;
  urlName: string;
  image: string;
  createdAt: string;
  content: string;
}

export default async function BlogDetailPage(props: any){
   const { params } = props;
  const res = await fetch(`${baseURL}/blogs/${params.urlName}`, {
  next: { revalidate: 60 }, // revalidate after 60 seconds
});

  if (!res.ok) return notFound();

  const blog: BlogData = await res.json();

  // ✅ Parse content and extract headings
  const dom = new JSDOM(blog.content);
  const document = dom.window.document;
  const headings: { id: string; text: string }[] = [];

  ["h1", "h2", "h3"].forEach((tag) => {
    document.querySelectorAll(tag).forEach((heading) => {
      const text = heading.textContent?.trim() || "";
      if (!text) return; // ✅ Skip empty headings

      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

      heading.setAttribute("id", id);
      headings.push({ id, text });
    });
  });

  // ✅ Update blog.content with new HTML (with ids on headings)
  const updatedContent = document.body.innerHTML;
  return (

    <div>
      <Topnav />
      <Navbar2 />
      <BlogHeroSection title={blog.title} backgroundImage={blog.image} />

      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">
        {/* Content Area */}
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[20px] px-[20px] py-[30px]">
          <p className="text-[18px] leading-[32px] text-[#4b5563]">
            {blog.description}
          </p>

          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: updatedContent }}
          />
        </div>

        {/* Table of Contents Area */}
        <div className="w-full md:w-[25%] hidden md:block p-[20px]  max-h-[95vh] overflow-y-auto hide-scrollbar md:sticky top-[40px] bottom-[300px] mb-[20px] md:mb-[0px] z-10">
          <p className="text-[21px] font-semibold mt-[10px] mb-[6px] ml-1">
            Table of Contents
          </p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {headings.map((item, index) => (
              <div key={index}>
                <a
                  href={`#${item.id}`}
                  className="text-[14px] text-[#4b5563] hover:underline"
                >
                  {item.text}
                </a>
                <hr className="mt-[10px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
export async function generateStaticParams() {
  const res = await fetch(`${baseURL}/blogs`); // ✅ Use your API endpoint
  const blogs = await res.json();

  return blogs.map((blog: { urlName: string }) => ({
    urlName: blog.urlName,
  }));
}
