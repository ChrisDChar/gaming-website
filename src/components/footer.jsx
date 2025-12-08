import React from "react";
import facebook from "../assets/HomeIcons/facebook.png";
import instagram from "../assets/HomeIcons/instagram.png";
import twitter from "../assets/HomeIcons/twitter.png";
import linkedin from "../assets/HomeIcons/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="font-poppins font-extrabold text-[24px] leading-[153%] text-black">
            LOGO
          </h2>

          <p className="mt-4 font-poppins text-[16px] leading-[100%] text-black max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p className="mt-4 font-poppins text-[16px] leading-[100%] text-black">
            @Lorem
          </p>
        </div>

        <div>
          <h3 className="font-poppins font-medium text-[17px] leading-[100%] text-black">
            About us
          </h3>

          <ul className="mt-4">
            {["Zeux", "Portfolio", "Careers", "Contact us"].map((item) => (
              <li
                key={item}
                className="font-poppins text-[16px] leading-[186%] text-black cursor-pointer hover:opacity-70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-poppins font-medium text-[17px] leading-[100%] text-black">
            Contact us
          </h3>

          <p className="mt-4 font-poppins text-[16px] leading-[175%] text-black max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p className="mt-4 font-poppins text-[16px] leading-[100%] text-black">
            +908 89097 890
          </p>
        </div>

        <div className="flex flex-col justify-end h-full md:items-end">
          <div className="flex gap-1">
            {[facebook, instagram, twitter, linkedin].map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="social icon"
                className="w-15 h-15 cursor-pointer hover:opacity-70 transition"
              />
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 py-4">
        <p className="text-center font-poppins text-[14px] text-black">
          Copyright © 2022 prodesigner All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;