import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { TypeEngine } from "./typeEngine/TypeEngine";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/url" element={<element />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/" element={<TypeEngine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;