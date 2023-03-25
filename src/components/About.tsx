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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover  rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div

                className=' space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background</h4>
                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, eum at mollitia obcaecati officiis blanditiis enim vitae iste fugit, dignissimos veniam. Ratione ut sapiente recusandae cum. Adipisci hic eius omnis aut dicta asperiores delectus corporis dolorum quo doloribus, molestias repellendus ad ipsum, harum similique vel quod mollitia, suscipit autem quos?</p>
            </div>

        </motion.div>
    )
}

export default About