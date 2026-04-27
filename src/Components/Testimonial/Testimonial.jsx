import React from 'react'
import img from '../../images/img-2.png'
import clientimg1 from '../../images/person1.jpg'
import clientimg2 from '../../images/person2.jpg'
import clientimg3 from '../../images/person3.jpg'

const TestimonialId = [
  {
    "id": 1,
    "name": "Avinash Kr",
    "post": "Cofounder of xyz",
    "img": clientimg1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum"
  },
  {
    "id": 2,
    "name": "Bharat Kunal",
    "post": "Manager of xyz",
    "img": clientimg2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum"
  },
  {
    "id": 3,
    "name": "Prabhakar D",
    "post": "CEO of xyz",
    "img": clientimg3,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum"
  }
]

const Testimonial = () => {
  return (
    <section className='py-10'>
      <div>
        {/* Text Heading */}
        <div className='flex  flex-col items-center py-10'>
          <div className=''>
            <img src={img} alt="" />
          </div>
          <h1 className='md:text-5xl font-golos font-bold my-4 sm:text-[2rem] text-[1rem]'>Testimonial</h1>
        </div>
      </div>

      <div className="mt-10 mx-4 grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8">
  {TestimonialId.map((item, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center bg-[#efefef] px-4 py-2 rounded-lg shadow-lg"
    >
      {/* Image Section */}
      <div className="absolute top-[-70px]">
        <img
          className="border-white border-[8px] rounded-full w-[130px] h-[130px]"
          src={item.img}
          alt=""
        />
      </div>

      {/* Text Section */}
      <div className="text-justify mt-[80px] w-[90%] sm:w-[70%] md:w-auto">
        <p className="mb-8">{item.description}</p>
        <h2 className="text-center">
          <span className="text-primary font-bold">{item.name}</span> {item.post}
        </h2>
      </div>
    </div>
  ))}
</div>

    </section>

  )
}

export default Testimonial