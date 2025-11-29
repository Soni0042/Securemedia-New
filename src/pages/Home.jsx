import React, { useRef, useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaShoppingCart, FaPlane, FaHome, FaMoneyBillWave, FaLeaf } from "react-icons/fa";
import NumbersMatter from "../components/NumbersMatter";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Clients from "../components/Clients";
import BannerSlider from "../components/BannerSlider";
import { Helmet } from "react-helmet";




export default function Home() {
  const navigate = useNavigate();
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const rotatingWords = ["Performance", "Affiliate", "Digital"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
  let typingSpeed = 50; // milliseconds
  let timeout;

  const fullText = rotatingWords[currentWordIndex];

  if (!isDeleting) {
    if (displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    }
  } else {
    if (displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }
  }

  return () => clearTimeout(timeout);
}, [displayedText, isDeleting, currentWordIndex, rotatingWords]);


  // Contact Form states and refs
  const form = useRef();
  const [resultMessage, setResultMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

   
  };

  return (
    <div className="bg-white text-black font-sans min-h-screen leading-relaxed">
      <Helmet>
        <title>Grow Your Brand with Secure Digital Solutions|TheSecureMedia</title>
        <meta
          name="description"
          content="Boost your online presence with innovative digital solutions, expert media services, and secure strategies from TheSecureMedia to stand out."
        />
        <link rel="canonical" href="https://thesecuremedia.com" />
      </Helmet>
    {/* Hero Section */}
<section className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto py-25 px-6 md:px-12 gap-12">
  {/* Left: Text Content */}
  <motion.div
    className="w-full md:w-1/2  py-9"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-5xl md:text-6xl  mb-6 leading-tight text-gray-900">
      <span
        className="text-red-600 inline-block"
        style={{ width: "13ch", whiteSpace: "nowrap" }}
      >
        {displayedText}
      </span>
      <br />
      <span className="text-gray-900">Marketing Company</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg leading-relaxed">
      Unleash your <span className="font-semibold text-gray-900">performance</span> with 
      <span className="text-red-600 font-semibold"> Secure Affiliate Media</span> – 
      helping brands grow with data-driven campaigns.
    </p>

    <p className="text-red-600 font-semibold tracking-widest mb-10 text-sm uppercase">
      —— Estb. 2019 ——
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => navigate("/contact-us")}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105"
        aria-label="Contact Us"
      >
        Contact Us
      </button>
      <button
        onClick={() => navigate("about-us")}
        className="bg-white border border-red-600 text-red-600 rounded-full px-8 py-3 font-semibold shadow-sm hover:bg-white transition-transform transform hover:scale-105"
        aria-label="Learn More"
      >
        Learn More
      </button>
    </div>
  </motion.div>

  {/* Right: Banner Slider */}
  <motion.div
    className="w-full  " style={{maxWidth:"500px"}}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <BannerSlider />
  </motion.div>
