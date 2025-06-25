"use client";

import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./GlobalPreloader.module.css";

// GlobalPreloader component
const GlobalPreloaderWithSuspense = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Whenever pathname or searchParams change, we know there's a route navigation
  useEffect(() => {
    // Always show the preloader for 2 seconds
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds for preloader visibility

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, searchParams]); // Dependencies are the pathname and searchParams

  // If we're not loading, don't render anything
  if (!loading) return null;

  // If loading, render the overlay and spinner
  return (
    <div className={styles.overlay}>
      <div className={styles.loader} />
      {/* You can add custom text, brand logo, or animations here */}
    </div>
  );
};

// Wrapper component that wraps GlobalPreloader inside Suspense
const GlobalPreloader = () => (
  <Suspense fallback={<> <div className={styles.overlay}>
      <div className={styles.loader} />
      {/* You can add custom text, brand logo, or animations here */}
    </div></>}>
    <GlobalPreloaderWithSuspense />
  </Suspense>
);

export default GlobalPreloader;
