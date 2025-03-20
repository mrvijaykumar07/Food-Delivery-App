import React, { useEffect, useState } from "react";

const MenuSection = (e) => {
  const data = e.data;
  console.log("Data menu", data);
  const loading = data.length;
  console.log(loading);

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
        <span className="font-bold md:text-[23px] pl-4 pb-4 ">
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

      {loading == 0 ? (
        <div className="flex flex-col items-center justify-center md:px-[200px]">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
          <h1 className="mt-4 text-lg font-semibold text-gray-700">
            Fetching Data...
          </h1>
        </div>
      ) : (
        <div>
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
              {data
                .slice()
                .reverse()
                .map((item, index) => (
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
        </div>
      )}
    </>
  );
};

export default MenuSection;
