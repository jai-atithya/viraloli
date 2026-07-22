import React from "react";
import Logo from '../../../assets/tamilLogo.png'

export const ProfileCard = () => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg ">
      {/* Profile Image */}
      <img
        src={Logo}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* User Details */}
      <div>
        <h2 className="text-lg font-semibold">userName</h2>
        <p className="text-gray-700">Full Name</p>
        <p className="text-gray-500 text-sm">email@example.com</p>
      </div>
    </div>
  );
};