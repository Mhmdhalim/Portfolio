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
      className={`app relative ${
        !background ? "bg-white text-[#27272A]" : "bg-[#27272A] text-white"
      }`}
    >
      <header
        className={`${
          !background ? "bg-white text-[#27272A]" : "bg-[#27272A] text-white"
        } fixed top-0 p-7 pb-4 w-full z-40  flex justify-center items-center`}
      >
        <Navbar toggleBackground={toggleBackground} bg={background} />
      </header>
      <div className="absolute right-5 top-32">
        <Colores />
      </div>

      <div className="w-full mt-12 p-7">
        <Hello toggleBackground={background} />
        <About toggleBackground={background} />
        <Portfolio toggleBackground={background} />
      </div>

      <footer className="absolute bottom-0">
        <Footer toggleBackground={background} />
      </footer>
    </div>
  );
};

export default App;
