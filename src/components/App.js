import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About"; // ✅ Import About

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> {/* ✅ Render About */}
    </div>
  );
}

export default App;
