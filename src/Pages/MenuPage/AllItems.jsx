import React, { useState } from "react";

const AllItems = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track open items

  const toggleFun = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the specific index
  };

  return (
    <div className="md:px-[330px]">
      {data.map((item, index) => {
        const innerArray = item?.card?.card?.itemCards || [];

        return (
          <div key={index}>
            {/* Header with Toggle Icon */}
            <div className="flex justify-between">
              <h2 className="font-bold md:text-[20px] text-[17x] px-[12px] ">
                {item.card.card.title} ({innerArray.length})
              </h2>
              <i
                className={`fa-solid  px-[10px] ${
                  openIndex === index ? "fa-angle-up" : "fa-angle-down"
                } pt-[5px] cursor-pointer`}
                onClick={() => toggleFun(index)}
              ></i>
            </div>

            {/* Inner Items List */}
            {openIndex === index && (
              <div>
                {innerArray.map((e, i) => (
                  <div key={i}>
                    <div className="flex my-[40px] justify-between px-[10px] ">
                      <div>
                        <img
                          className="w-[40px]"
                          src="/public/images/veg.jpeg"
                          alt="Veg"
                        />

                        <h3 className=" font-bold md:text-[20px] text-[15px] max-w-[200px] overflow-hidden whitespace-nowrap truncate">
                          {e.card.info.name}
                        </h3>
                        <h3 className="font-bold pb-[10px]">
                          &#8377;{" "}
                          {(
                            Number(
                              e.card.info?.price ||
                                e.card.info?.variantsV2?.pricingModels[0]
                                  ?.price ||
                                0
                            ) / 100
                          ).toLocaleString("en-IN", {
                            style: "decimal",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </h3>

                        <span>
                          <i className="fa-regular fa-star text-green-600 pr-[2px]"></i>
                          <span className="text-green-600 font-bold">
                            {" "}
                            {e.card.info?.ratings?.aggregatedRating?.rating ||
                              "N/A"}{" "}
                          </span>

                          <span>
                            {" "}
                            (
                            {
                              e.card.info?.ratings?.aggregatedRating
                                ?.ratingCountV2
                            }{" "}
                            )
                          </span>
                        </span>
                        <span
  style={{
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
  className="block text-[14px] md:max-w-[700px] max-w-[180px]  "
>
  {e.card.info?.description}
</span>




                      </div>

                      <div className="relative">
                        <img
                          className="w-[140px] rounded-3xl   "
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${
                            e.card.info?.imageId || "default_image.jpg"
                          }`}
                          alt="Food"
                        />

                        <button className="block bg-white text-green-500 font-bold border rounded-lg px-[20px] py-[5px] ml-[35px] absolute bottom-7 md:bottom-11 md:right-5 ">
                          ADD
                        </button>

                        <span className="mt-[30px] ml-[35px] absolute text-[12px] bottom-2  md:bottom-7 md:right-4 ">
                          Customisable
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Separator */}
            <div className="w-full h-[15px] bg-slate-200"></div>
          </div>
        );
      })}
    </div>
  );
};

export default AllItems;