</section>



      {/* ================= VALUE PROPOSITIONS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Why<span className="text-red-600"> Partner </span> With Us</h2>
          <p className=" text-lg md:text-xl text-gray-600 mb-12">
            Our solutions are designed to deliver measurable results and sustainable growth for your business.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Revenue-Driven Partnerships",
                desc: "We focus on strategies that consistently improve revenue and maximize ROI.",
                color: "bg-red-100 text-red-600"
              },
              {
                num: "02",
                title: "Accurate Audience Targeting",
                desc: "Reach your ideal customers with precision and data-driven targeting strategies.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                num: "03",
                title: "Maximized Conversion Funnels",
                desc: "Optimized funnels designed to turn prospects into loyal customers effectively.",
                color: "bg-green-100 text-green-600"
              },
              {
                num: "04",
                title: "Scalable Performance Solutions",
                desc: "Solutions built to grow and adapt with your business needs.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                num: "05",
                title: "Transparent & Measurable ROI",
                desc: "Clear reporting ensures every marketing action is measurable and accountable.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                num: "06",
                title: "Innovation-Driven Strategies",
                desc: "Leveraging the latest tools and creative approaches to stay ahead in your industry.",
                color: "bg-pink-100 text-pink-600"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition rounded-xl bg-white">
                <div className={`w-16 h-16 ${item.color} flex items-center justify-center rounded-full mb-4 text-2xl font-bold`}>
                  {item.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOP VERTICALS ================= */}
      <section className="py-16 bg-white-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Our <span className="text-red-600"> Top</span> Verticals</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            We Generate Millions In These Verticals
          </p>
          <p className="text-gray-500 mb-12 text-base">We are always working towards offering meaningful marketing through:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <FaGamepad className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">iGaming</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaShoppingCart className="text-5xl text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">E-Commerce</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaPlane className="text-5xl text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Travel</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaHome className="text-5xl text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Home Improvement</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Debt</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaLeaf className="text-5xl text-teal-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Nutra</h3>
            </div>
          </div>
        </div>
      </section>
     


     
   <Clients />
      {/* ================= NUMBERS MATTER ================= */}
      <NumbersMatter />

      {/* ================= FOUNDERS ================= */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
          Meet Our <span className="text-red-600"> Founders</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Himanshu */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <img
              src="/him.png"
              alt="Himanshu Singh"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">Himanshu Singh</h3>
            <p className="text-red-600 font-medium">CEO & Founder</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              Himanshu has a compelling vision for performance marketing influenced by his early days in the affiliate sector. With six months of direct CPL delivery experience, he gained an excellent grip on lead generation dynamics. This expertise fueled the creation of Secure Affiliate Media, initially dominating the domestic CPL space. Under his leadership, the company achieved massive growth in under three years, built a strong international presence, and expanded into new performance marketing verticals.
            </p>
          </div>
          {/* Alok */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <img
              src="/alok.jpeg"
              alt="Alok Singh"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">Alok Singh</h3>
            <p className="text-red-600 font-medium">Global Business Director</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              As Global Business Director, Alok drives Secure Affiliate Media’s global strategy and expansion. From starting as a finance executive at ADMS & Co. to working as a Tax Auditor at a Big 4 firm, his career took a pivotal turn in 2022 when he joined the company. His passion for the affiliate market and exceptional business development skills have broadened the company’s global footprint and secured major international partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY SECURE MEDIA ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Why <span className="text-red-600">Secure Media?</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At Secure Affiliate Media, your success is our success. We are different due to our highly trained and deeply skilled staff. Our experts aren't only smart; they've worked hard for years mastering the art of affiliate and performance marketing industry. All this experience manifests itself in a tangible real-time return that stands on its own merit. We're not speaking about potential; we're about delivering tangible, measurable results that inspire real growth for our partners.
            </p>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-green-600 mb-3 tracking-tight">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To enable companies with the strategic knowledge of our highly skilled team, providing outstanding real-time outcomes in affiliate and performance marketing that promote sustainable growth and accomplish their specific goals.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-blue-600 mb-3 tracking-tight">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create long-term relationships with companies around the globe, to become their go-to partner in reaching their marketing goals by continuously strengthening our extremely talented team and our commitment to provide better real-time results.
                </p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Affiliate-Marketing-Blog-Graphics-01.jpg"
              alt="Why Secure Media"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE STRENGTHS ================= */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Core<span className="text-red-600"> Strengths </span></h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            At Secure Affiliate Media, we pride ourselves on the values and capabilities that set us apart in the performance marketing industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Experienced Team", color: "green" },
              { number: 2, title: "Real-Time Results", color: "blue" },
              { number: 3, title: "Tangible Outcomes", color: "yellow" },
              { number: 4, title: "Proven Performance", color: "red" },
              { number: 5, title: "Dedicated Experts", color: "purple" },
              { number: 6, title: "Leading Force", color: "pink" },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-8`}>
                <div className={`flex items-center justify-center w-14 h-14 bg-${item.color}-100 text-${item.color}-600 rounded-full mx-auto mb-4 text-2xl font-bold`}>
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* ================= TESTIMONIALS ================= */}
<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-red-600 mb-10 tracking-tight">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Rajat Sharma",
          text: "I recently partnered with Secure Affiliate Media for digital marketing services, and I couldn't be more impressed. From day one, their team has been incredibly professional, responsive, and results-driven. They took the time to understand my business goals and crafted a customized strategy that truly delivered."
        },
        {
          name: "Rohit Choudhary",
          text: "Secure Affiliate Media did a fantastic job with our Google Ads and Facebook Ads, delivering great leads and ROI. Professional, responsive, and strategic – highly recommend them for anyone serious about growing their business."
        },
        {
          name: "Jahid Ali",
          text: "This agency expertly handled our Google Ads, Facebook Ads, and social media marketing. Their strategic approach boosted engagement, brand visibility, and quality leads. Professional, responsive, and results-driven – highly recommend for business growth!"
        }
      ].map((t, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative">
          <span className="text-6xl font-extrabold text-red-600 absolute -top-10 left-6 select-none opacity-20">
            &#8220; {/* Left double quote */}
          </span>
          <span className="text-6xl font-extrabold text-red-600 absolute -bottom-8 right-6 select-none opacity-20">
            &#8221; {/* Right double quote */}
          </span>
          <p className="text-gray-700 mb-4 relative z-10">"{t.text}"</p>
          <h4 className="font-bold text-[#E53935] relative z-10">{t.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

   {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Send Us a  <span className="text-red-600">Message</span>
          </h2>
          <form
            action="https://formsubmit.co/support@thesecuremedia.com"
            method="POST"
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            {/* Form fields unchanged */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" placeholder="Enter your first name" name="First Name" />
              <InputField label="Last Name" placeholder="Enter your last name" name="Last Name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Email Address" placeholder="Enter your email" type="email" name="Email" />
              <InputField label="Phone Number" placeholder="Enter your phone number" type="tel" name="Phone Number" />
            </div>
            <InputField label="Subject" placeholder="Enter subject" name="Subject" />
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="Message"
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Optional hidden fields for success redirect & captcha */}
            <input type="hidden" name="_captcha" value="false" />
            

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
            >
              Send Message
            </button>
          </form>
          {resultMessage && (
            <p className="mt-6 text-center font-semibold text-gray-700">{resultMessage}</p>
          )}
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
// Reusable InputField component
function InputField({ label, placeholder, type = "text", name }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
      />
    </div>
  );
}