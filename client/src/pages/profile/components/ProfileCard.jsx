import React from "react";
import SampleLogo from '../../../assets/tamilLogo.png'
export const ProfileCard = () => {
  const currentXP = 230;
  const totalXP = 600;
  const progress = (currentXP / totalXP) * 100;

  return (
    <div className="w-[600px] h-[300px] bg-white rounded-lg border border-gray-200 p-8 flex items-center gap-8 text-grey shadow-lg">
      
      {/* Avatar */}
      <div className="w-48 h-48 rounded-full border border-gray-200  bg-white flex items-center justify-center overflow-hidden">
        <img
          src={SampleLogo} 
          alt="Avatar"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-light">சந்தியா</h1>
        {/* Subtitle */}
        <p className="text-xl text-gray-500 mt-2">
          தமிழ் பயில்வாளர்
        </p>
        {/* Level Badge */}
        <div className="inline-block bg-gray-200 text-black rounded-full px-8 py-2 mt-4 text-2xl">
          நிலை 8
        </div>

        <div className="flex justify-between mt-8 text-xl">
          <span className="text-gray-500">XP முன்னேற்றம்</span>
          <span>230/600</span>
        </div>

        <div className="w-full h-6 bg-gray-300 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-orange-600 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
