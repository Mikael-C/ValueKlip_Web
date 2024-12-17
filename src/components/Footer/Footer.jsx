import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="flex flex-col  font-raleway">
      <div className="flex-grow"></div>

      <div className="bg-black w-full p-2 ">
<<<<<<< HEAD
        <div className="flex flex-col">
          <div className="text-center">
            <p className="text-[#F5A11D] font-extrabold mt-20 text-5xl mb-3">
              Get Ahead of Your Competitors
            </p>
            <p className="text-[#707070] mb-4 font-semibold">
              Schedule a discovery call today to build a new product, manage an
              existing platform, hire remote
              <p>
                talent, or receive expert technical advice tailored to your
                business.
              </p>
            </p>
            <button className="bg-secondary p-1 w-36 rounded-xl text-white font-bold">
=======
        <div className="flex ml-3 md:ml-0 flex-col">
          <div className="md:text-center">
            <p className="text-[#F5A11D] font-extrabold mt-20 md:text-5xl  text-[21px] mb-1">
              Get Ahead of Your Competitors
            </p>
            <div className="text-[#707070] mb-4 text-[10px] md:text-[15px] w-[265px] md:w-full font-[500]">
              Schedule a discovery call today to build a new product, manage an
              existing platform, hire remote
              <p >
                talent, or receive expert technical advice tailored to your
                business.
              </p>
            </div>
            <button className="bg-secondary p-1 px-4 rounded-[10px] text-[10px] md:text-[16px] md:w-[113px] text-white font-bold">
>>>>>>> development-osama
              Talk to us
            </button>
          </div>
          {/* Content Section */}
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row justify-around mt-20 mb-20">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-3xl mb-5">
                Get in touch with us
              </p>
              <div className="flex flex-col md:flex-row gap-10 mb-5">
                <div className="inline-flex">
                  <img src="/phone.svg" width={20} alt="" />
                  <p className="text-white ml-2 font-semibold">
=======
          <div className="flex flex-col-reverse md:flex-row justify-around mt-10 md:mt-20 mb-20">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-[13px] md:text-3xl mt-5 mb-5">
                Get in touch with us
              </p>
              <div className="flex  flex-row md:gap-10 mb-5">
                <div className="inline-flex text-[12px] md:text-[15px]">
                  <img
                    src="/phone.svg"
                    className="md:w-8 w-4 h-4 md:h-8"
                    alt=""
                  />
                  <p className="text-white ml-2 text-[10px] md:text-[15px] font-semibold">
>>>>>>> development-osama
                    Phone:{" "}
                    <span className="text-[#707070] ml-2">
                      +234 (707) 687 5450
                    </span>
                  </p>
                </div>
<<<<<<< HEAD
                <div className="inline-flex">
                  <img src="/email.svg" width={20} alt="" />
=======
                <div className="inline-flex text-[12px] md:text-[15px]">
                  <img
                    src="/email.svg"
                    className="md:w-8 w-4 h-4 md:h-8"
                    alt=""
                  />
>>>>>>> development-osama
                  <p className="text-white ml-2 font-semibold">
                    Email:
                    <span className="text-[#707070] ml-2">
                      support@valueklip.tech
                    </span>
                  </p>
                </div>
              </div>
<<<<<<< HEAD
              <div className="inline-flex">
                <img src="/address.svg" width={20} alt="" />
=======
              <div className="inline-flex text-[12px] md:text-[15px]">
                <img
                  src="/address.svg"
                  className="md:w-8 w-4 h-4 md:h-8"
                  alt=""
                />
>>>>>>> development-osama
                <p className="text-white ml-2 font-semibold">
                  Address:
                  <span className="text-[#707070] ml-2">
                    Plot 8, Providence Street, Lekki Phase 1, Lagos, Nigeria.
                  </span>
                </p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-row mt-10 md:mt-0">
              <div className="flex flex-col">
                <Link to={"/"} className="text-[#707070] font-semibold">
                  Home
                </Link>
                <Link to={"/about"} className="text-[#707070] font-semibold">
                  About us
                </Link>
                <Link to={"/services"} className="text-[#707070] font-semibold">
                  Services
                </Link>
              </div>
              <div className="flex flex-col ml-4">
                <Link
                  to={"/community"}
                  className="text-[#707070] font-semibold"
