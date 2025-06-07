import { useContext } from "react";
import React from "react";
import MenuSection from "./MenuSection";
import { ResContext } from "../Data/ResturantData";

import OnlineRestaurant from "./OnlineResturant";
import ResturantSection from "./ResturantSection";
import RecomendResturant from "./RecomendResturant";
import RecomendCuisines from "./RecomendCuisines";
import Footer from "./Footer";

const Body = () => {
  const { menuData, resturantData, city ,pData } = useContext(ResContext);
  return (
    <div>
      <MenuSection data={menuData} />

       <ResturantSection data={[resturantData, city]} />
      <OnlineRestaurant data={[resturantData, city, pData ]} /> 
      <RecomendResturant/>
      <RecomendCuisines/>
      <Footer/>
    </div>
  );
};

export default Body;
