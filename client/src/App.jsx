import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/url" element={<element />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;