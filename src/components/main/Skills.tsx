import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import { BackendSkills, FrontendSkills, OtherSkills } from '@/constants'
import SkillText from '../sub/SkillText'

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-30 transform scale-90 z-[20]'
        >
            <SkillText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[30]'>
                {
                    FrontendSkills.map((skill, index) => (
                        <SkillsDataProvider
                            key={index}
                            src={skill.src}
                            name={skill.name}
                            index={index}
                            width={skill.width}
                            height={skill.height}
                            scale={skill.scale || 1}
                        />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[30]'>
                {
                    OtherSkills.map((skill, index) => (
                        <SkillsDataProvider
                            key={index}
                            src={skill.src}
                            name={skill.name}
                            index={index}
                            width={skill.width}
                            height={skill.height}
                            scale={skill.scale || 1}
                        />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[30]'>
                {
                    BackendSkills.map((skill, index) => (
                        <SkillsDataProvider
                            key={index}
                            src={skill.src}
                            name={skill.name}
                            index={index}
                            width={skill.width}
                            height={skill.height}
                            scale={skill.scale || 1}
                        />
                    ))
                }
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[15] opacity-30 absolute flex items-center justify-center bg-cover'>
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
        </section>
    )
}

export default Skills