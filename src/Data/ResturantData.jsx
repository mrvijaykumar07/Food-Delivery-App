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

const [pData,setpData]=useState([])
  // Fetch Data
  async function fetchData(lat, lng) {
    try {
      console.log("Fetching data for lat:", lat, "lng:", lng);
      // const response = await fetch(
      //   "https://api.allorigins.win/get?url=" +
      //     encodeURIComponent(
      //       `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&_=${Date.now()}`
      //     )
      // );





// const response = await fetch(
//   `https://thingproxy.freeboard.io/fetch/` +
//   `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&_=${Date.now()}`
// );



// const response = await fetch(
//   "https://api.allorigins.win/get?url=" +
//   encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2961&lng=85.8245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// );




// const response = await fetch(`http://localhost:5000/api/swiggy?lat=${lat}&lng=${lng}`);


const response = await fetch(`https://swiggy-backend-ubne.onrender.com/api/swiggy?lat=${lat}&lng=${lng}`);




      if (!response.ok) throw new Error("Network response was not ok");

      console.log("Fetching Restaurant Data...");
      // const result = await response.json();

      // const parseData = JSON.parse(result.contents);

      const parseData = await response.json();


      console.log("Parsed Data:", parseData);

      setMenuData(
        parseData?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
      );


      setResturantData(
        parseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

setpData(
   parseData?.data?.cards[0]?.card?.card?.title || []
      );

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Fetch data on mount & when lat/lng change
  useEffect(() => {
    fetchData(lat, lng);
  }, [lat, lng]);

  useEffect(() => {
    console.log("Updated restaurant data:", resturantData);
    console.log("Updated menu data:", menuData);
  }, [resturantData, menuData]);

  return (
    <ResContext.Provider
      value={{
        pData,
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
