import React from "react";

export const ServicesCards = ({icon ,serviceTitle ,serviceDescription}) => {
  return (
    <div className="bg-black w-[300px]   flex flex-col p-4 rounded-lg shadow-lg relative ">
      <div className="absolute -top-3 left-24 p rounded-full">
        <img src="/Vector42.svg" alt="Icon"  />
      </div>

      <div className="mt-4">
        <div className="absolute top-7 left-4">
          <img src={icon} alt="Person" width={55} />
        </div>

        <div className="mt-20 text-start text-white space-y-2">
          <p className="text-2xl font-semibold">{serviceTitle}</p>
          <p className="text-[9px] font-bold  text-[#707070] ">
           {serviceDescription}
          </p>
        </div>

        <button className="mt-3 me-52 bg-orange text-black py-1 rounded-lg text-[10px] font-bold w-[70px] ">
          Get Started
        </button>
      </div>
    </div>
  );
};
