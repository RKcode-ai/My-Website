import React, {useRef, useState} from 'react'
import Logo from '../assets/images/logo.svg'
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP)

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const navbarRef = useRef(null)

    useGSAP(() => {
        gsap.from(navbarRef.current, {
            opacity: 0,
            y: -100,
            duration: 0.6
        })
        }

    )

    return (
        <>
            <nav ref={navbarRef} className='fixed top-0 w-full mix-blend-difference z-30'>
                <div className="main-container py-6 flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    <div onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 cursor-pointer">
                        <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white 
                        ${menuOpen ? `rotate-45 translate-y-1` : ``}`}></span>
                        <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white 
                        ${menuOpen ? `-rotate-45 -translate-y-1` : ``}`}></span>
                    </div>
                </div>
            </nav>

            <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center
                text-3xl gap-8 transition-transform duration-500 ${menuOpen ? `translate-y-0 `: `-translate-y-full`} `} onClick={() => setMenuOpen(false)}>
                <a href="/" className={"menu-link"}>Home</a>
                <a href="/" className={"menu-link"}>Projects</a>
                <a href="/" className={"menu-link"}>Contact</a>
            </div>
        </>
    )
}
export default Navbar
