import React, { useState } from "react";
import "./portfolio.css";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import data from "./data.json";
import img1 from "./assets/E.png";
import { FaCopyright } from "react-icons/fa";

const Portfolio = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const currentProject = data[currentIndex];
    return (
        <>
        <div id="portfolio" className="portfolio p-7 hidden lg:grid">
            <div className={`flex flex-col justify-center items-center  text-white ${!props.toggleBackground ? "bg-[#0ea5e9]" : ""}`}>
                <div className="flex justify-center items-center relative image-container p-2">
                <img
                    src={
                    (currentIndex === 0 && img1) ||
                    (currentIndex === 1 && img1) ||
                    (currentIndex === 2 && img1)
                    }
                    alt={currentProject.title}
                    className={`w-[66%] md:w-[62%] image_class mt-12 ${!props.toggleBackground ? "active" : ""}`}
                />
                <span className="num_of_video xl:text-5xl text-4xl font-extrabold absolute top-9 lg:left-36 lg:py-3.5 lg:px-2.5 xl:left-56 p-4">
                    0{currentIndex + 1}
                </span>
                </div>
                <div className="z-10 absolute flex flex-col justify-center mb-20 items-center gap-2 xl:gap-7 xl:mb-5">
                <p className="z-10 font-extrabold lg:text-xl xl:text-2xl">{currentProject.title}</p>
                <p className="z-10 font-extrabold lg:text-xl xl:text-2xl">
                    {currentProject.description}
                </p>
                <div className="flex flex-wrap ">
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
                    className="underline text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Repo
                    </a>
                    <a
                    href={currentProject.demoLink}
                    className="underline text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Demo
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


                <div className="flex items-center justify-center gap-2 ">
                More on{" "}
                <a href="https://github.com" className="underline">
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
            <div className="p-7 lg:hidden flex flex-col justify-center items-center ">
                <h1 className="head_project uppercase text-3xl font-bold self-start ">projects<span className={`${props.toggleBackground ? "text-[#0ea5e9]" : "text-white"}`}>.</span></h1>
                {
                    data.map((project, index) => (
                        <div className="flex flex-col w-[360px] justify-center items-center text-justify" style={{textWrap: "pretty"}}>
                            <div className="flex justify-center items-center relative image-container p-2">
                                <img
                                    src={
                                    (index === 0 && img1) ||
                                    (index === 1 && img1) ||
                                    (index === 2 && img1)
                                    }
                                    alt={project.title}
                                    className={`w-full image_class mt-12 ${!props.toggleBackground ? "active" : ""}`}
                                />
                                <span className="num_of_video w-full text-3xl font-extrabold absolute top-9 left-0 p-4 px-2">
                                    0{index + 1}
                                </span>
                            </div>
                            <h1 className="text-xl font-bold py-1">{project.title}</h1>
                            <p className="text-sm font-bold py-2">{project.description}</p>
                            <div className="flex py-4">
                                {
                                project.skills.map(skill => <img src={skill} alt="" />)

                            }
                            </div>
                            <div className="flex gap-5 text-xl">
                                <a
                                href={project.repoLink}
                                className="underline text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Repo
                                </a>
                                <a
                                href={project.demoLink}
                                className="underline text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Demo
                                </a>
                            </div>
                        </div>
                    ))
                }
                <div className={`sm:hidden py-10 ${props.toggleBackground ? "bg-[#27272A]" : "bg-white text-black" }`}>
                    <div className='flex justify-center items-center gap-1' ><FaCopyright /> 2024 <a href="https://github.com/Mhmdhalim" className='underline'>M</a></div>
                </div>
            </div>
        </>
        
    );
};

export default Portfolio;
