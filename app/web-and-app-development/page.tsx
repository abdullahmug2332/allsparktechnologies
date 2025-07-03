import WebAndAppDevelopment from '@/components/WebAndAppDevelopment'
import axios from "axios";
import { baseURL } from "@/API/baseURL";

export async function generateMetadata() {
  const service = "web-and-app-development";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service });
    const metadata = res.data.metadata;
    console.log("Title : ",metadata.title)
    console.log("Description : ",metadata.description)
    return {
      title: metadata.title,
      description: metadata.description,
      robots: {
        index: metadata.robots?.index,
        follow: metadata.robots?.follow,
      },
      alternates: {
        canonical: `${metadata.metadataBase}${metadata.alternates?.canonical}`,
      },
      openGraph: {
        title: metadata.openGraph?.title,
        description: metadata.openGraph?.description,
        url: metadata.openGraph?.url,
        type: metadata.openGraph?.type,
        siteName: metadata.openGraph?.siteName,
        images: metadata.openGraph?.images,
      },
      twitter: {
        card: metadata.twitter?.card,
        title: metadata.twitter?.title,
        description: metadata.twitter?.description,
        images: metadata.twitter?.images,
      },
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: "Default Title",
      description: "Default description.",
    };
  }
}


export default function page() {
  return <WebAndAppDevelopment/>
}
