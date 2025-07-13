import React, { useEffect } from "react";
import { DataContext, getData } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const { data, fetchAllProducts } = getData();
  console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data?.slice(0, 7)?.map((items, index) => {
        return (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 "
          >
            <div className="flex gap-10 justify-center h-[600px] items-center px-4  ">
              <div className="space-y-6 ">
                <h3 className="font-sans font-semibold text-red-600 text-sm">
                  Powering your Word with the best in Electronics
                </h3>
                <h1 className="font-bold uppercase text-4xl line-clamp-3 text-white md:w-lg">
                  {items.title}
                </h1>
                <p className="md:w-lg line-clamp-3 text-gray-400 pr-7 ">
                  {items.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 rounded-md text-white px-3 py-2 mt-2 cursor-pointer">
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  src={items.image}
                  alt={items.title}
                  className="hover:scale-105 shadow-2xl w-lg transition-all shadow-red-500 rounded-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
