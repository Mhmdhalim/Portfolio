import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hello from './components/hello/Hello'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

import './style/tailoutput.css'

import { useState } from 'react'

const App = () => {
    const [background, setBackground] = useState(true);
    const toggleBackground = () => {
        setBackground(!background);
    };
    return (
        <div className={`h-lvh ${!background ? "bg-white" : "bg-[#27272A] text-white"}`}>
            <Navbar toggleBackground={toggleBackground} />
            <Hello />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App
