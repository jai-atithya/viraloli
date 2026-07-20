import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { TypeEngine } from "./typeEngine/TypeEngine";
import { TypingTest } from "./pages/typingTest/TypingTest";
import { Auth } from "./pages/auth/Auth";
import { Unit } from "./pages/unit/Unit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/url" element={<element />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/" element={<TypingTest />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/engine" element={<TypeEngine />} />
          <Route path="/units" element={<Unit />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;