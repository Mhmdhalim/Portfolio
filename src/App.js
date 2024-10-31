import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hello from "./components/hello/Hello";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


import "./style/tailoutput.css";
import "./App.css"

import { useState } from "react";
import Colores from "./components/asideColores/Colores";

const App = () => {
  const [background, setBackground] = useState(true);
  const body = document.querySelector("body");
  const toggleBackground = () => {
    setBackground(!background);
    body.classList.toggle("active");
  };

  return (
    <div
      className={`app p-7 relative ${
        !background ? "bg-white text-[#27272A]" : "bg-[#27272A] text-white"
      }`}
    >
      <header className="absolute top-0">
        <Navbar toggleBackground={toggleBackground} bg={background} />
      </header>
      <div className="absolute right-5 top-32">
        <Colores />
      </div>

      <Hello toggleBackground={background} />
      <About toggleBackground={background} />
      <Portfolio toggleBackground={background} />
      <footer className="absolute bottom-0">
        <Footer toggleBackground={background} />
      </footer>
    </div>
  );
};

export default App;
