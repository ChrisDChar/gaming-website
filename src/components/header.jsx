import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
  ];

  return (
    <header className="w-full bg-[#07042B] text-white fixed top-0 left-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        
        <Link to="/" className="text-[28px] md:text-[32px] font-extrabold">LOGO</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-[16px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-[#D80027] transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              className="bg-[#D80027] px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#07042B] px-4 py-4">
          <ul className="flex flex-col gap-4 text-[16px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block w-full py-2 px-2 hover:text-[#D80027] transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                className="block w-full text-center bg-[#D80027] py-2 rounded-md hover:bg-red-700 transition"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
