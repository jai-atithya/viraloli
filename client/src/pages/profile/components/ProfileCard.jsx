import React, { useState, useEffect } from "react";
import Logo from '../../../assets/tamilLogo.png'
import { useAuth } from "../../../context/AuthContext";

export const ProfileCard = () => {
  const { user, authDataLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("Loading...");
  const [email, setEmail] = useState("")
  useEffect(() => {
    if (!authDataLoading && user) {
      setUsername(user.username);
      setFullName(user.fullName);
      setEmail(user.email);
    }
    
  }, [authDataLoading, user]);
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
        <h2 className="text-lg font-semibold">{username}</h2>
        <p className="text-gray-700">{fullName}</p>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
    </div>
  );
};