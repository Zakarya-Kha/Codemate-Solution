import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of navigation links
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Solution", path: "/solution" },
    { text: "About us", path: "/about" },
    { text: "Contact", path: "/contact" }
  ];

  return (
    <nav className="flex items-center justify-between p-6 fixed w-full z-20 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/">
            <span className="text-teal-500">C</span>
            <span className="text-gray-900">M</span>
            <span className="text-pink-500">D</span>
          </Link>
        </div>
        <Link to='/'>
          <span className="text-sm text-gray-500 hidden sm:inline-block">
            CODEMATE
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} className={({isActive}) =>
              `block py-2 ${isActive ? "text-orange-700" : "text-gray-700" } font-bold pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
              {link.text}
            </NavLink>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Explore"
              className="border-b-2 border-gray-300 outline-none focus:border-gray-500"
            />
            <button className="absolute top-0 right-0 mt-1 mr-2">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17.65 17.65a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
      <button className="md:hidden flex items-center" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="text-gray-700">
                {link.text}
              </Link>
            ))}
            <div className="relative w-full px-4">
              <input
                type="text"
                placeholder="Explore"
                className="border-b-2 border-gray-300 outline-none focus:border-gray-500 w-full"
              />
              <button className="absolute top-0 right-0 mt-1 mr-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17.65 17.65a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
