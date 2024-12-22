import React from "react";

export const AboutList = ({ title, description }) => {
  return (
    <div className="flex items-start  text-white mr[200px] ">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <div className="md:w-8 md:h-8 w-6 h-6 flex items-center justify-center bg-[#D9D9D969] rounded-full mt-1 md:mt-0">
          <span className="text-white text-lg">
            <img src="/Vector5.svg" alt="" />
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="mr-[200px]">
        <span className="md:text-orange text-[#0A5B9A] md:font-[400] font-semibold">
          {title}{" "}
        </span>
        <span className="md:text-black text-[#707070] font-[12px]">
          {description}
        </span>
      </div>
    </div>
  );
};
