import homeBg from "../../assets/homeIcons/home-bg.png";
import CryEngineIcon from "../../assets/homeIcons/cryengineHome.png";
import UnrealIcon from "../../assets/homeIcons/unrealHome.png";

export default function HomeHero() {
  return (
    <section
      className="relative w-full bg-[#07042B] text-white py-10"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="flex-1 space-y-6">
          <p className="text-[20px] font-bold leading-[150%]" style={{ color: "#E87D0E" }}>
            Proved By prodesigner
          </p>

          <h1 className="font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-[50px] leading-[130%] sm:leading-[140%] md:leading-[155%]">
            Work that we <br /> produce for our <br /> clients
          </h1>

          <p className="text-sm sm:text-base md:text-[16px] font-medium leading-[170%] sm:leading-[180%] md:leading-[200%] max-w-full sm:max-w-[400px] md:max-w-[450px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>

          <button
            className="w-full xs:w-[180px] sm:w-[200px] h-[48px] sm:h-[52px] md:h-[55px] rounded-[30px] text-white font-medium cursor-pointer text-sm sm:text-base"
            style={{
              background: "linear-gradient(92.48deg, #D80027 2.08%, #FB9E3C 117.25%)",
            }}
          >
            Get more details
          </button>
        </div>

        <div className="flex-1 relative mt-8 lg:mt-0">
        </div>
      </div>

      <img
        src={CryEngineIcon}
        className="hidden lg:block absolute right-20 top-40 w-[90px] lg:right-[550px] lg:top-[170px]"
      />
      <img
        src={UnrealIcon}
        className="hidden lg:block absolute right-20 top-60 w-[60px]  lg:top-[180px]"
      />
    </section>
  );
}
