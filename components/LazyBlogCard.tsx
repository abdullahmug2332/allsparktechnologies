"use client";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";


const BlogCard = dynamic(() => import("./BlogCard"), {
  loading: () => (
    <div className="h-[350px] bg-gray-100 rounded-md animate-pulse" />
  ),
  ssr: false,
});

interface LazyBlogCardProps {
  blog: {
    id: string | number;
    image: string;
    title: string;
    urlName: string;
    description: string;
    created_at?: string;
  };
}

export default function LazyBlogCard({ blog }: LazyBlogCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div ref={ref}>
      {inView && (
          <BlogCard
            image={blog.image}
            title={blog.title}
            urlName={blog.urlName}
            description={blog.description}
            created_at={blog.created_at}
          />
      )}
    </div>
  );
}
