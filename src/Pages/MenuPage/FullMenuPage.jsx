import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RatingBox from "./RatingBox";
import DealsSection from "./DealsSection";
import AllItems from "./AllItems";
import { ResContext } from "../../Data/ResturantData";
import FooAppLink from "./FooAppLink";

const FullMenuPage = () => {
  const { id } = useParams();
  const [dealsData, setDealsData] = useState([]);
  const [ratingData, setRatingData] = useState([]);
  const [allItemsData, SetAllItemsData] = useState([]);

  const { lat, lng } = useContext(ResContext);
  // Fetch Data
  async function fetchMenuData() {
    if (id) {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        )}`
      );



      const result = await response.json();
      const parseData = JSON.parse(result.contents);

      console.log("All Data", parseData?.data?.cards);

      setRatingData(parseData?.data?.cards[2]?.card?.card?.info);

      setDealsData(
        parseData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.offers
      );

      let actualData =
        (parseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
          (data) => data?.card?.card?.itemCards
        );
     

      SetAllItemsData(actualData);
    }
  }

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div>
      <RatingBox data={ratingData} />
      <DealsSection data={dealsData} />
      <AllItems data={allItemsData} />
      <FooAppLink />
    </div>
  );
};

export default FullMenuPage;
