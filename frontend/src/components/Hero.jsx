import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const heroImages = [
    assets.hero_img,
    assets.hero2,
    assets.hero3 
  ];

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <button className="font-semibold text-sm md:text-base hover:underline">
              Shop Now
            </button>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full object-cover"
                src={img}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
