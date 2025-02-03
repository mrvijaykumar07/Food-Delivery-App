// import React, { useState } from 'react';

// const MenuPage = (e) => {

//   const RatingData= e.data;
// // console.log("This is Resturant Data",ResturantData)

//   const topPicksData = [
//     { id: 1, name: 'Veggie Delight', image: 'image_url_1', price: 200 },
//     { id: 2, name: 'Chicken Supreme', image: 'image_url_2', price: 350 },
//     { id: 3, name: 'Paneer Tikka', image: 'image_url_3', price: 300 },
//     { id: 4, name: 'Classic Margherita', image: 'image_url_4', price: 250 },
//     { id: 5, name: 'Double Cheese Pizza', image: 'image_url_5', price: 320 },
//   ];

//   const dealsData = [
//     { id: 1, name: 'Family Combo', image: 'image_url_6', price: 700 },
//     { id: 2, name: 'Weekend Feast', image: 'image_url_7', price: 850 },
//     { id: 3, name: 'Party Pack', image: 'image_url_8', price: 900 },
//     { id: 4, name: 'Budget Saver', image: 'image_url_9', price: 500 },
//     { id: 5, name: 'Quick Bites', image: 'image_url_10', price: 350 },
//   ];
//  const Recomended=[1,2,3,4,5,6,7,8,9,10];

//   const [topPicksScroll, setTopPicksScroll] = useState(0);
//   const [dealsScroll, setDealsScroll] = useState(0);

//   const scrollLeft = (setScrollPosition) => {
//     setScrollPosition((prev) => Math.min(prev + 300, 0));
//   };

//   const scrollRight = (setScrollPosition, dataLength) => {
//     const maxScroll = -(dataLength * 160 - window.innerWidth);
//     setScrollPosition((prev) => Math.max(prev - 300, maxScroll));
//   };

//   return (
//     <div className="px-[330px]">

//       {/* Top Picks Section */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Top Picks</h2>
//           <div className="p-[5px]">
//           <i
//             className="fa fa-arrow-left bg-slate-300 text-black rounded-full text-[20px] p-[10px] cursor-pointer"
//             onClick={() => scrollLeft(setDealsScroll)}
//           ></i>
//           <i
//             className="fa fa-arrow-right bg-slate-300 text-black rounded-full text-[20px] p-[10px] m-[5px] cursor-pointer"
//             onClick={() => scrollRight(setDealsScroll, dealsData.length)}
//           ></i>
//         </div>
//         </div>
//         <div className="overflow-x-hidden">
//           <div
//             className="flex space-x-4 transition-transform duration-300"
//             style={{ transform: `translateX(${topPicksScroll}px)` }}
//           >
//             {topPicksData.map((item) => (
//               <div key={item.id} className="flex-shrink-0 w-40">
//                 <div className="border border-blue-500 w-full h-40 bg-gray-200"></div>
//                 <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">₹{item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
// {/* ----------------------------------------------------MENU---------------------------------------------------------- */}

// {/* --------------------------------------Recomended Section------------------------------------------ */}

// <h2 className=" font-bold text-[20px]  " >Recomended (10)</h2>

// {
// Recomended.map((item)=>(

//   <div  key={item} className="flex  "  >
//           {/* ---------------------left side info--------- */}
//           <div  className='my-[40px]' >

//           <img className=" w-[40px] "  src="/public/images/veg.jpeg" alt="" />

//           <h3>Combo for 1 Veg</h3>

//           <h3>rs 359</h3>

//           <span>
//             <i className="fa-regular fa-star text-green-600 pr-2"></i>
//           Rating 3.9
//           <span> (32)</span>
//           </span>

//           <span>Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Veg Gravy, Veg Momos & Drinks)</span>

//           </div>

//           {/* ----image------- */}
//           <div className='' >

//           <img className=" w-[180px] "  src="/images/veg.jpeg" alt="" />
//           <button className=" block bg-white text-green-500 font-bold border rounded-lg px-[20px] py-[5px]"  >ADD</button>
//           <span >Customisable</span>

//            </div>
// </div>
// ))
// };

//     </div>
//   );
// };

// export default MenuPage;
