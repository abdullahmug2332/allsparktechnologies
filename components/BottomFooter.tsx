// components/BottomFooter.tsx
import React from 'react';
import Link from 'next/link';

export default function BottomFooter() {
  return (
    <div className="bg-[#1E40AF] py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm">
        {/* Left side */}
        <p>
          Get CopyRight @2023 | AllSpark Technologies
        </p>
        <div>
          <Link href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
          <span className="mx-2">.</span>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
