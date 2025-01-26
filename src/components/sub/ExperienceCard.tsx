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
        <div className='relative overflow-hidden rounded-lg shawdow-lg border border-[#2A0E61] bg-[#0300145e] transition-transform duration-300 hover:scale-105 mx-8 md:mx-20'>
            <div className='group flex m-4 gap-4'>
                <div className="w-1/4 hidden md:block">
                    <Image
                        src={src}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="w-auto h-full object-contain opacity-40 group-hover:opacity-80"
                    />
                </div>
                <div className="flex flex-col flex-grow w-3/4 px-2 gap-1">
                    <div className="flex justify-between">
                        <h1 className="sm:text-xl md:text-3xl font-semibold text-gray-200">{title}</h1>
                        <h2 className="sm:text-lg md:text-2xl font-semibold text-gray-300">{duration}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-300">{position}</h1>
                        <h2 className="text-xl font-semibold text-gray-300">{location}</h2>
                    </div>

                    {/* Displaying description as list of strings */}
                    <div className="text-lg mt-8 text-gray-300 flex-1">
                        <ul className="flex flex-col gap-1 list-disc pl-5">
                            {description.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>


                    {/* Tech Stack Section */}
                    <div className="my-6 text-sm text-gray-300">
                        <h3 className="text-lg font-semibold">Technology Stack</h3>
                        <ul className="flex flex-wrap gap-4 mt-2">
                            {techstack.map((tech, index) => (
                                <li key={index} className="bg-[#1d0b41] text-white px-3 py-1 rounded-full">
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