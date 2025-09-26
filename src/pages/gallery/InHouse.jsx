import React from "react";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const InHouse = () => {
  
  // Array of 12 images (replace with actual image paths)
  const images = [
    "/inhouse (1).png",
    "/inhouse (2).png",
    "/inhouse (3).png",
    "/inhouse (4).png",
    "/inhouse (5).png",
    "/inhouse (6).png",
    "/inhouse (7).png",
    "/inhouse (9).png",
    "/inhouse (10).png",
    "/inhouse (12).png",
    "/inhouse (13).jpeg",
    "/inhouse (14).jpeg",
    "/inhouse (15).jpeg",
    "/inhouse (16).jpeg",
    "/inhouse (17).jpeg",
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Helmet>
      <title>See Creative Work in TheSecureMedia Gallery</title>
      <meta
        name="description"
        content="Explore TheSecureMedia’s in-house gallery to see bold creative projects. Get inspired by our work and shine with us."
      />
            <link rel="canonical" href="https://thesecuremedia.com/gallery/in-house" />

    </Helmet>
      
      {/* ================= HEADER ================= */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl  mb-4"> <span className="text-red-600">IN-HOUSE </span> GALLERY</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Event highlights captured in stunning photos
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
                alt={`In-house Event ${index + 1}`}
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

export default InHouse;
