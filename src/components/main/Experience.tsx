"use client"

import React from 'react'
import ExperienceCard from '../sub/ExperienceCard'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ExperienceData } from '@/constants'

const Experience = () => {
    return (
        <div id='experience' className='flex flex-col items-center justify-center pt-20 sm:py-20 z-[20]'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[10px] sm:py-[12px] sm:px-[12px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[6px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
                <h1 className="Welcome-text text-[14px] sm:text-[16px]">EXPERIENCE</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='cursive text-text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Where Potential becomes Performance
            </motion.div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'

                    />
                </div>
            </div>

            {/* <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10'> */}
            <div className='grid grid-cols-1 gap-10'>
                {
                    ExperienceData.map((job, index) => (
                        <ExperienceCard
                            key={index}
                            src={job.src}
                            title={job.name}
                            position={job.position}
                            duration={job.duration}
                            location={job.location}
                            description={Array.isArray(job.description) ? job.description : job.description ? [job.description] : []} // Wrap the description value in an array
                            techstack={Array.isArray(job.techstack) ? job.techstack : job.techstack ? [job.techstack] : []} // Wrap the techstack value in an array or provide an empty array if it's undefined
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Experience