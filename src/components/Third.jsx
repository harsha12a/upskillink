import React from 'react';
import vedio from "../assets/vedio.jpg";
import Ellipse from "../assets/Ellipse.png";
import Ellipsevector from "../assets/Ellipsevector.png";
import Ellipsearrow from "../assets/Ellipsearrow.png";

function Third() {
  return (
    <section className="bg-white w-full h-[750px] rounded-[50px] lg:rounded-[150px] md:rounded-[100px] sm:rounded-[50px] p-5 relative">
      <div className="font-bold mt-[100px] mx-auto my-5 text-center border-[3px] border-black py-3 px-7 rounded-full w-[230px] h-[50px]">
        WHY UPSKILLINK
      </div>
      <h2 className='font-bold text-5xl text-center'>Learner Outcomes On Upskillink</h2>
      <h1 className='text-2xl text-center mt-5'>Start, switch, or advance your career with more than 34,000+ courses on Upskillink!</h1>
      <div className="relative">
        <img className="h-[350px] m-5 mx-auto w-[1000px]" src={vedio} alt="Video" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[50px] w-[50px]" src={Ellipse} alt="Pause/Resume" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 h-[10px] w-[10px]" src={Ellipsevector} alt="Ellipse Vector" />
        <p className="absolute  text-[30px] left-[40%] top-[45%] transform -translate-x-1/2 text-white font-caveat  z-40">play for more</p>
        <img className="absolute top-[60%] left-[40%] transform -translate-y-1/2 z-30 h-[40px] w-[40px]" src={Ellipsearrow} alt="" />
        </div>
    </section>
  );
}

export default Third;
