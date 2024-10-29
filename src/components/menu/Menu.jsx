import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";
import '../navbar/navbar.css'
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [dark, setDark] = useState("black");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAnimationPaused(true); // Stop the animation when toggled
  };

  function toggle() {
    setDark(dark === "black" ? "white" : "black");
    props.toggleBackground();
  }
  return (
    <aside
      className={`menu fixed ${
        props.toggleBackground ? "sm:bg-[#27272A]" : "sm:bg-white "
      } h-lvh flex justify-center`}
    >
      <div className={`cursor-pointer relative`}>
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          onClick={toggleMenu}
          className={`icon ${isOpen ? "rotate" : ""} 
                    ${animationPaused ? "animation-paused" : ""} 
                    `}
          style={{ color: dark }}
        />
      </div>
      <div className={`hamburger w-0 ${isOpen ? "open w-[300px] ml-5 p-5" : ""}`}>
        {isOpen && (
          <div className={`text-right ${props.toggleBackground ? "bg-[#27272A]" : " "}`}>
            <button onClick={toggle} className={`toggleBcakground bg-black`}>
              <div className={`toggleBcakground_ball ${dark ? '' : 'dark'}`}></div>
              loewfw;efew'
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Menu;
