// OurTeam.jsx
import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

export default function OurTeam() {
  const teamMembers = [
    { id: 1, name: "John Peter", role: "COO", img: team1 },
    { id: 2, name: "Jane Doe", role: "Marketing Manager", img: team2 },
    { id: 3, name: "Alex Smith", role: "Lead Designer", img: team3 },
    { id: 4, name: "Emily Johnson", role: "Developer", img: team4 },
  ];

  return (
    <section className="py-20 bg-[#07042B]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Bizning Jamoa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
