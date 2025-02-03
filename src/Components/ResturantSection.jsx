import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResturantSection = (e) => {
  const [ResturantData, city] = e.data;

  console.log("city on Resturant section", city);

  const [tValue, setValue] = useState(0);

  // Handlers for navigation
  const moveLeft = () => {
    setValue((prev) => Math.min(prev + 300, 0)); // Prevent moving left beyond 0
  };

  const moveRight = () => {
    const maxTranslate = -(ResturantData.length * 140 - 500 * 3); // Ensure no over-scroll
    setValue((prev) => Math.max(prev - 500, maxTranslate));
  };

  return (
    <>
      <div className="px-[160px] border mt-[60px] flex flex-row justify-between">
        <span className="font-bold text-[25px] pl-[30px]">
          Top restaurant chains in {city}
        </span>
        <div className="p-[10px] pr-[50px]">
          <i
            className="fa fa-arrow-left bg-slate-300 text-black rounded-full text-[20px] p-[10px]"
            onClick={moveLeft}
          ></i>

          <i
            className="fa fa-arrow-right bg-slate-300 text-black rounded-full text-[20px] p-[10px] m-[5px]"
            onClick={moveRight}
          ></i>
        </div>
      </div>

      {/* Scrollable Image Row */}
      <div className="overflow-x-auto whitespace-nowrap py-[20px] mx-[210px] no-scrollbar">
        <div
          className="flex space-x-6"
          style={{ transform: `translateX(${tValue}px)` }}
        >
          {ResturantData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 mr-[10px] text-left relative group"
            >
              {/* Link Wrap */}
              <Link to={`/ResturantMenu/${item?.info?.id}`}>
                {/* Image */}
                <img
                  className="w-[250px] h-[160px] rounded-lg object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
                  alt={`Image of ${item?.info?.name}`}
                />

                {/* Gradient Overlay with Text */}
                <div className="absolute top-28 w-full h-[52px] bg-gradient-to-t from-black from-4% to-transparent to-90% flex items-center transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg">
                  <span className="text-[20px] bg-transparent font-bold text-white px-[5px] max-w-[150px] ">
                    {item?.info?.aggregatedDiscountInfoV3?.discountTag}{" "}
                    {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                  </span>
                </div>
              </Link>

              {/* Other Content */}
              <span className="text-[20px] font-bold block">
                {item?.info?.name}
              </span>
              <i className="fa-regular fa-star text-green-600 pr-[10px]"></i>
              <span className="font-bold">{item?.info?.avgRating} . </span>
              <span className="font-bold">{item?.info?.sla?.slaString}</span>
              <span className="block w-[230px]   ">
                {" "}
                {item?.info?.cuisines}{" "}
              </span>
              <span className="block font-bold text-gray-800">
                {item?.info?.areaName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantSection;
