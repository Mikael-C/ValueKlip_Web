import React from "react";
import { ServicesCards } from "../components/ServicesCards";
import { PagesLayout } from "../layout/PagesLayout";

export const Services = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        {/* Hero Section */}
        <div className="relative bg-black text-white md:h-[600px] h-[690px] font-raleway">
          {/* Background Image */}
          <div className="absolute top-0  left-0 w-full ">
            <img
              src="/bg.png"
              alt="Background"
              className="opacity-80 w-full h-[700px] "
            />
          </div>
          {/* Mobile Screen Vector */}
          <div className="md:hidden">
            <img
              src="/Vector44.png"
              className="absolute z-40 left-48 h-[547px]"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Rectangle3.png"
              className="absolute mt-96 w-full"
              alt=""
            />
          </div>
          {/* Content */}
          <div className="relative text-center md:text-left  z-10 container mx-auto px-6 py-24">
            <p className="text-secondary  md:text-[24px] text-[15px]  uppercase font-normal mb-2">
              + Our Services
            </p>
            <h1 className="text-5xl md:text-[64px] font-semibold md:w-[553px] leading-[60px] md:leading-[70px] mb-2 md:mb-4">
              <span className="bg-gradient-to-t from-secondary  to-black md:bg-none bg-opacity-15 md:bg-opacity-100  px-2">
                Build, Scale,
              </span>
              and
              <br /> Innovate with{" "}
              <span className="text-primary font-bold">Valueklip</span>
            </h1>

            <p className="text-[#707070] md:w-[374px]  text-sm mb-6 ">
              We offer tailored tech solutions—from custom software development
              and talent augmentation to expert technology advisory and
              consulting—that drive your business forward.
            </p>
            <button className="bg-secondary  text-white px-6 py-2 font-bold rounded-lg">
              Start Now
            </button>
          </div>

          {/* Blue Rectangle Behind the Woman */}
          <div className="absolute top-0 right-96 w-[383px] h-[580px] bg-secondary z-30 rounded-lg hidden md:block"></div>

          {/* Woman Image */}
          <div className="absolute top-20 right-72 z-40 hidden md:block">
            <img
              src="/medium-shot-woman-working-as-lawyer.png"
              alt="Professional Woman"
              className="w-[480px] h-auto"
            />
          </div>

          {/* White Badge: 35+ Years of Industry Experience */}
          <div className=" -rotate-12 md:rotate-0 absolute md:top-60 top-[570px] z-40 md:left-[550px] md:w-[240px] md:h-[83px] w-[130px] h-[33px] left-[150px]   md:block">
            <div className="bg-white  flex flex-col items-center justify-center md:gap-7 gap-2 text-black rounded-md shadow-lg px-4 md:py-4  text-center">
              <p className="md:text-[40px] text-[22px] font-medium leading-[16.32px] ">
                35+
              </p>
              <p className="md:text-[16px] text-[10px] text-[#707070] font-medium leading-[16.32px] whitespace-nowrap text-left">
                Years of Industry Experience
              </p>
            </div>
          </div>

          {/* Circular Image ("From Africa to the World") */}
          <div className=" -rotate-12 md:rotate-0 absolute md:top-8 md:right-32 top-1 left-40 md:left-96 z-20   ">
            <div className="md:w-[80px] md:h-[80px] w-10 h-10  rounded-full border-[1px] border-[#D7BDBD4F] flex items-center justify-center ml-10 md:ml-[750px] md:mt-16 -mt-14 bg-black">
              <img
                src="/Ellipse.png"
                alt="From Africa to the World"
                className="md:w-[64px] md:h-[64px] w-8 h-8 rounded-full "
              />
            </div>
            <p className="md:text-[16px]  text-[8px] mt-1 text-[#707070] text-center ml-4 md:ml-[690px]  font-bold">
              From Africa to the World
            </p>
          </div>
        </div>
        <div className="relative  bg-black px-10">
          <div className="flex flex-row md:h-[1000px] h-[2270px]">
            <div className="p-2 bg-[#121111] w-[45%] h-full"></div>

            <div className="p-2 bg-[#323232] w-[55%] h-full"></div>
            <div className="p-2 bg-[#121111] z-40 md:w-[300px] w-[170px] absolute md:-top-28 md:left-[68%]  left-[40%] -top-10     md:block md:h-[1150px] h-[2340px]"></div>

            <div className="absolute md:-top-32  inset-0 flex justify-center items-center z-50">
              <ul className="space-y-4 text-center">
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
                  <li>
                    <ServicesCards
                      icon={"/persons.svg"}
                      serviceTitle={"Staff Augmentation"}
                      serviceDescription={
                        "Get instant access to skilled tech professionals  with expertise in Machine Learning, AI, Data,  Blockchain, Cybersecurity, and more. We help  you scale your team quickly by deploying topvetted talent for specific projects or to meet  deadlines. You manage day-to-day operations  while we handle recruitment, onboarding, and  compliance, ensuring seamless integration into  your existing team."
                      }
                    />
                  </li>
                  <li className="relative md:-top-12">
                    <ServicesCards
                      icon={"/persons.svg"}
                      serviceTitle={"Out staffing"}
                      serviceDescription={
                        "Build and manage remote teams with ease. We  take care of everything—from hiring and  onboarding to performance management and  payroll—so you can focus on acquiring  customers, managing operations, and driving  revenue growth. Whether you need software  engineers, product designers, product managers,  or other experts, we provide highly skilled African  tech talent that seamlessly integrates into your  team."
                      }
                    />
                  </li>
                  <li>
                    <ServicesCards
                      icon={"/blocks.svg"}
                      serviceTitle={"Product Design"}
                      serviceDescription={
                        "Transform your ideas into a visually appealing  product that stands out in the market. Whether you  are launching a new product or upgrading an  existing one, our team of designers will work  closely with you to create user-friendly interfaces,  engaging visuals, and seamless interactions that  enhance user experience and drive conversions."
                      }
                    />
                  </li>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
                  <li>
                    <ServicesCards
                      icon={"/earth.svg"}
                      serviceTitle={"Web Application Development"}
                      serviceDescription={
                        "Get instant access to skilled tech professionals  with expertise in Machine Learning, AI, Data,  Blockchain, Cybersecurity, and more. We help  you scale your team quickly by deploying topvetted talent for specific projects or to meet  deadlines. You manage day-to-day operations  while we handle recruitment, onboarding, and  compliance, ensuring seamless integration into  your existing team."
                      }
                    />
                  </li>
                  <li>
                    <ServicesCards
                      icon={"phone-icon.svg"}
                      serviceTitle={"Mobile Application  Development"}
                      serviceDescription={
                        "We create a unique mobile experience that stands  out in a crowded marketplace. From idea to  launch, we will work closely with you to  transform your ideas into a revenue-generating  mobile app. Whether you need an iOS app, an  Android app, or a cross-platform solution, our  team will deliver an app that engages users and  drives results."
                      }
                    />
                  </li>
                  <li>
                    <ServicesCards
                      icon={"/building.svg"}
                      serviceTitle={"Enterprise Application  Development"}
                      serviceDescription={
                        "Streamline operations, integrate core business  activities, and maximize profitability with a  custom enterprise application. At Valueklip, we  develop ERP solutions that centralize data,  optimize workflows, and provide actionable  business insights. Our tailored applications adapt  to your business's evolving needs, giving you a  competitive edge in today's dynamic market"
                      }
                    />
                  </li>
                </div>
                <div className="flex items-start justify-center">
                  <li>
                    <ServicesCards
                      icon={"fix.svg"}
                      serviceTitle={"Post-development Maintenance"}
                      serviceDescription={
                        "We provide technical support to ensure your  software runs smoothly and stays secure. Our  dedicated team of experts proactively monitors,  updates, and optimizes your software to maintain  its stability, security, and performance over time."
                      }
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    </PagesLayout>
  );
};
