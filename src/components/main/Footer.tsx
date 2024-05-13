import { Email, Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-full flex flex-col bg-transparent text-gray-200 shadow-lg p-[15px] mt-[40px] sm:mt-0 z-50">
            <div className="flex sm:flex-col justify-around items-center gap-4">
                <div className="hidden sm:flex">
                    <a
                        href={`mailto:${Email}`}
                        className="Welcome-box py-[10px] px-[10px] sm:py-[12px] sm:px-[12px] border border-[#7042f88b] opacity-[0.9]  z-50"
                    >
                        <h1 className="Welcome-text text-[14px] sm:text-[16px]">Contact Me</h1>
                    </a>
                </div>

                <div className="flex gap-6 md:gap-8 justify-center items-center z-50">
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

                <div className="flex sm:hidden">
                    <a
                        href={`mailto:${Email}`}
                        className="Welcome-box py-[10px] px-[10px] sm:py-[12px] sm:px-[12px] border border-[#7042f88b] opacity-[0.9]  z-50"
                    >
                        <h1 className="Welcome-text text-[14px] sm:text-[16px]">Contact Me</h1>
                    </a>
                </div>
            </div>
            <div className="mt-[15px] text-[15px] text-center">
                &copy; {new Date().getFullYear()} Yash Harne. All rights reserved.
            </div>
        </div >
    )
}

export default Footer