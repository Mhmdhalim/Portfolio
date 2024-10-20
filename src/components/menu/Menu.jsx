import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className='block sm:hidden fixed w-full '> 
            <div className='cursor-pointer block sm:hidden ' style={{fontSize: '30px', color: 'black'}}>
                <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className=" cursor-pointer"
                onClick={toggleMenu}
                />
            </div>
            {isOpen && (
                <div className='humberger bg-white h-60 w-full flex justify-center items-center'>
                    sdv
                </div>
            )}
        </div>
    )
}

export default Menu
