import React from 'react';
import { motion } from "framer-motion"
import photo1 from '../../../Assets/project/exclusive-photography.firebaseapp.com_ (1).png'
import photo2 from '../../../Assets/project/doctors-portal-349f1.firebaseapp.com_.png'
import photo3 from '../../../Assets/project/skillshop-academy.firebaseapp.com_.png'

const HomeProject = () => {
    return (
        <div className='mt-20'>
            <h1 className='flex justify-center text-4xl font-bold underline'>Projects</h1>
           <div className='pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo1} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Exclusive Photography</h1>
                            <a href="https://exclusive-photography.firebaseapp.com/"> <button className='btn btn-sm mt-5'>Live link</button></a>
                            <a href="https://github.com/rafin8990/exclusive-photography-client"> <button className='btn btn-sm mt-5'>Github Client</button></a>
                            <a href="https://github.com/rafin8990/exclusive-photography-server"> <button className='btn btn-sm mt-5'>Github Server</button></a>

                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo2} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Doctors portal</h1>
                            <a href=" https://github.com/rafin8990/doctors-portal-client"><button className="btn btn-sm">github client</button></a>
                            <a href=" https://github.com/rafin8990/doctors-portal-server"><button className="btn btn-sm ml-3 mt-3">Github Server</button></a>
                            <a href="https://doctors-portal-349f1.firebaseapp.com/"><button className="btn btn-sm ml-3 mt-3">live link</button></a>

                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="hero border mt-20 shadow-2xl rounded-2xl ">
                    <div className="hero-content flex-col">
                        <img src={photo3} className="h-72 rounded-lg" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Skillshop Academy</h1>
                            <a href=" https://github.com/rafin8990/skillshop-academy-client"><button className="btn btn-sm">github client</button></a>
                            <a href=" https://github.com/rafin8990/skillshop-academy-server"><button className="btn btn-sm ml-3 mt-3">Github Server</button></a>
                            <a href="https://skillshop-academy.firebaseapp.com/"><button className="btn btn-sm ml-3 mt-3">live link</button></a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeProject;