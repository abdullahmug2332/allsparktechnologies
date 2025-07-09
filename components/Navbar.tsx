"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll event to toggle sticky navbar
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

  const handleClick = () => {
    if (pathname === "/contact") {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("name")?.focus(); // ✅ Focus on "Your Name" input
      }, 500); // Small delay for smooth transition
    } else {
      router.push("/contact");
      const checkIfLoaded = setInterval(() => {
        const contactForm = document.getElementById("contact-form");
        const nameInput = document.getElementById("name");

        if (contactForm && nameInput) {
          contactForm.scrollIntoView({ behavior: "smooth" });
          nameInput.focus();
          clearInterval(checkIfLoaded); // ✅ Stop checking once found
        }
      }, 200); // Check every 200ms
    }
  };

  return (
    <>
      <nav
        className={`${plusJakartaSans.className} ${
          isSticky
            ? "fixed top-0 py-2 shadow-lg transition-all duration-300 left-0 w-full z-50 bg-white"
            : "relative"
        } transition-all `}
        style={{ zIndex: 100 }}
      >
        <div
          className={`mx-auto bg-white relative transition-all duration-300 lg:max-w-4xl xl:max-w-6xl ${
            isSticky
              ? "max-w-[100%]"
              : "max-w-[80%] rounded-full border-4 border-t-0 border-gray-400"
          } px-4 py-3 flex items-center justify-between`}
        >
          {/* Left: Logo / Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">
              <Image
                src={"/images/logo.svg"}
                alt="All Spark Logo"
                width={150}
                height={750}
              />
            </span>
          </div>

          {/* Center: Nav Links (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
            >
              About Us
            </Link>

            {/* Services Mega Menu */}
            <div className=" group">
              <button className="flex items-center text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white">
                Services
                <ChevronDown className="ml-1 h-4 w-4 " />
              </button>

              {/* Full-width dropdown with smooth open/close */}
              {/* Full-width dropdown with smooth open/close */}
              <div
                className={` absolute left-0 w-full top-full z-10 mt-2 
                 transform-gpu origin-top 
                scale-y-0 group-hover:scale-y-100 
                transition-transform duration-300 ease-out `}
              >
                <div className="bg-white shadow-lg py-6 pb-20 rounded-xl px-20 relative">
                  <div className="mx-auto max-w-6xl px-6 grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="mb-3 text-base font-bold text-gray-800">
                        Software Development & AI
                      </h3>
                      <ul className="space-y-4 pl-2 mt-5 text-sm text-gray-700">
                        <Link
                          href={{
                            pathname: "/custom-software-development"
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
                            pathname: "/web-and-app-development"
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
                            pathname: "/ai-and-machine-learning"
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
                            pathname: "/cloud-and-devops-solutions"
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
                            pathname: "/ui-ux-design"
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
                            pathname: "/ecommerce-development"
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
                              pathname: "/customer-support"
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
                              pathname: "/email-marketing"
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
                              pathname: "/live-chat-support"
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

            <Link
              href="/contact"
              className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
            >
              Contact Us
            </Link>
            {/* <Link
              href="/blogs"
              className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
            >
              Blogs
            </Link> */}
          </div>

          {/* Right: CTA button */}
          <div className="hidden lg:flex">
            <button
              className="inline-block text-sm rounded-full bg-[#384BFF] px-5 py-2 text-white shadow hover:bg-blue-700 focus:outline-none"
              onClick={() => {
                console.log("Button Clicked!"); // ✅ Check if this appears in console
                handleClick();
              }}
            >
              GET A QUOTE &rarr;
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-800 lg:hidden"
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
                      <Link
                        href="/about"
                        onClick={() => setIsSidebarOpen(false)}
                      >
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
                                      pathname: "/custom-software-development"
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
                                      pathname: "/web-and-app-development"
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
                                      pathname: "/ecommerce-development"
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
                                      pathname: "/email-marketing"
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
                      <Link
                        href="/blogs"
                        onClick={() => setIsSidebarOpen(false)}
                      >
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
        {/* Sidebar and other elements */}
      </nav>
    </>
  );
};

export default Navbar;
