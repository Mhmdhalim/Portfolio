import React, { useEffect, useState } from "react";
import './about.css'
import light from './assets/8550cc9ed27d939488ff.png'
import dark from './assets/8d43e0481e790ecacd50.png'

const About = (props) => {
    const [animate, setAnimate] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []); // Runs once on component mount

    function showHiddenSection() {
        setShow(!show)
    }
    return (
        <div id="about" className="about py-7 md:h-[600px]">
            <button onClick={showHiddenSection} className={`btn-div z-10 ${show ? "slide-left" : "slide-right"} btn hidden lg:block p-10  font-bold text-2xl absolute top-[38%]`}>
                <div className={`${show ? "hidden" : ""} -rotate-90 flex flex-col items-center justify-center cursor-pointer`}>
                    <p>More</p>
                    <img src={light} alt="" className={` w-16 h-16 ${props.toggleBackground ? "" : "hidden"}`} />
                    <img src={dark} alt=""  className={` w-16 h-16 ${props.toggleBackground ? "hidden" : ""}`}/>
                </div>
                <div className={`${show ? "" : "hidden"} rotate-90 flex flex-col items-center justify-center cursor-pointer`}>
                    <p>Back</p>
                    <img src={light} alt="" className={`w-16 h-16 ${props.toggleBackground ? "" : "hidden"}`} />
                    <img src={dark} alt=""  className={`w-16 h-16 ${props.toggleBackground ? "hidden" : ""}`}/>
                </div>
            </button>
            <div className={`hidden-div hidden lg:block ${show ? "slide-left" : ""} `}>
                <div
            className={`box_about relative hidden lg:block ${
                props.toggleBackground ? "bg-[#facc15]" : ""
            } z-10`}
            >
                <p
                    className={` uppercase text-9xl font-extrabold absolute left-[60%] md:left-[50%] lg:left-[40%] xl:left-[68%] top-[20%]  ${
                    animate ? "animate" : ""
                    }`}
                >
                    ab <br />
                    out
                    <span
                    className={`${
                        props.toggleBackground ? "text-[#facc15]" : "text-[#facc15]"
                    }`}
                    >
                    .
                    </span>
                </p>
            </div>
                <div
                className={` relative flex-col justify-center items-start flex bg-blue-700`}
                    >
                <p className=" uppercase font-bold absolute flex flex-col items-start lg:ml-[30rem] xl:ml-[32rem] mb-[38rem] px-20">
                    <span className="text-2xl ml-1">
                    hi{" "}
                    <span
                        className={`${
                        props.toggleBackground ? "text-[#facc15]" : "text-white"
                        }`}
                    >
                        ,
                    </span>{" "}
                    i am
                    </span>
                    <br />
                    <span className="text-6xl w-full">mohamed mousa</span>
                    <br />
                    <span className="text-2xl ml-1">frontend developer</span>
                </p>
                </div>
            </div>
        
            {/* bio */}
            <div className={`flex flex-col bio w-[360px] sm:w-[500px] md:w-[730px] ${show ? "active mt-16" : "right:500px"}`}>
                <div className={` first_section py-4 ${show ? "hidden  " : ""}`}>
                    <h1 className="uppercase font-bold text-4xl py-4">about<span className={`${props.toggleBackground ? "text-[#facc15]" : "text-white"}`}>.</span></h1>
                    <p className="uppercase font-bold text-sm ">
                        <span className="">
                        hi{" "}
                        <span
                        className={` ${
                            props.toggleBackground ? "text-[#facc15]" : "text-white"
                        }`}
                        >
                        ,
                        </span>
                        i am
                        </span>
                        <br />
                        <span className="text-3xl pr-2">Mohamed Mousa</span>
                        <br />
                        <span>frontend developer</span>
                    </p>
                </div>
                <div className="sec_section py-8 border-y-2 border-[#facc15] w-[95%]">
                    <h2 className="uppercase font-bold text-2xl pb-4">
                    hello
                    <span
                        className={`${
                        props.toggleBackground ? "text-[#facc15]" : "text-white"
                        }`}
                    >
                    ,{" "}
                    </span>
                    world{" "}
                    <span
                        className={`${
                        props.toggleBackground ? "text-[#facc15]" : "text-white"
                        }`}
                    >
                        !
                    </span>
                    </h2>
                    <p className="text-[14px] text-justify " style={{textWrap: "pretty"}}>
                    As an enthusiastic web developer with a passion for coding and
                    problem-solving, I have honed my skills through rigorous online
                    courses such as Harvard's CS50x and The Odin Project. Though I am
                    at the beginning of my professional journey, these comprehensive
                    programs have equipped me with a solid foundation in HTML, CSS,
                    JavaScript, and various modern web development frameworks. My
                    portfolio reflects a commitment to continuous learning and
                    showcases the practical projects I have completed, highlighting my
                    ability to bring creative web solutions to life!
                    </p>
                    <br />
    
                    <div className="third_section flex flex-col gap-3 ">
                        <p className="text-[12px] text-justify">Here are the tech stacks I have used in various projects:</p>
                        <div className="lagauges flex flex-wrap pt-2">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML"></img>
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/SCSS-red?style=for-the-badge&logo=sass&logoColor=white" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="" />
                            <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/C++-gray?style=for-the-badge&logo=CPLUSPLUS&logoColor=blue" alt="" srcset="" />
        
                        </div>
                        <div className="frontend flex flex-wrap">
                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                        </div>
                        <div className="tools flex flex-wrap">
                            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="" srcset="" />
                            <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="" />
                            <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="" />
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default About;