import Image from 'next/image'
import React from 'react'

interface Props {
    src: string,
    title: string,
    position: string,
    duration: string,
    location: string,
    description: string[]
    techstack: string[]
}

const ExperienceCard = (
    { src, title, position, description, duration, location, techstack }: Props
) => {
    return (
        <div className='relative overflow-hidden rounded-lg shawdow-lg border border-[#2A0E61] bg-[#0300145e] transition-transform duration-300 hover:scale-105 mx-4 sm:mx-8 md:mx-20'>
            <div className='group flex m-4 gap-4'>
                <div className="w-1/4 hidden lg:block">
                    <Image
                        src={src}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="w-auto h-full object-contain opacity-40 group-hover:opacity-80"
                    />
                </div>
                <div className="flex flex-col flex-grow w-3/4 px-2">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-2xl sm:text-lg md:text-xl lg:text-3xl font-semibold text-gray-200">{title}</h1>
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-400">{location}</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-400">{position}</h1>
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-400">{duration}</h2>
                    </div>

                    {/* Displaying description as list of strings */}
                    <div className="text-sm sm:text-base md:text-lg mt-8 text-gray-300 flex-1">
                        <ul className="flex flex-col gap-1 list-disc pl-5">
                            {description.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>


                    {/* Tech Stack Section */}
                    <div className="my-6 text-sm text-gray-300">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold">Technology Stack</h3>
                        <ul className="flex flex-wrap gap-4 mt-2">
                            {techstack.map((tech, index) => (
                                <li key={index} className="bg-[#3d2470] bg-opacity-60 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard