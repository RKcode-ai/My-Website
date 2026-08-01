import React from 'react'
import GradientButton from "../components/GradientButton.jsx";
import projects from "../components/ProjectsData.jsx";

const Work = () => {
    return (
        <>
            <div className="h-screen bg-white text-black py-24 lg:py-40">
                <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between
                items-start md:items-end">
                    <div className="max-w-xl">
                        <h3 className="mb-3">Selected Work</h3>
                        <p className="text-lg lg:text-xl">A showcase of my selected work of arts of picasso!</p>
                    </div>
                    <GradientButton
                        text="Explore All"
                        link=""
                        className="btn-light"
                    />
                </div>

                <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
                    {projects.map(({id, name, image, link}) => (
                        <a key={id} href={link} className="relative rounded-2xl w-full min-w-[340px]
                        lg:min-w-xl h-64 lg:h-96 block overflow-hidden group]:">
                            <img src={image} alt="" className="w-full h-full object-cover transition-transform
                            duration-300 group-hover:scale-105" />
                            <span className="absolute top-4 right-4 bg-black text-white
                            uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
                        </a>
                    ))}

                </div>
            </div>
        </>
    )
}
export default Work
