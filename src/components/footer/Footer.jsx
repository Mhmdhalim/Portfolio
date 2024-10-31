import React from 'react'
import './footer.css'
import { FaCopyright } from "react-icons/fa";
const Footer = (props) => {
    return (
        <div className={`footer hidden sm:flex justify-center items-center ${props.toggleBackground ? "bg-[#27272A]" : "bg-white text-black" }`}>
            <div className='flex justify-center items-center gap-1' ><FaCopyright /> 2024 <a href="https://github.com/Mhmdhalim" className='underline'>M</a></div>
        </div>
    )
}

export default Footer
