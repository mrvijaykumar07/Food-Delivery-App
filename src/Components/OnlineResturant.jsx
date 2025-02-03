import React from "react";
import { Link } from "react-router-dom";

const OnlineRestaurant = (e) => {
  const [ResturantData, city] = e.data;

  const links = [
    "Fast Delivery",
    "New on Swiggy",
    "Rating 4.0+",
    "Pure Veg",
    "Offers",
    "Rs.300-Rs.600",
    "Less Than Rs.300",
  ];

  return (
    <>
      <div className="px-[150px] border mt-[90px] flex flex-row justify-between ">
        <span className="font-bold text-[25px] pl-[30px]">
          Restaurants with online food delivery in {city}
        </span>
      </div>
      <div className=" flex gap-5 justify-around  px-[190px]  list-none mr-[140px] my-[18px]">
        <li className="border border-black rounded-3xl  px-[10px] py-[5px] text-[12px] ">
          Filter <i className="fa-solid fa-filter"></i>{" "}
        </li>
        <li className="border border-black rounded-3xl  px-[10px] py-[5px]  text-[12px] ">
          Sort By{" "}
          <i className="fas fa-angle-down pl-2 text-black cursor-pointer"></i>{" "}
        </li>
        {links.map((item2, index) => (
          <li
            className="border border-black rounded-3xl  px-[10px] py-[5px] text-[12px] "
            key={index}
          >
            {item2}
          </li>
        ))}
      </div>

      {/* Grid Layout for Restaurant Items */}
      <div className="grid grid-cols-4 gap-6 px-[170px] py-[20px]  ">
        {ResturantData.map((item, index) => (
          <div key={index} className=" flex-shrink-0 mr-[27px] relative group ">
            <Link to={"/ResturantMenu"}>
              <img
                className="w-[250px] h-[160px] rounded-lg object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
                alt={`Image of ${item.name}`}
              />

              <div className=" bg-transparent  absolute top-28 w-full h-[52px] bg-gradient-to-t from-black from-4%  to-transparent to-90%  flex items-center  transform transition-transform duration-300 ease-in-out group-hover:scale-105  rounded-lg ">
                <span className="text-[20px] bg-transparent font-bold text-white px-[5px]  ">
                  {item?.info?.aggregatedDiscountInfoV3?.discountTag}{" "}
                  {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
                  {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                </span>
              </div>
            </Link>
            {/* Other Content */}
            <span className="text-[20px] font-bold block mt-2">
              {item?.info?.name}
            </span>
            <i className="fa-regular fa-star text-green-600 pr-[10px]"></i>
            <span className="font-bold">{item?.info?.avgRating} . </span>
            <span className="font-bold">{item?.info?.sla?.slaString}</span>

            <span className="block">{item?.info?.cuisines}</span>
            <span className="block font-bold text-gray-800">
              {item?.info?.areaName}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnlineRestaurant;
