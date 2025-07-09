"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Navbar2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll event to toggle sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true); // Sticky navbar when scroll position > 0
    } else {
      setIsSticky(false); // Non-sticky navbar when scroll position = 0
    }
  };

  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          plusJakartaSans.className
        } bg-white relative flex items-center shadow-md transition-all duration-300 ${
          isSticky
            ? "sticky top-0 left-0 w-full z-50 shadow-lg"
            : " w-full z-50 shadow-lg sticky"
        }`}
        style={{ zIndex: 100 }}
      >
        <div
          className={`flex-1 flex py-3 items-center justify-around ${
            isSticky ? "max-w-[100%]" : ""
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="All Spark Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Middle: Nav links (Desktop) */}
          <ul className="hidden space-x-4 items-center font-medium text-gray-700 lg:flex">
            <li>
              <Link
                href="/"
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                About Us
              </Link>
            </li>
            <div className=" group">
              <button className="flex items-center text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white">
                Services
                <ChevronDown className="ml-1 h-4 w-4 " />
              </button>

              {/* Full-width dropdown with smooth open/close */}
              {/* Full-width dropdown with smooth open/close */}
              <div
                className={` absolute left-48 w-[80%] mx-auto top-full z-10 mt-2 
                 transform-gpu origin-top 
                scale-y-0 group-hover:scale-y-100 
                transition-transform duration-300 ease-out `}
              >
                <div className="bg-white shadow-lg py-6 pb-20 rounded-xl px-20">
                  <div className="mx-auto max-w-6xl px-6 grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="mb-3 text-base font-bold text-gray-800">
                        Software Development & AI
                      </h3>
                      <ul className="space-y-4 pl-2 mt-5 text-sm text-gray-700">
                        <Link
                          href={{
                            pathname: "/custom-software-development",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/development-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                          Custom Software Development
                        </Link>
                        <Link
                          href={{
                            pathname: "/web-and-app-development",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/web-app-development-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                          Web & App Development
                        </Link>
                        <Link
                          href={{
                            pathname: "/ai-and-machine-learning",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/ai-machine-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                          AI & Machine Learning
                        </Link>

                        <Link
                          href={{
                            pathname: "/cloud-and-devops-solutions",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300 "
                        >
                          <Image
                            className="mr-2"
                            src={"/images/devops-icon.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />{" "}
                          Cloud & DevOps Solutions
                        </Link>
                        <Link
                          href={{
                            pathname: "/ui-ux-design",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300 "
                        >
                          <Image
                            className="mr-2"
                            src={"/images/social-media-marekting-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />{" "}
                          UI/UX Design
                        </Link>

                        <Link
                          href={{
                            pathname: "/ecommerce-development",
                          }}
                          className="flex items-center hover:text-[#384BFF] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/ecommerce-development-icon-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />{" "}
                          Ecommerce Development
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-base font-bold text-gray-800">
                        BPO & Tech-Enabled Services
                      </h3>
                      <ul className="space-y-4 pl-2 mt-5 text-sm text-gray-700">
                        <li>
                          <Link
                            href={{
                              pathname: "/customer-support",
                            }}
                            className="flex items-center hover:text-[#384BFF] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/customer-support-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Customer Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={{
                              pathname: "/email-marketing",
                            }}
                            className="flex items-center hover:text-[#384BFF] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/email-marketing-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Email Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={{
                              pathname: "/live-chat-support",
                            }}
                            className="flex items-center hover:text-[#384BFF] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/live-chat-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Live Chat Support
                          </Link>
                        </li>

                        {/* Add more as needed */}
                      </ul>
                    </div>
                    {/* Column 2 */}
                    <div>
                      <h3 className="mb-3 text-base font-bold text-gray-800">
                        Marketing & Engagement
                      </h3>
                      <ul className="space-y-4 pl-2 mt-5 text-sm text-gray-700">
                        <li>
                          <Link
                            href={{
                              pathname: "/digital-marketing-and-seo",
                            }}
                            className="flex items-center hover:text-[#384BFF] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/digital-marketing-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Digital Marketing & SEO
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li>
              <Link
                href="/contact"
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link
                href="/blogs"
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Blogs
              </Link>
            </li> */}
          </ul>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-700"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right: Get a Quote button (Desktop Only) */}
        <div className="hidden lg:block group relative min-w-[15%] bg-[#384BFF] py-3 transition-transform duration-300 ease-out hover:scale-105 hover:bg-[#253AC7]">
          <Link href="/contact">
            <div className="px-4 pl-14 py-2 font-medium text-white transition-colors duration-300">
              Get a Quote &rarr;
            </div>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "66%" }}
            animate={{ x: 0 }}
            exit={{ x: "66%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex"
            style={{ zIndex: 1000 }}
          >
            {/* Left half: black overlay */}
            <div
              className="w-1/3 bg-black bg-opacity-90"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Right half: white sidebar */}
            <div className="bg-white w-2/3 z-20 p-4 pt-0 shadow-md flex flex-col relative">
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="mb-4 absolute top-2 right-2 self-end"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mt-5 mx-auto text-center">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="All Spark Logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
              <hr className="mt-3 " />
              <nav className="flex flex-col mx-5 mt-10 h-full">
                <ul className="space-y-2 text-gray-900">
                  <li className="border-b pb-3">
                    <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="border-b pb-3">
                    <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
                      About Us
                    </Link>
                  </li>

                  {/* Services with smooth dropdown */}
                  <li className="border-b pb-3">
                    <button
                      className="flex items-center text-gray-700 font-semibold"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      Services
                      {/* Replace with your ChevronDown component/icon */}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.02l3.71-3.79a.75.75 0 111.08 1.04l-4.25 4.34a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-2 text-xs text-gray-700"
                        >
                          <div className="mt-2">
                            <ul className="space-y-2">
                              <li>
                                <Link
                                  href={{
                                    pathname: "/custom-software-development",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Custom Software Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/web-and-app-development",

                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Web &amp; App Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/ai-and-machine-learning",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  AI &amp; Machine Learning
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/cloud-and-devops-solutions",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Cloud &amp; DevOps Solutions
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/ui-ux-design",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  UI/UX Design
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/ecommerce-development",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Ecommerce Development
                                </Link>
                              </li>

                              <li>
                                <Link
                                  href={{
                                    pathname: "/customer-support",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Customer Support
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/email-marketing",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Email Marketing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={{
                                    pathname: "/live-chat-support",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Live Chat Support
                                </Link>
                              </li>

                              <li>
                                <Link
                                  href={{
                                    pathname: "/digital-marketing-and-seo",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:text-blue-600 transition duration-300"
                                >
                                  Digital Marketing &amp; SEO
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li className="border-b pb-3">
                    <Link
                      href="/contact"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li className="border-b pb-3">
                    <Link href="/blogs" onClick={() => setIsSidebarOpen(false)}>
                      Blogs
                    </Link>
                  </li> */}
                </ul>
              </nav>
              <div className="mb-4 text-xs border-t w-[90%] absolute bottom-2  ">
                <div className="max-w-[75%] mx-auto mt-3 text-center">
                  © All Copyright {new Date().getFullYear()} by AllSpark
                  Technologies
                </div>
              </div>
            </div>

            {/* Overlay to close the sidebar when clicking outside */}
            <div className="flex-1" onClick={() => setIsSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
