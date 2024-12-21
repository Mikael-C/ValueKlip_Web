import React from "react";
import { PagesLayout } from "../layout/PagesLayout";

export const BecomeAnSlg = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        <div className="relative bg-black text-white h-[700px] font-raleway">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full ">
            <img
              src="/bg.png"
              alt="Background"
              className="opacity-80 w-full h-[700px] "
            />
          </div>

          <div className="absolute z-40 left-1/2 transform -translate-x-1/2 md:hidden">
            <img src="/hands-mobile.png" width={64} alt="" />
          </div>

          <div
            id="vectors"
            className="absolute z-40 left-1/2 transform -translate-x-1/2 md:hidden"
          >
            <div className="mt-14 ml-10">
              <img src="/Vector44.png" className="" alt="" />
            </div>
            <img
              src="/becomeSlgVector-mobile.svg"
              className="-mt-[450px] ml-20 "
              alt=""
            />
          </div>

          {/* Content */}
          <div className="relative  z-10 container mx-auto md:px-6 py-24">
            <p className="text-secondary text-[24px] text-center md:text-start uppercase font-normal mb-2">
              + BECOME AN SLG
            </p>
            <h1 className="text-5xl text-center md:text-start text-white md:ml-0  md:text-[64px] w-auto md:w-[553px] font-[500] md:font-semibold leading-[70px] mb-4">
              <span className="text-primary">
                <span className="bg-gradient-to-t p-2 from-secondary to-black md:bg-none bg-opacity-30 md:bg-opacity-100 px-2">
                  Expand
                </span>
                Your Income Stream With{" "}
              </span>
              Valueklip
            </h1>
            {/*  Your Income Stream  With Valueklip */}
            <p className="text-[#707070] md:text-start md:mx-0 mx-4 text-center text-sm mb-6 max-w-lg">
              Join Valueklip as a Sales Lead Generator (SLG) and help businesses
              access custom software solutions or hire remote tech talents.
              Leverage your skills and network to connect with potential clients
              and earn commissions and bonuses. Whether you're seeking a
              flexible side hustle or extra income, this opportunity is ideal
              for motivated individuals.
            </p>
            <div className="flex items-center justify-center md:block">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfoTj_vjdNbi1sJSzEeb1XEAT0NCr1aDeXP_o9cCEtJzHbPgg/viewform"
                target="_blank"
              >
                <button className="bg-secondary text-white px-6 py-2  font-bold rounded-lg ">
                  Become an SLG
                </button>
              </a>
            </div>
          </div>

          {/* Blue Rectangle  */}
          <div className="absolute top-0 right-60 md:w-[400px] h-[580px] bg-secondary z-0 rounded-lg hidden md:block"></div>
          <div className="absolute left-[76%] md:top-[500px] top-[530px] md:rotate-0 -rotate-12">
            <img src="/Group59.png" alt="" className="w-[30px] md:w-[105px]" />
          </div>
          {/* Hands Image */}
          <div className="absolute top-0 right-24 z-20 hidden md:block">
            <img
              src="/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763142-removebg-preview.png"
              alt="Professional Woman"
              className="w-[733px] h-[449px]"
            />
          </div>

          {/* White Badge */}
          <div className="absolute md:top-72 top-[590px] left-40 md:left-[640px] -rotate-12 md:rotate-0 md:w-[240px] md:h-[83px] w-[93px] h-[37px] z-10">
            <div className="bg-white  flex justify-center items-center md:block    gap-7 text-black rounded-md shadow-lg md:px-4 md:py-10 py-3 text-center">
              <p className="md:text-[40px] text-[18px]  font-medium leading-[16.32px] ">
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
