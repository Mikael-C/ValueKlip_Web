import React from "react";
import { PagesLayout } from "../layout/PagesLayout";
import { CommunityList } from "../components/CommuintyList";

export const Community = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        <div>
          <div className="relative bg-black text-white h-[600px] font-raleway">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full">
              <img
                src="/bg.png"
                alt="Background"
                className="opacity-80 w-full h-[600px]"
              />
            </div>

            {/* Mobile Community Images */}
            <div className="absolute md:hidden left-40  -mt-10 z-40">
              <div className="flex justify-center items-center">
                <img
                  src="/men-commuinty-mobile.png"
                  alt="men-commuinty-mobile"
                  className="w-[64px] h-[64px]"
                />
                <img
                  src="/women-commuinty-mobile.png"
                  alt="women-commuinty-mobile"
                  className="w-[32px] h-[32px] mt-3"
                />
              </div>
            </div>

            {/* Mobile Vector Image */}
            <div className="md:hidden">
              <img
                src="/Vector44.png"
                className="absolute z-40 left-40 h-[547px]"
                alt=""
              />
            </div>

            <div className="md:hidden">
              <img
                src="/Rectangle3.png"
                className="absolute mt-[470px] h-96 w-full"
                alt=""
              />
            </div>

            {/* Content */}
            <div className="relative  z-40 w-auto container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center mt-16 md:mt-0  md:text-left md:w-[553px] flex-1">
                <p className="text-secondary uppercase text-[24px] font-normal mb-2">
                  + COMMUNITY
                </p>
                <h1 className="text-5xl text-white text-center md:text-start  md:ml-0  md:text-[64px] w-auto md:w-[553px] font-[500] md:font-semibold leading-[70px] mb-4">
                  <span className="text-primary">
                    <span className="bg-gradient-to-t p-2 from-secondary to-black md:bg-none bg-opacity-30 md:bg-opacity-100 px-2">
                      Elevate
                    </span>
                    Your{" "}
                  </span>
                  Career
                </h1>
                <p className="text-[#707070] w-[415px] text-[14px] font-normal mb-6 max-w-lg">
                  Join Valueklip Tech Community to access global paid gigs,
                  mentorship, courses, leadership opportunities, career
                  development, and create innovative solutions that impact
                  millions of lives.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdPwLAWhiKKACozN5gLDLtY8ecpJjneWmlSwzQqdL5w4hXuUg/viewform"
                  target="_blank"
                >
                  <button className="bg-secondary text-white px-6 py-2 font-bold md:w-[131px] rounded-xl">
                    Join now
                  </button>
                </a>
              </div>

              {/* Blue Rectangle Behind the Man */}
              <div className="absolute top-0 right-44 w-[383px] h-[600px] bg-secondary z-30 rounded-lg hidden md:block"></div>

              {/* Man Image */}
              <div className="absolute top-10 z-50 -right-14 hidden md:block">
                <img
                  src="/confident-businessman-smiles-city-night-generated-by-ai.png"
                  alt="Professional Man"
                  className="w-[580px] h-auto"
                />
              </div>

              {/* White Badge */}
              <div className="absolute md:rotate-0 -rotate-12 z-40 md:top-[280px] md:left-[570px] md:w-[290px] w-[133px] left-[150px] top-[490px]">
                <div className="bg-white flex flex-col items-center justify-center text-black md:rounded-md rounded-sm px-2 text-center">
                  <p className="md:text-[40px] text-[18px] font-normal">
                    Great Team
                  </p>
                  <p className="md:text-[16px] text-[10px] text-[#707070] font-medium whitespace-nowrap text-center mb-1 md:mb-0">
                    Produce successful product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LIST */}
          <div className="bg-black w-full md:px-32 ">
            <div className="flex md:flex-row flex-col   md:justify-evenly py-20">
              {/* Title Section */}
              <div className="mb-20 md:mb-0 text-center z-50 me-10 md:me-0">
                <p className="text-orange  md:-ml-20 ml-9 md:text-start md:text-[48px] text-3xl font-extrabold md:w-[508px] w-[90%]  leading-tight">

                  Exclusive Perks of Joining the Valueklip Tech Community
                </p>
              </div>

              {/* List Section */}
              <div className="text-white ml-5  md:w-[500px] md:ml-30 w-[91%]">
                <ul className="md:w-[650px]">
                  <li>
                    <CommunityList
                      title={"Paid Gig:"}
                      description={
                        "Get instant access to exciting, flexible short-term job placements with global companies. Whether it’s an SME, a tech startup, or a large organization, these opportunities are available to you as a member of the Valueklip Tech Community (VTC)."
                      }
                    />
                  </li>
                  <li>
                    <CommunityList
                      title={"External Gig Collaboration:"}
                      description={
                        "Work together with fellow VTC members to complete personal gigs and projects. If you land a gig and need extra skilled hands, reach out to a fellow VTC member to support you in delivering swiftly."
                      }
                    />
                  </li>
                  <li>
                    <CommunityList
                      title={"Corporate-facilitated Gig:"}
                      description={
                        "Need a professional touch for personal gigs? Leverage Valueklip Limited’s brand, letterhead, and bank account to give your project the credibility it needs, helping you close deals with confidence and ease."
                      }
                    />
                  </li>
                  <li>
                    <CommunityList
                      title={"Startup Incubation:"}
                      description={
                        "Turn your idea into reality. With VTC support and expert advice, you’ll be able to build and launch your minimum viable product (MVP)."
                      }
                    />
                  </li>
                  <li>
                    <CommunityList
                      title={"Career Guidance and Skill Development:"}
                      description={
                        "Grow your skills and boost your career with free access to mentorship, courses, certifications, boot camps, and tech meetups. You can also participate in hackathons, code jams, and more to sharpen your skills and stay ahead in the tech world."
                      }
                    />
                  </li>
                  <li>
                    <CommunityList
                      title={"Leadership Opportunity:"}
                      description={
                        "Take charge and lead! The Valueklip Tech Community allows you to lead like-minded individuals and make a real impact. Use your leadership to drive innovation and help shape the future for millions of people."
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full py-20 px-10 md:h-[793px] ">
            <div className="absolute top-[1670px]  left-64">
              <div className="md:block hidden">
                <img
                  src={`/Vector41.png`}
                  className="w-[1084px] h-[400px]"
                  alt=""
                />
              </div>
              {/* TODO */}
              <div className="md:hidden hidden">
                <img
                  src={`/Vector41-mobile.png`}
                  className="w-[1084px] h-[553px] "
                  alt=""
                />
              </div>
            </div>

            {/* REQUIREMENTS */}

            <div className="flex md:top-0   md:flex-row flex-col justify-between items-center  text-white py-16 md:px-24">
              {/* Title Section */}
              <div className=" font-extrabold -mt-20 md:mt-0 w-[90%] md:w-[]  md:text-[48px] mb-44 md:mb-0 text-[34px]  text-black leading-tight ">
                <p>Requirements to join the Valueklip Tech Community</p>
              </div>

              {/* List Section */}
              <div className=" relative md:ml-10 -top-20 md:top-0">
                <ul className="space-y-6 font-[600] md:font-[400]  text-black leading-relaxed">
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
                    Willingness and commitment to participate in unpaid
                    volunteer projects.
                  </li>
                  <li className="flex items-start">
                    <span className=" font-bold mr-3">✓</span>
                    Commitment to continuous learning and active participation
                    in community events.
                  </li>
                  <li className="flex items-start">
                    <span className=" font-bold mr-3">✓</span>
                    Open to collaborating with other community members on
                    projects and gigs.
                  </li>
                  <li className="flex items-start">
                    <span className=" font-bold mr-3">✓</span>
                    Agrees with and accepts the membership rules and guidelines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </PagesLayout>
  );
};
