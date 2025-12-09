export default function Newsletter() {
  return (
    <section className="w-full px-4 py-12 bg-[#0f0b2c] text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <div className="flex flex-col justify-center">
          <h1 className="font-poppins font-semibold text-[30px] md:text-[36px] leading-[1.8]">
            Lorem Ipsum
          </h1>
          <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[1.8] text-gray-300 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex-1">
            <h2 className="font-poppins font-medium text-[24px] md:text-[30px] leading-[1.2] text-black">
              Stay in the loop
            </h2>
            <p className="font-poppins font-normal text-[16px] md:text-[17px] leading-[1.5] text-black mt-2 max-w-md">
              Subscribe to receive the latest news and updates about TDA.  
              We promise not to spam you!
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
              className="h-8 md:h-14 px-4 bg-red-600 text-white font-poppins font-medium  rounded-r-md hover:bg-red-700 transition w-full md:w-auto text-base md:text-base"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}