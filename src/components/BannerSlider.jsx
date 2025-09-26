import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3050,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const banners = [
    { id: 1, image: "/hr (1).png", alt: "Banner 1" },
    { id: 2, image: "/hr (2).png", alt: "Banner 2" },
    { id: 3, image: "/hr (3).png", alt: "Banner 3" },
    
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
