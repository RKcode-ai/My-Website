import React, {useRef} from 'react'
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const About = () => {

    const aboutRef = useRef(null)

    useGSAP(() => {
        SplitText.create(".about-text", {
            type: "lines, chars",
            onSplit(self) {
                gsap.set(self.chars, {
                    opacity: 0.2
                })
                gsap.to(self.chars, {
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 70%",
                        end: "center center",
                        scrub: 1
                    }
                })
            }
        })
    })

    return (
        <>
            <div ref={aboutRef} className="relative z-20 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]">
                <div className="flex justify-center items-center
                main-container py-4 lg:py-12 h-full font-heading text-black text-2xl md:text-3xl
                xl:text-5xl leading-tight">
                    Hello this is me I will write somehting
                    here that is going to blow your mind off!
                </div>
            </div>
        </>
    )
}
export default About
