import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen font-raleway">
      <div className="flex-grow"></div>

      <div className="bg-black w-full p-2 ">
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
              Talk to us
            </button>
          </div>
          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-around mt-20 mb-20">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-3xl mb-5">
                Get in touch with us
              </p>
              <div className="flex flex-col md:flex-row gap-10 mb-5">
                <div className="inline-flex">
                  <img src="/phone.svg" width={20} alt="" />
                  <p className="text-white ml-2 font-semibold">
                    Phone:{" "}
                    <span className="text-[#707070] ml-2">
                      +234 (707) 687 5450
                    </span>
                  </p>
                </div>
                <div className="inline-flex">
                  <img src="/email.svg" width={20} alt="" />
                  <p className="text-white ml-2 font-semibold">
                    Email:
                    <span className="text-[#707070] ml-2">
                      support@valueklip.tech
                    </span>
                  </p>
                </div>
              </div>
              <div className="inline-flex">
                <img src="/address.svg" width={20} alt="" />
                <p className="text-white ml-2 font-semibold">
                  Address:
                  <span className="text-[#707070] ml-2">
                    Plot 8, Providence Street, Lekki Phase 1, Lagos, Nigeria.
                  </span>
                </p>
              </div>
            </div>
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
                >
                  Community
                </Link>
                <Link
                  to={"/become-an-slg"}
                  className="text-[#707070] font-semibold"
                >
                  Become an SLG
                </Link>
              </div>
            </div>
          </div>
          {/* End Of Content Section */}
        </div>
      </div>
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
              <img src="/whatsapp.svg" width={84} alt="WhatsApp" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
