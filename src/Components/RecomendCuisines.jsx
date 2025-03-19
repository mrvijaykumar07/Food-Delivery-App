import React from 'react'

const RecomendCuisines = () => {


    const restaurants = [
        "Chinese Restaurant Near Me",
        "South Indian Restaurant Near Me",
        "Indian Restaurant Near Me",
        "Kerala Restaurant Near Me",
        "Korean Restaurant Near Me",
        "North Indian Restaurant Near Me",
        "Seafood Restaurant Near Me",
        "Bengali Restaurant Near Me",
        "Punjabi Restaurant Near Me",
        "Italian Restaurant Near Me",
        "Andhra Restaurant Near Me",
        "Show More"
      ];
      
  return (
    <>
         
    
    <div className="md:px-[160px] px-[14px] mt-[30px] md:mt-[60px] md:pb-[20px] ">

    <span className="font-bold block text-[18px] md:text-[25px] pl-4 md:pl-[30px] py-[10px]">
    Best Cuisines Near Me
        </span>

      {/* Grid Layout */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
        {restaurants.map((cuisines, index) => (
          <div key={index} className="border border-gray-300 p-4 text-center font-semibold text-gray-700 rounded-lg md:text-[15px] text-[12px] ">
       
            {cuisines}
          </div>
        ))}
      </div>


    </div>
    </>
  )
}

export default RecomendCuisines
