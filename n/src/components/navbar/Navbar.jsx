import React from 'react'
import { useState } from 'react'
import './main.css'
import m from "./m.png"

const Navbar = (props) => {
    const [dark, setDark] = useState(true);
    console.log(dark)
    function toggle() {
        setDark(!dark)
        props.toggleBackground()
    }
    return (
        <nav className={`navbar z-20 flex justify-between p-5 fixed w-full ${props.bg ? "bg-[#27272A]" : "bg-white text-black" }`}>
            <div>
                <img src={m} alt="M" className='w-8 z-20' />
            </div>
            <button onClick={toggle} className={`toggleBcakground hidden sm:block bg-black`}>
                <div className={`toggleBcakground_ball ${dark ? '' : 'dark'}`}></div>
            </button>
        </nav>
    )
}

export default Navbar
