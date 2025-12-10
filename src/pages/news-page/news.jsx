import HeroCard from "./hero";
import rasm from "../../assets/HomeIcons/rasm1.png";

export default function News() {
  return (
    <section className="w-full px-4 py-12 bg-[#0f0b2c] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="pt-[50px] text-[20px]">
            Home <span className="text-[red]/40">News</span>
          </p>
          <h1 className="text-[34px] font-bold pt-[15px]">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="pt-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="w-full flex justify-center mt-20">
          <div className="w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 rounded-xl bg-white border border-white/20 text-black placeholder-black focus:outline-none"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-30">
          <div>
            <HeroCard />
            <div className="my-5 border-t mt-[280px] mb-[200px] border-white/20"></div>
            <HeroCard />
          </div>

          <div>
            {[rasm, "", "../assets/HomeIcons/card1.png", "../assets/HomeIcons/card1.png", "../assets/HomeIcons/card1.png", "../assets/HomeIcons/card1.png"].map(
              (imgSrc, index) => (
                <div key={index} className="max-w-sm mx-auto rounded-2xl p-4">
                  <div className="w-full rounded-xl overflow-hidden">
                    <img
                      src={imgSrc || rasm}
                      alt="game"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-block bg-blue-600 text-xs font-semibold px-3 py-1 rounded-lg text-white">
                      John Smash
                    </span>
                    <span className="text-sm text-white/70">5min</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-white">
                    Lorem Ipsum is simply dummy text dummy text ?
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 mt-20">
        <div className="flex flex-col justify-center">
          <h1 className="font-poppins font-semibold text-[30px] md:text-[36px] leading-[1.8]">
            Lorem Ipsum
          </h1>
          <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[1.8] text-gray-300 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex-1">
            <h2 className="font-poppins font-medium text-[24px] md:text-[30px] leading-[1.2] text-black">
              Stay in the loop
            </h2>
            <p className="font-poppins font-normal text-[16px] md:text-[17px] leading-[1.5] text-black mt-2 max-w-md">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </p>
          </div>

          <form className="flex w-full md:w-auto flex-col md:flex-row gap-3 md:gap-0 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 h-16 md:h-14 bg-black text-white placeholder-gray-400 rounded-l-md px-4 outline-none font-poppins w-full text-lg md:text-base"
            />
            <button
              type="submit"
              className="h-8 md:h-14 px-4 bg-red-600 text-white font-poppins font-medium rounded-r-md hover:bg-red-700 transition w-full md:w-auto text-base md:text-base"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}