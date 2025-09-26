// src/pages/AboutSAM.jsx
import Footer from "../../components/Footer";
import { FaGlobe, FaChartLine, FaLightbulb, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AboutSAM() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800 font-sans flex flex-col min-h-screen">
      <Helmet>
      <title>Journey to Digital Excellence TheSecureMedia</title>
      <meta
        name="description"
        content="Meet TheSecureMedia team driving your brand forward with passion expertise and secure digital strategies for lasting online impact."
      />
            <link rel="canonical" href="https://thesecuremedia.com/about-us" />

    </Helmet>

      {/* ================= HERO (Full-screen landing page) ================= */}
      <section className="relative w-full h-screen bg-gradient-to-r from-red-600 to-red-800 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-6xl  mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Secure Affiliate Media
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We’re not just a performance marketing company – we’re your partner in achieving real-time, measurable outcomes.
            </motion.p>
           <motion.button
  className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  onClick={() => navigate("/contact-us")}
>
  Get Started
</motion.button>

          </div>

          {/* Right: Hero Image */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/abus.png"
              alt="Secure Affiliate Media Illustration"
              className="w-full max-w-md rounded-xl object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">98%</h2>
            <p className="mt-2 text-gray-600">Client Retention</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">100+</h2>
            <p className="mt-2 text-gray-600">Global Clients</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">6+</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">1M+</h2>
            <p className="mt-2 text-gray-600">Monthly Conversions</p>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our <span className="text-red-600"> Story</span></h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Secure Affiliate Media started its journey focusing on the domestic CPL market. 
          Under strong leadership, we quickly expanded into international markets, which became the turning point of our growth. 
          We’ve since evolved into a global leader in performance marketing, delivering meaningful results for our partners.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
            <p>
              To enable companies with the strategic knowledge of our skilled team,
              providing outstanding real-time outcomes in affiliate and performance marketing
              that promote sustainable growth and accomplish specific goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
            <p>
              To create long-term relationships with companies around the globe, becoming their go-to partner for achieving marketing goals through continuous improvement and real-time results.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core <span className="text-red-600"> Values </span>  </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaChartLine className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Performance-Driven</h4>
            <p className="text-gray-600">Measurable impact for every client.</p>
          </div>
          <div>
            <FaLightbulb className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Strategic Growth</h4>
            <p className="text-gray-600">Visionary leadership and innovation.</p>
          </div>
          <div>
            <FaGlobe className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Global Reach</h4>
            <p className="text-gray-600">Worldwide partnerships and markets.</p>
          </div>
          <div>
            <FaSyncAlt className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Adaptability</h4>
            <p className="text-gray-600">Agile approach to diverse markets.</p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50 text-red-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Samantha Milner",
                company: "Mindful LLC",
                text: "We now have a fantastic website that perfectly encapsulates our company thanks to them. Their service has exceeded expectations."
              },
              {
                name: "Mike Johnson",
                company: "DEF Technologies",
                text: "Our company now has a state-of-the-art website that is easy to navigate. Their digital marketing expertise is undeniable."
              },
              {
                name: "Emma Smith",
                company: "GHI Industries",
                text: "Extremely knowledgeable, professional, and quick to respond. An outstanding digital partner for us."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-700 mb-4">"{t.text}"</p>
                <h4 className="font-bold text-red-600">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
