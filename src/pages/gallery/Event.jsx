import React from "react";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const Event = () => {
  
  // Array of images for global events
  const images = [
    "/event (1).jpeg",
    "/event (2).jpeg",
    "/event (3).jpeg",
    "/event (4).jpeg",
    "/event (5).jpeg",
    "/event (6).jpeg",
    "/event (7).jpeg",
    "/event (8).jpeg",
    "/event (9).jpeg",
    "/event (10).jpeg",
    "/event (11).jpeg",
    "/event (12).jpeg",
  
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Helmet>
      <title>Relive Events in TheSecureMedia Gallery</title>
      <meta
        name="description"
        content="Check out TheSecureMedia’s event gallery to relive epic moments. See our vibrant captures and shine with our creative work."
      />
            <link rel="canonical" href="https://thesecuremedia.com/gallery/event" />

    </Helmet>

      {/* ================= HEADER ================= */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl  mb-4"> <span className="text-red-600">GLOBAL </span> EVENTS</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Making waves worldwide: See Secure Media in action at global events
        </p>
      </section>


      

      {/* ================= GALLERY GRID ================= */}
      <section className="px-6 md:px-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={`Global Event ${index + 1}`}
                className="w-full h-120 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Event;
