import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import About from '../Components/About/About'
import Hero from '../Components/Hero/Hero'
import Product from '../Components/Product/Product'
import Choose from '../Components/Choose/Choose'
import Testimonial from '../Components/Testimonial/Testimonial'
import Contactus from '../Components/ContactUs/Contactus'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <>   
     <Hero/>
   <About/>
   <Product/>
   <Choose/>
   <Testimonial/>
   <Contactus/>
   <Footer/>
   </>

  )
}

export default Home