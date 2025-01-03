import React from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import person from "../assets/person.png";
import arrowOnbtn from "../assets/arrowOnbtn.svg";
import beforeBtn from "../assets/beforeBtn.svg";
import stars from "../assets/stars.svg";
import profile from "../assets/profile.svg";
function First() {
  return (
    <section className="w-100 h-[1000px] md:h-[800px] lg:h-[800px] bg-white rounded-b-[50px] lg:rounded-b-[150px] md:rounded-b-[100px] sm:rounded-b-[50px] relative">
      <nav className="flex items-center justify-between p-5 flex-wrap">
        <div className="ml-2 md:ml-10 lg:ml-10">
          <div className="flex items-center text-3xl">
            <img src={logo} alt="UpskilLink" />
            upskillink
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="mx-14 hidden md:block lg:block">Category</div>
          <div className="mx-14 hidden md:block lg:block">About Us</div>
          <div className="mx-14 hidden md:block lg:block">
            Upskillink Business
          </div>
        </div>
        <div className="border-[3px] border-black py-2 px-7 rounded-full mr-2 md:mr-8 lg:mr-10 flex text-sm hover:bg-[#A3D95D] hover:shadow-[4px_4px_0_rgba(0,0,0,1)] transition duration-300 cursor-pointer">
          SignUp <img src={arrow} alt="" className="ml-3" />
        </div>
      </nav>
      <main>
        <div className="font-bold mx-auto my-5 text-center border-[3px] border-black py-2 px-7 rounded-full w-[300px]">
          WELCOME TO UPSKILLINK
        </div>
        <div>
          <div className="font-bold mx-20 my-5 text-center text-3xl lg:text-8xl md:text-6xl sm:text-[50px]">
            Meet the Professional Mentor
          </div>
          <div className="flex items-center justify-center flex-wrap md:justify-between">
            <div className="ml-14 z-20">
              <span className="text-6xl mb-0">&ldquo;</span>
              <blockquote className="text-lg font-semibold text-black italic mb-4">
                <p>
                  “Now you can learn anywhere,
                  <br /> anytime, even if there is no <br /> institute access!”
                </p>
              </blockquote>
              <div>
                <p className="text-3xl font-bold text-black">10K+</p>
                <p className="text-black">Mentors</p>
              </div>
            </div>
            <div className="mr-10 z-20">
              <img src={stars} alt="" className="ml-40" />
              <div className="text-end mt-5">
                <p>"Personalized tutoring on this platform</p>
                <p>transformed my learning experience </p>
                <p>and understanding"</p>
              </div>
              <div className="flex items-center mt-5 ml-20 justify-center">
                <div>
                  Priatia Candra <p className="text-sm">MERN Developer</p>
                </div>

                <img src={profile} alt="" className="ml-5" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="z-[1] bottom-[-21px] left-1/2 absolute transform -translate-x-1/2 adjustw"
              src={person}
              alt=""
            />
            <div className="absolute bottom-[30px] z-[4] left-1/2 transform -translate-x-1/2 text-black bg-white rounded-full py-3 px-3 flex">
              <img
                src={beforeBtn}
                alt=""
                className="absolute bottom-[30px] left-[-40px] md:left-[-40px] lg:left-[-40px] z-[10]"
              />
              <button className="border-2 border-black rounded-full sm:py-4 px-7 hover:bg-[#A3D95D] hover:shadow-[4px_4px_0_rgba(0,0,0,1)] transition duration-300 text-sm flex items-center mr-5 cursor-pointer">
                Request Demo <img src={arrowOnbtn} className="ml-3" alt="" />
              </button>
              <button className="border-2 border-black rounded-full sm:py-4 px-10 hover:bg-[#A3D95D] hover:shadow-[4px_4px_0_rgba(0,0,0,1)] transition duration-300 text-sm cursor-pointer">
                I'm Mentor
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default First;
