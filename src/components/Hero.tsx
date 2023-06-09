'use client'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'


type Props = {}

function Hero({ }: Props) {

    const [text, count] = useTypewriter(
        {
            words: ['Hi,My Name is Oren Sharizad', 'FullStack Developer'],
            loop: true,
            delaySpeed: 2000
        },

    )

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='reletive rounded-full h-32 w-32 mx-auto object-cover' src="https://res.cloudinary.com/dsvs2bgn4/image/upload/v1674479066/main_aq4l31.jpg" alt="Oren-IMG" />
            <div className='z-20 '>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>FullStack Developer</h2>

                <h1 className='text-5xl lg:6xl font-semibold px-10'>
                    <span className='mr-3 '>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <a href='#about'><button className='hero-btn'>About</button></a>
                    <a href='#skills'><button className='hero-btn'>Skills</button></a>
                    <a href='#projects'> <button className='hero-btn'>Projects</button></a>
                    <a href='#contact'> <button className='hero-btn'>Contact</button></a>




                </div>

            </div>
        </div>
    )
}

export default Hero