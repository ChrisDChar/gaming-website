import React from "react";

import homePubg from "../../assets/HomeIcons/home-pubg.png";

import homeMgd from "../../assets/HomeIcons/home-mgd.png";
import homePcgd from "../../assets/HomeIcons/home-pcgd.png";
import homePs4gd from "../../assets/HomeIcons/home-ps4gd.png";
import homeArvrs from "../../assets/HomeIcons/home-arvrs.png";
import homeArvrd from "../../assets/HomeIcons/home-arvrd.png";
import home3dm from "../../assets/HomeIcons/home-3dm.png";

import homeArrow from "../../assets/HomeIcons/home-arrow.png";

export default function HomeServices() {
  const services = [
    { id: 1, name: "Mobile Game Development", icon: homeMgd },
    { id: 2, name: "PC Game Development", icon: homePcgd },
    { id: 3, name: "PS4 Game Development", icon: homePs4gd },
    { id: 4, name: "AR/VR Solutions", icon: homeArvrs },
    { id: 5, name: "AR/VR design", icon: homeArvrd },
    { id: 6, name: "3D Modelings", icon: home3dm }
  ];

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-40"
      style={{ backgroundImage: `url(${homePubg})` }}
    >
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-white font-bold text-[30px] leading-[1.88] text-center">
          Lorem Ipsum is simply dummy text of the printing
          <br />
          and typesetting industry.
        </h2>

        <p className="text-white text-[16px] font-normal leading-[1.88] text-center max-w-2xl mx-auto mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s,
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mt-20 items-center">
          {services.map(service => (
            <div key={service.id} className="flex flex-col items-center mx-auto">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
                <img src={service.icon} alt={service.name} className="w-[35px] h-[35px]" />
              </div>

              <p className="text-white mt-4 font-normal text-[16px] leading-[1.88] text-center">
                {service.name}
              </p>

              <img
                src={homeArrow}
                alt="arrow"
                className="w-[18px] mt-2"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}