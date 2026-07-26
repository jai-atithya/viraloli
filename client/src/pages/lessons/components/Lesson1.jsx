import React from "react";

export const Lesson1 = ({ title, description, video, onComplete }) => {
  return (
    <div className="h-full flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="text-gray-700 mb-6">
        {description}
      </p>

      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <video
          controls
          className="h-full w-auto rounded-lg shadow-lg"
          onEnded={onComplete}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};