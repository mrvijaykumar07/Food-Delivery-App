import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResturantSection = (e) => {
  const [ResturantData, city] = e.data;
  const loading2=ResturantData.length;

  const [tValue, setValue] = useState(0);

  
  const moveLeft = () => {
    setValue((prev) => Math.min(prev + 300, 0)); 
  };
  
  const moveRight = () => {
    const containerWidth = window.innerWidth * 0.8; 
    const cardWidth = 140; 
    const maxTranslate = -(ResturantData.length * cardWidth - containerWidth);
  
    setValue((prev) => Math.max(prev - 300, maxTranslate));
  };
  
  return (
    <>
      <div className="md:px-[160px]  mt-[30px] md:mt-[60px] flex flex-row justify-between">
        <span className="font-bold md:text-[25px] px-2 md:pl-[30px] text-[15px] ">
          Top restaurant chains in {city}
        </span>

        <div className=" pb-4 pr-[20px] md:pr-[50px]">
          <i
            className="fa fa-arrow-left bg-slate-300 text-black rounded-full md:text-[20px] text-[15px] mr-[4px] md:p-[10px]  p-[5px] cursor-pointer"
            onClick={moveLeft}
          ></i>
          <i
            className="fa fa-arrow-right bg-slate-300 text-black rounded-full md:text-[20px] text-[15px] md:p-[10px] p-[5px] cursor-pointer"
            onClick={moveRight}
          ></i>
        </div>
      </div>


{loading2==0?(
         <div className="flex items-center justify-center text-black h-[200px]">
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

<div className="overflow-x overflow-y-hidden scrollbar-hide whitespace-nowrap py-[20px] ml-[10px] md:mx-[210px]">
<div
  className="flex "
  style={{ transform: `translateX(${tValue}px)` }}
>
  {ResturantData.map((item, index) => (
    <div
      key={index}
      className=" md:w-64 md:pl-[5px] border-blue-950 flex-shrink-0 mr-2 text-left relative group"
    >
   
      <Link to={`/ResturantMenu/${item?.info?.id}`}>
        <div className="relative" >
        <img
          className=" w-[129px] h-[140px]  md:w-[250px] md:h-[160px] rounded-lg object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
          alt={`Image of ${item?.info?.name}`}
        />

        {/* Gradient Overlay with Text */}
        <div className=" lg:flex absolute top-0  w-full h-full  bg-gradient-to-t from-black from-8% to-transparent to-95% items-center transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg">

        </div>


        <div className="absolute bottom-2 md:h-[52px] w-[125px]   flex items-center transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg">
          <span className=" bg-transparent font-bold text-white px-[5px] max-w-[10vw]">
            <span className=" block md:inline text-white font-bold md:text-[18px]  text-[15px] ">
              {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
              <span className="block md:inline text-white font-bold md:text-[18px]  ">
                {item?.info?.aggregatedDiscountInfoV3?.subHeader}
              </span>
            </span>
          </span>
        </div>




        </div>

   
      </Link>

      {/* Other Content */}
      <span className="text-[13px] md:text-[18px] font-bold block w-[33vw] truncate">
        {item?.info?.name}
      </span>

      <i className="fa-regular fa-star text-green-600 pr-[2px] md:pr-[10px]"></i>
      <span className="font-bold text-[13px] md:text-[16px]">
        {item?.info?.avgRating} .{" "}
      </span>
      <span className="font-bold text-sm md:text-xl text-[12px] md:text-[15px] ">
        {item?.info?.sla?.slaString}
      </span>
      <span className="block w-[130px] md:w-[230px] text-[14px] md:text-[16px] text-gray-600 truncate overflow-hidden whitespace-nowrap">
        {item?.info?.cuisines}
      </span>

      <span className="block font-bold overflow-hidden whitespace-nowrap truncate text-[14px] text-gray-500">
        {item?.info?.areaName}
      </span>
    </div>
  ))}
</div>
</div>
  
)}




    </>
  );
};

export default ResturantSection;
