import React from 'react'
import './about.css'
const About = () => {
    return (
        <div id='about' className='about p-5'>
        <div className="box_about relative hidden lg:block">
                <p className="uppercase text-9xl font-extrabold absolute left-[60%] md:left-[50%] lg:left-[40%] xl:left-[70%] top-[20%]">
                ab <br />
                out<span className=" text-[#facc15]">.</span>
                </p>
            </div>
            <div className=' flex-col justify-center items-start ml-[-80px] hidden lg:flex'>
            <p className='uppercase font-bold absolute flex flex-col items-start'>
                    <span className='text-2xl ml-1' >hi <span className='text-[#facc15]'>,</span> i am</span>
                    <br />
                    <span className='text-8xl'>mohamed mousa</span>
                    <br />
                    <span className='text-2xl ml-1'>frontend developer</span>
                </p>
            </div>
        </div>
    )
}

export default About
