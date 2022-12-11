import React from 'react';
import { motion } from "framer-motion"
import photo1 from '../../../Assets/project/exclusive-photography.firebaseapp.com_ (1).png'
import photo2 from '../../../Assets/project/doctors-portal-349f1.firebaseapp.com_.png'
import photo3 from '../../../Assets/project/skillshop-academy.firebaseapp.com_.png'
import { Link } from 'react-router-dom';

const HomeProject = () => {
    return (
        <div className='mt-20 pb-10'>
            <h1 className='flex justify-center text-4xl font-bold underline'>Projects</h1>
           <div className='pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:border border-cyan-900 mt-10 p-5 rounded-2xl '>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border md:mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo1} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Exclusive Photography</h1>
                            <Link to='/project'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border md:mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo2} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Doctors portal</h1>
                            <Link to='/doctorsportal'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border md:mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo3} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Skillshop Academy</h1>
                            <Link to='/skillshop'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default HomeProject;