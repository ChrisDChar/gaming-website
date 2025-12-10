import React from "react";
import homeFortnite from "../../assets/HomeIcons/home-fortnite.png";
import homeCod from "../../assets/HomeIcons/home-cod.png";
import homeSekiro from "../../assets/HomeIcons/home-sekiro.png";
import homeTrending4 from "../../assets/HomeIcons/home-trending4.png";
import homeFire from "../../assets/HomeIcons/home-fire.png";

const games = [
  { id: 1, img: homeCod },
  { id: 2, img: homeSekiro },
  { id: 3, img: homeFortnite },
  { id: 4, img: homeTrending4 }
];

export default function HomeTrending() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white font-bold text-[30px] leading-[1.88]">
            Currently Trending Games
          </h2>

          <button
            className="w-[190px] h-[50px] bg-[#FFFFFF1C] text-white
                       rounded-[10px] font-medium text-[20px]
                       leading-[1.88] hover:opacity-80 transition cursor-pointer"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game.id} className="flex flex-col items-center">
              <img
                src={game.img}
                alt="trending game"
                className="w-[250px] h-[275px] object-cover rounded-[20px]"
              />

              <div className="flex items-center gap-2 mt-4">
                <img src={homeFire} alt="fire icon" className="w-4 h-5" />
                <p className="text-white text-[20px] font-medium leading-[1.88]">
                  40 Followers
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-white font-medium
                     text-[35px] leading-[1.88] mt-16"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

      </div>
    </section>
  );
}