import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hello from "./components/hello/Hello";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

import "./style/tailoutput.css";
import "./App.css"

import { useState } from "react";

const App = () => {
  const [background, setBackground] = useState(true);
  const body = document.querySelector("body");
  const toggleBackground = () => {
    setBackground(!background);
    body.classList.toggle("active");
  };

  return (
    <div
      className={`app ${!background ? "bg-white" : "bg-[#27272A] text-white"}`}
    >
      <header>
        <Navbar toggleBackground={toggleBackground} bg={background} />
      </header>
        <Menu toggleBackground={background}/>
        <Hello toggleBackground={background}/>
        <About toggleBackground={background}/>
        <Portfolio toggleBackground={background}/>
        <Footer toggleBackground={background}/>
    </div>
  );
};

export default App;
