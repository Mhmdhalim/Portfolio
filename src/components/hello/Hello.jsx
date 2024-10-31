import React, { useEffect, useState } from "react";
import "./hello.css";

const Hello = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []); // Runs once on component mount

    return (
        <div id="hello" className="hello p-7">
        <div className="box_hello relative">
            <p
            className={`uppercase text-9xl font-extrabold absolute left-[70%] md:left-[88%] top-[40%] sm:top-[20%] ${
                animate ? "animate" : ""
            }`}
            >
            he <br />
            llo<span className="text-[#f87171]">.</span>
            </p>
        </div>
        </div>
    );
};

export default Hello;
