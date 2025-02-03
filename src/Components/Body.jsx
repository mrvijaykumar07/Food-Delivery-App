import { useContext } from "react";
import React from "react";
import MenuSection from "./MenuSection";
import { ResContext } from "../Data/ResturantData";

import OnlineRestaurant from "./OnlineResturant";
import ResturantSection from "./ResturantSection";

const Body = () => {
  const { menuData, resturantData, city } = useContext(ResContext);

  return (
    <div>
      <MenuSection data={menuData} />
      <ResturantSection data={[resturantData, city]} />
      <OnlineRestaurant data={[resturantData, city]} />
    </div>
  );
};

export default Body;
