import React from 'react'
import img from '../../images/img-2.png'

const Contactus = () => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        {/* Heading */}
        <div className='flex  flex-col items-center py-10'>
          <div>
            <img src={img} alt="" />
          </div>
          <h1 className='md:text-5xl font-golos font-bold my-4 sm:text-[2rem] text-[1rem]'>Contact Us</h1>
        </div>



        {/* Map+Forms */}
        <div className='grid grid-cols-1 md:grid-cols-2 p-6'>
          {/* forms */}
          <div className='px-9'>
            <form action="">
              <div class="relative mb-6">
                <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Name <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                </svg>
                </label>
                <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="Name" required="" />
              </div>
              <div class="relative mb-6">
                <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                </svg>
                </label>
                <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="name@pagedone.com" required="" />
              </div>
              <div class="relative mb-6">
                <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Message <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
                </svg>
                </label>
                <div class="flex">
                  <div class="relative w-full">
                    <textarea class="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Write a message..."></textarea>
                  </div>
                </div>
              </div>
              <button class="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">Send Message</button>
            </form>
          </div>
          {/* map */}
          <div className='px-9 flex justify-center mt-9 md:mt-auto'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13418.397307435902!2d74.05686088962804!3d32.776364570149916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fa82fb8ccaeb3%3A0xc666997b1145e7a3!2sBazurgwal%2C%20Gujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734261638230!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contactus