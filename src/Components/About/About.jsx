import React from 'react'
import img from '../../images/img-2.png'
import img2 from '../../images/img-3.png'
const About = () => {
    return (
        <section className='relative py-6'>
            <div className="container flex flex-col items-center">
                {/* Heading */}
                <div className='flex  flex-col items-center'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='md:text-5xl font-golos font-bold my-4 text-[1.5rem]'>About Our Shop</h1>
                </div>
                {/* image */}
                <div  className='my-6'>
                    <img src={img2} alt="" />
                </div>
                {/* text + button */}
                <div className='w-[60%] mb-6'>
                    <p className='md:text-center text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    
                </div>
                <button className='secondary-btn mb-4'>Read More</button>
            </div>
        </section>
    )
}

export default About