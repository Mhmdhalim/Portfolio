import React, { useState } from "react";
import "./portfolio.css";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import data from "./data.json";
import img1 from "./assets/E.png";

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const currentProject = data[currentIndex];
    return (
        <div id="portfolio" className="portfolio p-5">
        <div className="flex flex-col justify-center items-center gap-10 text-white">
            <div className="flex justify-center items-center relative image-container">
            <img
                src={
                (currentIndex === 0 && img1) ||
                (currentIndex === 1 && img1) ||
                (currentIndex === 2 && img1)
                }
                alt={currentProject.title}
                className="w-[70%] image_class mt-12"
            />
            <span className="num_of_video text-5xl font-extrabold absolute top-10 left-44 p-2">
                0{currentIndex + 1}
            </span>
            </div>
            <div className="z-10 absolute flex flex-col justify-center items-center gap-8">
            <p className="z-10 font-extrabold text-2xl">{currentProject.title}</p>
            <p className="z-10 font-extrabold text-2xl">
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
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                Repo
                </a>
                <a
                href={currentProject.demoLink}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                Demo
                </a>
            </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-5 navigation-buttons-outside">
            <button onClick={handlePrev} className="arrow-button">
                <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="arrow-button">
                <FaArrowRight />
            </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
            More on{" "}
            <a href="https://github.com" className="underline">
                GitHub
            </a>
            <FaGithub />
            </div>
        </div>
        <div className="box_portfolio relative">
            <p className="absolute uppercase text-7xl font-extrabold rotate-90 top-[13rem] right-[11rem]">
            pro <br />
            jects<span className="text-[#0ea5e9]">.</span>
            </p>
        </div>
        </div>
    );
};

export default Portfolio;
