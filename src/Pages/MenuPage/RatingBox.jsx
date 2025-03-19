import React from "react";

const RatingBox = (e) => {
  const RatingData = e.data;
  return (
    <div className="md:px-[330px] px-[3px]">
      <div className="border-b pb-4 mb-4">
        <span className="text-gray-600  py-[5px] mb-[40px] ">
          <span>Home / </span>
          <span> {RatingData?.city} / </span>
          <span> {RatingData?.name} </span>
        </span>
        <h1 className="md:text-2xl text-xl font-bold text-red-800 pt-[30px] px-[5px] ">
          {RatingData?.name}
        </h1>
      </div>

      <div className="bg-gradient-to-t from-slate-300 to-transparent h-full w-full rounded-3xl px-[15px] pb-[18px]">
        <div className="mt-2 bg-white border border-black h-[165px] rounded-3xl p-[20px] md:w-full ">
          <i className="fa-regular fa-star text-green-600 pr-2"></i>
          <span className="text-gray-700 font-bold">
            {RatingData?.avgRatingString} ({RatingData?.totalRatingsString}) ·{" "}
          </span>
          <span className="text-gray-700 font-bold">
            {" "}
            {RatingData?.costForTwoMessage}
          </span>

          <h3 className="text-red-500 font-bold"> {RatingData?.cuisines} </h3>

          <div className="flex flex-col bg-transparent rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <i className="fas fa-store text-green-500"></i>
              <span className="font-bold">Outlet</span>{" "}
              <span>{RatingData?.areaName}</span>
            </div>

            <div className="flex pl-[2px] items-center space-x-2">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              <span className="font-bold">
                {RatingData?.sla?.slaString
                  ? RatingData.sla.slaString
                  : RatingData?.sla?.serviceability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBox;
