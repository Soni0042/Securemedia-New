// src/pages/EmailMarketing.jsx
import React from "react";
import { FaUsers, FaClock, FaChartLine, FaEnvelopeOpenText, FaClipboardList, FaPenNib } from "react-icons/fa";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function EmailMarketing() {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Helmet>
      <title>Win Customers with TheSecureMedia Email Marketing</title>
      <meta
        name="description"
        content="Build stronger connections with TheSecureMedia’s email marketing. Engage your audience and grow your brand with smart campaigns."
      />
            <link rel="canonical" href="https://thesecuremedia.com/services/email-marketing" />

    </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10">
          
          {/* Text */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4 leading-tight">
              Smart Email Marketing for Smarter Growth
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
              Reach real people who matter, maximize engagement, and grow your business faster with our expert email marketing strategies.
            </p>
            <button onClick={() => navigate("/contact-us")}className="mt-8 bg-white text-red-700 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-end md:items-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/emm.png"
              alt="Email Marketing"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Email Marketing */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose <span className="text-red-600"> Email Marketing? </span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
            <FaChartLine className="mx-auto text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Expand Your Business</h3>
            <p className="text-gray-600">
              Outperform traditional marketing. 92% of internet users have email, and 72% check it multiple times daily.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
            <FaUsers className="mx-auto text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Connect with Audience</h3>
            <p className="text-gray-600">
              Reach multiple target segments with personalized messaging to maximize engagement.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
            <FaClock className="mx-auto text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Optimize Time & Effort</h3>
            <p className="text-gray-600">
              Automate campaigns for hundreds or hundreds of thousands of recipients in just minutes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
            <FaEnvelopeOpenText className="mx-auto text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Observe Your Data</h3>
            <p className="text-gray-600">
              Track performance and analytics to refine campaigns for better results and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Email Marketing  <span className="text-red-600">Strategy </span></h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            <FaClipboardList className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">1. Research & Development</h3>
              <p className="text-gray-700">
                Study business requirements, customer preferences, and analyze competitors for the best strategy.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUsers className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">2. List Creation</h3>
              <p className="text-gray-700">
                Identify the right audience using existing data or online forms to ensure targeted campaigns.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPenNib className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">3. Template Design</h3>
              <p className="text-gray-700">
                Create visually appealing, responsive email templates optimized for engagement.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelopeOpenText className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">4. Content Planning</h3>
              <p className="text-gray-700">
                Craft valuable content with strong call-to-actions that drive results and engagement.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">5. Campaign Scheduling</h3>
              <p className="text-gray-700">
                Schedule emails at the optimal time to reach your audience when they’re most active.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaChartLine className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">6. Result Tracking & Optimization</h3>
              <p className="text-gray-700">
                Continuously monitor and adjust campaigns for maximum effectiveness and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business with Smart Email Marketing</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          With Secure Media, your emails don’t just reach inboxes—they reach the right people, at the right time, driving better engagement, leads, and revenue.
        </p>
      
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
