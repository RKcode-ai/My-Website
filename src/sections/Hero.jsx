import React, {useRef} from 'react'
import GradientButton from "../components/GradientButton.jsx";
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Hero = () => {

    const heroRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: 1
        })
        SplitText.create("h1", {
            type: "lines, words",
            mask: "lines",
            autoStart: true,
            onSplit(self) {
                gsap.from(self.words, {
                    y: 100,
                    opacity: 0,
                    stagger: 0.1
                })
            }
        })
        SplitText.create("h2", {
            type: "lines, words",
            mask: "lines",
            autoStart: true,
            onSplit(self) {
                gsap.from(self.words, {
                    y: 100,
                    opacity: 0,
                    stagger: 0.15,
                    delay: 0.3
                })
            }
        })

        gsap.from(".gradient-btn", {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power2.out",
            delay: 1.25
        })

        gsap.from(".star svg", {
            scale: 0,
            rotate: 180,
            opacity: 0,
            transformOrigin: "center center",
            duration: 1.3,
            ease: "back.out(1.7)",
            onComplete: () => {
                gsap.to(".star svg", {
                    rotate: "+=360",
                    duration: 20,
                    ease: "linear",
                    repeat: -1
                })
            }
        })

        }

    , {scope: heroRef})

    return (
        <>
            <div ref={heroRef} className='relative overflow-hidden'>
                <div className='main-container h-screen flex flex-col lg:justify-center
                 items-start lg:py-12 max-lg:pt-40'>
                    <h1 className='text-3xl lg:text-[3.2vw] uppercase font-heading
                    font-semibold'>Rayyan Khattak</h1>
                    <h2 className='text-6xl lg:text-[8vw] font-heading font-bold
                    leading-none tracking-tight mt-3 mb-6'>Software Engineer <br/> & <span className='text-stroke'> Designer </span> </h2>
                    <GradientButton
                        text="Let's Connect"
                        link="https://www.linkedin.com/in/rayyan-khattak/"
                        className="gradient-btn"
                    />
                </div>
                <div className="star absolute -z-10 top-80 lg:top-32 right-[-35%] lg:right-[-12%]">
                    <svg className="h-[48vh] lg:h-[80vh]" width="652" height="630" viewBox="0 0 652 630" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M289.381 0.584184L332.707 283.938L332.901 285.207L333.615 284.142L495.732 42.7453L529.914 65.1822L353.551 297.418L352.739 298.486L354.052 298.21L643.782 237.192L650.714 275.143L358.107 320.426L356.779 320.631L357.918 321.344L604.869 475.856L580.906 509.364L343.959 340.811L342.914 340.068L343.181 341.322L402.754 621.712L362.16 629.121L318.84 345.765L318.646 344.497L317.931 345.562L155.804 586.956L121.542 564.076L297.984 332.289L298.798 331.22L297.483 331.497L7.75078 392.501L0.584506 353.24L293.425 309.275L294.761 309.075L293.616 308.357L46.5851 153.403L70.6297 120.333L307.587 288.893L308.633 289.637L308.366 288.381L248.787 7.99367L289.381 0.584184Z" stroke="url(#paint0_linear_1074_2)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1074_2" x1="3.79646" y1="373.621" x2="647.744" y2="256.084" gradientUnits="userSpaceOnUse">
                                <stop stop-color="orange"/>
                                <stop offset="0%" stop-color="#D35400"/>
                                <stop offset="100%" stop-color="#F39C12"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            </div>
        </>
    )
}
export default Hero
