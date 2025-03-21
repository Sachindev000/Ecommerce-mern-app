import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItem } = useContext(ShopContext);

  const profileRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setToken("");
    setCartItem({});
    setShowProfile(false);
  };

  // Close profile dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between py-4 relative px-4 sm:px-8">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-40" />
      </Link>

      <ul className="hidden sm:flex gap-6 text-gray-700">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-700")}>
          Home
        </NavLink>
        <NavLink to="/collection" className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-700")}>
          Collection
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-700")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-700")}>
          Contact
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 relative">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5" />
          <span className="absolute -right-1 -bottom-1 bg-black text-white text-xs rounded-full px-1">
            {getCartCount()}
          </span>
        </Link>

        <div ref={profileRef} className="relative cursor-pointer">
          <img
            onClick={() => (token ? setShowProfile((prev) => !prev) : navigate("/login"))}
            src={assets.profile_icon}
            alt="Profile"
            className="w-5"
          />

          <AnimatePresence>
            {token && showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-6 bg-white shadow-md rounded p-3 w-36 flex flex-col gap-2 text-gray-600 z-50"
              >
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="hover:text-black cursor-pointer">Orders</p>
                <p className="hover:text-black cursor-pointer" onClick={logout}>
                  Logout
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setMenuOpen(false)} />}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-64 bg-white p-6 flex flex-col gap-4 text-gray-700 z-50 shadow-lg"
          >
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setMenuOpen(false)}>
              <img src={assets.dropdown_icon} alt="Close" className="w-4 rotate-180" />
              <p>Close</p>
            </div>

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/collection" onClick={() => setMenuOpen(false)}>
              Collection
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
