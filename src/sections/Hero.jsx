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
                        text="Let's Talk"
                        link="mailto:rkhattak042@gmail.com"
                        className="gradient-btn"
                    />
                </div>
                <div className="star absolute -z-10 top-80 lg:top-32 right-[-35%] lg:right-[-12%]">
                    <svg className="h-[48vh] lg:h-[80vh]" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M89.6357 48.1886L49.1429 47.0588L78.5857 74.8069L74.4433 78.9509L46.6952 49.508L47.825 90H42.0489L43.1796 49.508L15.4306 78.9509L11.2874 74.8069L40.7303 47.0596L0.238281 48.1886V42.4133L40.7303 43.732L11.2874 15.9204L15.4306 11.8398L43.1796 41.2835L42.0489 0.791504H47.825L46.6952 41.2835L74.4425 11.8406L78.5865 15.9204L49.1429 43.732L89.6348 42.6013L89.6357 48.1886Z" fill="gray"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Hero
