import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import data from "./data.json";
import img1 from "./assets/E.png";
import iconblack from "./assets/e875fb0a158ceec2b831.png"
import iconwhite from "./assets/ef74e2761c3898237855.png"

const Portfolio = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const currentProject = data[currentIndex];
    return (
        <>
        <div id="portfolio" className="portfolio py-7 hidden lg:grid ">
            <div className={`flex flex-col justify-center items-center relative text-white ${!props.toggleBackground ? "bg-[#0ea5e9]" : ""}`}>
                <div className="flex justify-center items-center relative image-container ">
                    <img
                        src={
                        (currentIndex === 0 && img1) ||
                        (currentIndex === 1 && img1) ||
                        (currentIndex === 2 && img1)
                        }
                        alt={currentProject.title}
                        className={`w-[66%] md:w-[62%] image_class mt-12 ${!props.toggleBackground ? "active" : ""}`}
                            />
                    <div key={currentIndex} className={`countdown-bar mt-4 ${props.toggleBackground ? "bg-[#0ea5e9]" : "bg-white"}`}></div>
                    <span className="num_of_video xl:text-4xl text-3xl font-extrabold absolute top-9 lg:left-40 md:left-36 lg:py-3  xl:left-48 xl:px-5  p-4">
                        0{currentIndex + 1}
                        </span>

                    {/* indicator */}
                    <div className="indicator-container flex gap-2 mb-[-35px] absolute bottom-0 ">
                            {data.map((_, index) => (
                                <span
                                    key={index}
                                    className={`indicator cursor-pointer ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                    </div>
                </div>
                <div className="z-10 absolute flex flex-col justify-center items-center gap-3  ">
                    <p className="z-10 font-extrabold lg:text-xl xl:text-xl">{currentProject.title}</p>
                    <p className="z-10 font-extrabold lg:text-lg xl:text-lg">
                        {currentProject.description}
                    </p>
                    <div className="flex flex-wrap w-full justify-center">
                        {currentProject.skills.map((skill, skillIndex) => (
                        <img
                            key={skillIndex}
                            src={skill}
                            alt="Skill badge"
                            className="w-20 "
                        />
                        ))}
                    </div>
                    <div className="flex gap-5 text-2xl">
                        <a
                        href={currentProject.repoLink}
                        className="flex justify-center items-center gap-2 text-sm font-bold hover:scale-125 transition-all duration-300 ease-linear"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                                    <p>Repo</p>
                                    <img src={iconwhite} alt="" className="w-5 h-5" />
                        </a>
                        <a
                        href={currentProject.demoLink}
                        className="flex justify-center items-center gap-2 text-sm font-bold hover:scale-125 transition-all duration-300 ease-linear"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <p>Demo</p>
                        <img src={iconwhite} alt="" className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex gap-5 navigation-buttons-outside">
                    <button onClick={handlePrev} className="arrow-button">
                        <FaArrowLeft />
                    </button>
                    <button onClick={handleNext} className="arrow-button">
                        <FaArrowRight />
                    </button>
                </div>


                <div className="flex items-center justify-center gap-2 mt-5 uppercase font-bold text-lg">
                More on{" "}
                <a href="https://github.com" className=" underline hover:scale-110 transition-all duration-300 ease-linear">
                    GitHub
                </a>
                <FaGithub />
                </div>
            </div>
            <div className={`box_portfolio relative ${props.toggleBackground ? "bg-[#0ea5e9]" : ""}`}>
                <p className="absolute uppercase text-7xl text-left xl:text-9xl font-extrabold rotate-90 xl:top-[10rem] lg:top-[12rem] md:top-[12rem] lg:right-[70px] xl:right-[80px] ">
                pro <br />
                jects<span className={`${props.toggleBackground ? "text-[#0ea5e9]" : "text-white"}`}>.</span>
                </p>
            </div>
            </div>
            {/* in small screen */}
            <div className="py-7 lg:hidden flex flex-col justify-center items-center pt-16 md:pt-20 md:justify-start md:items-center md:flex-row md:gap-7 md:flex-wrap md:relative md:h-[1000px]">
                <h1 className="head_project uppercase text-3xl font-bold self-start md:absolute md:text-left md:w-full md:top-16 ">projects<span className={`${props.toggleBackground ? "text-[#0ea5e9]" : "text-white"}`}>.</span></h1>
                {
                    data.map((project, index) => (
                        <div className="flex flex-col w-[360px] justify-center items-center text-justify" style={{textWrap: "pretty"}}>
                            <div className="flex justify-center items-center relative image-container mb-4 md:mb-16 ">
                                <img
                                    src={
                                    (index === 0 && img1) ||
                                    (index === 1 && img1) ||
                                    (index === 2 && img1)
                                    }
                                    alt={project.title}
                                    className={`w-full image_class mt-12 ${!props.toggleBackground ? "active" : ""}`}
                                />
                                <span className="num_of_video w-full text-3xl font-extrabold absolute top-11 left-1 ">
                                    0{index + 1}
                                </span>
                            </div>
                            <h1 className="text-xl font-bold ">{project.title}</h1>
                            <p className="text-sm font-bold ">{project.description}</p>
                            <div className="flex justify-center items-center w-full py-2">
                                {
                                project.skills.map(skill => <img src={skill} alt="" className="h-6" />)

                            }
                            </div>
                            <div className="flex gap-5 text-xl">
                                <a
                                href={project.repoLink}
                                className="flex justify-center items-center gap-2 text-sm font-bold hover:scale-125 transition-all duration-300 ease-linear"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <p>Repo</p>
                                    <img src={iconwhite} alt="" className={`w-4 h-4 ${props.toggleBackground ? "" : "hidden"} `}/>
                                    <img src={iconblack} alt="" className={`w-4 h-4 ${props.toggleBackground ? "hidden" : ""}`}/>
                                </a>
                                <a
                                href={project.demoLink}
                                className="flex justify-center items-center gap-2 text-sm font-bold hover:scale-125 transition-all duration-300 ease-linear"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <p>Demo</p>
                                    <img src={iconwhite} alt="" className={`w-4 h-4 ${props.toggleBackground ? "" : "hidden"} `}/>
                                    <img src={iconblack} alt="" className={`w-4 h-4 ${props.toggleBackground ? "hidden" : ""}`}/>
                                </a>
                                
                            </div>
                            
                        </div>
                        
                    ))
                }
               
            </div>   <div className="flex items-center justify-center gap-2 uppercase font-bold text-lg">
                More on{" "}
                <a href="https://github.com" className=" underline hover:scale-110 transition-all duration-300 ease-linear">
                    GitHub
                </a>
                <FaGithub />
                </div>
        </>
        
    );
};

export default Portfolio;
