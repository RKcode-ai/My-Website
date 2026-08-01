import React, {useRef} from 'react'
import Logo from '../assets/images/logo.svg'
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP)

const Navbar = () => {

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
                    <div className="flex flex-col gap-1.5 cursor-pointer">
                        <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
                        <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
