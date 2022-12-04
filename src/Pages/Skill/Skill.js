import React from 'react';
import SkillBar from 'react-skillbars';
import { motion } from "framer-motion"
import html from '../../Assets/download.png'
import node from '../../Assets/nodejs-logo.png'
import JavaScript from '../../Assets/JavaScript.png'
import css from '../../Assets/CSS.png'
import react from '../../Assets/React-logo.png'
import mongodb from '../../Assets/MongoDb.png'
import express from '../../Assets/express.png'
import firebase from '../../Assets/firebase.webp'
import mui from '../../Assets/mui.png'
import Bootstrap from '../../Assets/Bootstrap_logo.svg.png'
import Tailwind from '../../Assets/Tailwind_CSS_Logo.svg.png'

const Skill = () => {
    const skills = [
        { type: 'React', level: 94 },
        { type: 'Javascript', level: 92 },
        { type: 'Tailwind', level: 98 },
        { type: 'Bootstrap', level: 97 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 95 },
        { type: 'NodeJS', level: 57 },
        { type: 'Mongodb', level: 70 },
        { type: 'ExpressJs', level: 55 },
    ];
    const colors = {
        bar: "#006064",
        title: {
            text: "#fff",
            background: "#006064"
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }} className='min-h-screen lg:mx-40 '>
            <div>
                <h1 className='text-4xl font-bold text-center'>MY SKILLS</h1>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Language ,FrameWork & Database</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={html} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>HTML</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={css} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>CSS</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={Tailwind} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Tailwind CSS</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={Bootstrap} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Bootstarp</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={mui} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Material UI</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={react} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>React</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={JavaScript} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>JavaScript</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={firebase} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Firebase</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={node} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>NodeJS</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={express} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>ExpressJS</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={mongodb} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>MongoDB</h1>
                    </div>


                </div>
                <div className='flex justify-center '>
                    <div className='lg:w-1/2 py-10 bg-black p-5 rounded-lg shadow-2xl '>
                        <SkillBar skills={skills} colors={colors}></SkillBar>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;