export default function Newsletter() {
  return (
    <section className="w-full px-4 py-12 bg-[#0f0b2c] text-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="font-poppins font-semibold text-[30px] leading-[188%] tracking-[0%]">
          Lorem Ipsum
        </h1>

        <p className="font-poppins font-normal text-[16px] leading-[188%] tracking-[0%] text-gray-300 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="mt-10 bg-white rounded-xl p-6 md:p-10 shadow-lg
                        flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h2 className="font-poppins font-medium text-[30px] leading-[100%] tracking-[0%] text-black">
              Stay in the loop
            </h2>

            <p className="font-poppins font-normal text-[17px] leading-[100%] tracking-[0%] text-black mt-2 max-w-md">
              Subscribe to receive the latest news and updates about TDA.  
              We promise not to spam you!
            </p>
          </div>

          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter email address"
              className="
                w-[385px] h-[50px]
                bg-black text-white placeholder-gray-400
                rounded-l-[8px] px-4 
                opacity-100 outline-none
                font-poppins
              "
            />

            <button
              type="submit"
              className="
                h-[50px] px-6 
                bg-red-600 text-white font-poppins font-medium
                rounded-r-[8px]
                hover:bg-red-700 transition
              "
            >
              Continue
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}