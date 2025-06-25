import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import React from "react";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | AllSpark Technologies</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using AllSpark Technologies website and services. Understand your rights and responsibilities."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://allsparktechnologies.com/terms-and-conditions"
        />
        <meta
          property="og:title"
          content="Terms and Conditions | AllSpark Technologies"
        />
        <meta
          property="og:description"
          content="Read the Terms and Conditions for using AllSpark Technologies website and services. Understand your rights and responsibilities."
        />
        <meta
          property="og:url"
          content="https://allsparktechnologies.com/terms-and-conditions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://allsparktechnologies.com/assets/terms-og.jpg"
        />
      </Head>

      <Topnav />
      <Navbar2 />
      <section className="max-w-7xl mx-auto px-4 my-8 py-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500">Effective Date: 16 May 2025</p>

          <div className="space-y-6">
            <p className="text-sm leading-6">
              Welcome to{" "}
              <strong className="font-semibold">Allspark Technologies</strong>.
              These Terms and Conditions (Terms) govern your use of our
              website located at{" "}
              <a
                href="http://www.allsparktechnologies.com"
                className="text-[#384BFF] underline"
              >
                www.allsparktechnologies.com
              </a>{" "}
              (the Website) and the services we offer.
            </p>

            <p className="text-sm leading-6">
              By accessing or using this Website, you agree to these Terms in
              full. If you do not agree, please do not use the Website.
            </p>

            {/* Company Information */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Company Information
            </h2>
            <div className="space-y-2">
              <p className="text-sm font-semibold">AllSpark Technologies</p>
              <p className="text-sm">
                638 Knollwood Road, Franklin Lakes, NJ 07417
              </p>
              <p className="text-sm">
                Email:{" "}
                <a
                  href="mailto:info@allsparktechnologies.com"
                  className="text-[#384BFF] underline"
                >
                  info@allsparktechnologies.com
                </a>
              </p>
              <p className="text-sm">Phone: +1 (616) 308-1863</p>
            </div>

            {/* 1. Use of the Website */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              1. Use of the Website
            </h2>
            <p className="text-sm leading-6">
              You agree to use the Website only for lawful purposes and in
              accordance with these Terms. You may not:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm">
                Violate any local, state, national, or international law
              </li>
              <li className="text-sm">
                Transmit any harmful code, malware, or unauthorized data
              </li>
              <li className="text-sm">
                Attempt to gain unauthorized access to our servers, networks, or
                databases
              </li>
              <li className="text-sm">
                Use the Website in any way that may interfere with others&quot;
                access or safety
              </li>
            </ul>

            {/* 2. Intellectual Property Rights */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              2. Intellectual Property Rights
            </h2>
            <p className="text-sm leading-6">
              All content on this Website—including text, images, logos,
              graphics, videos, software, and code—is the property of{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              or our licensors and is protected under copyright, trademark, and
              intellectual property laws.
            </p>
            <p className="text-sm leading-6">
              You may not copy, distribute, reproduce, or modify any part of the
              Website without our prior written consent.
            </p>

            {/* 3. Service Descriptions */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              3. Service Descriptions
            </h2>
            <p className="text-sm leading-6">
              We strive to ensure that the information on our Website is
              accurate, complete, and current. However, we do not guarantee that
              all service descriptions or content are always error-free or
              up-to-date.
            </p>
            <p className="text-sm leading-6">Our services include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm">Custom Software Development</li>
              <li className="text-sm">Web & App Development</li>
              <li className="text-sm">AI & Machine Learning Solutions</li>
              <li className="text-sm">UI/UX Design</li>
              <li className="text-sm">Cloud & DevOps Services</li>
              <li className="text-sm">Ecommerce Solutions</li>
              <li className="text-sm">Marketing, SEO, and BPO Support</li>
            </ul>
            <p className="text-sm leading-6">
              We reserve the right to modify or discontinue any service without
              notice.
            </p>

            {/* 4. User-Submitted Information */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              4. User-Submitted Information
            </h2>
            <p className="text-sm leading-6">
              By submitting inquiries, emails, or forms via the Website, you
              agree that:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm">The information is true and accurate</li>
              <li className="text-sm">
                You have the right to share the information
              </li>
              <li className="text-sm">
                We may store and use your data according to our Privacy Policy
              </li>
              <li className="text-sm">
                We reserve the right to reject or remove any submission deemed
                inappropriate or in violation of our Terms.
              </li>
            </ul>

            {/* 5. Limitation of Liability */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              5. Limitation of Liability
            </h2>
            <p className="text-sm leading-6">
              To the fullest extent permitted by law,{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              and its affiliates, officers, employees, and agents will not be
              liable for any:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm">
                Indirect, incidental, special, or consequential damages
              </li>
              <li className="text-sm">Loss of data, profits, or revenue</li>
              <li className="text-sm">
                Damages resulting from your use or inability to use the Website
                or services
              </li>
            </ul>
            <p className="text-sm leading-6">
              Use of the Website is at your own risk.
            </p>

            {/* 6. Third-Party Links */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              6. Third-Party Links
            </h2>
            <p className="text-sm leading-6">
              This Website may contain links to third-party websites. These are
              provided for your convenience only. We are not responsible for the
              content or practices of any linked site, and their inclusion does
              not imply our endorsement.
            </p>

            {/* 7. Indemnification */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              7. Indemnification
            </h2>
            <p className="text-sm leading-6">
              You agree to defend, indemnify, and hold harmless{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              and its affiliates from any claims, liabilities, damages, losses,
              and expenses, including legal fees, arising from:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm">Your use of the Website</li>
              <li className="text-sm">Violation of these Terms</li>
              <li className="text-sm">
                Violation of any rights of another person or entity
              </li>
            </ul>

            {/* 8. Governing Law */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              8. Governing Law
            </h2>
            <p className="text-sm leading-6">
              These Terms shall be governed and construed in accordance with the
              laws of the <strong>State of New Jersey</strong>, United States,
              without regard to its conflict of law principles. Any legal action
              related to these Terms shall be brought exclusively in the state
              or federal courts located in New Jersey.
            </p>
            <p className="text-sm leading-6">
              Any legal action related to these Terms shall be brought
              exclusively in the state or federal courts located in New Jersey.
            </p>

            {/* 9. Changes to These Terms */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              9. Changes to These Terms
            </h2>
            <p className="text-sm leading-6">
              We may update or modify these Terms at any time. When we do, we
              will revise the Effective Date at the top. You are encouraged to
              review these Terms periodically. Your continued use of the Website
              constitutes acceptance of the revised Terms.
            </p>

            {/* 10. Contact Us */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              10. Contact Us
            </h2>
            <p className="text-sm leading-6">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Allspark Technologies</p>
              <p className="text-sm">
                638 Knollwood Road, Franklin Lakes, NJ 07417
              </p>
              <p className="text-sm">
                Email:{" "}
                <a
                  href="mailto:info@allsparktechnologies.com"
                  className="text-[#384BFF] underline"
                >
                  info@allsparktechnologies.com
                </a>
              </p>
              <p className="text-sm">Phone: +1 (616) 308-1863</p>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
