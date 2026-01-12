import {
  PiCreditCardLight,
  PiHeadphonesLight,
  PiPackageLight,
  PiShoppingCartSimple,
  PiTrophyLight,
} from "react-icons/pi";
import useGet from "../hook/useGet";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS ni import qilishni unutmang!
import {
  BsArrowRight,
  BsFillCartDashFill,
  BsFillCartPlusFill,
} from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "lucide-react";

const HomePage = () => {
  const { data, loading } = useGet("products");

  if (loading) return <h2>Loading...</h2>;

  const products = data?.data?.products || [];

  return (
    <div className="container mx-auto  p-3">
      <div className="bg-gray-100 py-8 px-2 rounded-2xl shadow-md">
        {/* Karusel qismi */}
        <Carousel
          fade
          indicators={true}
          controls={true}
          interval={4000} // 5 soniya
          pause="hover"
        >
          {products.map((el) => (
            <Carousel.Item key={el.id || el.title}>
              <div className="max-w-7xl mx-auto bg-gray-100 rounded-2xl py-4 px-8  shadow-lg">
                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* KATTA CARD */}
                  <div className="lg:col-span-2 bg-[#F2F4F5] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative">
                    {/* TEXT */}
                    <div className="w-full md:w-1/2   md:text-left">
                      <p className="text-[#2484C2] flex items-center gap-2 text-sm uppercase font-semibold">
                        {el.title} <BsArrowRight />
                      </p>
                      <h1 className="text-3xl md:text-4xl font-bold">
                        {el.brand}
                      </h1>
                      <p className="text-[#475156] line-clamp-2">
                        {el.description}{" "}
                        <span className="font-bold">$2 USD</span>.
                      </p>
                      <button className="bg-[#FA8232] cursor-pointer duration-200 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                        SHOP NOW →
                      </button>
                    </div>

                    {/* thumbnail */}
                    <div className="w-full md:w-1/2 flex justify-center relative">
                      <div className="absolute top-0 right-0 bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
                        ${el.discountPercentage}
                      </div>
                      <img
                        src={el.thumbnail}
                        className="w-60 md:w-72 object-contain"
                        alt={el.title || "Product"}
                      />
                    </div>
                  </div>

                  {/* O‘NG TOMON 2 TA CARD */}
                  <div className="flex flex-col gap-6">
                    {/* Birinchi kichik card */}
                    <div className="bg-black rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 relative">
                      <div className="w-full sm:w-1/3 text-center sm:text-left space-y-2">
                        <h2 className="text-[#EBC80C] font-bold text-lg">
                          Summer Sales
                        </h2>
                        <p className="text-white text-sm">
                          New Google <br /> Pixel 6 Pro
                        </p>
                        <button className="bg-[#FA8232] cursor-pointer duration-200 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">
                          SHOP NOW →
                        </button>
                      </div>
                      <div className="w-full sm:w-1/2 flex justify-center relative">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                          $299
                        </div>
                        <img
                          src="https://m.media-amazon.com/thumbnails/I/51YddC0IneL.jpg"
                          className="w-40 object-contain"
                          alt="Pixel"
                        />
                      </div>
                    </div>

                    {/* Ikkinchi kichik card */}
                    <div className="bg-[#F2F4F5] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 relative">
                      <div className="w-full sm:w-1/3 flex justify-center relative">
                        <img
                          src="https://m.media-amazon.com/images/I/51YddC0IneL.jpg"
                          className="w-40 object-contain"
                          alt="Pixel"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 text-center sm:text-left space-y-2">
                        <h2 className="text-[#EBC80C] font-bold text-lg">
                          Summer Sales
                        </h2>
                        <p className="text-white text-sm">
                          New Google <br /> Pixel 6 Pro
                        </p>
                        <button className="bg-[#FA8232] cursor-pointer duration-200 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">
                          SHOP NOW →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* Features Section - o‘zgarmadi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl">
            <PiPackageLight />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-[18px]">
              Fasted Delivery
            </h3>
            <p className="text-gray-500 text-xs">24 soat ichida</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl">
            <PiTrophyLight />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">24 Hours Return</h3>
            <p className="text-gray-500 text-xs">100% money-back guarantee</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl">
            <PiCreditCardLight />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Secure Payment</h3>
            <p className="text-gray-500 text-xs">Your money is safe</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl">
            <PiHeadphonesLight />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Support 24/7</h3>
            <p className="text-gray-500 text-xs">Live contact/message</p>
          </div>
        </div>
      </div>
      <ul className="flex justify-between items-center mt-4 ">
        <li className="flex items-center  gap-4">
          <p className=" text-[24px] text-[#191C1F]">Best Deals</p>
          <p className="text-[14px] text-[#000000]">Deals ends in</p>
          <p className="text-[16px] bg-[#F3DE6D] p-2 rounded">
            16d : 21h : 57m : 23s
          </p>
        </li>
        <li className="flex items-center  gap-2 cursor-pointer">
          <p className="text-[14px] text-[#2DA5F3] flex  items-center gap-2">
            Browse All Product <BsArrowRight />
          </p>
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {products.map((el) => (
          <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition relative">
            {/* discountPercentage */}
            {el.discountPercentage && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
                {el.discountPercentage}
              </span>
            )}

            {/* Image */}
            <div className="p-4 flex justify-center">
              <img
                src={el.thumbnail}
                alt={el.title}
                className="h-40 object-contain"
              />
              <div className=" absolute top-22 right-23 flex  gap-3">
                <FaRegHeart className=" text-3xl bg-white rounded-full w-8 h-8 hover:text-amber-500 p-0.5 duration-300 text-gray-600 cursor-pointer" />
                <PiShoppingCartSimple className=" text-3xl bg-white rounded-full w-8 h-8 hover:text-amber-500 p-0.5  duration-300 text-gray-600  cursor-pointer" />
                <IoEyeOutline className=" text-3xl bg-white rounded-full w-8 h-8 hover:text-amber-500  duration-300 text-gray-600  cursor-pointer" />
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm mb-1">
                ★★★★★
                <span className="text-gray-400 text-xs ml-2">
                  ({el.rating})
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                {el.description}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600 font-semibold">${el.price}</span>
                {el.Price && (
                  <span className="text-gray-400 line-through text-sm">
                    ${el.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
