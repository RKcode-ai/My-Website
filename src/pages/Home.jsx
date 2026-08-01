import React from 'react'
import Hero from '../sections/Hero.jsx'
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import Work from "../sections/Work.jsx";
import Marquee from "../sections/Marquee.jsx";
import CTA from "../components/CTA.jsx";
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Work />
            <Marquee />
            <CTA/>
        </>
    )
}
export default Home