=======
            <div className="flex flex-col md:flex-row  md:mt-0 ">
              <div className="flex flex-col">
                <Link
                  to={"/"}
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
                >
                  About us
                </Link>
                <Link
                  to={"/services"}
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
                >
                  Services
                </Link>
              </div>
              <div className="flex flex-col md:ml-4">
                <Link
                  to={"/community"}
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
>>>>>>> development-osama
                >
                  Community
                </Link>
                <Link
                  to={"/become-an-slg"}
<<<<<<< HEAD
                  className="text-[#707070] font-semibold"
=======
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
>>>>>>> development-osama
                >
                  Become an SLG
                </Link>
              </div>
            </div>
          </div>
          {/* End Of Content Section */}
        </div>
      </div>
<<<<<<< HEAD
      <div className="bg-[#110E0E] w-full py-10">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="mx-10 mb-4">
              <img src="/logo.svg" width={65} height={55} alt="Logo" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 md:flex-row text-[#707070]">
              <p>Copyright © Valueklip 2024</p>
              <div className="flex gap-6">
                <p className="text-[#B8CCFFC9]">Terms of Service</p>
                <p className="text-[#B8CCFFC9]">Privacy Policy</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center mb-6 md:mb-0 md:relative top-[-78px] md:left-20">
              <a
                href="https://wa.me/2347076875450"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/whatsapp.svg" width={84} alt="WhatsApp" />
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://x.com/ValueKlip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.svg" alt="Twitter" width={37} />
              </a>
              <a
                href="https://www.instagram.com/valueklip?igsh=MXU0Y2NsZHQ1bGo2OQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.svg" alt="Instagram" width={37} />
              </a>

              <a
                href="https://www.linkedin.com/company/valueklip/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.svg" alt="LinkedIn" width={37} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61557889663401&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook.svg" alt="Facebook" width={37} />
              </a>
=======

      <div className="md:bg-[#110E0E] bg-black w-full py-10">
        <div className="relative -top-20 right-11 md:right-0 md:top-0">
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/* Left Section: Logo and Text */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="mb-4 me-64">
                <img
                  src={`/logo.svg`}
                  className="md:w-16 md:h-14 w-8 h-7"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-row text-[10px] md:text-[16px]  md:flex-row items-center md:items-start gap-4 text-[#707070] text-center md:text-left">
                <p>Copyright © Valueklip 2024</p>
                <div className="flex gap-6">
                  <p className="text-[#B8CCFFC9]">Terms of Service</p>
                  <p className="text-[#B8CCFFC9]">Privacy Policy</p>
                </div>
              </div>
            </div>

            {/* Right Section: Social Media Links */}
            <div className="flex  flex-row-reverse ml-5 md:ml-0 items-center  md:items-end gap-6">
              {/* WhatsApp Icon */}
              <div className="mb-4 relative md:-top-20 top-2 ml-48 md:ml-0">
                <a
                  href="https://wa.me/2347076875450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/whatsapp.svg"
                    className="w-9 md:w-16 "
                    alt="WhatsApp"
                  />
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-baseline ml-9  gap-1">
                <a
                  href="https://x.com/ValueKlip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/twitter.svg"
                    alt="Twitter"
                    className="md:w-10 w-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/valueklip?igsh=MXU0Y2NsZHQ1bGo2OQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="md:w-10 w-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/valueklip/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    className="md:w-10 w-6"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61557889663401&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/facebook.svg"
                    alt="Facebook"
                    className="md:w-10 w-6"
                  />
                </a>
              </div>
>>>>>>> development-osama
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
