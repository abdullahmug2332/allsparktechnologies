"use client"; 

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Dynamic import for ServicesTabs
import GlobalPreloader from "@/components/GlobalPreloader"; // Loading spinner

// Dynamically import ServicesTabs with SSR disabled
const ServicesTabs = dynamic(() => import("@/components/ServicesTabs"), {
  ssr: false, // Disable SSR for this component
  loading: () => <GlobalPreloader />, // Show GlobalPreloader while loading
});

export default function ClientOnlyServicesTabs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This will run once the component is mounted on the client side
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering until mounted to avoid NextRouter error during SSR
    return null;
  }

  return <ServicesTabs />;
}
