import React from "react";
import { useState } from "react";
const DealsSection = (e) => {
  const DealData = e.data;

  const dealsData = [
    { id: 1, name: "Family Combo", image: "image_url_6", price: 700 },
    { id: 2, name: "Weekend Feast", image: "image_url_7", price: 850 },
    { id: 3, name: "Party Pack", image: "image_url_8", price: 900 },
    { id: 4, name: "Budget Saver", image: "image_url_9", price: 500 },
    { id: 5, name: "Quick Bites", image: "image_url_10", price: 350 },
  ];

  const [dealsScroll, setDealsScroll] = useState(0);

  const scrollLeft = (setScrollPosition) => {
    setScrollPosition((prev) => Math.min(prev + 300, 0));
  };

  const scrollRight = (setScrollPosition, dataLength) => {
    const maxScroll = -(dataLength * 160 - window.innerWidth);
    setScrollPosition((prev) => Math.max(prev - 300, maxScroll));
  };

  return (
    <div className="px-[330px]">
      <div className="mb-8 ">
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-2xl font-bold">Deals for You</h2>

          <div className="p-[5px]">
            <i
              className="fa fa-arrow-left bg-slate-300 text-black rounded-full text-[20px] p-[10px] cursor-pointer"
              onClick={() => scrollLeft(setDealsScroll)}
            ></i>
            <i
              className="fa fa-arrow-right bg-slate-300 text-black rounded-full text-[20px] p-[10px] m-[5px] cursor-pointer"
              onClick={() => scrollRight(setDealsScroll, dealsData.length)}
            ></i>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <div
            className="flex space-x-4 transition-transform duration-300 mx-[20px] "
            style={{ transform: `translateX(${dealsScroll}px)` }}
          >
            {DealData.map((item, index) => (
              <div key={item.index} className=" ">
                <div className="border border-red-500 flex flex-row w-[350px] h-[80px] rounded-3xl p-[5px]  ">
                  <div>
                    <img
                      className="w-[50px]"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item?.info?.offerLogo}`}
                      alt=""
                    />
                  </div>

                  <div>
                    <span className="block font-bold text-[20px]  ">
                      {item?.info?.header}
                    </span>
                    <span className="block uppercase text-gray-700 font-bold ">
                      {item?.info?.couponCode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------Menu & Search----------------------------------------------- */}
      <h3 className=" w-full font-bold text-center "> - MENU - </h3>

      <div className="flex items-center justify-center mt-6">
        <div className="relative w-full border rounded-xl bg-slate-100 text-black flex h-[50px]">
          <input
            type="text"
            placeholder="Search for Dishes"
            className="w-full px-4 py-2 pl-10 text-center font-bold text-black text-[15px] placeholder:text-black focus:outline-none shadow-sm"
          />
          <i className="fa-solid inline fa-magnifying-glass p-[10px]"></i>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
