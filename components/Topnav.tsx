// components/TopBar.tsx
import React from 'react';
import { Facebook,  Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Topnav() {
  return (
    <div className="bg-gray-900 text-white ">
     <div className='max-w-7xl mx-auto flex justify-between items-center px-4  py-2'>

      <div className="hidden md:flex  items-center space-x-2">
        <span className='text-[12px]'>info@allsparktechnologies.com</span>
        <span className='text-[12px]'>|</span>
        <span className='text-[12px]'>+1(616)308-1863</span>
      </div>

      {/* Right side */}
      <div className="flex  items-center space-x-2">
        <span  className='text-[12px]'>Follow us:</span>
         <Link
  href="https://www.facebook.com/allsparktechnologies.official/"
  target="_blank"
  rel="noopener noreferrer"
  className=""
>
  <Facebook className="h-3 w-3" />
</Link>
<Link
  href="https://www.instagram.com/allspark_technologies?igsh=aXkzbDMwc2Jvc3g4"
  target="_blank"
  rel="noopener noreferrer"
  className=""
>
  <Instagram className="h-3 w-3" />
</Link>
      </div>
     </div>

    </div>
  );
}
