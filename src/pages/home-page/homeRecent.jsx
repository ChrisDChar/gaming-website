import HomeRecent1 from "../../assets/HomeIcons/home-recent1.png";
import HomeRecent2 from "../../assets/HomeIcons/home-recent2.png";
import HomeRecent3 from "../../assets/HomeIcons/home-recent3.png";
import HomeRecent4 from "../../assets/HomeIcons/home-recent4.png";
import HomeRecent5 from "../../assets/HomeIcons/home-recent5.png";
import HomeRecent6 from "../../assets/HomeIcons/home-recent6.png";

export default function HomeRecent() {
  return (
    <section className="w-full text-white py-16">
      <div className="text-center mb-10 px-4">
        <h1
          className="font-[700] text-[30px]"
          style={{ lineHeight: "188%" }}
        >
          Our Recent Projects
        </h1>

        <p
          className="font-[400] text-[14px] mt-2"
          style={{ lineHeight: "188%" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        <img src={HomeRecent1} alt="recent1" className="w-[380px] h-[225px] object-cover rounded-xl" />
        <img src={HomeRecent2} alt="recent2" className="w-[380px] h-[225px] object-cover rounded-xl" />
        <img src={HomeRecent3} alt="recent3" className="w-[350px] h-[225px] object-cover rounded-xl" />
        <img src={HomeRecent4} alt="recent4" className="w-[250px] h-[225px] object-cover rounded-xl" />
        <img src={HomeRecent5} alt="recent5" className="w-[400px] h-[225px] object-cover rounded-xl" />
        <img src={HomeRecent6} alt="recent6" className="w-[470px] h-[225px] object-cover rounded-xl" />
      </div>

      <div className="flex justify-center mt-10">
        <button
            className="w-[190px] h-[50px] bg-[#FFFFFF1C] text-white
                       rounded-[10px] font-medium text-[20px]
                       leading-[1.88] hover:opacity-80 transition cursor-pointer"
          >
            See All
          </button>
      </div>
    </section>
  );
}