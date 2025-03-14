import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext)
 // Replace with actual cart state from Redux/Context
  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <Link to={'/home'}>
        <img src={assets.logo} alt="Logo" className="w-50" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["Home", "Collection", "About", "Contact"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-black font-semibold border-b-1" : "text-gray-700"
              }`
            }
          >
            <p>{item}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right-side Icons */}
      <div className="flex items-center gap-6">
        <img
        onClick={()=>setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowProfile(true)}
          onMouseLeave={() => setShowProfile(false)}
        >
          <Link to={'/login'}>
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />
          </Link>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-36 bg-slate-100 text-gray-500 rounded shadow-lg">
              <div className="flex flex-col gap-2 py-3 px-5">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon with Dynamic Count */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
         
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
        
        </Link>

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setToggleMenu(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-transform transform ${
          toggleMenu ? "translate-x-0 w-full" : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button */}
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setToggleMenu(false)}
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <p>Back</p>
          </div>

          {/* Mobile Nav Links */}
          {["Home", "Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setToggleMenu(false)}
              className={({ isActive }) =>
                `flex flex-col py-4 pl-4 gap-1 ${
                  isActive ? "text-black font-semibold border-b-1" : "text-gray-700"
                }`
              }
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
