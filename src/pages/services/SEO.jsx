import React from "react";
import { FaSearch, FaChartLine, FaLink, FaCogs, FaMapMarkerAlt, FaShoppingCart, FaYoutube, FaUsers } from "react-icons/fa";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SEOService() {
   
   const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
<Helmet>
      <title>Shine Online with TheSecureMedia SEO Services</title>
      <meta
        name="description"
        content="Win the search game with TheSecureMedia’s SEO services. Use smart strategies to shine online and grow your brand fast."
      />
        <link rel="canonical" href="https://thesecuremedia.com/services/seo" />

    </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4 leading-tight">
              Elevate Your Online Presence with Professional SEO
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Stand out in the digital landscape. Our expert SEO services improve search engine visibility, drive organic traffic, and help potential customers find your business effortlessly.
            </p>
            <button onClick={() => navigate("/contact-us")} className="mt-6 bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/seo.png" alt="SEO Services" className="w-full max-w-md " />
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our <span className="text-red-600"> SEO</span>  Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <FaSearch className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Keyword Research & Strategies", desc: "Analyze industry-specific keywords, create targeted lists, and develop strategies tailored for your business." },
            { icon: <FaCogs className="text-red-600 text-4xl mb-4 mx-auto" />, title: "On-Page SEO", desc: "Optimizing website structure, content, and metadata for a seamless user experience and higher search rankings." },
            { icon: <FaLink className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Off-Page SEO", desc: "Build authority and traffic through backlinks, guest blogging, citations, and content marketing." },
            { icon: <FaCogs className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Technical SEO", desc: "Improve page speed, conduct audits, and optimize backend for better indexing and ranking." },
            { icon: <FaMapMarkerAlt className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Local SEO", desc: "Enhance local search visibility, manage profiles, and optimize Google My Business to attract nearby customers." },
            { icon: <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Organic SEO", desc: "Use white-hat techniques, trend analysis, and audience research to drive sustainable traffic growth." },
            { icon: <FaShoppingCart className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Ecommerce SEO", desc: "Rank eCommerce stores on Google’s first page, ensuring smooth shopping experiences and better retention." },
            { icon: <FaYoutube className="text-red-600 text-4xl mb-4 mx-auto" />, title: "YouTube SEO", desc: "Optimize videos and channels to increase views, watch time, and subscribers." },
            { icon: <FaLink className="text-red-600 text-4xl mb-4 mx-auto" />, title: "Link Building", desc: "Secure authoritative backlinks using ethical strategies to boost long-term SEO performance." },
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 text-center">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-red-600">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose <span className="text-red-600">Secure Media?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Result-Oriented", desc: "We focus on measurable KPIs, ensuring SEO strategies deliver tangible results." },
            { title: "Updated Strategies", desc: "Our team stays ahead with the latest SEO trends and Google updates for optimized outcomes." },
            { title: "Affordable Services", desc: "Get maximum ROI with competitively priced professional SEO services." },
            { title: "Transparent Communication", desc: "We maintain clear communication, keeping you informed at every stage of the process." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed">
          Connect with our SEO experts today and take the first step towards higher rankings, increased traffic, and business growth.
        </p>
          
      </section>

      <Footer />
    </div>
  );
}
