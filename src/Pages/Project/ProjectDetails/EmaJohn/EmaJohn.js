import React from 'react';
import img1 from '../../../../Emajohn/Screenshot 2022-12-11 153614.jpg'
import img2 from '../../../../Emajohn/Screenshot 2022-12-11 153737.jpg'
import img3 from '../../../../Emajohn/Screenshot 2022-12-11 153718.jpg'

const EmaJohn = () => {
    return (
        <div>
            <div>
                <div className="hero h-[400px]" style={{ backgroundImage: `url("https://i.ibb.co/4MGbLHk/Screenshot-2022-12-11-153614.jpg")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="bg-white p-10 rounded-xl">
                            <h1 className="mb-5 text-4xl font-bold text-cyan-900">PROJECT NAME: EMA JOHN</h1>
                            <p className="mb-5 text-cyan-900 text-xl">Exclusive digital e-commerce site with shopping cart and firebase aithentication system</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5'>
                    <div className="w-full bg-base-100 shadow-2xl border border-cyan-900 rounded-xl ">
                        <img className='rounded-xl' src={img1} alt="" />
                    </div>
                    <div className="w-full  bg-base-100 shadow-2xl border border-cyan-900 rounded-xl">
                        <img className='rounded-xl' src={img2} alt="" />
                    </div>
                    <div className="w-full  bg-base-100 shadow-2xl border border-cyan-900 rounded-xl">
                        <img className='rounded-xl' src={img3} alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-4xl font-semibold text-cyan-600 text-center'>About this project</h1>
                <div className='flex justify-center mt-10'>
                    <div className=' text-xl '>
                        <li>Resposive navbar with logo</li>
                        <li>Product has its name and price and quality</li>
                        <li> Each product has a button to buy these product</li>
                        <li>Clicking to button product will added to the cart</li>
                        <li> A person can not buy any product without login </li>
                        <li>Google login feature Applied</li>
                        <li>
                            Technology Used :
                            HTML, CSS, Tailwind,Daisy UI , React, React Router , Node JS,Express JS, MongoDB, Vercel,Firebase
                        </li>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='md:flex justify-between w-1/3'>
                        <h1 className='text-xl'>Start Date: 10/10/2022</h1>
                        <h1 className='text-xl'>End Date: 10/11/2022</h1>
                    </div>
                </div>
                <div className="card-actions py-10 flex justify-center">
                    <a href=" https://github.com/rafin8990/ema-john-project-authentication"><button className="btn  btn-success">github client</button></a>
                    <a href="https://ema-john-authentication-76f63.firebaseapp.com/"><button className="btn btn-secondary">live link</button></a>
                </div>

            </div>
        </div>
    );
};

export default EmaJohn;