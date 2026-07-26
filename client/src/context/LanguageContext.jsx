// HOW TO USE IT
// import { useLanguage } from "../context/LanguageContext";
// const { language, setLanguage, languages } = useLanguage();
// <select
//   value={language}
//   onChange={(e) => setLanguage(e.target.value)}
// >
//   {languages.map((lang) => (
//     <option key={lang} value={lang}>
//       {lang}
//     </option>
//   ))}
// </select>
// <button onClick={() => setLanguage("English")}>English</button>
// <button onClick={() => setLanguage("Tamil")}>Tamil</button> 

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const languages = ["English", "Tamil"];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "English";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);