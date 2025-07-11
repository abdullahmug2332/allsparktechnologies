"use client";

import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import PhoneField from "./PhoneField";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; // Sonner for toasts
import { baseURL } from "@/API/baseURL";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});
type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch(`${baseURL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Request received");
        reset();
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Network error");
      console.log(err);
    }
  }
  interface ContactMethod {
    label: string;
    value: string;
    href: string;
    icon: string;
  }

  interface ContactData {
    title: string;
    description: string;
    methods: ContactMethod[];
  }
  const [pagedata, setPageData] = useState<ContactData | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await fetch(`${baseURL}/contactdata`);
        if (!res.ok) throw new Error("Failed to fetch page data");
        const data: ContactData = await res.json();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchPageData();
  }, []);

  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto px-4 my-8 py-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Grid layout: two columns on md+ screens, one column on smaller screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {pagedata?.title}
            </h2>
            <div>
              <p className="text-sm leading-6">{pagedata?.description}</p>
            </div>
            <div className="py-12 pb-20 space-y-6">
              {/* Call Us */}
              <motion.a
                href={pagedata?.methods[0].href}
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-[#384BFF] relative overflow-hidden group-hover:bg-[#384BFF] transition-all">
                  <Phone
                    className="text-[#384BFF] group-hover:text-white transition-all"
                    size={22}
                  />
                  <div className="absolute right-0 h-full bg-[#384BFF] opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {pagedata?.methods[0].label}
                  </h3>
                  <p className="text-sm">{pagedata?.methods[0].value}</p>
                </div>
              </motion.a>

              {/* Get a Quote */}
              <motion.a
                href={pagedata?.methods[1].href}
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-[#384BFF] relative overflow-hidden group-hover:bg-[#384BFF] transition-all">
                  <Mail
                    className="text-[#384BFF] group-hover:text-white transition-all"
                    size={22}
                  />
                  <div className="absolute right-0 h-full bg-[#384BFF] opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {pagedata?.methods[1].label}
                  </h3>
                  <p className="text-sm">{pagedata?.methods[1].value}</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.a
                href={pagedata?.methods[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-[#384BFF] relative overflow-hidden group-hover:bg-[#384BFF] transition-all">
                  <MapPin
                    className="text-[#384BFF] group-hover:text-white transition-all"
                    size={22}
                  />
                  <div className="absolute right-0 h-full bg-[#384BFF] opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {pagedata?.methods[2].label}
                  </h3>
                  <p className="text-sm">{pagedata?.methods[2].value}</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="info@allsparktechnologies.com"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneField
                        {...field}
                        label="Your Phone*"
                        placeholder="+1 234 567 890"
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Dropdown
                        label="Choose a service"
                        items={[
                          "Customer Support",
                          "Digital Marketing & SEO",
                          "Custom Software Development",
                          "Web & App Development",
                          "AI & Machine Learning",
                          "Cloud & DevOps Solutions",
                          "UI/UX Design",
                          "Ecommerce Development",
                          "Email Marketing",
                          "Live Chat Support",
                        ]}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Describe your project*
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    placeholder="Describe your project"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center rounded-full bg-[#384BFF] px-6 py-2 text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#384BFF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting && (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.div
        className="w-full overflow-hidden rounded-md shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0547481808397!2d-74.21168508465166!3d40.9836217793026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3058162f405f5%3A0xf322bc57cf73e57c!2s638%20Knollwood%20Rd%2C%20Franklin%20Lakes%2C%20NJ%2007417%2C%20USA!5e0!3m2!1sen!2s!4v1678102241616!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </>
  );
}
