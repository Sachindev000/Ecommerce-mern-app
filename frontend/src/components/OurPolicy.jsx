import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 text-center py-16 px-4">
      {[
        {
          img: assets.exchange_icon,
          title: "Easy Exchange Policy",
          desc: "Hassle-free exchange process for your convenience.",
        },
        {
          img: assets.quality_icon,
          title: "7 Days Return Policy",
          desc: "Return your product within 7 days with ease.",
        },
        {
          img: assets.support_img,
          title: "24/7 Customer Support",
          desc: "Our team is available anytime to assist you.",
        },
      ].map((policy, index) => (
        <div key={index} className="flex flex-col items-center max-w-xs">
          <img className="w-14 mb-4" src={policy.img} alt={policy.title} />
          <p className="font-semibold text-base sm:text-lg">{policy.title}</p>
          <p className="text-gray-500 text-sm sm:text-base">{policy.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
