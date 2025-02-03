import { createContext, useState, useEffect } from "react";

// Create the Context
export const ResContext = createContext();

// Create the Provider Component
export const ResProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [resturantData, setResturantData] = useState([]);
  const [lat, setLat] = useState("20.2961");
  const [lng, setLng] = useState("85.8245");
  const [city, setCity] = useState("Bhubaneswar");

  // Fetch Data
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
          )
      );

      console.log("Fetching Restaurant Data...");
      const result = await response.json();
      const parseData = JSON.parse(result.contents);

      setMenuData(
        parseData?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
      );
      setResturantData(
        parseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Fetch data on mount & when lat/lng change
  useEffect(() => {
    fetchData();
  }, [lat, lng]);

  return (
    <ResContext.Provider
      value={{
        menuData,
        resturantData,
        lat,
        lng,
        setLat,
        setLng,
        city,
        setCity,
      }}
    >
      {children}
    </ResContext.Provider>
  );
};
