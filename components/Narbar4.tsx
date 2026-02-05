"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Navbar4() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
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
  const quoteBtn =
    "hidden lg:inline-flex items-center  rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide bg-[#384bff] text-white hover:brightness-110 transition-colors ";
  const mobileServiceLinks = [
    {
      name: "Custom Software Development",
      path: "/custom-software-development",
    },
    { name: "Website Development", path: "/website-development" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "AI & Machine Learning", path: "/ai-and-machine-learning" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "Ecommerce Development", path: "/ecommerce-development" },
    { name: "Customer Support", path: "/customer-support" },
    { name: "Email Support", path: "/email-support" },
    { name: "Live Chat Support", path: "/live-chat-support" },
    { name: "Taxi Support", path: "/taxi-support" },
    { name: "SEO", path: "/seo" },
    { name: "Digital Marketing", path: "/digital-marketing" },
  ];
  return (
    <>
      <nav
        className={`flex items-center transition-all duration-300 
    ${
      isHome
        ? isSticky 
          ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50 "
          : "absolute top-0 left-0 w-full bg-transparent z-50 border-b border-white/10"
        : "sticky top-0 left-0 w-full bg-white shadow-lg z-50 "
    }
  `}
      >
        <div
          className={`flex-1 flex py-5 lg:py-2 items-center justify-between lg:justify-around  px-[20px] lg:px-0 navborder `}
        >
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src={
                  isHome && !isSticky 
                    ? "/images/footer-logo copy.svg"
                    : "/images/logo.png"
                }
                alt="All Spark Logo"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>

          {/* Middle: Nav links (Desktop) */}
          <ul className="hidden space-x-4 items-center font-[400] text-gray-700 lg:flex list-none">
            <li>
              <Link
                href="/"
                className={`${
                  isHome && !isSticky  ? "text-white" : "text-gray-700"
                } px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isHome && !isSticky ? "text-white" : "text-gray-700"
                } px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white`}
              >
                About
              </Link>
            </li>
            <div className=" group">
              <button
                className={`${
                  isHome && !isSticky ? "text-white" : "text-gray-700"
                } px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white flex items-center`}
              >
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
                            pathname: "/custom-software-development",
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
                            pathname: "/website-development",
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
                            pathname: "/mobile-app-development",
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
                            pathname: "/ai-and-machine-learning",
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
                            pathname: "/ui-ux-design",
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
                            pathname: "/ecommerce-development",
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
                              pathname: "/customer-support",
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
                              pathname: "/email-support",
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
                              pathname: "/live-chat-support",
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
                              pathname: "/taxi-support",
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
                className={`${
                  isHome && !isSticky ? "text-white" : "text-gray-700"
                } px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${
                  isHome && !isSticky ? "text-white" : "text-gray-700"
                } px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white`}
              >
                Blogs
              </Link>
            </li>
          </ul>

          {/* Hamburger Button (Mobile) */}
          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
            {isSidebarOpen ? (
              <RxCross1
                className={`text-[22px] ${
                  isHome && !isSticky  ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <RxHamburgerMenu
                className={`text-[25px] ${
                  isHome && !isSticky ? "text-white" : "text-black"
                }`}
              />
            )}
          </button>
          {isHome && (
            <Link href="/contact" className={quoteBtn}>
              GET A QUOTE{" "}
              <span>
                <MdKeyboardArrowRight className="text-[20px]" />
              </span>
            </Link>
          )}
        </div>

        {!isHome && (
          <div className="hidden lg:block group relative min-w-[15%] bg-[#384BFF] py-3 transition-transform duration-300 ease-out hover:scale-105 hover:bg-[#253AC7]">
            <Link href="/contact">
              <div className="px-4 pl-14 py-2 font-medium text-white transition-colors duration-300 flex items-center">
                Get a Quote{" "}
                <span>
                  <MdKeyboardArrowRight className="text-[20px]" />
                </span>
              </div>
            </Link>
          </div>
        )}
        {/* Right: Get a Quote button (Desktop Only) */}
      </nav>

      {/* MOBILE DROPDOWN (NEW) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed ${isSticky ==true ?" top-[80px]":`${isHome == true?" top-[70px]":" top-[100px]"}`} left-0 w-full bg-white  lg:hidden shadow-xl overflow-hidden z-[999] `}
          >
            <div className="p-5">
              <nav className="flex flex-col relative  mt-5  z-20 bg-white ">
                <ul className="space-y-2 text-gray-900 list-none">
                  <li className=" pb-3">
                    <Link href="/">Home</Link>
                  </li>
                  <li className=" pb-3">
                    <Link href="/about">About</Link>
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
                            <div className="space-y-1 !list-unstyled h-[250px] overflow-scroll">
                              {mobileServiceLinks.map((item, index) => (
                                <div key={index}>
                                  <Link
                                    href={{ pathname: item.path }}
                                    onClick={()=>setIsSidebarOpen(false)}
                                    className={`flex items-center hover:bg-slate-100 rounded-[5px] hover:text-slate-900 transition duration-300 text-[15px] py-[10px] px-[10px] ${
                                      index === 0 ? "mt-[18px]" : ""
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li className=" pb-3">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="border-b pb-3">
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    {/* CTA (lg+) */}
                    <Link
                      href="/contact"
                      className="inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide bg-[#384bff] text-white hover:brightness-110 transition-colors w-full "
                    >
                      GET A QUOTE <span className="ml-1">+</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mb-4 text-xs border-t w-[90%] mt-[10px] z-10 mx-auto ">
                <div className="max-w-[75%] mx-auto mt-3 text-center text-black">
                  © All Copyright {new Date().getFullYear()} by AllSpark
                  Technologies
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
