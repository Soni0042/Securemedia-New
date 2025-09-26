// src/components/Clients.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  // Slider configuration
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,              // Continuous smooth scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,     // Tablet view
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,      // Mobile view
        settings: { slidesToShow: 2 },
      },
    ],
  };

  // Client logos (image paths)
  const clients = [
    "/cl (18).png",
    "/cl (2).png",
    "/cl (3).png",
    "/cl (4).png",
    "/cl (5).png",
    "/cl (8).png",
    "/cl (9).png",
    "/cl (10).png",
    "/cl (11).png",
    "/cl (12).png",
    "/cl (15).jpg",
    
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-25">
          Our <span className="text-red-600">Clients</span>
        </h2>

        <Slider {...settings}>
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-40 mx-auto"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
