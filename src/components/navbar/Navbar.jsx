import React from 'react'
import { useState } from 'react'
import './main.css'
import m from "/Users/Mhmdh/OneDrive/Desktop/Portfolio/Portfolio/src/assets/m.png";

const Navbar = (props) => {
    const [dark, setDark] = useState(true);
    console.log(dark)
    function toggle() {
        setDark(!dark)
        props.toggleBackground()
    }
    return (
        <div className='flex justify-between p-5 fixed w-full'>
            <div>
                <img src={m} alt="M" className='w-8' />
            </div>
            <button onClick={toggle} className={`toggleBcakground hidden sm:block bg-black`}>
                <div className={`toggleBcakground_ball ${dark ? '' : 'dark'}`}></div>
            </button>
        </div>
    )
}

export default Navbar
