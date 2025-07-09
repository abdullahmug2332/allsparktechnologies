"use client";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Hero2Section from "@/components/Hero2Section";
import LazyBlogCard from "@/components/LazyBlogCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "@/API/baseURL";
import { useEffect, useState } from "react";

interface BlogPageData {
  heroimg: string;
  title: string;
  subTitle: string;
}
interface Blog {
  id: any;
  urlName:string;
  title: string;
  description: string;
  image: string;
  content: object;
  created_at?: string;
}
const fetchBlogsdata = async (): Promise<BlogPageData> => {
  const res = await axios.get(`${baseURL}/blogdata`);
  return res.data;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[] >([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogsdata,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchBlogs(); // Don't forget to call the async function
  }, []);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError || !data)
    return <div className="text-center py-10">Failed to load blogs.</div>;

  return (
    <div>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="Blogs"
        backgroundImage={`${baseURL}/images/blogs/${data.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/About" },
        ]}
      />
      <div className="w-[95%] md:w-[80%] mx-auto my-[20px]">
        <div className="mx-auto max-w-7xl text-start mt-[100px]">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>{data.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="relative">
            <h2 className="mt-3 text-4xl font-semibold text-gray-900">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {blogs.map((blog) => (
              <LazyBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
