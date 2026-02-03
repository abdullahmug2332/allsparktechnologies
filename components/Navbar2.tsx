"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

import { MdKeyboardArrowRight } from "react-icons/md";

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
        className={`${plusJakartaSans.className
          } bg-white relative flex items-center shadow-md transition-all duration-300 ${isSticky
            ? "sticky top-0 left-0 w-full z-50 shadow-lg"
            : " w-full z-50 shadow-lg sticky"
          }`}
        style={{ zIndex: 100 }}
      >
        <div
          className={`flex-1 flex py-5 lg:py-3 items-center justify-between lg:justify-around px-[20px] lg:px-0 ${isSticky ? "max-w-[100%]" : ""
            }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="All Spark Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Middle: Nav links (Desktop) */}
          <ul className="hidden space-x-4 items-center font-medium text-gray-700 lg:flex list-none">
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
                About
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
                className={` absolute left-48 w-[80%] mx-auto top-full z-10 mt-[2px] 
                 transform-gpu origin-top 
                scale-y-0 group-hover:scale-y-100 
                transition-transform duration-300 ease-out `}
              >
                <div className="bg-white shadow-lg py-6 pb-20 rounded-xl px-20">
                  <div className="mx-auto max-w-6xl px-6 grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="mb-3 text-[15px] xl:text-[17px] font-bold text-gray-800">
                        Software Development & AI
                      </h3>
                      <div className=" pl-2 mt-5 text-sm text-gray-700 !list-unstyled">
                        <Link
                          href={{
                            pathname: "/custom-software-development"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300  "
                        >
                          <Image
                            className="mr-2"
                            src={"/images/development-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />{" "}
                          Custom Software Development
                        </Link>
                        <Link
                          href={{
                            pathname: "/website-development"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/web-app-development-01.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                          Website Development
                        </Link>
                        <Link
                          href={{
                            pathname: "/mobile-app-development"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300"
                        >
                          <Image
                            className="mr-2"
                            src={"/images/mobappnav.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                          Mobile App Development
                        </Link>
                        <Link
                          href={{
                            pathname: "/ai-and-machine-learning"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300"
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
                            pathname: "/ui-ux-design"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 "
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
                            pathname: "/ecommerce-development"
                          }}
                          className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300"
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
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="mb-3 text-base font-bold text-gray-800">
                        BPO & Tech-Enabled Services
                      </h3>
                      <ul className=" pl-2 mt-5 text-sm text-gray-700 list-none">
                        <li>
                          <Link
                            href={{
                              pathname: "/customer-support"
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 mr-2"
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
                              pathname: "/email-support"
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/email-marketing-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Email Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={{
                              pathname: "/live-chat-support"
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 mr-2"
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
                        <li>
                          <Link
                            href={{
                              pathname: "/taxi-support"
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 C transition duration-300 mr-2"
                          >
                            <Image
                            className="mr-2"
                            src={"/images/taxinav.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                            Taxi Support
                          </Link>
                        </li>

                        {/* Add more as needed */}
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="mb-3 text-[15px] xl:text-[17px] font-bold text-gray-800">
                        Marketing & Engagement
                      </h3>
                      <div className=" pl-2 mt-5 text-sm text-gray-700 !list-unstyled">
                        <div>
                          <Link
                            href={{
                              pathname: "/seo",
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 mr-2"
                          >
                            <Image
                            className="mr-2"
                            src={"/images/seonav.svg"}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                            SEO
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={{
                              pathname: "/digital-marketing",
                            }}
                            className="flex items-center px-2 py-2 hover:bg-slate-100 rounded-[5px] transition duration-300 mr-2"
                          >
                            <Image
                              className="mr-2"
                              src={"/images/digital-marketing-icon-01.svg"}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                            Digital Marketing
                          </Link>
                        </div>
                      </div>
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
            <li>
              <Link
                href="/blogs"
                className="text-gray-700 px-4 py-2 hover:bg-[#384BFF]  hover:text-white transition duration-500 rounded-full font-semibold "
              >
                Blogs
              </Link>
            </li>
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
            <div className="px-4 pl-14 py-2 font-medium text-white transition-colors duration-300 flex items-center">
              Get a Quote <span><MdKeyboardArrowRight className="text-[20px]"/></span>
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

              <div className="mt-5  text-center flex justify-between">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="All Spark Logo"
                    width={150}
                    height={150}
                  />
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="  "
                >
                  <svg
                    className="w-7 h-7"
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
              </div>
              <hr className="mt-3 " />
              <nav className="flex flex-col relative  mt-10  z-20 bg-white">
                <ul className="space-y-2 text-gray-900 list-none">
                  <li className=" pb-3">
                    <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className=" pb-3">
                    <Link
                      href="/about"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      About
                    </Link>
                  </li>

                  {/* Services with smooth dropdown */}
                  <li className=" pb-3  ">
                    <button
                      className="flex items-center justify-between w-full text-gray-700 font-semibold"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      Services
                      {/* Replace with your ChevronDown component/icon */}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
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
                            <div className="space-y-6 !list-unstyled h-[250px] overflow-scroll  ">
                              <div>
                                <Link
                                  href={{
                                    pathname: "/custom-software-development",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px] mt-[18px]"
                                >
                                  Custom Software Development
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/website-development"
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Website Development
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/mobile-app-development"
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Mobile App Development
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/ai-and-machine-learning",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  AI &amp; Machine Learning
                                </Link>
                              </div>

                              <div>
                                <Link
                                  href={{
                                    pathname: "/ui-ux-design",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  UI/UX Design
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/ecommerce-development"
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Ecommerce Development
                                </Link>
                              </div>

                              <div>
                                <Link
                                  href={{
                                    pathname: "/customer-support",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Customer Support
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/email-support"
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Email Support
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/live-chat-support",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Live Chat Support
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/taxi-support",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Taxi Support
                                </Link>
                              </div>

                              <div>
                                <Link
                                  href={{
                                    pathname: "/seo",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  SEO
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={{
                                    pathname: "/digital-marketing",
                                  }}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px]"
                                >
                                  Digital Marketing
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li className=" pb-3">
                    <Link
                      href="/contact"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="border-b pb-3">
                    <Link
                      href="/blogs"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    {/* CTA (lg+) */}
                    <Link href="/contact" className="inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide bg-[#384bff] text-white hover:brightness-110 transition-colors w-full ">

                      GET A QUOTE <span className="ml-1">+</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mb-4 text-xs border-t w-[90%] absolute bottom-2 z-10 ">
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