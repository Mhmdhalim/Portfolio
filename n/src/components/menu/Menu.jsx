import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './menu.css';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <aside className='menu fixed'>
            <div className={`cursor-pointer `}>
                <FontAwesomeIcon
                    icon={isOpen ? faTimes : faBars}
                    onClick={toggleMenu}
                    className={`icon ${isOpen ? ' rotate' : ''} ${!props.toggleBackground ? "text-[#27272A]" : "text-white" }`}
                />
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                {isOpen && <div >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem ut sunt enim architecto in ab, deleniti similique, at asperiores est praesentium. Doloremque quisquam maiores molestias magni aliquid nam possimus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam voluptate, quia ad ea culpa eaque sit similique accusamus beatae corrupti, fugit error consequuntur? Molestiae ab esse reiciendis nobis corrupti.
                </div>}
            </div>
        </aside>
    );
}

export default Menu;
