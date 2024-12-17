import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme = "dark" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const themeStatus = `${
    theme === "dark"
      ? "bg-[#0B0C0C] text-white border-none"
      : "bg-white border-[1px] border-solid border-[#F5A11D]"
  } `;

  return (
    <nav
      className={`p-3 font-raleway 
   
      ${themeStatus}
    md:mt-5 border-b border-[0.5px] border-[#707070]  flex py-4 items-center justify-between md:rounded-[56px] md:mx-8 md:w-auto sm:w-full sm:rounded-none`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex ml-5 items-center">
          <img src="/logo.svg" alt="Logo" className=" w-[65px] h-[52px]" />
        </div>
      </Link>

      {/* Desktop Links */}
<<<<<<< HEAD
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
=======
      <div className="hidden md:flex items-center space-x-6 me-5">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white font-bold"
                : theme === "dark"
                ? "text-[#707070]  hover:text-gray-400"
                : "text-[#707070CC] hover:text-black"
            } cursor-pointer font-semibold`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white font-bold"
                : theme === "dark"
                ? "text-[#707070]  hover:text-gray-400"
                : "text-[#707070CC] hover:text-black"
            } cursor-pointer font-semibold`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/community"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white font-bold"
                : theme === "dark"
                ? "text-[#707070] "
                : "text-[#707070CC] hover:text-black"
            } cursor-pointer font-semibold`
          }
        >
          Community
        </NavLink>
        <NavLink
          to={"/become-an-slg"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-[#707070] text-white font-semibold py-1 rounded-xl px-2"
                : theme === "dark"
                ? "text-white bg-secondary font-semibold py-1 rounded-xl px-2 "
                : "text-[#707070CC] hover:text-black"
            } cursor-pointer font-semibold`
          }
        >
          Become an SLG
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="border-1 border border-white rounded-md p-2 flex items-center justify-center"
        >
          {isMenuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
>>>>>>> development-osama
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
<<<<<<< HEAD
        <div className="  fixed inset-0 bg-[#0B0C0C]   flex flex-col items-center justify-center space-y-6 text-white z-50">
          {/* Close Icon inside Dropdown */}
=======
        <div className="fixed inset-0 bg-[#0B0C0C] flex flex-col items-center justify-center space-y-6 text-white z-50">
>>>>>>> development-osama
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
<<<<<<< HEAD
              className="px-4 py-2 rounded-[12px] bg-[#0a5b9a] text-white cursor-pointer hover:bg-gray-400"
=======
              className="px-4 py-2 rounded-[12px] bg-[#0a5b9a] text-white cursor-pointer hover:bg-gray-500"
>>>>>>> development-osama
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
<<<<<<< HEAD
=======

export default Navbar;
>>>>>>> development-osama
