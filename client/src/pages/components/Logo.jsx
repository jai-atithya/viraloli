// Logo.jsx
import React from "react";
import tamilLogo from "../../assets/tamilLogo.png";
import englishLogo from "../../assets/englishLogo.png";

export const Logo = () => {
  const isTamil = true;

  return (
    <>
      {isTamil && (
        <img
          src={tamilLogo}
          alt="Tamil Logo"
          className="h-full w-auto object-contain"
        />
      )}

      {!isTamil && (
        <img
          src={englishLogo}
          alt="English Logo"
          className="h-full w-auto object-contain"
        />
      )}
    </>
  );
};