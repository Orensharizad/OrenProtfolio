'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"



type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}

                className='flex items-center'>
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://www.linkedin.com/in/oren-sharizad-107719236/" />
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://github.com/Orensharizad/OrenSharizad" />
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://www.instagram.com/oren_sharizad/" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}

                className='flex items-center text-gray-300 cursor-pointer'>

                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'

                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Toche</p>

            </motion.div>

        </header>
    )
}

export default Header