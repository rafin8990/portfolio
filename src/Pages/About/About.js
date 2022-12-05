import React from 'react';
import './About.css'
import { HiArrowCircleDown } from "react-icons/hi";
import resume from '../../Assets/resume/Rafin-resume.pdf'
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }} className='min-h-screen '>
            <h1 className='text-4xl text-center font-bold mt-5 '>ABOUT ME</h1>
            <div>
                <div className=' md:flex mt-5 md:mx-20 lg:mx-44 '>
                    <p className='text-gray-500 p-5 md:p-0 lg:w-2/3'> I’m a web developer living in Dhaka, Bangladesh. I am a fan of photography, technology, and programming. I’m also interested in web development. I'm familiar with a variety of programming languages, including JavaScript, HTML, CSS, React, Tailwind CSS, Bootstrap, Daisy UI, MaterialUI, ES6, NodeJS, ExpressJS , MongoDB. I have completed my SSC and HSC from Dhamrai Hardinge High school & college. At present I am Studying in Department Of English at City University Bangladesh. I actively seek out new technologies and stay up-to-date on industry trends. I am a very quick learner and I also do google search for the new things . In my spare time , I like to travelling the historical places and other places. Feel free to send me a message if you would like to know more about me. I am always eager to hear from others and expand my network on LinkedIn.</p>
                    <p id='divider' className='hidden md:block'></p>
                    <p id='divider1' className='mx-20 md:hidden'></p>
                    <p className='text-gray-500 p-5 md:p-0 lg:w-2/3'>I have a well-rounded skill set and good knowledge in HTML5, CSS3, JavaScript, Bootstrap 5, Tailwind-3, React, React Router, Firebase (Authentication), Node.js, Express.js and MongoDB. Further, I am very good at problem-solving also. I actively seek out new technologies and stay up-to-date on industry trends.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-20 lg:mx-44'>
                    <div className='mt-5'>
                        <h3 className='text-2xl text-cyan-900 ml-5 md:ml-0'>Personal Info ______________</h3>

                        <div className=' hidden md:flex justify-between '>
                            <div>
                                <p><span className='text-xl font-bold'>First Name</span>: Rafin</p>
                                <p><span className='text-xl font-bold'>Age</span>: 22</p>
                                <p><span className='text-xl font-bold'>Address</span>: Dhaka, Bangladesh</p>
                                <p><span className='text-xl font-bold'>Github</span>:rafin8990</p>

                            </div>
                            <div>
                                <p><span className='text-xl font-bold'>Last Name</span>: Hossain</p>
                                <p><span className='text-xl font-bold'>Nationality</span>: Bangladeshi</p>
                                <p><span className='text-xl font-bold'>Mobile</span>: +880 1984419614</p>
                                <p><span className='text-xl font-bold'>Language</span>: English , Bangla</p>
                            </div>
                        </div>
                        <div className='md:hidden ml-5'>
                            <p><span className='text-xl font-bold'>Name</span>: Rafin Hossain</p>
                            <p><span className='text-xl font-bold'>Age</span>: 22</p>
                            <p><span className='text-xl font-bold'>Nationality</span>: Bangladeshi</p>
                            <p><span className='text-xl font-bold'>Address</span>: Dhaka , Bangladesh</p>
                            <p><span className='text-xl font-bold'>Github</span>: rafin8990</p>
                            <p><span className='text-xl font-bold'>Language</span>: English , Bangla</p>
                        </div>
                        <div id='btn' className='w-60 rounded-2xl mt-5 ml-5 md:ml-0'>
                            <a href='../../Assets/resume/Rafin-resume.pdf' download="Rafin-resume.pdf">

                                <button id='text' >
                                    <div className='flex items-center'>
                                        <p className='mx-5'>DOWNLOAD RESUME</p>
                                        <p className='bg-cyan-500 rounded-full text-xl'><HiArrowCircleDown></HiArrowCircleDown></p>
                                    </div>

                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5 mx-3 md:mx-0'>
                        <div className='border border-cyan-900 rounded-xl p-10shadow-2xl'>
                            <h1 className='text-2xl font-bold flex items-center justify-center'>13 +</h1>
                            <div className='flex items-center justify-center'>
                                <p>___</p>
                                <h3 className='text-xl ml-5'>Completed <br /> Project</h3>
                            </div>
                        </div>
                        <div className='border border-cyan-900 rounded-xl p-10  shadow-2xl'>
                            <h1 className='text-2xl font-bold text-center'>Honors</h1>
                            <div className='flex items-center justify-center'>
                                <p>___</p>
                                <h3 className='text-xl ml-5'>4th Year running <br />2019-current</h3>
                            </div>
                        </div>
                        <div className='border border-cyan-900 rounded-xl p-10  shadow-2xl'>
                            <h1 className='text-2xl font-bold text-center'>HSC</h1>
                            <div className='flex items-center justify-center'>
                                <p>___</p>
                                <h3 className='text-xl ml-5'>Completed<br />2017-2018</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </motion.div>
    );
};

export default About;