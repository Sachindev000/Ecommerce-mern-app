import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-40  py-10 px-6 sm:px-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-700 text-sm">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 tracking-wider drop-shadow-sm">
            Fashion Fusion
          </h2>
          <p className="max-w-md text-gray-600">
            Discover premium quality electronics and gadgets at unbeatable
            prices. Your trusted destination for innovation and reliability.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-3">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-lg font-semibold mb-3">Contact</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">+91-7012458865</li>
            <li className="hover:text-black cursor-pointer">
              Contact@forever.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <hr className="border-gray-300 my-6" />
      <p className="text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
