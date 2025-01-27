"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const handleSubmit = (e: any) => {
    e.preventDefault()
}

const Contact = () => {
    return (
        <div id='contact' className='h-full w-full flex flex-col items-center justify-center z-[20] my-8'>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[12px] px-[12px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[10px] sm:text-[14px] md:text-[16px]'>CONTACT</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='cursive text-text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
                >
                    Reach Out, Let&apos;s Connect.
                </motion.div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 w-9/12'>
                <div className='flex flex-col sm:flex-row w-full gap-4 sm:gap-8'>
                    <input
                        type="text"
                        name="name"
                        placeholder='Full Name'
                        required
                        className='border border-[#7042f88b] bg-transparent p-2 text-gray-300 rounded-xl sm:w-1/2'
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        className='border border-[#7042f88b] bg-transparent p-2 text-gray-300 rounded-xl sm:w-1/2'
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className='border border-[#7042f88b] bg-transparent w-full text-gray-300 p-2 rounded-xl'
                />
                <button type='submit' className='py-2 flex justify-center items-center gap-2 px-6 button-primary text-center text-gray-300 hover:text-white cursor pointer rounded-lg mt-8'>
                    <Image
                        src="/send.png"
                        alt="send"
                        width={18}
                        height={18}
                    />
                    Send Message
                </button>
            </form>
        </div >
    )
}

export default Contact