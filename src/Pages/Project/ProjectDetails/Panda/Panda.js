import React from 'react';
import img1 from '../../../../Penguin Fashion/Screenshot 2022-12-11 234754.jpg'
import img2 from '../../../../Penguin Fashion/Screenshot 2022-12-11 234813.jpg'
import img3 from '../../../../Penguin Fashion/Screenshot 2022-12-11 234837.jpg'

const Panda = () => {
    return (
        <div>
            <div>
                <div className="hero h-[400px]" style={{ backgroundImage: `url("https://i.ibb.co/Y8Q370X/Screenshot-2022-12-11-234754.jpg")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="bg-white p-10 rounded-xl">
                            <h1 className="mb-5 text-4xl font-bold text-cyan-900">PROJECT NAME: PANDA COMMERCE</h1>
                            <p className="mb-5 text-cyan-900 text-xl">A Bootstrap responsive pages with different kinds of product</p>
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
                        <li>Technology used: HTML , CSS, Bootstarp</li>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='md:flex justify-between w-1/3'>
                        <h1 className='text-xl'>Start Date: 10/11/2022</h1>
                        <h1 className='text-xl'>End Date: 24/11/2022</h1>
                    </div>
                </div>
                <div className=" py-10 flex justify-center">
                    <div className="card-actions">
                        <a href=" https://github.com/rafin8990/panda-comerce"><button className="btn btn-secondary">github client</button></a>
                        <a href="https://rafin8990.github.io/panda-comerce/"><button className="btn btn-success">live link</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Panda;