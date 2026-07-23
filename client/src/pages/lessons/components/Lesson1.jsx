import React from "react";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const Lesson1 = ({ title, description, video }) => {
  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="text-gray-700 mb-6">
        {description}
      </p>

      <video
        controls
        className="w-full h-full rounded-lg shadow-lg"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};