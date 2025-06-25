"use client";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import Link from "next/link";

// Lazy-load the BlogCard component
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
    subtitle: string;
    service: string;
    date?: string;
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
        <Link href="/allblogs">
          <BlogCard
            image={blog.image}
            title={blog.title}
            subtitle={blog.subtitle}
            service={blog.service}
            date={blog.date}
          />
        </Link>
      )}
    </div>
  );
}
