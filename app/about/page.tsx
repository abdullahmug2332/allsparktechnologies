import AboutClient from "@/components/AboutClient";
import axios from "axios";
import { baseURL } from "@/API/baseURL";

export async function generateMetadata() {
  try {
    const res = await axios.get(`${baseURL}/aboutdata`);
    const metadata = res.data.metadata; 

    return {
      title: metadata.title,
      description: metadata.description,
      metadataBase: new URL(metadata.metadataBase),
      alternates: {
        canonical: metadata.alternates?.canonical,
      },
      openGraph: {
        title: metadata.openGraph?.title,
        description: metadata.openGraph?.description,
        url: metadata.openGraph?.url,
        type: metadata.openGraph?.type,
        siteName: metadata.openGraph?.siteName,
        images: metadata.openGraph?.images,
      },
      robots: {
        index: metadata.robots?.index,
        follow: metadata.robots?.follow,
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
      title: "AllSpark Technologies",
      description: "No Description Available",
    };
  }
}


export default function AboutPage() {
 return <AboutClient />
}
