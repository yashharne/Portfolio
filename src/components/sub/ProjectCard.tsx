import Image from 'next/image'
import React from 'react'

interface Props {
    src: string,
    title: string,
    description: string,
    link: string,
    github: string,
}

const ProjectCard = (
    { src, title, description, link, github }: Props
) => {
    return (
        <div className='relative overflow-hidden rounded-lg shawddow-lg border border-[#2A0E61] transition-transform duration-300 hover:scale-105'>
            <div className='group'>
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className='w-full object-contain opacity-40 group-hover:opacity-80'
                />
                <div className='relative p-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                        <div className='flex justify-center items-center gap-2'>
                            {
                                link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-center'
                                    >
                                        <Image
                                            src={'/link.svg'}
                                            alt='link'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                )
                            }
                            {
                                github && (
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={'/githubgray.svg'}
                                            alt='github'
                                            width={32}
                                            height={32}
                                        />
                                    </a>
                                )
                            }
                        </div>
                    </div>

                    <p className='mt-2 text-gray-300'>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard