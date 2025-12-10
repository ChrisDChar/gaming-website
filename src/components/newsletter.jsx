export default function Newsletter() {
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
            </div>
        </section>
    );
}
