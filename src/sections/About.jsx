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
                <div className="about-text flex justify-center items-center
                main-container py-4 lg:py-12 h-full font-heading text-black text-2xl md:text-3xl
                xl:text-5xl leading-tight">
                    I am a first-generation computer science student studying abroad in Germany,
                    driven by a passion for building intuitive, scalable software. My technical
                    focus lies strictly in software engineering and web development, where I
                    leverage modern frameworks like Next.js, React, and Tailwind CSS alongside
                    robust backend languages like Python and C++ to bring complex ideas to life.
                    Beyond writing clean, efficient code and maintaining a daily routine of
                    algorithmic problem-solving, I have a deep appreciation for photography.
                    Framing the perfect shot has trained my eye for composition and detail—skills
                    that directly translate into crafting pixel-perfect, user-centric web experiences.
                    Whether I am developing something out of curiosity, leading technical workshops, or
                    learning a new language, I thrive on continuous growth and creative problem-solving.
                </div>
            </div>
        </>
    )
}
export default About
