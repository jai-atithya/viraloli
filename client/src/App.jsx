import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { TypeEngine } from "./typeEngine/TypeEngine";
import { TypingTest } from "./pages/typingTest/TypingTest";
import { Auth } from "./pages/auth/Auth";
import { Unit } from "./pages/unit/Unit";
import { Profile } from "./pages/profile/Profile";
import { Lessons } from "./pages/lessons/Lessons";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <LanguageProvider>
            <Routes>
              {/* <Route path="/url" element={<element />} /> */}
              <Route path="*" element={<div className="w-screen h-screen flex justify-center items-center"><h1>404 NOT FOUND</h1></div>} />
              <Route path="/" element={<TypingTest />} />
              <Route path="/auth" element={<Auth />} />
              {/* <Route path="/engine" element={<TypeEngine />} /> */}
              <Route path="/units" element={<Unit />} />
              <Route path="/units/:unitNumber/:lessonNumber" element={<Lessons />} />
              <Route path="/profile/:username" element={<Profile />} />
            </Routes>
            </LanguageProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;