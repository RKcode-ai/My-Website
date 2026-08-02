import React, {useRef} from 'react'
import GradientButton from "./GradientButton.jsx";
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Cta = () => {

    const ctaRef = useRef(null);

    useGSAP(() => {
        gsap.from(ctaRef.current, {
            backgroundColor: "#fff",
            color: "#000",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "center bottom",
                end: "90% bottom",
                scrub: 1,
            }
        })
    });

    return (
        <>
            <div ref={ctaRef}>
                <div className="main-container py-20 lg:py-29 h-full flex flex-col gap-8
                justify-center items-center">
                    <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance projects, collaborations and full time opportunities.
                    Let's get connected!</h4>
                    <GradientButton
                        text="Book a call"
                        link="https://www.calendly.com/rayyan-khattak"
                    />
                </div>
            </div>
        </>
    )
}
export default Cta
