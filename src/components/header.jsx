import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#07042B] text-white fixed top-0 left-0 z-50 shadow-lg">
        <nav className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-6">
          
          <a
            href="/"
            className="text-[29px] font-extrabold leading-[153%] tracking-normal"
          >
            LOGO
          </a>

          <ul className="hidden md:flex items-center gap-10 text-[16px] font-normal leading-[100%] tracking-normal">
  <li>
    <Link to="/" className="hover:text-[#D80027] transition duration-300">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about" className="hover:text-[#D80027] transition duration-300">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/services" className="hover:text-[#D80027] transition duration-300">
      Services
    </Link>
  </li>
  <li>
    <Link to="/news" className="hover:text-[#D80027] transition duration-300">
      News
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className="bg-[#D80027] text-white rounded-[6px] w-[130px] h-[40px] flex items-center justify-center hover:bg-red-700 transition duration-300"
    >
      Contact Us
    </Link>
  </li>
</ul>


          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-[#07042B] px-6 pb-4">
            <ul className="flex flex-col gap-4 text-[16px] font-normal leading-[100%]">
              <li className="cursor-pointer hover:text-[#D80027] transition duration-300">Home</li>
              <li className="cursor-pointer hover:text-[#D80027] transition duration-300">About us</li>
              <li className="cursor-pointer hover:text-[#D80027] transition duration-300">Portfolio</li>
              <li className="cursor-pointer hover:text-[#D80027] transition duration-300">News</li>

              <button
                className="
                  bg-[#D80027]
                  text-white 
                  rounded-[6px] 
                  w-[130px] 
                  h-[40px]
                  hover:bg-red-700
                "
              >
                Contact us
              </button>
            </ul>
          </div>
        )}
      </header>

    </>
  );
}

export default Header;