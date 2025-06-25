import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | AllSpark Technologies</title>
        <meta
          name="description"
          content="Allspark Technologies respects your privacy. Learn how we collect, use, and protect your data under U.S. and GDPR compliance standards."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://allsparktechnologies.com/privacy-policy"
        />
        <meta
          property="og:title"
          content="Privacy Policy | AllSpark Technologies"
        />
        <meta
          property="og:description"
          content="Allspark Technologies respects your privacy. Learn how we collect, use, and protect your data under U.S. and GDPR compliance standards."
        />
        <meta
          property="og:url"
          content="https://allsparktechnologies.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://allsparktechnologies.com/assets/privacy-og.jpg"
        />
      </Head>

      <Topnav />
      <Navbar2 />
      <section className="max-w-7xl mx-auto px-4 my-8 py-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Effective Date: 16 May 2025</p>

          <p className="text-sm leading-6">
            Welcome to <strong >Allspark Technologies</strong>. We value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, share, and protect your information
            when you visit our website,{" "}
            <a
              href="https://www.allsparktechnologies.com"
              className="text-[#384BFF] underline"
            >
              www.allsparktechnologies.com
            </a>
            , or use our services.
          </p>
          <p className="text-sm leading-6">
            By using our website, you agree to the terms in this policy.
          </p>

          {/* Company Info */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Who We Are
          </h2>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">AllSpark Technologies</p>
            <p>638 Knollwood Road, Franklin Lakes, NJ 07417</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@allsparktechnologies.com"
                className="text-[#384BFF] underline"
              >
                info@allsparktechnologies.com
              </a>
            </p>
            <p>Phone: +1 (616) 308-1863</p>
          </div>
          <p className="text-sm leading-6">
            We offer services including but not limited to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Software & Custom Software Development</li>
            <li>Web & Mobile App Development</li>
            <li>Artificial Intelligence & Machine Learning Solutions</li>
            <li>Cloud Computing & DevOps</li>
            <li>UI/UX Design</li>
            <li>Ecommerce Development</li>
            <li>BPO & Tech Support</li>
            <li>Digital Marketing, SEO, Email & Live Chat Support</li>
          </ul>

          {/* What Information We Collect */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            What Information We Collect
          </h2>
          <h3 className="text-lg font-semibold">1. Information You Provide</h3>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name (if applicable)</li>
            <li>Project or inquiry details through contact forms, email signups, or other interactive features</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">
            2. Information We Collect Automatically
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>IP Address</li>
            <li>Browser & Device Information</li>
            <li>Usage data (pages visited, session time, clicks)</li>
            <li>Cookies and tracking pixels (see section below)</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">
            3. Information from Third-Party Tools
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Google Analytics</li>
            <li>Meta/Facebook Pixel</li>
            <li>Marketing automation tools</li>
            <li>CRM or email marketing software</li>
          </ul>

          {/* Use of Information */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>To respond to inquiries or provide support</li>
            <li>To improve our website and services</li>
            <li>To send updates, promotions, or newsletters (with consent)</li>
            <li>For internal analytics and reporting</li>
            <li>To comply with legal obligations</li>
          </ul>

          {/* Protection of Data */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            How We Protect Your Data
          </h2>
          <p className="text-sm leading-6">
            We implement appropriate security measures, including:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>HTTPS encryption</li>
            <li>Secure data storage and access control</li>
            <li>Employee confidentiality training</li>
          </ul>
          <p className="text-sm leading-6">
            While we strive to protect your data, no internet-based service is
            100% secure.
          </p>

          {/* Sharing Info */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Sharing Your Information
          </h2>
          <p className="text-sm leading-6">
            We do not sell your personal data. We may share your data with:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>
              Service providers under strict confidentiality (hosting, analytics, email, CRM)
            </li>
            <li>Legal authorities when required</li>
            <li>Business entities in the case of a merger or acquisition</li>
          </ul>

          {/* Cookies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-sm leading-6">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Analyze traffic with tools like Google Analytics</li>
            <li>Personalize content</li>
            <li>Measure marketing performance</li>
          </ul>
          <p className="text-sm leading-6">
            You can manage cookie preferences via your browser settings. By continuing to browse the site, you consent to our cookie usage.
          </p>

          {/* Your Rights */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Your Rights (GDPR & U.S. Privacy Laws)
          </h2>
          <h3 className="text-lg font-semibold mt-4">
            For EU/UK Residents (GDPR)
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
            <li>File a complaint with your local authority</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">
            For U.S. Residents (CCPA/CPRA)
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Know what personal data is collected</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of data selling (we do not sell)</li>
            <li>Limit use of sensitive personal information</li>
          </ul>
          <p className="text-sm leading-6">
            To exercise your rights, email us at{" "}
            <a
              href="mailto:info@allsparktechnologies.com"
              className="text-[#384BFF] underline"
            >
              info@allsparktechnologies.com
            </a>
            .
          </p>

          {/* Children’s Privacy */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Childrens Privacy
          </h2>
          <p className="text-sm leading-6">
            We do not knowingly collect data from children under 13. If you
            believe a child has provided us personal data, contact us
            immediately.
          </p>

          {/* Policy Updates */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Policy Updates
          </h2>
          <p className="text-sm leading-6">
            We may revise this Privacy Policy. When updated, we will modify the
            Effective Date above. Continued use of our services means you
            accept the changes.
          </p>

          {/* Contact Info */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10">Contact Us</h2>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">AllSpark Technologies</p>
            <p>638 Knollwood Road, Franklin Lakes, NJ 07417</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@allsparktechnologies.com"
                className="text-[#384BFF] underline"
              >
                info@allsparktechnologies.com
              </a>
            </p>
            <p>Phone: +1 (616) 308-1863</p>
            <p>
              Website:{" "}
              <a
                href="https://www.allsparktechnologies.com"
                className="text-[#384BFF] underline"
              >
                www.allsparktechnologies.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
