import React from 'react';

const RecomendResturant = () => {
  const restaurants = [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
    "Show More"
  ];

  return (

    <>
         
    
         <div className="md:px-[160px] px-[14px] mt-[30px] md:mt-[60px] md:pb-[20px] ">

    <span className="font-bold block text-[18px] md:text-[25px] pl-4 md:pl-[30px] py-[10px]">
    Best Places to Eat Across Cities
        </span>

      {/* Grid Layout */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
        {restaurants.map((city, index) => (
          <div key={index} className="border border-gray-300 p-4 text-center font-semibold rounded-lg md:text-[15px] text-gray-600 text-[12px] ">

            {city}
          </div>
        ))}
      </div>


    </div>
    </>
  );
};

export default RecomendResturant;
