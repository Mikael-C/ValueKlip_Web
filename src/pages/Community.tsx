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
            <div className="absolute top-0 left-0 w-full ">
              <img
                src="/bg.png"
                alt="Background"
                className="opacity-50 w-full h-[600px] "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-24">
              <p className="text-secondary uppercase text-[24px] font-normal mb-2">
                + Our Services
              </p>
              <h1 className="text-4xl md:text-[64px] w-[553px] font-semibold leading-[70px] mb-4">
                <span className="text-primary">Elevate Your </span>
                Career
              </h1>
              <p className="text-[#707070] text-[14px] font-normal mb-6 max-w-lg">
                Join Valueklip Tech Community to access global paid gigs,
                mentorship, courses, leadership opportunities, career
                development, and create innovative solutions that impact
                millions of lives.
              </p>
              <button className="bg-secondary text-white px-6 py-2 font-bold rounded-lg">
                Join now
              </button>
            </div>

            {/* Blue Rectangle Behind the men */}
            <div className="absolute top-0 right-80 w-[383px] h-[600px] bg-secondary z-0 rounded-lg hidden md:block"></div>

            {/* men Image */}
            <div className="absolute top-10 right-10 z-10 hidden md:block">
              <img
                src="/confident-businessman-smiles-city-night-generated-by-ai.png"
                alt="Professional Men"
                className="w-[580px] h-auto z-50"
              />
            </div>

            {/* White Badge: 35+ Years of Industry Experience */}
            <div className="absolute top-[280px] left-[620px] w-[290px]   hidden md:block">
              <div className="bg-white  flex flex-col items-center justify-center  text-black rounded-md  px-2 text-center">
                <p className="text-[40px] font-normal  ">Great Team</p>
                <p className="text-[16px] text-[#707070] font-medium  whitespace-nowrap text-center">
                  Produce successful product
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black w-full px-32">
            <div className="flex flex-row justify-evenly py-20">
              {/* Title Section */}
              <div className="mt-20">
                <p className="text-orange text-[48px] font-extrabold w-[508px] leading-tight">
                  Exclusive Perks of Joining the Valueklip Tech Community
                </p>
              </div>

              {/* List Section */}
              <div className="text-white w-[600px] ml-40">
                <ul>
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
          <div className="w-full py-20 px-10 h-[793px]">
            <div className="absolute top-[1805px]  left-64">
              <div>
                <img src="/Vector41.png" className="w-[1084px] h-[400px]" alt="" />
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
