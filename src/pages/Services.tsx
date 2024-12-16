import React from "react";
import { ServicesCards } from "../components/ServicesCards";
import { PagesLayout } from "../layout/PagesLayout";

export const Services = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <>
        {/* Hero Section */}
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
            <p className="text-secondary text-[24px] uppercase font-semibold mb-2">
              + Our Services
            </p>
            <h1 className="text-4xl md:text-[64px] w-[553px] font-semibold leading-[70px] mb-4">
              Build, Scale, and <br /> Innovate with{" "}
              <span className="text-primary">Valueklip</span>
            </h1>
            <p className="text-[#707070] text-sm mb-6 max-w-lg">
              We offer tailored tech solutions—from custom software development
              and talent augmentation to expert technology advisory and
              consulting—that drive your business forward.
            </p>
            <button className="bg-secondary text-white px-6 py-2 font-bold rounded-lg">
              Start Now
            </button>
          </div>

          {/* Blue Rectangle Behind the Woman */}
          <div className="absolute top-0 right-96 w-[383px] h-[580px] bg-secondary z-0 rounded-lg hidden md:block"></div>

          {/* Woman Image */}
          <div className="absolute top-20 right-72 z-10 hidden md:block">
            <img
              src="/medium-shot-woman-working-as-lawyer.png"
              alt="Professional Woman"
              className="w-[480px] h-auto"
            />
          </div>

          {/* White Badge: 35+ Years of Industry Experience */}
          <div className="absolute top-60 left-[550px] w-[240px] h-[83px] z-20 hidden md:block">
            <div className="bg-white  flex flex-col items-center justify-center gap-7 text-black rounded-md shadow-lg px-4 py-4 text-center">
              <p className="text-[40px] font-medium leading-[16.32px] ">35+</p>
              <p className="text-[16px] text-[#707070] font-medium leading-[16.32px] whitespace-nowrap text-left">
                Years of Industry Experience
              </p>
            </div>
          </div>

          {/* Circular Image ("From Africa to the World") */}
          <div className="absolute top-8 right-32 z-20 hidden md:block">
            <div className="w-[80px] h-[80px] rounded-full border-[1px] border-[#D7BDBD4F] flex items-center justify-center ml-10 mt-16 bg-black">
              <img
                src="/Ellipse.png"
                alt="From Africa to the World"
                className="w-[64px] h-[64px] rounded-full m"
              />
            </div>
            <p className="text-[16px] mt-1 text-[#707070] text-center  font-bold">
              From Africa to the World
            </p>
          </div>
        </div>
        <div className="relative  bg-black px-10">
          <div className="flex flex-row h-[1000px]">
            <div className="p-2 bg-[#121111] w-[45%] h-full"></div>

            <div className="p-2 bg-[#323232] w-[55%] h-full"></div>
            <div className="p-2 bg-[#121111] z-40 w-[300px] absolute -top-28 left-[68%]   hidden md:block h-[1150px]"></div>

            <div className="absolute -top-32 inset-0 flex justify-center items-center z-50">
              <ul className="space-y-4 text-center">
                <div className="flex flex-col md:flex-row space-x-10">
                  <li>
                    <ServicesCards
                      icon={"/persons.svg"}
                      serviceTitle={"Staff Augmentation"}
                      serviceDescription={
                        "Get instant access to skilled tech professionals  with expertise in Machine Learning, AI, Data,  Blockchain, Cybersecurity, and more. We help  you scale your team quickly by deploying topvetted talent for specific projects or to meet  deadlines. You manage day-to-day operations  while we handle recruitment, onboarding, and  compliance, ensuring seamless integration into  your existing team."
                      }
                    />
                  </li>
                  <li className="relative -top-12">
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
                <div className="flex flex-col md:flex-row space-x-10">
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
