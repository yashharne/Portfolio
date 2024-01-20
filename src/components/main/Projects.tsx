"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ProjectData } from '@/constants'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col items-center justify-center pt-20 sm:py-20 z-[20]'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[10px] sm:py-[12px] sm:px-[12px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[6px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
                <h1 className="Welcome-text text-[14px] sm:text-[16px]">PROJECTS</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='cursive text-text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Where Ideas Meet Execution
            </motion.div>

            {/* <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10'> */}
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-6 sm:px-10'>
                {
                    ProjectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            title={project.name}
                            description={project.description}
                            link={project.link || ''}
                            github={project.github || ''}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects