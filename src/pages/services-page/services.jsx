import Coments from "./coments";
import Nnn from "../../assets/HomeIcons/services.png"
import Mmm from "../../assets/HomeIcons/services2.png"
import Bbb from "../../assets/HomeIcons/services3.png"
import Sss from "../../assets/HomeIcons/services4.png"
export default function Services() {
  return (
    <div className="w-full min-h-screen bg-[#070021] text-white px-6 md:px-20 py-10">
      <div className="max-w-[1200px] mx-auto text-sm text-gray-300 flex gap-2 mb-6">
        <span>Home</span>
        <span className="text-red-500">›</span>
        <span className="text-red-500">Services</span>
      </div>
      <h1 className="text-[33px] md:text-4xl font-bold text-center">
        Lorem Ipsum is simply dummy text of the printing and.
      </h1>
      <p className="text-center text-gray-300 mt-2 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="max-w-[1200px] mx-auto bg-[#1a0d02] mt-20 p-6  rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center">
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="text-3xl">👤</div>
          <h2 className="text-xl font-bold mt-2">90+</h2>
          <p className="text-gray-300">Clients</p>
        </div>
        <div className="hidden md:block h-16 w-px bg-gray-700"></div>


        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="text-3xl">📍</div>
          <h2 className="text-xl font-bold mt-2">30+</h2>
          <p className="text-gray-300">Countries</p>
        </div>
        <div className="hidden md:block h-16 w-px bg-gray-700"></div>


        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="text-3xl">📁</div>
          <h2 className="text-xl font-bold mt-2">50+</h2>
          <p className="text-gray-300">Projects</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
   
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={Nnn} 
            alt="Video Preview"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text.
          </h2>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries,
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
          </ul>
        </div>
      </div>

       <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
   
     <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text.
          </h2>
          <p className="text-gray-300 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries,
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={Mmm} 
            alt="Video Preview"
            className="w-full h-[340px] object-cover"
          />
        </div>
      

        
      </div>



        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
   
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={Bbb} 
            alt="Video Preview"
            className="w-full h-[340px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text.
          </h2>
          <p className="text-gray-300 mb-4">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries,
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
          </ul>
        </div>

        
      </div>
       <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
   
     <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text.
          </h2>
          <p className="text-gray-300 mb-4">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries,
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
            <li className="flex items-center gap-2">✔ Lorem Ipsum is simply</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={Sss} 
            alt="Video Preview"
            className="w-full h-[340px] object-cover"
          />
        </div>
      
            
        
      </div>
      
       <Coments/> 
    </div>
  );
}
