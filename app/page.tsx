import HomeSection from "@/components/HomeSection"
import axios from "axios";
import { baseURL } from "@/API/baseURL";

export async function generateMetadata() {
  try {
    const res = await axios.get(`${baseURL}/homedata`);
    const metadata = res.data.metadata;

    return {
      title: metadata.title,
      description: metadata.description,
      alternates: {
        canonical: metadata.alternates?.canonical,
      },
      openGraph: {
        title: metadata.openGraph?.title,
        description: metadata.openGraph?.description,
        url: metadata.openGraph?.url,
        images: metadata.openGraph?.images,
      },
      robots: {
        index: metadata.robots?.index,
        follow: metadata.robots?.follow,
      },
    };
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return {
      title: "AllSpark Technologies",
      description: "Default metadata fallback if fetch fails.",
    };
  }
}


export default function Home() {

  return <HomeSection/>
}
