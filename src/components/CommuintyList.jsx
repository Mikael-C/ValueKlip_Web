import React from "react";

export const CommunityList = ({ title, description }) => {
  return (
    <div className="flex items-start md:space-x-4 space-x-3 mb-6 text-white">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <div className="md:w-8 md:h-8 w-6 h-6 flex items-center justify-center bg-gray-500 rounded-full mt-1 md:mt-0">
          <span className="text-white text-lg">
            <img src="/Vector4.svg" alt="" />
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <span className="md:text-orange text-[#0A5B9A] md:font-[400] font-semibold">
          {title}{" "}
        </span>
        <span className="md:text-white text-[#707070] font-[400]">
          {description}
        </span>
      </div>
    </div>
  );
};
