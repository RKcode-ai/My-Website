import React, {useRef} from 'react'
import GradientButton from "../components/GradientButton.jsx";
import projects from "../components/ProjectsData.jsx";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from 'gsap'


gsap.registerPlugin(useGSAP, ScrollTrigger)

const Work = () => {

    const workRef = useRef(null);
    const projectRef = useRef(null);
    useGSAP(() => {
        gsap.to(projectRef.current, {
            x: () => -(projectRef.current.scrollWidth - window.innerWidth + projectRef.current.offsetLeft),
            ease: "none",
            scrollTrigger: {
                trigger: workRef.current,
                start: "center center",
                end: () => `+=${projectRef.current.scrollWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        })
    })

    return (
        <>
            <div ref={workRef} className="h-screen bg-white text-black py-24 lg:py-40 overflow-hidden">
                <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between
                items-start md:items-end">
                    <div className="max-w-xl">
                        <h3 className="mb-3">Selected Work</h3>
                        <p className="text-lg lg:text-xl">A curated selection of full-stack applications, modern web interfaces, and technical initiatives I have built for the community.</p>
                    </div>
                    <GradientButton
                        text="Explore All"
                        link="/projects"
                        className="btn-light"
                    />
                </div>

                    <div ref={projectRef} className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6 w-max pe-4 lg:pe-12">
                        {projects.map(({id, name, image, link}) => (
                            <a key={id} href={link} className="relative rounded-2xl w-[85vw] sm:w-[340px] lg:w-[600px] shrink-0 h-64 lg:h-96 block overflow-hidden group">
                                <img src={image} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <span className="absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
                            </a>
                        ))}

                    </div>
            </div>
        </>
    )
}
export default Work
