import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ResContext } from "../Data/ResturantData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [searchEntry, setSearchEntry] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [latLongData, setLatLongData] = useState([]);
  const [placeId, setPlaceId] = useState("");

  const { setCity, setLat, setLng } = useContext(ResContext);

  const toggleChange = () => {
    setToggle(!toggle);
  };

  const Links = [
    { icon: "fa-magnifying-glass", label: "Search" },
    { icon: "fa-gift", label: "Offers" },
    { icon: "fa-handshake-angle", label: "Help" },
    { icon: "fa-user", label: "Signin" },
    { icon: "fa-cart-shopping", label: "Cart" },
  ];

  // Fetch Search Results
  async function searchResult() {
    const searchResponse = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchEntry}`
        )
    );
    const data = await searchResponse.json();
    const parseSearchData = JSON.parse(data.contents);
    setSearchData(parseSearchData.data);
    console.log(parseSearchData.data);
  }

  // Fetch Latitude & Longitude
  async function getLatAndLong() {
    if (!placeId) return;

    const searchResponse = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`
        )
    );
    const LatLongdata = await searchResponse.json();
    const parseLatLongData = JSON.parse(LatLongdata.contents);
    setLatLongData(parseLatLongData.data);

    console.log("latLongData", parseLatLongData.data);
    setLat(latLongData[0].geometry.location.lat);
    setLng(latLongData[0].geometry.location.lng);
  }

  useEffect(() => {
    if (latLongData.length > 0) {
      setCity(latLongData[0].address_components[0].long_name);
    }
  }, [latLongData]);

  // Fetch search results when searchEntry changes
  useEffect(() => {
    if (searchEntry) {
      searchResult();
    }
  }, [searchEntry]);

  // Fetch lat/lng when placeId updates
  useEffect(() => {
    getLatAndLong();
  }, [placeId]);

  return (
    <>
      {/* Overlay and Sidebar */}
      <div
        className="black-overlay w-full h-full z-10 fixed top-0 left-0 bg-black bg-opacity-50 duration-500"
        onClick={toggleChange}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          pointerEvents: toggle ? "auto" : "none",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[500px] h-full duration-500 absolute top-0"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="pt-[100px] flex flex-col z-20">
            <div className="pl-[80px] mx-[30px] py-[7px] my-[4px] border-2 border-black font-bold text-[20px]">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e) => setSearchEntry(e.target.value)}
                  className="w-full py-[10px] pl-[10px] pr-[40px] border-none outline-none"
                  placeholder="Search..."
                />
                <i className="fa-solid fa-magnifying-glass absolute top-[50%] right-[10px] transform -translate-y-[50%] text-gray-500"></i>
              </div>
            </div>

            <span className="pl-[80px] mx-[30px] py-[7px] my-[3px] border-2 border-black hover:text-orange-600 font-bold text-[20px]">
              Use my Current Location
            </span>

            <div className="border-2 border-black mx-[30px] my-[10px]">
              {searchData.map((data, index) => (
                <div
                  key={index}
                  className="pl-[80px]  "
                  onClick={() => {
                    setPlaceId(data.place_id), toggleChange();
                  }}
                >
                  <span className="block font-bold">
                    {data.structured_formatting.main_text}
                  </span>
                  <span>{data.structured_formatting.secondary_text}</span>
                  <p>---------------------------------------------</p>
                </div>
              ))}
            </div>
            <div className="border border-black w-full"></div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className="navbar w-full px-[150px] h-[80px] bg-white text-black flex flex-row justify-between items-center"
        style={{
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 10,
          position: "relative",
        }}
      >
        {/* Left Section */}
        <div className="p-[15px] flex items-center space-x-5">
          <Link to={"/"}>
            <img className="w-[50px]" src="/images/logo.png" alt="LOGO" />
          </Link>
          <div className="flex items-center space-x-2">
            <img
              className="w-[30px]"
              src="/images/location.png"
              alt="Location"
            />
            <div>
              <span className="text-[20px] font-bold">Others</span>
              <span className="text-slate-400 pl-[3px]">
                {latLongData.length > 0
                  ? latLongData[0].formatted_address
                  : "Bhubaneswar, Odisha, India"}
              </span>
            </div>
            <i
              className="fas fa-angle-down pl-2 text-orange-400 cursor-pointer"
              onClick={toggleChange}
            ></i>
          </div>
        </div>

        {/* Right Section */}
        <ul className="flex flex-row gap-7 list-none p-[20px] items-center">
          {Links.map((item, index) => (
            <li
              key={index}
              className="group flex items-center space-x-2 cursor-pointer text-black"
            >
              <i
                className={`fa-solid ${item.icon} group-hover:text-orange-400`}
              ></i>
              <span className="group-hover:text-orange-400">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Outlet for Nested Routes */}
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
