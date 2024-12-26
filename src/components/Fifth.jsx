import React from 'react';
import arrowOnbtn from '../assets/arrowOnbtn.svg';

function Fifth() {
  return (
    <div className='bg-white w-full h-screen lg:rounded-t-[150px] md:rounded-t-[100px] sm:rounded-t-[50px] flex flex-col lg:flex-row'>
      <div className='lg:w-1/2 p-16'>
        <button className='font-bold rounded-full sm:py-4 px-7 border-solid border-2 border-black'>LET'S BEGIN</button>
        <h1 className='text-[64px] font-bold'>How To Start Learning With upskillink</h1>
        <button className="border-2 border-black rounded-full sm:py-4 px-7 bg-[#A3D95D] shadow-[4px_4px_0_rgba(0,0,0,1)] transition duration-300 text-sm flex items-center mr-5">
          Get Started <img src={arrowOnbtn} className="ml-3" alt="" />
        </button>
      </div>

      <div className="relative sm:p-6 p-4 pt-16 w-full lg:w-1/2">
  <div className="absolute left-[1.2em] sm:left-[2.5em] md:left-[2.5em] top-[5.5em] sm:top-[6em] md:top-[6.3em] w-[0.2em] h-[7em] bg-[#F2F2F2]"></div>

  <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
    <div className="flex items-center justify-center w-16 h-9 rounded-full border-4 bg-[#F2F2F2] border-green-500 text-green-500 font-bold">
      1
    </div>
    <div className='h-18'>
      <h3 className="font-bold text-lg">Book The Lesson</h3>
      <p className="text-[#959595] pt-4">Design a clear, goal-oriented curriculum that aligns with your expertise and meets learners' needs. Create structured lessons or flexible sessions to guide students effectively.</p>
    </div>
  </div>

  <div className="absolute left-[1.9em] sm:left-[2.5em] md:left-[2.5em] top-[13em] sm:top-[14em] md:top-[15em] w-[0.2em] h-[7em] bg-[#F2F2F2]"></div>

  <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-10">
    <div className="flex items-center justify-center w-16 h-9 rounded-full border-4 bg-[#F2F2F2] border-[#F2F2F2] text-gray-800 font-bold">
      2
    </div>
    <div className='h-18'>
      <h3 className="font-bold text-lg">Connect To Mentor</h3>
      <p className="text-[#959595] pt-4">Conduct live sessions that inspire and educate. Use our platform to provide interactive and impactful learning experiences through personalized and group classes.</p>
    </div>
  </div>

 
  <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-10">
    <div className="flex items-center justify-center w-16 h-9 rounded-full border-4 border-[#F2F2F2] bg-[#F2F2F2] text-gray-800 font-bold">
      3
    </div>
    <div className='h-18'>
      <h3 className="font-bold text-lg">Earn Rewards</h3>
      <p className="text-[#959595] pt-4">Create and manage a dynamic learning hub. Foster collaboration, host discussions, and build a supportive network that enhances the learning journey for all members.</p>
    </div>
  </div>
</div>


    </div>
  );
}

export default Fifth;
