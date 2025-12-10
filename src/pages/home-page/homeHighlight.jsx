import React from "react";
import homeCodm from "../../assets/HomeIcons/home-codm.png";
import homeDots from "../../assets/HomeIcons/home-dots.png";

export default function HomeHighlight() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-white font-semibold text-[30px] leading-[1.88]">
          Lorem Ipsum
        </h2>

        <p className="text-white font-normal text-[16px] leading-[1.88] max-w-2xl mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s,
        </p>

        <div className="relative mt-10">
          <img
            src={homeCodm}
            alt="cod mobile"
            className="w-[1150px] h-[470px] object-cover rounded-[10px]"
          />

          <img
            src={homeDots}
            alt="dots"
            className="hidden lg:block absolute -top-[55px] right-35 w-[150px]"
          />
        </div>

      </div>
    </section>
  );
}