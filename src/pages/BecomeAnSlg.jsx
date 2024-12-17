import React from "react";
import { PagesLayout } from "../layout/PagesLayout";

export const BecomeAnSlg = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        {" "}
        <div className="relative bg-black text-white h-[700px] font-raleway">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full ">
            <img
              src="/bg.png"
              alt="Background"
              className="opacity-50 w-full h-[700px] "
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 py-24">
            <p className="text-secondary text-[24px] uppercase font-normal mb-2">
              + BECOME AN SLG
            </p>
            <h1 className="text-4xl md:text-[64px] w-[497px] font-semibold leading-[70px] mb-4">
              <p>Expand Your Income Stream </p>
              <span className="text-primary"> With Valueklip</span>
            </h1>
            <p className="text-[#707070] text-sm mb-6 max-w-lg">
              Join Valueklip as a Sales Lead Generator (SLG) and help businesses
              access custom software solutions or hire remote tech talents.
              Leverage your skills and network to connect with potential clients
              and earn commissions and bonuses. Whether you're seeking a
              flexible side hustle or extra income, this opportunity is ideal
              for motivated individuals.
            </p>
            <button className="bg-secondary text-white px-6 py-2 font-bold rounded-lg">
              Become an SLG
            </button>
          </div>

          {/* Blue Rectangle  */}
          <div className="absolute top-0 right-60 w-[400px] h-[580px] bg-secondary z-0 rounded-lg hidden md:block"></div>
          <div className="absolute left-[76%] top-[500px]">
            <img src="/Group59.png" alt="" />
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
          <div className="absolute top-72 left-[640px] w-[240px] h-[83px] z-10 hidden md:block">
            <div className="bg-white  flex flex-col items-center justify-center gap-7 text-black rounded-md shadow-lg px-4 py-10 text-center">
              <p className="text-[40px] font-medium leading-[16.32px] ">
                Join Us
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-20 px-10 h-[793px]">
          <div className="absolute top-[1020px]  left-64">
            <div>
              <img
                src="/Vector41.png"
                className="w-[1084px] h-[400px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center  text-white py-16 px-24">
            {/* Title Section */}
            <div className=" font-extrabold text-[48px] text-black leading-tight ">
              <p>Requirements to join the Valueklip Tech Community</p>
            </div>

            {/* List Section */}
            <div>
              <ul className="space-y-6 text-black leading-relaxed">
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Must possess relevant foundational, intermediate, or
                  senior-level technical skills and experience required for
                  function-specific roles within the Valueklip Tech Community.
                </li>
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Successfully passed the functional and executive leadership
                  interview stages for the Valueklip Tech Community.
                </li>
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Willingness and commitment to participate in unpaid volunteer
                  projects.
                </li>
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Commitment to continuous learning and active participation in
                  community events.
                </li>
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Open to collaborating with other community members on projects
                  and gigs.
                </li>
                <li className="flex items-start">
                  <span className=" font-bold mr-3">✓</span>
                  Agrees with and accepts the membership rules and guidelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </PagesLayout>
  );
};
