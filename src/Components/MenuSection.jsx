import React, { useEffect, useState } from "react";

const MenuSection = (e) => {
  const data = e.data;

  const [tValue, setValue] = useState(0);

  
  const moveLeft = () => {
    setValue((prev) => Math.min(prev + 300, 0)); 
  };

  const moveRight = () => {
    const maxTranslate = -(data.length * 140 - 300 * 3);
    setValue((prev) => Math.max(prev - 300, maxTranslate));
  };

  return (
    <>
     
      <div className="md:px-[160px] border mt-[30px] md:mt-[50px] flex flex-row justify-between">

        <span className="font-bold md:text-[24px] pl-4 pb-4 ">
          What's on Your Mind?
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

      {/* Scrollable Image Row */}
      <div className="overflow-hidden  md:mx-[200px] no-scrollbar">


        <div
          className="flex space-x-6"
          style={{
            transform: `translateX(${tValue}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {data.map((item, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer">
              <img
                className="md:w-[140px] w-[20vw] rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                alt={`Menu item ${index + 1}`}
              />
            </div>
          ))}

        </div>



 
        <div
          className="flex md:hidden space-x-6"
          style={{
            transform: `translateX(${tValue}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {data.slice().reverse().map((item, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer">
              <img
                className="md:w-[140px] w-[20vw] rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                alt={`Menu item ${index + 1}`}
              />
            </div>
          ))}

        </div>



      </div>
    </>
  );
};

export default MenuSection;
