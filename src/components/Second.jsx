import React from 'react'
import greencrossarrow from '../assets/greencrossarrow.svg'
import stars from '../assets/stars.svg'
import profile from '../assets/profile.svg'

function Second() {
  return (
    <section className="w-full h-screen relative min-h-[750px] ">
        <div className=" bg-black">
          <div className='text-white text-3xl text-center pt-20 font-bold'>Mentors From Your Dream Companies</div>
          <div className='text-[gray] pt-1 text-sm text-center '>Connect, Learn and Grow with the Help of Top mentors</div>
          <div className=''>
            <div className="bg-white w-full h-[90px] p-4 mt-3 relative rounded-full flex items-center justify-center md:w-[90%] mx-auto lg:w-[80%]">
              <marquee behavior="scroll" direction="left" className="w-full">
                  <div className="flex space-x-5 items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                      alt="Logo 1"
                      className="h-10 border-none"
                    />
                    <img
                      src="https://www.softpal.com/assets/img/moreIntegration/amazon_logo.png"
                      alt="Logo 2"
                      className="h-12 border-none"
                    />
                    <img
                      src="https://www.itvoice.in/wp-content/uploads/2023/05/AMD-Logo-1.png"
                      alt="Logo 3"
                      className="h-12 border-none"
                    />
                    <img
                      src="https://www.thoughtco.com/thmb/xA0zo7FUyCKKiuR39yl56V2y5so=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/intel-logo-56a6fa195f9b58b7d0e5ce3a.png"
                      alt="Logo 4"
                      className="h-12 border-none"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png"
                      alt="Logo 5"
                      className="h-12 border-none"
                    />
                  </div>
                </marquee>
              </div>
          </div>
        </div>
        <div className='mt-10 md:mt-20 md:flex md:justify-around'>
          <div className='text-white'>
            <h2 className='font-bold text-2xl text-center md:ml-10 md:text-left md:text-3xl'>Learner Outcomes <br /> On Upskillink</h2>
            <p className='mt-1 text-sm text-center md:ml-10 md:text-left md:mt-4'>Start, switch or advance your career <br /> with more than 34,000+ courses in Upskillink</p>
            <div className='mt- ml-2 w-full h-[100px] md:ml-5 md:mt-5'>
              <img src={greencrossarrow} alt="arrow" className='w-6 inline-block' />
              <p className='p-2 text-[25px] font-bold inline-block'>87%</p>
              <p className='text-[10px] inline-block px-2'>People learning for professional development report career <br /> benefits, including outcomes like getting promotion.</p>
            </div>
          </div>
          <div>
          <div class=" text-white p-4 border-2 border-gray-800 rounded-3xl shadow-lg max-w-sm md:max-w-[300px] lg:justify-around lg:max-w-[400px]">
            <div class="flex items-center space-x-1 mb-4">
              <img src={stars} alt="" />
            </div>
            <p class="text-gray-300 italic">
              "1:1 video sessions turned my organic chemistry confusion into clarity and boosted my confidence before exams."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="w-10 h-10 rounded-full"
                src={profile}
                alt="User Image"
              />
              <div class="ml-3">
                <p class="font-semibold">KatleWatere</p>
                <p class="text-sm text-gray-400">MERN Developer</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='max-w-sm mt-10 h-[120px] bg-gray-800 rounded-full flex justify-between items-center px-5 md:mx-auto md:max-w-[900px] md:justify-evenly lg:mt-5'>
            <div>
              <h2 className='text-[#A3D95D] font-bold text-[25px] md:text-[35px]'>34K+</h2>
              <p className='text-white'>Classes</p>
            </div>
            <div>
              <h2 className='text-[#A3D95D] font-bold text-[25px] md:text-[35px]'>800K+</h2>
              <p className='text-white'>Members</p>
            </div>
            <div>
              <h2 className='text-[#A3D95D] font-bold text-[25px] md:text-[35px]'>10K+</h2>
              <p className='text-white'>Mentors</p>
            </div>
            <div>
              <h2 className='text-[#A3D95D] font-bold text-[25px] md:text-[35px]'>4.8</h2>
              <p className='text-white'>Rating</p>
            </div>
        </div>
      </section>
  )
}

export default Second