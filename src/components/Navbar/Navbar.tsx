import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`p-3 font-raleway ${
        theme === "dark" ? "bg-[#0B0C0C] text-white" : "bg-white"
      } rounded-[56px] border-[1px] border-solid border-[#F5A11D] mx-32 mt-5 flex items-center justify-between`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex ml-10 items-center space-x-2">
          <img src="/logo.svg" alt="Logo" />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          to={"/about"}
          className={`${
            theme === "dark"
              ? "text-white hover:text-gray-400"
              : "text-[#707070CC] hover:text-black"
          } cursor-pointer font-semibold`}
        >
          About Us
        </Link>
        <Link
          to={"/services"}
          className={`${
            theme === "dark"
              ? "text-white hover:text-gray-400"
              : "text-[#707070CC] hover:text-black"
          } cursor-pointer font-semibold`}
        >
          Services
        </Link>
        <Link
          to={"/community"}
          className={`${
            theme === "dark"
              ? "text-white hover:text-gray-400"
              : "text-[#707070CC] hover:text-black"
          } cursor-pointer font-semibold`}
        >
          Community
        </Link>
        <Link to={"/become-an-slg"}>
          <button className="px-2 py-1 me-10 rounded-2xl bg-[#0a5b9a] text-white cursor-pointer hover:bg-gray-400">
            Become an SLG
          </button>
        </Link>
      </div>

      <div className="md:hidden cursor-pointer flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl me-10">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="  fixed inset-0 bg-[#0B0C0C] flex flex-col items-center justify-center space-y-6 text-white z-50">
          {/* Close Icon inside Dropdown */}
          <div
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>

          <Link
            to={"/about"}
            className="text-lg hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to={"/services"}
            className="text-lg hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to={"/community"}
            className="text-lg hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Community
          </Link>
          <Link to={"/become-an-slg"}>
            <button
              className="px-4 py-2 rounded-[12px] bg-[#0a5b9a] text-white cursor-pointer hover:bg-gray-400"
              onClick={toggleMenu}
            >
              Become an SLG
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
