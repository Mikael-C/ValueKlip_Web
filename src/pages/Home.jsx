import React from "react";
import "./Home.css";
import { PagesLayout } from "../layout/PagesLayout";

export const HomePage = () => {
  return (
    <PagesLayout isNavbarDark={true}>
      <div>
        <main>
          <section className="paq">
            <div>
              <h1 class="one">Design, build and launch</h1>
              <h1 class="two">
                your custom software
                <span className="three">product faster</span>
              </h1>
              <span className="four">
                Transform your ideas into a market-ready product.
              </span>
              <div className="learn">
                <a href="#" target="_blank" className="learn_link">
                  Learn More{" "}
                </a>
                <svg
                  width="13"
                  height="6"
                  viewBox="0 0 13 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500977 2.5C0.224834 2.5 0.000976562 2.72386 0.000976562 3C0.000976562 3.27614 0.224834 3.5 0.500977 3.5V2.5ZM6.83431 3C6.83431 4.47276 8.02822 5.66667 9.50098 5.66667C10.9737 5.66667 12.1676 4.47276 12.1676 3C12.1676 1.52724 10.9737 0.333333 9.50098 0.333333C8.02822 0.333333 6.83431 1.52724 6.83431 3ZM0.500977 3.5H9.50098V2.5H0.500977V3.5Z"
                    fill="url(#paint0_linear_151_1421)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_151_1421"
                      x1="0.500977"
                      y1="3.5"
                      x2="9.50098"
                      y2="3.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </section>

          <section className="second">
            <div className="paq1">
              <div className="image_container div1"></div>
              <div className="div2">
                <div className="sub_container">
                  <h1 className="title">
                    Full-service Software <br />
                    Development
                  </h1>
                  <p className="desc">
                    Transform your ideas into a market-ready product. Whether
                    you need a web, mobile, or enterprise application, we’ve got
                    you covered! Our expert engineering team will work closely
                    with you from planning to launch bringing your vision to
                  </p>
                  <div className="get-started">
                    <a href="#" target="_blank" className="get_link">
                      Get Started
                    </a>
                  </div>
                  <h2 className="work_title1">How it works</h2>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">Contact Us: </span>Get started
                      by filling out a brief form to connect with us and kick
                      off your software development project.
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">
                        Discovery Call and Need Identification:{" "}
                      </span>
                      We will discuss your needs in detail to understand your
                      goals and ensure we are aligned on the project’s scope.
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">
                        Send Us Your Product Brief:{" "}
                      </span>
                      Provide us with your product brief, outlining your
                      objectives and product specifications to guide the
                      development process.
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">Contract Signing: </span>We
                      will finalize the agreement and ensure all terms are clear
                      before moving forward with development.
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">Product Development: </span>
                      Our team handles user research, planning, information
                      architecture design, UI design, coding, testing,
                      deployment, and quality assurance .
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">
                        Product Adoption Support:{" "}
                      </span>
                      After deployment, we offer support to help your team adopt
                      the product and ensure smooth operation.
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">
                        Client Acceptance and Sign-Off:{" "}
                      </span>
                      Once satisfied, you will sign off on the product,
                      officially completing the development phase
                    </p>
                  </div>
                  <div className="arrow_container">
                    <div className="arrow">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                    <p className="work_desc">
                      <span className="sub_title">Product Maintenance: </span>We
                      offer ongoing maintenance, including performance
                      monitoring and optimization, bug fixing, security updates,
                      and feature enhancements to keep your product running
                      smoothly .
                    </p>
                  </div>
                </div>
                <br />

                <div className="work">
                  <img src="/Vector3.png" alt="Background" className="z-50 " />

                  <div className="arrow_container"></div>
                </div>

                <div>
                  <img
                    src="/Maskgroup2.png"
                    alt="Background"
                    className=" ml-50 h-80 mt-10 z-50"
                  />
                </div>
                <div className="mt-35">
                  <img
                    src="/Maskgroup3.png"
                    alt="Background"
                    className="z-50 w-30 mr-55 mt- h-80"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="relative bg-black text-white h-[900px] font-raleway">
            <div className="today">
              <div className="image1">
                <p className="eclipse">Try Us Today!</p>
                <div className="elipse  mb-50s"></div>
              </div>

              <div className="top">
                <h1 className="h1">
                  Why We Are The <br />
                  Best For You
                </h1>
                <p className="desc">
                  We understand what it takes to build successful products. One
                  of our founders co-founded and launched three (3) technology
                  startups; a social network app with 15,000+ users in 26
                  countries, a bus-hailing app that completed 100,000+ trips and
                  generated over US$1.6 million in gross bookings within 18
                  months, and an Agritech startup that won a US$5,000 grant,
                  while securing over US$150,000 in investor funding across
                  ventures. With this proven track record, we bring firsthand
                  experience, deep expertise, and a results-driven
                </p>
                <button className=" ml-10 mt-40 bg-orange text-black px-6 py-2 font-bold rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="relative bg-white text-black h-[600px] font-raleway">
            <div className="div_fourth">
              <div>
                <h1 className="title">Team-as-a-Service</h1>
                <p className="desc_fourth">
                  Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and
                  more. We help companies build and manage Africa-based remote
                  teams without the hassle of hiring, onboarding, or managing
                  day-to-day operations. We handle everything—from recruitment
                  and remuneration to performance management and even setting up
                  physical workspaces if needed.
                </p>
                <div className="get-started">
                  <a href="#" target="_blank" className="get_link">
                    Get Started
                  </a>
                </div>
                <h2 className="work_title4">How it works</h2>
                <div className="arrow_container">
                  <div className="arrow">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <p className="work_desc">
                    <span className="sub_title"> Initial Screening: </span>We
                    conduct an initial screening of applicants based on their
                    resumes to ensure their skills, experience, and
                    qualifications align with our quality standards.
                  </p>
                </div>
                <div className="arrow_container">
                  <div className="arrow">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <p className="work_desc">
                    <span className="sub_title">Technical Assessment: </span>
                    Talents undergo a rigorous technical assessment to evaluate
                    their skills and expertise in key technologies. .
                  </p>
                </div>
                <div className="arrow_container">
                  <div className="arrow">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <p className="work_desc">
                    <span className="sub_title">
                      Non-Technical Assessment:{" "}
                    </span>
                    We assess talents for soft skills like communication,
                    problem-solving, and adaptability to ensure team fit. .
                  </p>
                </div>
                <div className="arrow_container">
                  <div className="arrow">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <p className="work_desc">
                    <span className="sub_title">Culture-fit Interview: </span>We
                    conduct a culture-fit interview to ensure the talents align
                    with your company’s values and work environment .
                  </p>
                </div>
              </div>
              <div className="fourt_image">
                <div>
                  <h1 className="w-406 h-135 text-6xl">
                    Building team that drives
                  </h1>
                </div>
                <div className="mt-10">
                  <img src="/Result1.png" alt="Background" className=" " />
                </div>
                <div className="mt-10">
                  <img src="/Vector.png" alt="Background" className=" " />
                </div>
              </div>
            </div>
          </div>

          <div className="sixth">
            <div className="div_sixth">
              <div>
                <h1 className="title_sixth">Microservices</h1>
                <p className="desc_sixth">
                  Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and
                  more. We help companies build and manage Africa-based remote
                  teams without the hassle of hiring, onboarding, or managing
                  day-to-day operations. We handle everything—from recruitment
                  and remuneration to performance management and even setting up
                  physical workspaces if needed.
                </p>
                <div className="get-started1">
                  <a href="#" target="_blank" className="get_link">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="sixth-image">
                <img
                  src="/Maskgroup4.png"
                  alt="Background"
                  className=" z-50 ml-40 h-50 ml-50"
                />
              </div>
              <div>
                <img
                  src="/Maskgroup5.png"
                  alt="Background"
                  className="z-50 mt-40 relative h-50"
                />
              </div>
              <div></div>
            </div>
          </div>

          <div className="relative bg-black text-white h-[900px] font-raleway">
            <div className="div_seventh"></div>
          </div>
        </main>
      </div>
    </PagesLayout>
  );
};
