"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-end'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[12px] px-[12px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[16px]'>SKILLS</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='cursive text-text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Always Learning, Always Evolving.
            </motion.div>
        </div>
    )
}

export default SkillText