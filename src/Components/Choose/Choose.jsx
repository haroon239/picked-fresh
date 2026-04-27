import React from 'react'
import img from '../../images/img-2.png'
import img14 from '../../images/img-14.png'
const Choose = () => {
    return (
        <section className='py-10 bg-[#f9f9f9]'>
            <div className="container flex flex-col items-center">
                {/* Heading */}
                <div className='flex  flex-col items-center py-10'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='md:text-5xl font-golos font-bold my-4 sm:text-[2rem] text-[1rem]'>Why Choose Us</h1>
                </div>

                {/* images */}
                <div>
                    <img src={img14} alt="" />
                </div>

                {/* Text */}
                <div className='md:w-[70%] my-14 '>
                <p className='md:text-center text-justify'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      
                </div>
                <button className='secondary-btn'>Read More</button>
            </div>
        </section>
    )
}

export default Choose