import React from "react";
import { useEffect, useState } from "react";
import './colores.css'
const Colores = (props) => {
    const [isScaled, setIsScaled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 500) {
            setIsScaled('red');
            } else if (window.scrollY < 1100 && window.scrollY > 500) {
            setIsScaled('yellow');
            }
            else{
            setIsScaled('blue');
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="z-20 colores fixed gap-5 right-2 top-1/2 transform -translate-y-1/2 p-4">
        <a
                className={`${isScaled === 'red' && "scale-150"} block  dot bg-[#f87171] hover:scale-125 rounded-full cursor-pointer w-2 h-2`}
            href="#hello"
        >

        </a>
        <a
                className={`${isScaled === 'yellow' && "scale-150"} block mt-6 dot bg-[#facc15] hover:scale-125 rounded-full cursor-pointer w-2 h-2`}
            href="#about"
        >
            
        </a>
        <a
                className={`${isScaled === 'blue' && "scale-150"} block dot mt-12 bg-[#0ea5e9] hover:scale-125 rounded-full cursor-pointer w-2 h-2`}
            href="#portfolio"
        >
        </a>
        </div>
    );
};

export default Colores;
