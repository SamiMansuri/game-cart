import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mt-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-[#E11D48] md:p-0 dark:text-[#475569] md:dark:hover:text-[#E11D48] dark:hover:text-[#E11D48]"
          onClick={closeMobileMenu}
        >
          <img src={Logo} className="h-8 mr-3" alt="Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center  text-sm text-[#475569] rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full  md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden md:block"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-[#E11D48] md:p-0 dark:text-[#475569] md:dark:hover:text-[#E11D48] dark:hover:text-[#E11D48]"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-[#E11D48] md:p-0 dark:text-[#475569] md:dark:hover:text-[#E11D48] dark:hover:text-[#E11D48]"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-[#E11D48] md:p-0 dark:text-[#475569] md:dark:hover:text-[#E11D48] dark:hover:text-[#E11D48]"
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
