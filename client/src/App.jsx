import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { TypeEngine } from "./typeEngine/TypeEngine";
import { TypingTest } from "./pages/typingTest/TypingTest";
import { Auth } from "./pages/auth/Auth";
import { Unit } from "./pages/unit/Unit";
import { Profile } from "./pages/profile/Profile";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              {/* <Route path="/url" element={<element />} /> */}
              <Route path="*" element={<div className="w-screen h-screen flex justify-center items-center"><h1>404 NOT FOUND</h1></div>} />
              <Route path="/" element={<TypingTest />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/engine" element={<TypeEngine />} />
              <Route path="/units" element={<Unit />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;