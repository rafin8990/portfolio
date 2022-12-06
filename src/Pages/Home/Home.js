import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profile from '../../Assets/profile.jpg'
import './Home.css'
import { HiArrowNarrowRight, HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {
    return (

        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className='md:mx-12 lg:mx-48 lg:mt-40 min-h-screen '>
            <div className=' md:flex items-center'>
                <div className='ml-5 md:ml-0 flex items-center'>
                    <div className=' flex justify-center'>
                        <img id='img' src={profile} alt="" />
                    </div>
                </div>
                <div className='md:ml-10 md:w-1/3 p-5 md:p-0'>
                    <h1 className='text-4xl font-bold'>HI</h1>
                    <h1 className='text-4xl font-bold'>I AM <span className=' text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900'>RAFIN HOSSAIN</span></h1>
                    <div id='text'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'WEB-DEVELOPER',
                                2000,
                                'FULL STACK DEVELOPER',
                                2000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    </div>

                    <p className='text-gray-500'>Hi , I’m Rafin Hossain. I’m a web developer living in Dhaka, Bangladesh. I am a fan of photography, technology, and programming. I’m also interested in web development. I'm familiar with a variety of programming languages, including JavaScript, HTML, CSS, React, Tailwind CSS, Bootstrap, Daisy UI, MaterialUI, ES6, NodeJS, ExpressJS , MongoDB. </p>
                    <div id='btn' className=' rounded-3xl  w-44 mt-5'>
                        <Link to='/about'><button id='text'>
                            <div className='flex items-center'>
                                <p className='mx-5'>More About Me</p>
                                <p className='bg-cyan-500 rounded-full '><HiArrowNarrowRight></HiArrowNarrowRight></p>
                            </div>

                        </button></Link>
                    </div>
                    <div className=' flex mt-5 '>
                        <p className='text-4xl '> <a href="https://www.rafin.hossain.8990@gmail.com"><HiMail></HiMail></a></p>
                        <p className='text-4xl ml-5'> <a href=" tel:+8801984419614"><HiPhone></HiPhone></a></p>
                        <p className='text-4xl ml-5'> <a href="https://www.facebook.com/Rafin.Hossain.19614/"><FaFacebook></FaFacebook></a></p>
                        <p className='text-4xl ml-5'> <a href="https://www.linkedin.com/in/rafin-hossain-005491245/"><FaLinkedin></FaLinkedin></a></p>
                        <p className='text-4xl ml-5'> <a href="https://github.com/rafin8990"><FaGithub></FaGithub></a></p>
                    </div>
                </div>
            </div>
        </motion.div>




    );
};

export default Home;