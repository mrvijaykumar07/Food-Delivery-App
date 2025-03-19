import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ResContext } from "../Data/ResturantData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar toggle state
  const [latLongData, setLatLongData] = useState([]);
  const { setCity } = useContext(ResContext);

  useEffect(() => {
    if (latLongData.length > 0) {
      setCity(latLongData[0].address_components[0].long_name);
    }
  }, [latLongData]);

  const Links = [
    { icon: "fa-magnifying-glass", label: "Search" },
    { icon: "fa-gift", label: "Offers" },
    { icon: "fa-handshake-angle", label: "Help" },
    { icon: "fa-user", label: "Signin" },
    { icon: "fa-cart-shopping", label: "Cart" },
  ];

  return (
    <>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[60vw] sm:w-[40vw] bg-white shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        
        <div className="flex flex-col items-start p-6 mt-12 space-y-4">
          {Links.map((item, index) => (
            <Link key={index} to={"/"} className="text-lg font-semibold flex items-center space-x-2">
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full px-[2vw] md:px-[5vw] h-[8vh] bg-white shadow-md flex justify-between items-center">
        {/* Left Side - Location (Hidden on Mobile) */}
        <div className="flex items-center space-x-3">
          <img className="w-[3vw] md:w-[2vw]" src="/images/location.png" alt="Location" />
          <div className="flex flex-col leading-tight">
            <span className="text-[2vw] md:text-[1.5vw] font-semibold">Others</span>
            <span className="text-gray-500 text-[1.5vw] md:text-[1vw]">
              {latLongData.length > 0 ? latLongData[0].formatted_address : "Bhubaneswar, Odisha"}
            </span>
          </div>
        </div>

        {/* Right Side - Full Menu on Desktop, Only Sign Up Icon on Mobile */}
        <div className="hidden md:flex flex-row gap-7 list-none p-[1vw] items-center">
          {Links.map((item, index) => (
            <li
              key={index}
              className="group flex items-center space-x-2 cursor-pointer text-black"
            >
              <i className={`fa-solid ${item.icon} group-hover:text-orange-400`}></i>
              <span className="group-hover:text-orange-400">{item.label}</span>
            </li>
          ))}
        </div>

        {/* Mobile View - Only Sign Up Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(true)} className="text-black">
            <i className="fa-solid fa-user text-[3vw] md:text-[1.5vw] hover:text-orange-400"></i>
          </button>
        </div>
      </div>

      {/* Outlet for Nested Routes */}
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
