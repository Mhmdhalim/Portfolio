import React from 'react'
import './hello.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const hello = () => {
    return (
        <div id='hello' className="hello p-5">
            <div className="box_hello relative">
            <p className="uppercase text-9xl font-extrabold absolute left-[70%] md:left-[85%] top-[20%]">
                he <br />
                llo<span className=" text-[#f87171]">.</span>
                </p>
                {/* <p className='absolute top-[86%] left-[42%] -rotate-90 flex items-center gap-2 text-lg font-bold'><FontAwesomeIcon icon={faArrowRight} className='rotate-180 ' /> scroll</p> */}
            </div>
            <div className='flex flex-col items-end justify-center'>
                <a className='hover:scale-125 dot rounded-full cursor-pointer w-2 h-2 m-1 bg-[#f87171]' href="#hello"></a>
                <a className='hover:scale-125 dot rounded-full cursor-pointer w-2 h-2 m-1 bg-[#facc15]' href="#about"></a>
                <a className='hover:scale-125 dot rounded-full cursor-pointer w-2 h-2 m-1 bg-blue-300' href="#portfolio"></a>
            </div>
        </div>
    );
}

export default hello
