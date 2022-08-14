import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Reel from "./pages/Reel";
import Center from "./pages/Center";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stack" element={<Stack />} />
        <Route path="/reel" element={<Reel />} />
        <Route path="/center" element={<Center />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
