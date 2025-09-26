import React from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
   
  return (
    <>
    <Helmet>
      <title>TheSecureMedia Privacy Policy | How We Protect You</title>
      <meta
        name="description"
        content="Discover how TheSecureMedia keeps your data safe. Our privacy policy is built on trust, transparency, and security to give you complete peace of mind."
      />
      <link rel="canonical" href="https://thesecuremedia.com/privacy-policy" />
    </Helmet>
      {/* Hero Section */}
      <section className=" text-black-600 py-16 text-center">
        <h1 className="text-5xl  mb-4">Privacy <span className="text-red-600">Policy</span></h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto bg-white  p-8 my-12 font-sans text-gray-800 leading-relaxed">
        
        <p className="mb-6">
          At <strong>Secure Affiliate Media</strong>, accessible at{" "}
          <a
            href="https://www.thesecuremedia.com"
            className="text-red-600 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thesecuremedia.com
          </a>
          , we prioritize your privacy. This Privacy Policy outlines how we collect, use, 
          and protect your information when you visit our website or engage with our performance 
          marketing services. By using our site, you agree to the terms described below.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information to enhance your experience and improve our services:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <strong>Personal Data:</strong> When you contact us or sign up for our
                services, we may collect your name, email address, phone number, or
                company details.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically gather data like your IP
                address, browser type, pages visited, and time spent on our site to
                optimize user experience.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to track preferences and analyze
                site performance. You can manage cookie settings in your browser.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              Your data helps us deliver top-notch performance marketing solutions:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>To provide and improve our affiliate marketing and digital marketing services.</li>
              <li>To personalize content and ads based on your interests.</li>
              <li>To analyze website performance and campaign effectiveness.</li>
              <li>To communicate with you about updates, offers, or inquiries.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal data. We may share it with:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <strong>Trusted Partners:</strong> Service providers (e.g., analytics or hosting
                companies) who follow strict privacy standards.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
                and users.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Your Rights
            </h2>
            <p className="mb-4">Under applicable laws, such as the CCPA, you can:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Request access to or deletion of your personal data.</li>
              <li>Opt out of targeted advertising or data sharing.</li>
              <li>
                Update or correct inaccurate information. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:support@thesecuremedia.com"
                  className="text-red-600 font-medium underline"
                >
                  support@thesecuremedia.com
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can
              disable cookies in your browser, but some features may not work properly.
              For details, see our Cookie Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Third-Party Links
            </h2>
            <p>
              Our site may link to third-party websites (e.g., affiliate partners). We are
              not responsible for their privacy practices. Please review their policies
              before sharing information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Data Security
            </h2>
            <p>
              We use industry-standard measures to protect your data, but no system is
              completely secure. We strive to safeguard your information against
              unauthorized access or breaches.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted here
              with an updated effective date. Your continued use of our site means you
              accept these updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
              Contact Us
            </h2>
            <p>
              For questions or to exercise your privacy rights, reach out to:
              <br />
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:support@thesecuremedia.com"
                className="text-red-600 underline"
              >
                support@thesecuremedia.com
              </a>
              <br />
              <span className="font-medium">Address:</span> Plot No-664, Udyog Vihar, Phase-5,
              Gurugram, Haryana – 122016
              <br />
              <span className="font-medium">Phone:</span> +91 8527875483
            </p>
          </div>
        </div>

        <p className="mt-12 font-semibold text-gray-700 text-center">
          Thank you for trusting Secure Affiliate Media with your data. We’re committed
          to transparency and protecting your privacy.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
