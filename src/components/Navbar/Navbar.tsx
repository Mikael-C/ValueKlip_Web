import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-2 font-raleway bg-[#0B0C0C] rounded-[56px] mx-32 mt-5 text-white flex items-center justify-between ">
      <Link to={"/"}>
        <div className="flex ml-10 items-center space-x-2">
          <img src="/logo.svg" alt="Logo" />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 ">
        <Link
          to={"/about"}
          className="text-[#707070] hover:text-white cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to={"/services"}
          className="text-[#707070] hover:text-white cursor-pointer"
        >
          Services
        </Link>
        <Link
          to={"/community"}
          className="text-[#707070] hover:text-white cursor-pointer"
        >
          Community
        </Link>
        <Link to={"/become-an-slg"}>
          <button className="px-2 py-1 me-10 rounded-2xl bg-[#0a5b9a] text-white cursor-pointer hover:bg-gray-400">
            Become an SLG
          </button>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden cursor-pointer flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl me-10">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0B0C0C] flex flex-col items-center justify-center space-y-6 text-white z-50">
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
