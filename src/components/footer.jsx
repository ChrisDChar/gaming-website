import React from "react";
import facebook from "../assets/HomeIcons/facebook.png";
import instagram from "../assets/HomeIcons/instagram.png";
import twitter from "../assets/HomeIcons/twitter.png";
import linkedin from "../assets/HomeIcons/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-black">LOGO</h2>
          <p className="mt-4 text-sm md:text-base text-black max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mt-2 text-sm text-black">@Lorem</p>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-medium text-black">About us</h3>
          <ul className="mt-2 space-y-1">
            {["Zeux", "Portfolio", "Careers", "Contact us"].map((item) => (
              <li key={item} className="text-sm md:text-base text-black hover:opacity-70 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-medium text-black">Contact us</h3>
          <p className="mt-2 text-sm md:text-base text-black max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mt-2 text-sm text-black">+908 89097 890</p>
        </div>

        <div className="flex flex-col md:items-end justify-start md:justify-end gap-2 mt-4 md:mt-0">
          <div className="flex gap-2">
            {[facebook, instagram, twitter, linkedin].map((icon, i) => (
              <img key={i} src={icon} alt="social icon" className="w-15 h-15 cursor-pointer hover:opacity-70 transition" />
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 py-4">
        <p className="text-center text-xs md:text-sm text-black">
          Copyright © 2022 prodesigner All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
