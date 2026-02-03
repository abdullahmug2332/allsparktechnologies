// components/Navbar3.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Navbar3() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false); // control hover mega menu for smoother exit

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "text-[16px] transition-colors hover:opacity-100 px-4 py-2 hover:bg-[#384BFF]  hover:text-white rounded-full";
  const linkColor = scrolled
    ? "text-slate-700 hover:text-slate-900"
    : "text-white hover:text-white";

  // Mega menu data (3 columns like Navbar2)
  const megaCols: {
    title: string;
    items: { href: string; label: string; icon?: string }[];
  }[] = [
    {
      title: "Software Development & AI",
      items: [
        {
          href: "/custom-software-development",
          label: "Custom Software Development",
          icon: "/images/development-01.svg",
        },
        {
          href: "/website-development",
          label: "Website Development",
          icon: "/images/web-app-development-01.svg",
        },
        {
          href: "/mobile-app-development",
          label: "Mobile App Development",
          icon: "/images/mobappnav.svg",
        },
        {
          href: "/ai-and-machine-learning",
          label: "AI & Machine Learning",
          icon: "/images/ai-machine-01.svg",
        },
        {
          href: "/ui-ux-design",
          label: "UI/UX Design",
          icon: "/images/social-media-marekting-01.svg",
        },
        {
          href: "/ecommerce-development",
          label: "Ecommerce Development",
          icon: "/images/ecommerce-development-icon-01.svg",
        },
      ],
    },
    {
      title: "BPO & Tech-Enabled Services",
      items: [
        {
          href: "/customer-support",
          label: "Customer Support",
          icon: "/images/customer-support-icon-01.svg",
        },
        {
          href: "/email-support",
          label: "Email Support",
          icon: "/images/email-marketing-icon-01.svg",
        },
        {
          href: "/live-chat-support",
          label: "Live Chat Support",
          icon: "/images/live-chat-icon-01.svg",
        },
        {
          href: "/taxi-support",
          label: "Taxi Support",
          icon: "/images/taxinav.svg",
        },
      ],
    },
    {
      title: "Marketing & Engagement",
      items: [
        { href: "/seo", label: "SEO", icon: "/images/seonav.svg" },
        {
          href: "/digital-marketing",
          label: "Digital Marketing",
          icon: "/images/digital-marketing-icon-01.svg",
        },
      ],
    },
  ];

  // Framer variants
  const headerVariants = {
    initial: { opacity: 0, y: -12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  const megaVariants = {
    initial: { opacity: 0, y: 8, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 6,
      scale: 0.985,
      transition: { duration: 0.14, ease: "easeIn" },
    },
  };

  const drawerVariants = {
    hidden: { x: "100%" },
    show: { x: 0, transition: { duration: 0.28, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.22, ease: "easeIn" } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 0.5, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const wrapBase =
    "fixed  inset-x-0 top-0 z-50 border-b transition-colors duration-300 ";
  const surface = scrolled
    ? "bg-white/95 text-slate-900 border-black/10 shadow-sm backdrop-blur"
    : "md:bg-transparent text-white border-white/10";

  const quoteBtn =
    "hidden lg:inline-flex items-center  rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide bg-[#384bff] text-white hover:brightness-110 transition-colors";

  return (
    <motion.header
      className={`${wrapBase} ${surface} `}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      role="banner"
    >
      <div className=" w-[100vw]  ">
        <div className="container flex items-center justify-between py-[15px] ">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="AllSpark Home"
          >
            {scrolled == true ? (
              <Image
                src="/images/logo.png"
                alt="logo"
                width={500}
                height={500}
                className="h-8 w-auto"
                priority
              />
            ) : (
              <Image
                src="images/footer-logo copy.svg"
                alt="logo"
                width={128}
                height={32}
                className="h-8 w-auto"
                priority
              />
            )}
          </Link>

          {/* Desktop Nav (lg+) */}
          <nav
            className=" hidden items-center gap-3 xl:gap-8 lg:flex font-medium"
            aria-label="Primary"
          >
            <Link href="/" className={`${linkBase} ${linkColor} `}>
              Home
            </Link>
            <Link href="/about" className={`${linkBase} ${linkColor}`}>
              About
            </Link>

            {/* Mega Dropdown with FM smoothness */}
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className={`${linkBase} ${linkColor} flex items-center gap-1`}
                aria-expanded={megaOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 opacity-80 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    id="services-mega"
                    role="menu"
                    aria-label="Services"
                    className="absolute left-[12%] top-full z-[60] mt-2 w-[75vw] "
                    variants={megaVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="rounded-xl border border-black/10 bg-white shadow-xl">
                      <div className="px-[100px] py-6 pb-[60px]">
                        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-1 md:grid-cols-3">
                          {megaCols.map((col) => (
                            <div key={col.title}>
                              <h3 className="mb-2 text-base font-bold text-gray-800">
                                {col.title}
                              </h3>
                              <ul className="mt-4  pl-1 text-sm list-none">
                                {col.items.map((it) => (
                                  <li key={it.href}>
                                    <Link
                                      href={it.href}
                                      className="flex items-center rounded-md  text-gray-700 transition px-2 py-2 hover:bg-slate-100 hover:text-slate-900"
                                    >
                                      {it.icon && (
                                        <Image
                                          src={it.icon}
                                          alt=""
                                          width={28}
                                          height={28}
                                          className="mr-2 h-7 w-7 object-contain"
                                        />
                                      )}
                                      {it.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={`${linkBase} ${linkColor}`}>
              Contact
            </Link>
            <Link href="/blogs" className={`${linkBase} ${linkColor}`}>
              Blogs
            </Link>
          </nav>

          {/* CTA (lg+) */}
          <Link href="/contact" className={quoteBtn}>
            GET A QUOTE{" "}
            <span>
              <MdKeyboardArrowRight className="text-[20px]" />
            </span>
          </Link>

          {/* Mobile burger (sm–md) */}
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${linkColor}`}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with FM */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[70] "
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black w-[100vw] h-[100vh]  "
              variants={backdropVariants}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              className="absolute right-0 top-0 h-[100vh] w-80 max-w-[85%] bg-white text-slate-900 shadow-xl z-50 "
              variants={drawerVariants}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation "
            >
              <div className="relative  z-50 flex flex-col justify-between h-[100%] overflow-scroll">
                <div className="h-[100%] flex flex-col">
                  <div className="flex h-[72px] items-center justify-between px-4 border-b border-black/10  bg-white ">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center"
                      aria-label="AllSpark Home"
                    >
                      <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={120}
                        height={28}
                        className="h-7 w-auto"
                      />
                    </Link>
                    <button
                      aria-label="Close menu"
                      className="p-2 text-slate-600 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <nav className="px-4 py-4 z-50  bg-white relative  flex flex-col">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setMobileOpen(false)}
                      className="mt-1 block rounded-md px-3 py-2 text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                    >
                      About
                    </Link>

                    {/* Services collapsible (FM height/opacity) */}
                    <button
                      className="mt-1 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-[15px] font-semibold text-slate-700 hover:bg-slate-100"
                      onClick={() => setMobileServicesOpen((s) => !s)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          id="mobile-services"
                          key="mobile-services"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: { duration: 0.22 },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: { duration: 0.18 },
                          }}
                          className=" pl-3"
                        >
                          <div className="mt-1 space-y-1 h-[250px] overflow-scroll">
                            {megaCols
                              .flatMap((c) => c.items)
                              .map((i) => (
                                <Link
                                  key={i.href}
                                  href={i.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                                >
                                  {i.label}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="mt-1 block rounded-md px-3 py-2 text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/blogs"
                      onClick={() => setMobileOpen(false)}
                      className="mt-1 block rounded-md px-3 py-2 text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                    >
                      Blogs
                    </Link>

                    {/* Button  */}
                    <div className="mt-4 border-t border-black/10 pt-4">
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex w-full items-center justify-center rounded-full bg-[#384bff] px-5 py-2.5 text-sm font-semibold text-white"
                      >
                        GET A QUOTE{" "}
                        <span>
                          <MdKeyboardArrowRight className="text-[20px]" />
                        </span>
                      </Link>
                    </div>
                    {/* <div className="mb-4 mx-auto mt-auto text-xs border-t w-[90%] z-10 border">
                      <div className="max-w-[75%] mx-auto mt-3 text-center">
                        © All Copyright {new Date().getFullYear()} by AllSpark
                        Technologies
                      </div>
                    </div> */}
                  </nav>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
