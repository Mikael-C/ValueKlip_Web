import React from "react";

export const CommunityList = ({ title, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-6 text-white">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full">
          <span className="text-white text-lg"><img src="/Vector4.svg" alt="" /></span>
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <span className="text-orange font-bold">{title}</span>{" "}
        <span className="text-gray-300">{description}</span>
      </div>
    </div>
  );
};
