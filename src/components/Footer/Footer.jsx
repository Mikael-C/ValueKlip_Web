import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="flex flex-col  font-raleway">
      <div className="flex-grow"></div>

      <div className="bg-black w-full p-2 ">
        <div className="flex ml-3 md:ml-0 flex-col">
          <div className="md:text-center">
            <p className="text-[#F5A11D] font-extrabold mt-20 md:text-5xl  text-[21px] mb-1">
              Get Ahead of Your Competitors
            </p>
            <div className="text-[#707070] mb-4 text-[12px] md:text-[15px] w-[322px] md:w-full font-[500]">
              Schedule a discovery call today to build a new product, manage an
              existing platform, hire remote
              <p>
                talent, or receive expert technical advice tailored to your
                business.
              </p>
            </div>
            <button className="bg-secondary p-1 px-4 rounded-[10px] text-[10px] md:text-[16px] md:w-[113px] text-white font-bold">
              Talk to us
            </button>
          </div>
          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row justify-around mt-10 md:mt-20 mb-20">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-[13px] md:text-3xl mt-5 mb-5">
                Get in touch with us
              </p>
              <div className="flex flex-col md:flex-row md:gap-10 md:mb-5 space-y-4 md:space-y-0">
                <div className="inline-flex items-center text-[12px] md:text-[15px]">
                  <img
                    src="/phone.svg"
                    className="md:w-8 w-4 h-4 md:h-8"
                    alt="Phone"
                  />
                  <p className="text-white ml-2 text-[10px] md:text-[15px] font-semibold">
                    Phone:{" "}
                    <span className="text-[#707070] ml-2">
                      +234 (707) 687 5450
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center text-[12px] md:text-[15px]">
                  <img
                    src="/email.svg"
                    className="md:w-8 w-4 h-4 md:h-8"
                    alt="Email"
                  />
                  <p className="text-white ml-2 font-semibold">
                    Email:
                    <span className="text-[#707070] ml-2">
                      support@valueklip.tech
                    </span>
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center text-[12px] md:text-[15px] mt-4 md:mt-0">
                <img
                  src="/address.svg"
                  className="md:w-8 w-4 h-4 md:h-8"
                  alt="Address"
                />
                <p className="text-white ml-2 font-semibold">
                  Address:
                  <span className="text-[#707070] ml-2">
                    Plot 8, Providence Street, Lekki Phase 1, Lagos, Nigeria.
                  </span>
                </p>
              </div>
            </div>

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
                >
                  Community
                </Link>
                <Link
                  to={"/become-an-slg"}
                  className="text-[#707070] text-[12px] md:text-[15px] font-semibold"
                >
                  Become an SLG
                </Link>
              </div>
            </div>
          </div>
          {/* End Of Content Section */}
        </div>
      </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
