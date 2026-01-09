import React, { useState } from "react";
import { BsHeadset } from "react-icons/bs";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaReddit,
  FaSearch,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiUser } from "react-icons/fi";
import {
  IoCartOutline,
  IoGitCompareOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { RxCaretDown, RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Headers = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* TOP BAR (desktop) */}
      <div className="hidden md:block bg-blue-700 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-5 py-2">
          <p>Welcome to Clicon online eCommerce store.</p>

          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-2">
              <span>Follow us:</span>
              <FaFacebook />
              <FaPinterest />
              <FaReddit />
              <FaYoutube />
              <FaInstagramSquare />
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              ENG <RxCaretDown />
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              USD <RxCaretDown />
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-5 py-4">
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-8 h-8 rounded-full relative bg-white flex items-center justify-center">
                <span className="bg-blue-600 rounded-full absolute w-4 h-4"></span>
              </div>
              <span className="hidden sm:block">CLICON</span>
            </div>

            {/* SEARCH (desktop) */}
            <div className="hidden md:flex flex-1 mx-10">
              <div className="flex bg-white rounded w-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full px-4 py-2 outline-none"
                />
                <button className="px-4 text-gray-600">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-4 text-white text-xl">
              <div className="relative">
                <IoCartOutline />
                <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs rounded-full px-1">
                  2
                </span>
              </div>

              <CiHeart className="hidden sm:block" />
              <FiUser className="hidden sm:block" />

              {/* MOBILE MENU BUTTON */}
              <button onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <RxCross2 /> : <RxHamburgerMenu />}
              </button>
            </div>
          </div>

          {/* SEARCH (mobile) */}
          <div className="md:hidden mt-4">
            <div className="flex bg-white rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full px-4 py-2 outline-none"
              />
              <button className="px-4 text-gray-600">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden mt-4 bg-blue-700 text-white rounded p-4 space-y-3">
              <p className="cursor-pointer">Account</p>
              <p className="cursor-pointer">Wishlist</p>
              <p className="cursor-pointer">Cart</p>
              <p className="cursor-pointer">ENG</p>
              <p className="cursor-pointer">USD</p>
            </div>
          )}
        </div>
        <div className="bg-white border-b border-gray-200">
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-3 flex items-center justify-between">
                {/* Left: All Category Dropdown */}
                <div className="flex items-center">
                  <select
                    className="px-4 py-2.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      All Category
                    </option>
                    <option value="game">Game</option>
                    <option value="cars">Cars</option>
                    <option value="shopping">Shopping</option>
                  </select>
                </div>

                {/* Center: Navigation Links - Desktopda ko'rinadi */}
                <div className="hidden lg:flex items-center gap-8">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <CiLocationOn className="text-lg" />
                    Track Order
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <IoGitCompareOutline className="text-lg" />
                    Compare
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <BsHeadset className="text-lg" />
                    Customer Support
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <IoHelpCircleOutline className="text-lg" />
                    Need Help
                  </a>
                </div>

                {/* Right: Phone Number */}
                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <FiPhone className="text-lg" />
                  <span className="hidden sm:inline">+1-202-555-0104</span>
                  <span className="sm:hidden">+1-202-555-0104</span>
                </div>
              </div>

              {/* Mobile va Planshet uchun qo'shimcha navigatsiya (agar kerak bo'lsa) */}
              <div className="lg:hidden flex items-center justify-center gap-6 py-2 border-t border-gray-100 text-xs text-gray-600">
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <CiLocationOn className="text-base" />
                  Track
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <IoGitCompareOutline className="text-base" />
                  Compare
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <BsHeadset className="text-base" />
                  Support
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <IoHelpCircleOutline className="text-base" />
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
