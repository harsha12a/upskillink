import React from 'react'
import sampleDashboard from '../assets/sampleDashboard.svg'
import sampleinterface from '../assets/interface.svg'
function Fourth() {
  return (
    <div className='flex flex-wrap'>
    <div className='w-full md:w-1/2 p-6'>
      <h1 className='text-[56px] font-bold text-white p-3 m-3'>Level Up the learning journey</h1>
      <img className='pt-16' src={sampleDashboard} alt="" />
    </div>
  
    <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
      <div className="bg-[#1C1C1C] rounded-full flex justify-between p-3 m-5">
        <div className="bg-clip-text text-transparent  pt-7 bg-gradient-to-r from-[#DADADA00] to-[#747474] text-[25px] sm:text-[29px]">Open Mic</div>
        <div className="text-white text-[30px] sm:text-[40px] w-1/2 text-center">Easy To Use Interface</div>
        <div className="text-transparent bg-clip-text pt-7 bg-gradient-to-l from-[#DBDBDB00] to-[#A4A4A4] text-[25px] sm:text-[29px]">Community</div>
      </div>
  
      <div className="text-center border-2 border-[#686666] rounded-[25%] flex flex-col items-center p-3 m-3">
        <img src={sampleinterface} alt="" className="w-1/2 mb-4" />
        <p className="text-[#DBDBDB] text-[22px] w-3/5">
          Skillink aims to cater to the diverse needs and preferences of both
          educators and students, fostering a dynamic and adaptable learning
          environment.
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Fourth