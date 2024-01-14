import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shawdow-lg shawdow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto sm:px-[10px]'>
                <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/logo1.png"
                        alt='logo'
                        width={115}
                        height={115}
                        className='cursor-pointer hover:animate-slowspin scale-150 sm:scale-100'
                    />
                    <span className='font-bold petit text-2xl hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-[#c579f9]'>
                        Yash Harne
                    </span>
                </a>

                <div className='w-[600px] h-full flex flex-row items-center justify-between'>
                    <div className='flex neonBreathing items-center w-full h-auto justify-between border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer'>
                            About Me
                        </a>
                        <a href='#skills' className='cursor-pointer'>
                            Skills
                        </a>
                        <a href='#projects' className='cursor-pointer'>
                            Projects
                        </a>
                    </div>
                </div>

                <div className='flex-row gap-5 hidden md:flex'>
                    {
                        Socials.map((social) => (
                            <a
                                href={social.link}
                                key={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    title={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Navbar