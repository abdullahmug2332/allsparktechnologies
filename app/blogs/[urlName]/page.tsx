import BlogCheck from "@/components/BlogCheck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ urlName: string }>;
}) {
  const { urlName } = await params;

  console.log("metadata urlName:", urlName);

  return {
    title: urlName,
  };
}

interface PageProps {
  params: {
    urlName: string;
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ urlName: string }>;
}) {
  const { urlName } = await params;

  console.log("urlName:", urlName);

  return <div><BlogCheck params={urlName}/></div>;
}

