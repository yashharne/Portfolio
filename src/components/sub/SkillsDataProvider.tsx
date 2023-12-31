"use client"

import React from 'react'
import { delay, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface skillProps {
    name: string
    src: string
    index: number
    width: number
    height: number
    scale: number
}

const SkillsDataProvider = (
    { src, index, width, height, name, scale }: skillProps
) => {

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: animationDelay * index }}
        >
            <Image
                src={src}
                alt={name}
                title={name}
                width={width}
                height={height}
                style={{ transform: `scale(${scale})` }}
            />
        </motion.div >
    )
}

export default SkillsDataProvider