import React from 'react'
import Navbar from '../Navbar/Navbar'
import img from '../../images/Hero.png'
const Hero = () => {
  return (
    <section>
    <Navbar/>
    <div className='container relative'>
     <div className='grid md:grid-cols-2 grid-cols-1 '>
      {/* Text Section */}
      <div className='md:justify-self-start py-[5rem] text-center flex flex-col justify-center items-center md:justify-start md:items-start'>
        <h1 className='font-golos font-extrabold md:text-5xl mb-2 text-3xl sm:text-4xl'>Vegetables</h1>
        <h1 className='font-golos font-extrabold text-5xl text-primary mb-3'>Shop</h1>
        <p className='font-golos md:w-[70%] sm:w-[60%]  leading-6 mb-3 mt-6 w-full md:text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>

        <div className='mt-[5.5rem]'>
            <button className='primary-btn mr-2'>Buy Now</button>

            <button className='secondary-btn'>Read More</button>
        </div>
      </div>

      {/*Image Section*/}
       <div className='justify-self-center flex items-center'>
        <img src={img} alt="" />
       </div>
     </div>

    </div>
    </section>
  )
}

export default Hero