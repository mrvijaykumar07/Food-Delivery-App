import React from "react";
import { Link } from "react-router-dom";

const OnlineRestaurant = (e) => {
  const [ResturantData, city] = e.data;
  const loading3=ResturantData.length;
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
      <div className="md:px-[160px] border mt-[30px] md:mt-[60px] flex flex-row justify-between">
        <span className="font-bold md:text-[25px] pl-4 md:pl-[30px]">
          Top Online  restaurants  in {city}
        </span>
      </div>

      <div className=" flex gap-5 justify-around  md:px-[190px]  list-none pl-[12px] md:mr-[140px] my-[18px]   overflow-hidden whitespace-nowrap truncate  ">
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

{loading3==0?(
         <div className="flex items-center justify-center text-black">
         <span className="flex">
           <span className="animate-bounce mx-[1px] text-black text-[40px]">
             .
           </span>
           <span className="animate-bounce mx-[1px] delay-150 text-black text-[40px]">
             .
           </span>
           <span className="animate-bounce mx-[1px] delay-300 text-black text-[40px]">
             .
           </span>
         </span>
       </div>
):(

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 pl-[18px] md:px-[170px] py-[20px]  ">
        {ResturantData.map((item, index) => (
          <div
            key={index}
            className="   flex-shrink-0 mr-2 text-left relative group"
          >
            {/* Link Wrap */}
            <Link to={`/ResturantMenu/${item?.info?.id}`}>
              {/* Image */}

              <div className="relative" >
                <img
                  className=" w-full h-[48vw]  md:w-[250px] md:h-[160px] rounded-lg object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
                  alt={`Image of ${item?.info?.name}`}
                />

                {/* Gradient Overlay with Text */}
                <div className=" lg:flex absolute top-0  w-full h-full   bg-gradient-to-t from-black from-8% to-transparent to-95% items-center transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"></div>

    {/*Discount*/}
    <div className="absolute px-[7px] md:bottom-0 bottom-8 lg:w-full  h-[45px] md:h-[52px] w-[125px]  items-center transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg">
                <span className=" bg-transparent font-bold text-white px-[5px] max-w-[250px]">
                  <span className=" block md:inline text-white font-bold md:text-[18px]  text-[16px] ">
                    {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    <span className="block md:inline text-white font-bold text-[12px] md:text-[18px] drop-shadow-lg">
                      {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </span>
                  </span>
                </span>
              </div>

              </div>

          
            </Link>

            {/* Other Content */}
            <span className="text-[15px] md:text-[20px] font-bold block w-[170px] truncate">
              {item?.info?.name}
            </span>

            <i className="fa-regular fa-star text-green-600 pr-[5px] md:pr-[10px]"></i>
            <span className="font-bold text-[15px] md:text-[16px]">
              {item?.info?.avgRating} .{" "}
            </span>
            <span className="font-bold text-sm md:text-xl text-[15px] md:text-[15px] ">
              {item?.info?.sla?.slaString}
            </span>
            <span className="block w-[170px] md:w-[230px] text-[14px] md:text-[15px] text-gray-600 truncate overflow-hidden whitespace-nowrap">
              {item?.info?.cuisines}
            </span>

            <span className="block font-bold overflow-hidden whitespace-nowrap truncate text-[14px] text-gray-500">
              {item?.info?.areaName}
            </span>
          </div>
        ))}
      </div>




)}



    </>
  );
};

export default OnlineRestaurant;
