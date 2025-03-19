import React from "react";

const Footer = () => {
  return (
    <>
    <br />
      <div className=" w-full h-[600px] bg-slate-100 md:px-[230px] px-[10px] pt-[12px] md:pt-[20px] ">
        {/* ----------------------------Store Link ------------------------------ */}
        <div className=" flex md:flex-row  flex-col gap-5 bg-transparent items-center ">

          <span className="text-black md:text-[22px] text-[12px] font-bold  bg-transparent   ">
            For better experience,download the Swiggy app now
          </span>
<div className="flex" >
          <img
            className="md:w-[150px] w-[100px] bg-transparent block md:inline "
            src="public/images/Footer/play_store.avif"
            alt="Play Store"
          />

          <img
            className="md:w-[150px] w-[100px] bg-transparent  "
            src="public/images/Footer/app_store.avif"
            alt=" App Store"
          />
</div>

        </div>
        {/* ----------------------------Store Link end ------------------------------ */}

        {/* ----------------------------Other grid Links  Footer section ------------------------------ */}

<div className="md:pt-[20px]  " >
        <div className="flex md:flex-row flex-col  ">
          {/* --------------------Left Side----------------------- */}
          <div>
            <img
              className=" bg-transparent w-[180px] "
              src="public/images/NewLOgo-tb.png"
              alt="Swiggy Logo"
            />
            <span className="pl-[10px]">@ 2025 Vijay Kumar</span>
          </div>

          {/* --------------------Right Side----------------------- */}
          


          <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-800 px-[15px]">
        
        {/* Column 1 - Company */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>

        {/* Column 2 - Contact Us & Legal */}
        <div>
          {/* Contact Us Section */}
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>7854001224</li>
          </ul>

          {/* Legal Section */}
          <h3 className="font-bold text-lg mt-5 mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
            <li>Life at Swiggy</li>
          </ul>
        </div>

        {/* Column 3 - Explore with Swiggy */}
        <div>
          <h3 className="font-bold text-lg mb-3">Explore with Swiggy</h3>
          <ul className="space-y-2">
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>

        {/* Column 4 - Available in & Cities */}
        <div>
          {/* Available In Section */}
          <h3 className="font-bold text-lg mb-3">Available in:</h3>
          <ul className="space-y-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          {/* Cities Count */}
          <h3 className="font-bold text-lg mt-5 mb-3">Total Cities</h3>
          <p>679 cities</p>
        </div>
      </div>
    </div>







    </div>



        </div>
      </div>
    </>
  );
};

export default Footer;
