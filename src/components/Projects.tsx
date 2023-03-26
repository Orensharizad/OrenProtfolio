'use client'
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Projects({ }: Props) {


    const projects = [
        {
            title: 'Jarvis',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1679821643/3-devices-black_2_izmtew.png',
            link: 'https://trello-ea06.onrender.com/#',
            skills: ['https://reactnative.dev/img/header_logo.svg', 'https://img.icons8.com/color/512/mongodb.png', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'],
            desc: ` Task management app inspired by Trello ,

            The project was made in 14 days of work using the following technologies : react, mongodb, node.js, express, restAPI, sass, socket.io.
            
            One of the biggest challenges was to use OpenAI API ,
            which helps us create a new board with tasks on the subject of your choice . `
        },
        {
            title: 'Airbnb-clone',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1679818462/3-devices-black_xkeuq4.png',
            link: 'https://stays-8qs91jzm3-orensharizad.vercel.app/',
            skills: ['https://reactnative.dev/img/header_logo.svg', 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', 'https://img.icons8.com/color/512/mongodb.png', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'],
            desc: `App base on airbnb written in NextJS , SSR ,Typescript,React-Redux ,Sass,restAPI,MongoDB `
        },
        {
            title: 'Spotify-clone',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1679820409/3-devices-black_1_idzhho.png',
            link: 'https://spotify-clone-three-phi.vercel.app/',
            skills: ['https://reactnative.dev/img/header_logo.svg', 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png', 'https://img.icons8.com/color/512/mongodb.png', 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'],
            desc: 'App base on spotify for listening to songs written in NextJs, Recoil state management Tailwind css ,MongoDB FireBase , FireStore YouTubeApi'
        },
        {
            title: 'Netflix-clone',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1679830257/3-devices-black_3_pyd0pk.png',
            link: 'https://movies-1dcn4vp27-orensharizad.vercel.app/',
            skills: ['https://reactnative.dev/img/header_logo.svg', 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'],
            desc: 'App base on Netflix for watching to movies, written in NextJs, Scss , FireBase , FireStore YouTubeApi'
        },
    ]




    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex  overflow-hidden flex-col text-left  max-w-full justify-between mx-auto items-center z-0'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/80 scrollbar-thumb-[#f7ab0a]/80 mt-6 ' >
                {projects.map((project, idx) =>
                    <div key={idx} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                        <motion.img
                            className='xl:max-w-[50%]'
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            src={project.url} alt="" />


                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>{project.title}</h4>
                            <div className='flex items-center justify-center space-x-2'>
                                {project.skills.map((skillImg, idx) =>
                                    <img className='h-10 w-10' key={idx + 223} src={skillImg} alt="" />
                                )}
                            </div>
                            <p className='text-lg text-center '>{project.desc}-<a className='text-[#f7ab0a]' href={project.link}>Take a look here</a> </p>

                        </div>
                    </div>

                )}
            </div>
            <div className='w-full  absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12 ' />


        </motion.div>
    )
}

export default Projects