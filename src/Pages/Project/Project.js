import React from 'react';
import { motion } from "framer-motion"
import image from '../../Assets/project/exclusive-photography.firebaseapp.com_ (2).png'
import part from '../../Assets/project/exclusive-photography.firebaseapp.com_ (1).png'
import doctor from '../../Assets/project/doctors-portal-349f1.firebaseapp.com_.png'
import imajon from '../../Assets/project/ema-john-authentication-76f63.firebaseapp.com_ (1).png'
import skill from '../../Assets/project/skillshop-academy.firebaseapp.com_.png'
import penguin from '../../Assets/project/rafin8990.github.io_penguin-fashion_.png'
import panda from '../../Assets/project/rafin8990.github.io_panda-comerce_.png'
import digital from '../../Assets/project/rafin8990.github.io_Digital-learning_.png'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }} className='lg:mx-44 min-h-screen '>
            <h1 className='text-4xl font-bold text-center'>PROJECTS</h1>
            <div className='flex justify-center'>
                <p className='text-xl text-center w-1/2'>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
            </div>
            <div className='border border-cyan-900 lg:pb-36 p-5 rounded-xl shadow-lg mt-5'>
                <p className='text-2xl font-bold mb-5 '>Featured Project</p>
                <div className='md:flex'>
                    <div className='relative'>
                        <div>
                            <img className=' w-4/5 rounded-lg shadow-2xl' src={image} alt="" />
                        </div>
                        <div className=' absolute right-5 top-1/3 w-3/5 border-8 rounded-lg shadow-2xl'>
                            <img className='' src={part} alt="" />
                        </div>
                    </div>
                    <div className='mt-36 md:mt-0 lg:mx-20 '>
                        <h1 className='font-bold'>Full Stack Photography Website</h1>
                        <p>
                            <li> This is a MERN project .</li>
                            <li> This is a professional photography website .</li>
                            <li> Email and Password based authentication Applied.</li>
                            <li> A Social Authentication Applied.</li>
                            <li>Home page have a banner section, a three service data , and 3 extra field added
                                service route have 6 service data.</li>
                            <li> Each service had a button, onclicking the button, the user see the service details and comment of these service . if the user is log in , he also see the add comment form otherwise he saw only comment.</li>
                            <li>Navber has 3 public route and 3 private route.
                                If a user doesn't log in , he can not get access to see the my review , add service and logout button.</li>
                            <li>my Review routes each route have 2 button. delete and update . user can delete or update his/her review.</li>
                            <li>update buttopn clicking the user redirect to the update page .here he can see the update form and update the dataa .</li>
                            <li>Add service route contain a from where a valid user add a service .
                                Route wise website name applied</li>
                            <li>clicking the photo , the picture is view in the big window .</li>

                        </p>
                        <h3 className='text-xl font-bold'>Technology Used :</h3>
                        <p>HTML, CSS, Tailwind,Daisy UI , React, React Router , Node JS,Express JS, MongoDB, Vercel,Firebase</p>
                        <a href="https://exclusive-photography.firebaseapp.com/"> <button className='btn btn-sm btn-primary mt-5'>Live link</button></a>
                        <a href="https://github.com/rafin8990/exclusive-photography-client"> <button className='btn btn-sm btn-secondary mt-5'>Github Client</button></a>
                        <a href="https://github.com/rafin8990/exclusive-photography-server"> <button className='btn btn-sm btn-success mt-5'>Github Server</button></a>
                    </div>
                </div>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={doctor} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Doctors Portal</h2>
                        <Link to='/doctorsportal'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                    </div>
                </div>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={imajon} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Ema John</h2>
                        <Link to='/emajohn'><button className='btn btn-sm btn-secondary'>View Details</button></Link>
                    </div>
                </div>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={skill} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Skillshop Academy</h2>
                        <Link to='/skillshop'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                    </div>
                </div>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={penguin} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Penguin Fashion</h2>
                        <Link to='/panguin'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                    </div>
                </div>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={panda} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name:Panda Commerce</h2>
                        <Link to='/panda'><button className='btn btn-sm btn-secondary'>View Details</button></Link>

                    </div>
                </div>
                <div className="card w-96 h-96 border border-cyan-900 shadow-xl">
                    <figure><img src={digital} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name:Digital Learning</h2>
                        <Link to='/digital'><button className='btn btn-sm btn-secondary'>View Details</button></Link>
                       
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;