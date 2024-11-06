import React from 'react'
import './footer.css'
import { FaCopyright } from "react-icons/fa";
const Footer = (props) => {
    return (
        <div className={`footer fixed flex w-[400px] sm:w-full justify-center items-center ${props.toggleBackground ? "bg-[#27272A]" : "bg-white text-black" }`}>
            <div className='flex justify-center text-center items-center gap-1' ><FaCopyright /> 2024 <a href="https://github.com/Mhmdhalim" className='underline'>M</a></div>
        </div>
    )
}

export default Footer
