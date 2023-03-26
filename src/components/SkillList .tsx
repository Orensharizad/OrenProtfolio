'use client'
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function SkillList({ }: Props) {


    const skils = [
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
            directionLeft: false
        },
        {
            url: 'https://reactnative.dev/img/header_logo.svg',
            directionLeft: false
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
            directionLeft: false
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
            directionLeft: false
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            directionLeft: false
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            directionLeft: false
        },
        {
            url: 'https://angular.io/assets/images/logos/angular/angular.svg',
            directionLeft: false
        },
        {
            url: 'https://img.icons8.com/color/512/mongodb.png',
            directionLeft: true
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            directionLeft: true
        },
        {
            url: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
            directionLeft: true
        },
        {
            url: 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',
            directionLeft: true
        },
        {
            url: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
            directionLeft: true
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            directionLeft: true
        },
        {
            url: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
            directionLeft: true
        },
        {
            url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
            directionLeft: true
        },


    ]

    return (

        <div className='grid grid-cols-4 gap-5'>
            {skils.map((skill, idx) =>
                <motion.img
                    key={idx}
                    initial={{
                        x: skill.directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={skill.url}
                    className='rounded-full border border-gray-500 object-fill w-20 h-20  filter hover:grayscale transition duration-300 ease-in-out'
                />
            )}
        </div>

    )
}

export default SkillList 