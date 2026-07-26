import React, { useState, useEffect } from "react";
import User from '../../../assets/user.png'

export const ProfileCard = ({user}) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("Loading...");
  const [email, setEmail] = useState("")
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFullName(user.fullName);
      setEmail(user.email);
    }
    
  }, [user]);
  return (
    <div className="h-full w-full flex flex-col items-center gap-4 p-4 border border-gray-200 shadow-lg rounded-lg ">
      {/* Profile Image */}
      <img
        src={User}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* User Details */}
      <div  className="flex flex-col items-center text-center space-y-2" >
        <h2 className="text-lg font-semibold">{username}</h2>
        <p className="text-gray-700">{fullName}</p>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
    </div>
  );
};
