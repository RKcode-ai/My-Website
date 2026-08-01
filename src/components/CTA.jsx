import React from 'react'
import GradientButton from "./GradientButton.jsx";

const Cta = () => {
    return (
        <>
            <div>
                <div className="main-container py-20 lg:py-29 h-full flex flex-col gap-8
                justify-center items-center">
                    <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance projects, collaborations and full time opportunities.
                    Let's get connected!</h4>
                    <GradientButton
                        text="Book a call"
                        link="/"
                    />
                </div>
            </div>
        </>
    )
}
export default Cta
