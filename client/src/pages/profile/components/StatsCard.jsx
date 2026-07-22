import React from "react";

export const StatsCard = ({ icon, title, value, label }) => {
  return (
    <div className="w-64 h-[300px] bg-white rounded-lg border border-gray-200  flex flex-col items-center justify-center text-grey shadow-lg">
      {/* Icon */}
      <div className="text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-medium text-center px-6">
        {title}
      </h2>

      {/* Value */}
      <h1 className="text-4xl font-light mt-10">
        {value}
      </h1>

      {/* Label */}
      <p className="text-xl text-gray-500 mt-4">
        {label}
      </p>
    </div>
  );
};