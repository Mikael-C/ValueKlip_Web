import React from "react";
import { PagesLayout } from "../layout/PagesLayout";

export const BecomeAnSlg = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        <div className="relative bg-black text-white h-[700px] font-raleway">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full">
            <img
              src="/bg.png"
              alt="Background"
              className="opacity-80 w-full h-[700px]"
            />
          </div>

          {/* Hands Image for Mobile */}
          <div className="absolute -mt-10 z-40 left-1/2 transform -translate-x-1/2 md:hidden">
            <img src="/hands-mobile.png" width={64} alt="" />
          </div>

          {/* Vectors for Mobile */}
          <div
            id="vectors"
            className="absolute z-40 left-1/2 transform -translate-x-1/2 md:hidden"
          >
            <div className="mt-4 ml-10">
              <img src="/Vector44.png" className="" alt="" />
            </div>
            <img
              src="/becomeSlgVector-mobile.svg"
              className="-mt-[480px] ml-20"
              alt=""
            />
          </div>
          <div className="md:hidden">
            <img
              src="/Rectangle3.png"
              className="absolute mt-36 h-48 top-[420px] w-full"
              alt=""
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-auto container mx-auto px-4 py-12 md:px-6 md:py-24">
            <p className="md:bg-none text-secondary mt-14 text-[20px] text-center uppercase font-normal mb-2 md:text-[24px] md:text-start">
              + COMMUNITY
            </p>
            <h1 className="text-4xl text-center md:w-[500px] text-white font-bold leading-[50px] mb-4 md:text-5xl md:leading-[70px] md:text-start ">
              <span className="text-primary">
                <span className="bg-gradient-to-t md:bg-none from-secondary to-black px-2">
                  Expand
                </span>
                Your Income Stream
              </span>{" "}
              With Valueklip
            </h1>
            <p className="text-[#707070] md:w-[450px] text-center text-sm leading-5 mb-6 sm:text-base md:text-start md:leading-6 md:mb-4">
              Join Valueklip as a Sales Lead Generator (SLG) and help businesses
              access custom software solutions or hire remote tech talents.
              Leverage your skills and network to connect with potential clients
              and earn commissions and bonuses. Whether you're seeking a
              flexible side hustle or extra income, this opportunity is ideal
              for motivated individuals.
            </p>
            <div className="flex md:mt-10 mt-0 items-center justify-center md:block">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfoTj_vjdNbi1sJSzEeb1XEAT0NCr1aDeXP_o9cCEtJzHbPgg/viewform"
                target="_blank"
              >
                <button className="bg-secondary text-white px-4 py-2 text-sm font-bold rounded-lg md:px-6 md:py-2 md:text-base">
                  Become an SLG
                </button>
              </a>
            </div>
          </div>

          {/* Blue Rectangle for Desktop */}
          <div className="absolute hidden top-0 right-60 md:block md:w-[400px] h-[580px] bg-secondary z-0 rounded-lg"></div>
          <div className="absolute left-[76%] top-[530px] md:top-[500px] -rotate-12 md:rotate-0">
            <img src="/Group59.png" alt="" className="w-[30px] md:w-[105px]" />
          </div>

          {/* Hands Image for Desktop */}
          <div className="absolute top-0 right-16 z-20 hidden md:block">
            <img
              src="/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763142-removebg-preview.png"
              alt="Professional Woman"
              className="w-[733px] h-[449px]"
            />
          </div>

          {/* White Badge */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[530px] md:top-72 md:left-[810px] md:w-[240px] md:h-[83px] w-[93px] h-[47px] z-10 -rotate-12 md:rotate-0">
            <div className="bg-white flex justify-center items-center text-black rounded-md shadow-lg px-4 py-3 md:px-4 md:py-10 text-center">
              <p className="text-[14px] md:text-[40px] font-medium leading-[16.32px]">
                Join Us
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:mt-20 md:h-[793px] h-[993px]">
          <div className="absolute top-[1040px] left-56 hidden md:block">
            <img src="/Vector41-svg.svg" className="w-[1180px] " alt="" />
          </div>
          <div className="flex md:flex-row flex-col md:justify-between md:items-center items-center justify-center text-white md:py-16 md:px-24">
            <div className="md:relative right-20 font-extrabold px-10 md:py-0 py-10 md:text-[48px] h-[143px] md:h-auto text-[34px] text-black leading-tight mb-20 md:mb-0">
              <p className="md:leading-snug md:w-[627px]  ">
                Requirements to become a Sales Lead Generator at Valueklip
              </p>
            </div>

            <div className="md:-ml-20">
              <ul className="md:space-y-4 space-y-6 md:mx-0 mx-4 md:w-[600px] text-black leading-relaxed">
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Proven experience in lead generation, sales, and business
                  development, with a track record of generating revenue.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Strong professional network that includes founders of tech
                  start-ups and/or CEOs of companies.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Proven experience in selling technical solutions to
                  non-technical professionals.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Excellent communication and interpersonal skills, with the
                  ability to build rapport quickly.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Ability to understand client needs and align them with
                  Valueklip's solutions.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Ability to work independently and as part of a team.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Self-motivated and goal-oriented, with a strong desire to
                  drive business growth.
                </li>
                <li className="flex md:items-start text-start">
                  <span className=" font-bold mr-2">✓</span>
                  Familiarity with the tech industry is a plus.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </PagesLayout>
  );
};
