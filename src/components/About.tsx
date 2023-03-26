'use client'
import React from 'react'
import { motion } from "framer-motion"


type Props = {}


function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}
                src='https://res.cloudinary.com/dsvs2bgn4/image/upload/v1674479066/main_aq4l31.jpg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover  rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
            />

            <div

                className=' space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background</h4>
                <p className='text-base'>Hi, my name is Oren Sharizad, 24 years old, I finished a bootcamp of 640 hours in Coding Academy and since then I don't stop learning and developing, I'm glad you came here and you can see what projects I built</p>
            </div>

        </motion.div>
    )
}

export default About