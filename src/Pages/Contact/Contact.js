import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { FcReading, FcFaq, FcCallback } from "react-icons/fc";
import { HiArrowNarrowRight } from "react-icons/hi";
import './Contact.css'


const Contact = () => {
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_wyl3ziw', 'template_4turmyp', form.current, 'tGa-9wKkpA5EJKsaj')
            .then((result) => {
                console.log(result.text);
                form.reset()
                alert("SUCCESS!");

            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });
    };
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }} className='lg:mx-44 min-h-screen '>
            <div>
                <h1 className='text-4xl font-bold text-center'>GET IN TOUCH</h1>
            </div>
            <div className='md:flex mt-5'>
                <div>
                    <h1 className='text-2xl font-bold'>DON'T BE SHY !</h1>
                    <p className='text-lg text-gray-500 w-1/2'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcReading></FcReading>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>ADDRESS POINT</p>
                                <p className='text-xl '>Dhaka , Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcFaq></FcFaq>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>Mail Me:</p>
                                <p className='text-xl'>rafin.hossain.8990@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcCallback></FcCallback>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>Call Me :</p>
                                <p className='text-xl'>+880-1984419614</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Name" name="user_name" required className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Your Email" name="user_email" required className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Enter Your Subject" required className="input input-bordered w-full mt-5" />
                            <textarea className="textarea textarea-bordered w-full mt-5" name="message" required placeholder="Text Here"></textarea>

                            <div id='btn' className='rounded-xl w-44 mt-5'>
                                <button id='text' type='submit' value="Send">
                                    <div className='flex items-center'>
                                        <p className='mx-5'>Send Message</p>
                                        <p className='bg-cyan-500 rounded-full '><HiArrowNarrowRight></HiArrowNarrowRight></p>
                                    </div>

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;