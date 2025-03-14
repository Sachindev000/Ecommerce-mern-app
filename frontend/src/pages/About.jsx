import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <div className="text-center">
        <Title text1="About" text2="Us" />
      </div>
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-3/5 text-gray-700 text-lg">
          <p>
            We are committed to providing high-quality  products with 
            the best customer experience. Our goal is to deliver innovative solutions 
            that enhance your daily life.
          </p>
          <p>
            With a passion for excellence, we ensure that every product we offer 
            meets the highest standards of quality and reliability. Customer satisfaction 
            is at the heart of what we do.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p>
            Our mission is to make top-tier  products accessible to everyone 
            while maintaining affordability, convenience, and outstanding service.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-8">
        <Title text1="Why" text2="Choose Us" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-lg">
        <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
          <p className="text-gray-600 mt-4">
            We prioritize quality in every product, ensuring durability, performance, 
            and reliability to exceed customer expectations.
          </p>
        </div>
        <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">Convenience</h3>
          <p className="text-gray-600 mt-4">
            Shop from the comfort of your home with seamless browsing, secure 
            payments, and swift delivery.
          </p>
        </div>
        <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">Exceptional Support</h3>
          <p className="text-gray-600 mt-4">
            Our customer service team is always ready to assist you, ensuring 
            a smooth shopping experience.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default About;