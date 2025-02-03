import React, { useEffect, useState } from "react";

const MenuSection = (e) => {
  const data = e.data;

  const [tValue, setValue] = useState(0);

  // Handlers for navigation
  const moveLeft = () => {
    setValue((prev) => Math.min(prev + 300, 0)); // Prevent moving left beyond 0
  };

  const moveRight = () => {
    const maxTranslate = -(data.length * 140 - 300 * 3); // Use data.length
    setValue((prev) => Math.max(prev - 300, maxTranslate));
  };

  return (
    <>
      <div className="pt-[10px] mx-[150px] flex flex-row justify-between">
        <span className="font-bold text-[24px] pl-[50px]">
          What's on Your Mind?
        </span>
        <div className="p-[10px] pr-[50px]">
          <i
            className="fa fa-arrow-left bg-slate-300 text-black rounded-full text-[20px] p-[10px] cursor-pointer"
            onClick={moveLeft}
          ></i>
          <i
            className="fa fa-arrow-right bg-slate-300 text-black rounded-full text-[20px] p-[10px] m-[5px] cursor-pointer"
            onClick={moveRight}
          ></i>
        </div>
      </div>

      {/* Scrollable Image Row */}
      <div className="overflow-hidden  mx-[200px] no-scrollbar">
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
                className="w-[140px] rounded-lg"
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
