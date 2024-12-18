import React from 'react';

import { PagesLayout } from "../layout/PagesLayout";
import "./Home.css"

export const AboutUs = () => {
  return (
    <PagesLayout isNavbarDark={false}>
      <>
        {" "}
        <div className="relative bg-white text-black h-[700px] font-raleway">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full ">
            <img
              src="/rb1.png"
              alt="Background"
              className="opacity-50 w-full h-[700px] "
            />
          </div>

          {/* Content */}
          <div className=" grid place-items-center h-scree">
            
            
            <h1 className="center text-4xl md:text-[64px] w-[px] font-semibold leading-[70px] mb-4">
              <p>Meet the team </p>
              
            </h1>
            <p className="text-[#707070] text-sm mb-6 w-[300px] h-[38px] justify-center">
            35+ years of  cumulative industry experience in driving  business growth in Africa.
            </p>
         
            <button className="bg-secondary text-white px-6 py-2 font-bold rounded-lg">
             Contact Us Now!
            </button>
          </div>

          {/* Blue Rectangle  */}
          <div className="flex top-0 right-60 w-[960px] h-[580px] z-0 rounded-lg hidden md:block ml-40 mt-20">
          <img
              src="/Group71.svg"
              alt="Professional Woman"
              className="w-[960px]"
            />
          </div>
          {/* <div className="absolute left-[76%] top-[500px]">
            <img src="/Group59.png" alt="" />
          </div> */}
          {/* Hands Image */}
          {/* <div className="absolute top-0 right-24 z-20 hidden md:block">
            <img
              src="/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763142-removebg-preview.png"
              alt="Professional Woman"
              className="w-[733px] h-[449px]"
            />
          </div> */}

          {/* White Badge */}
          {/* <div className="absolute top-72 left-[640px] w-[240px] h-[83px] z-10 hidden md:block">
            <div className="bg-white  flex flex-col items-center justify-center gap-7 text-black rounded-md shadow-lg px-4 py-10 text-center">
              <p className="text-[40px] font-medium leading-[16.32px] ">
                Join Us
              </p>
            </div>
          </div> */}
        </div>
        <div  className=' w-full h-[200px] items-center justify-center text-center'>
            <h1 className='w-[1000px] ml-40 text-5xl h-[98px] mb-20 mt-20 '>
            Our Founders’ Experience  Solving Business Problems with  Innovative Technology
            </h1>
            
            <p className=' text-[15px] ml-80 nb-50 justify-center w-[662px] h-[106px] l-[106px] t-[868px] text-center ml-40'>
            Our Vice President of Engineering co-built a  software application with over 1 million users for  one of the leading commercial banks in Nigeria.  Our leadership team brings a combined experience  of 35+ years across Fintech,  Logistics/Transportation, Education, Retail  Banking, and Insurance, along with a history of  founding tech startups (Agritech, Bus-hailing,  Social Networking) in Nigeria. This diverse  experience equips us with valuable market  insights and a deep understanding of how to tackle  the unique challenges faced by businesses in  Africa and beyond
            </p>
            </div>

        <div className="w-full py-20 px-10 h-[900px] ">
          
       
          <div className="absolute top-[1085px]  h-[500px]left-64 mt-60 ml-10 " >
            <div>
              <img
                src="/Vector41.svg"
                alt=""
                 className="w-[1084px] h-[500px]  mr-50"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center  text-white py-16 px-24 mt-30">
            {/* Title Section */}
            <div className=' mr-[30px] mt-30'>
              <p className= ' text-[40px] w-[392px] text-black mt[20px] font-raleway'>Experience the Valueklip Effect</p>
              <p className='text[10px] w-[350px] text-[#707070]'>When you work with us, you will see our  core values in action. From visionary  thinking to agile solutions, and listening to  clients, the Valueklip Effect drives our  mission to empower businesses with  innovative technology solutions.</p>
            </div>
            

            {/* List Section */}
            <div className='w-[900px] mt-40 mr-30'>
            <img
                src="/Frame5.svg"
                alt=""
                 className="w-[1000px] h-[327px]"
              />
            </div>
          </div>
          
        </div>
        <div className=' relative  h-[327px] bg-[#B8CCFF0D]'>
          <img
                src="/Frame16.svg"
                alt=""
                 className="w-[977px] h-[327px]  ml-20"
              />

          </div>
      </>
    </PagesLayout>
  );
};
