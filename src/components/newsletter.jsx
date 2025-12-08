export default function Newsletter() {
  return (
    <section className="w-full px-4 py-12 bg-[#0f0b2c] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Lorem Ipsum</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex-1 w-full bg-white rounded-xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-medium text-black">Stay in the loop</h2>
            <p className="text-sm md:text-base text-black mt-2 max-w-md">
              Subscribe to receive the latest news and updates. We promise not to spam you!
            </p>
          </div>

          <form className="flex w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 h-12 md:h-12 px-4 rounded-l-md text-black placeholder-gray-500 border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 px-4 md:px-6 bg-red-600 text-white font-medium rounded-r-md hover:bg-red-700 transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
