import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-[600px] bg-slate-400 px-[230px] ">
        {/* ----------------------------Store Link ------------------------------ */}
        <div className=" flex  gap-5 bg-transparent items-center ">
          <span className="text-black text-[25px] font-bold  bg-transparent   ">
            For better experience,download the Swiggy app now
          </span>
          <img
            className="w-[200px]  bg-transparent  "
            src="public/images/Footer/play_store.avif"
            alt="Play Store"
          />
          <img
            className="w-[200px]  bg-transparent  "
            src="public/images/Footer/app_store.avif"
            alt=" App Store"
          />
        </div>
        {/* ----------------------------Store Link end ------------------------------ */}

        {/* ----------------------------Other grid Links  Footer section ------------------------------ */}

        <div className="flex   ">
          {/* --------------------Left Side----------------------- */}
          <div>
            <img
              className=" bg-transparent w-[180px] "
              src="public/images/swiggy_logo.svg"
              alt="Swiggy Logo"
            />
            <span className="pl-[10px]">@ 2025 swiggy Limited</span>
          </div>

          {/* --------------------Right Side----------------------- */}
          <div>Right side</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
