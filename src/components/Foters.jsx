import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* NEWSLETTER */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-gray-200 mt-3 max-w-xl mx-auto">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus.
          </p>

          {/* INPUT */}
          <div className="mt-8 max-w-2xl mx-auto flex bg-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-gray-700 outline-none"
            />
            <button className="bg-orange-500 px-6 cursor-pointer hover:bg-orange-600 duration-300 text-white font-semibold">
              SUBSCRIBE →
            </button>
          </div>

          {/* BRANDS */}
          <div className="flex flex-wrap justify-center gap-10 mt-10 text-gray-300 text-lg">
            <span className="bg-orange-500 hover:bg-orange-600 duration-200 p-2 rounded cursor-pointer">Google</span>
            <span className="bg-orange-500 hover:bg-orange-600 duration-200 p-2 rounded cursor-pointer">amazon</span>
            <span className="bg-orange-500 hover:bg-orange-600 duration-200 p-2 rounded cursor-pointer">PHILIPS</span>
            <span className="bg-orange-500 hover:bg-orange-600 duration-200 p-2 rounded cursor-pointer">TOSHIBA</span>
            <span className="bg-orange-500 hover:bg-orange-600 duration-200 p-2 rounded cursor-pointer">SAMSUNG</span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#1b1f22] text-gray-400">
        <div className="container mx-auto px-5 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* LOGO & INFO */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">CLICON</h2>
            <p className="text-sm">Customer Supports:</p>
            <p className="text-white font-semibold mt-1">(629) 555-0129</p>
            <p className="text-sm mt-3">
              4517 Washington Ave. <br />
              Manchester, Kentucky 39495
            </p>
            <p className="mt-3 text-white">info@kinbo.com</p>
          </div>

          {/* TOP CATEGORY */}
          <div>
            <h3 className="text-white font-semibold mb-4">TOP CATEGORY</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">Computer & Laptop</li>
              <li className="hover:text-yellow-400 cursor-pointer">SmartPhone</li>
              <li className="hover:text-yellow-400 cursor-pointer">Headphone</li>
              <li className="hover:text-yellow-400 cursor-pointer">Accessories</li>
              <li className="hover:text-yellow-400 cursor-pointer">Camera & Photo</li>
              <li className="hover:text-yellow-400 cursor-pointer">TV & Homes</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Browse All Product →
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">Shop Product</li>
              <li className="hover:text-yellow-400 cursor-pointer">Shopping Cart</li>
              <li className="hover:text-yellow-400 cursor-pointer">Wishlist</li>
              <li className="hover:text-yellow-400 cursor-pointer">Compare</li>
              <li className="hover:text-yellow-400 cursor-pointer">Track Order</li>
              <li className="hover:text-yellow-400 cursor-pointer">Customer Help</li>
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* DOWNLOAD APP */}
          <div>
            <h3 className="text-white font-semibold mb-4">DOWNLOAD APP</h3>

            <div className="bg-[#2a2e31] p-3 rounded flex items-center gap-3 mb-3">
              <FaGooglePlay className="text-2xl text-white" />
              <div>
                <p className="text-xs">Get it now</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </div>

            <div className="bg-[#2a2e31] p-3 rounded flex items-center gap-3">
              <FaApple className="text-2xl text-white" />
              <div>
                <p className="text-xs">Get it now</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </div>
          </div>

          {/* POPULAR TAG */}
          <div>
            <h3 className="text-white font-semibold mb-4">POPULAR TAG</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Game",
                "iPhone",
                "TV",
                "Asus Laptops",
                "Macbook",
                "SSD",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Speaker",
                "Tablet",
                "Microwave",
                "Samsung",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="border border-gray-600 px-3 py-1 rounded cursor-pointer hover:bg-white hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 text-center text-sm py-4">
          Kinbo eCommerce Template © 2021. Design by Templatecookie
        </div>
      </div>
    </footer>
  );
};

export default Footer;
