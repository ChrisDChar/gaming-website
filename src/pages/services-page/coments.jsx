// import React, { useState } from "react";
// import Iii from "../../assets/HomeIcons/avatar1.png"
// import Zzz from "../../assets/HomeIcons/avatar2.png"
// import Aaa from "../../assets/HomeIcons/avatar3.png"
// export default function Comments() {
//   const initialCards = [
//     {
//       name: "Viech Robert",
//       location: "Warsaw, Poland",
//       rating: "4.5 ⭐",
//       text:
//         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//     {
//       name: "Yessica Christy",
//       location: "Shanxi, China",
//       rating: "4.6 ⭐",
//       text: "Lorem ipsum is simply dummy text of the printing and.",
//     },
//     {
//       name: "Kim Young Jou",
//       location: "Seoul, South Korea",
//       rating: "4.6 ⭐",
//       text:
//         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//   ];

//   const [items, setItems] = useState(initialCards);

//   const nextSlide = () => {
//     setItems((prev) => {
//       const first = prev[0];
//       return [...prev.slice(1), first];
//     });
//   };

//   const prevSlide = () => {
//     setItems((prev) => {
//       const last = prev[prev.length - 1];
//       return [last, ...prev.slice(0, prev.length - 1)];
//     });
//   };

//   return (
//     <div className="bg-[#d8d0cc] text-black py-20 px-6 md:px-20 mt-20">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold">Trusted by Thousands of</h2>
//         <h2 className="text-3xl font-bold">Happy Customer</h2>

//         <p className="text-gray-600 max-w-xl mx-auto mt-3">
//           Lorem ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {items.map((card, i) => (
//           <div
//             key={i}
//             className="p-6 rounded-xl bg-white border border-gray-300 hover:bg-[#2b1d0e] hover:text-white"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <img src={Iii} className="w-12 h-12 rounded-full" />
//               <div>
//                 <h3 className="font-semibold">{card.name}</h3>
//                 <p className="text-gray-400 text-sm">{card.location}</p>
//               </div>
//               <span className="ml-auto font-semibold">{card.rating}</span>
//             </div>

//             <p className="text-sm leading-relaxed">{card.text}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center gap-4 mt-5">
//         <button
//           className="w-10 h-10 bg-white hover:bg-red-600 text-red-500 hover:text-white text-xl rounded-full shadow flex items-center justify-center"
//           onClick={prevSlide}
//         >
//           ←
//         </button>

//         <button
//           className="w-10 h-10 bg-white hover:bg-red-600 text-red-500 hover:text-white text-xl rounded-full shadow flex items-center justify-center"
//           onClick={nextSlide}
//         >
//           →
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Iii from "../../assets/HomeIcons/avatar1.png";
import Zzz from "../../assets/HomeIcons/avatar2.png";
import Aaa from "../../assets/HomeIcons/avatar3.png";

export default function Comments() {
  const initialCards = [
    {
      img: Iii,
      name: "Viech Robert",
      location: "Warsaw, Poland",
      rating: "4.5 ⭐",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: Zzz,
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: "4.6 ⭐",
      text: "Lorem ipsum is simply dummy text of the printing and.",
    },
    {
      img: Aaa,
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: "4.6 ⭐",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [items, setItems] = useState(initialCards);

  const nextSlide = () => {
    setItems((prev) => {
      const first = prev[0];
      return [...prev.slice(1), first];
    });
  };

  const prevSlide = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };

  return (
    
        <div className="max-w-[1200px] mx-auto rounded-lg bg-[#d7d0cc] text-black py-20 px-6 md:px-20 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Trusted by Thousands of</h2>
        <h2 className="text-3xl font-bold">Happy Customer</h2>

        <p className="text-gray-600 max-w-xl mx-auto mt-3">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white border border-gray-300 hover:bg-[#2b1d0e] hover:text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={card.img} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold">{card.name}</h3>
                <p className="text-gray-400 text-sm">{card.location}</p>
              </div>
              <span className="ml-auto font-semibold">{card.rating}</span>
            </div>

            <p className="text-sm leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-5">
        <button
          className="w-10 h-10 bg-white hover:bg-red-600 text-red-500 hover:text-white text-xl rounded-full shadow flex items-center justify-center"
          onClick={prevSlide}
        >
          ←
        </button>

        <button
          className="w-10 h-10 bg-white hover:bg-red-600 text-red-500 hover:text-white text-xl rounded-full shadow flex items-center justify-center"
          onClick={nextSlide}
        >
          →
        </button>
      </div>
    </div>
  );
}
