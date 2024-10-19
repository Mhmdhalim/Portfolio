import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hello from './components/hello/Hello'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hello />
            <About />
            <Portfolio />
            <Footer />
        </>
    )
}

export default App
