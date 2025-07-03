import ContactPageClient from "../../components/ContactPageClient";
import axios from "axios";
import { baseURL } from "@/API/baseURL";

export async function generateMetadata() {
  try {
    const res = await axios.get(`${baseURL}/contactdata`);
    const metadata = res.data.metadata;
    

    return {
      title: metadata.title,
      description: metadata.description,
      robots: {
        index: metadata.robots.index,
        follow: metadata.robots.follow,
      },
      alternates: {
        canonical: `${metadata.metadataBase}${metadata.alternates.canonical}`,
      },
      openGraph: {
        title: metadata.openGraph.title,
        description: metadata.openGraph.description,
        url: metadata.openGraph.url,
        type: metadata.openGraph.type,
        siteName: metadata.openGraph.siteName,
        images: metadata.openGraph.images,
      },
      twitter: {
        card: metadata.twitter.card,
        title: metadata.twitter.title,
        description: metadata.twitter.description,
        images: metadata.twitter.images,
      },
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: "Contact Us | AllSpark Technologies",
      description: "Reach out to us for tailored solutions.",
    };
  }
}

export default function ContactPage() {
  return <ContactPageClient />;
}
