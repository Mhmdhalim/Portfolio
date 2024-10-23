import React from 'react'
import './footer.css'
const Footer = (props) => {
    return (
        <div className={`footer  ${props.toggleBackground ? "bg-[#27272A]" : "bg-white text-black" }`}>
            <div >footer</div>
        </div>
    )
}

export default Footer
