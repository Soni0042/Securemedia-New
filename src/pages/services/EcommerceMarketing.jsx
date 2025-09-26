import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaShoppingCart,
  FaYoutube,
  FaFacebook,
  FaGoogle,
  FaSearch,
  FaChartLine
} from "react-icons/fa";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export default function EcommerceMarketing() {
  
   const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Helmet>
      <title>Thrive Online with TheSecureMedia Ecommerce Marketing</title>
      <meta
        name="description"
        content="Grow your shop fast with TheSecureMedia’s ecommerce marketing. Win more sales with simple, smart plans that work."
      />
            <link rel="canonical" href="https://thesecuremedia.com/services/ecommerce-marketing" />

    </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* HERO TEXT LEFT */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4">
              Ecommerce Success Starts From Here – Clicks That Convert
            </h1>
            <p className="max-w-2xl lg:max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
              With our Ecommerce Marketing, draw in the ideal clients, interact with them successfully, and turn those clicks into sales.
            </p>
            <button onClick={() => navigate("/contact-us")}className="mt-8 bg-white text-red-700 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </motion.div>
          {/* HERO IMAGE RIGHT */}
          <motion.div
            className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/ec0mm.png"
              alt="Ecommerce Marketing Illustration"
              className="w-full max-w-md rounded-2xl  object-contain"
              
            />
          </motion.div>
        </div>
      </section>

      {/* Services Procedure */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Our  <span className="text-red-600">E-commerce Marketing </span> Services  Procedure
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We think that the basis of an effective e-commerce marketing plan is a thorough understanding of your company.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Add icons for each step */}
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Knowing Your Business</h3>
              <p className="text-gray-700 leading-relaxed">
                As the leading e-commerce digital marketing agency in Gurgaon, we think that a successful e-commerce advertising campaign requires a thorough understanding of your company. Our staff takes the time to learn about your company, target market, goals, and financial limitations. This information enables us to create a personalized plan that properly satisfies your particular needs.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Creating a Personalised Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We use our experience as one of Gurgaon's top e-commerce marketing companies to develop a customized advertising plan that supports your company's objectives. Your budget, preferred ad kinds, targeting choices, and ad creatives are just a few of the variables we take into account. By integrating these components, we create a plan that successfully advertises your company and produces the outcomes you want.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Suitable Active Advertising</h3>
              <p className="text-gray-700 leading-relaxed">
                Our staff keeps a close eye on the effectiveness of your advertising campaigns because e-commerce advertising is always changing. Ad creatives, targeting specifications, and budgetary allocations are all modified as needed as a result of our ongoing campaign analysis.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Progress Report</h3>
              <p className="text-gray-700 leading-relaxed">
                We place a high value on clarity and informational reporting. We give our clients frequent performance reports that include insightful information about the effectiveness and progress of your campaign. Important metrics including impressions, clicks, click-through rates (CTR), and conversions are included in these reports.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What We <span className="text-red-600"> Offer </span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaShoppingCart className="text-red-600 text-4xl mb-4 mx-auto" />,
              title: "Ecommerce Marketing",
              desc: "For hyperscale e-commerce growth, we have developed expertise in everything from platform integrations to optimizing your LTV."
            },
            {
              icon: (
                <span className="flex justify-center space-x-2 mb-4">
                  <FaYoutube className="text-red-600 text-3xl" />
                  <FaGoogle className="text-red-600 text-3xl" />
                  <FaFacebook className="text-red-600 text-3xl" />
                </span>
              ),
              title: "YouTube, Programmatic, Facebook & Google Ads",
              desc: "Without Search & Social Ads, your e-commerce strategy is lacking. We integrate premium inventories, Google Ads Network, and Facebook Ads Network with advanced targeting."
            },
            {
              icon: <FaSearch className="text-red-600 text-4xl mb-4 mx-auto" />,
              title: "Ecommerce SEO",
              desc: "Optimize your website using strategic keywords to increase sales. Over 100 brands rank in the top 5 for more than 10,000 keywords on Google."
            },
            {
              icon: <FaChartLine className="text-red-600 text-4xl mb-4 mx-auto" />,
              title: "Conversion Rate Optimization",
              desc: "Utilize real-time traffic monitoring and landing page optimization to turn clicks into customers."
            }
          ].map((offer, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 text-center flex flex-col items-center">
              {offer.icon}
              <h3 className="text-xl font-bold mb-3 text-red-600">{offer.title}</h3>
              <p className="text-gray-600 leading-relaxed">{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your E-commerce Store?</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed">
          Partner with us to drive more traffic, boost conversions, and grow your online sales with proven e-commerce marketing strategies.
        </p>
        
      </section>

      <Footer />
    </div>
  );
}
