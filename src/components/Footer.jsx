import React from 'react';
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import angleup from "../assets/angleup.png";

function Footer() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] absolute bg-black mt-[100px]">
      <div className="md:px-[100px] flex flex-col md:flex-row md:gap-x-[100px] mb-[25px] text-[18px]">
        
        <ul className="mb-8 md:mb-0">
          <h1 className="text-white mb-4 font-bold text-lg md:text-xl">For Candidates</h1>
          <div className="text-gray-400 space-y-2">
            <li className="hover:text-gray-200 cursor-pointer">Explore Jobs</li>
            <li className="hover:text-gray-200 cursor-pointer">Discover Companies</li>
            <li className="hover:text-gray-200 cursor-pointer">Browse Collection</li>
            <li className="hover:text-gray-200 cursor-pointer">The Career Blog</li>
          </div>
        </ul>

      
        <ul className="mb-8 md:mb-0">
          <h1 className="text-white mb-4 font-bold text-lg md:text-xl">For Companies</h1>
          <div className="text-gray-400 space-y-2">
            <li className="hover:text-gray-200 cursor-pointer">Upskillink Hire</li>
            <li className="hover:text-gray-200 cursor-pointer">Upskillink Referrals</li>
            <li className="hover:text-gray-200 cursor-pointer">The Hiring Blog</li>
            <li className="hover:text-gray-200 cursor-pointer">AI Job Builder</li>
          </div>
        </ul>

   
        <ul className="mb-8 md:mb-0">
          <h1 className="text-white mb-4 font-bold text-lg md:text-xl">Upskillink</h1>
          <div className="text-gray-400 space-y-2">
            <li className="hover:text-gray-200 cursor-pointer">About Us</li>
            <li className="hover:text-gray-200 cursor-pointer">Work with Us</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
          </div>
        </ul>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-white font-bold text-lg md:text-xl mb-4">Social Media</h1>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-6">
            {[
              { img: facebook, alt: "Facebook" },
              { img: twitter, alt: "Twitter" },
              { img: linkedin, alt: "LinkedIn" },
              { img: instagram, alt: "Instagram" },
            ].map((icon, index) => (
            <div
              key={index}
              className="h-[50px] w-[50px] bg-gray-800 rounded-full flex justify-center items-center"
            >
              <img
              src={icon.img}
              alt={icon.alt}
              className="h-auto max-h-[25px] max-w-[25px] object-contain"
              />
            </div>
            ))}
          </div>
      
        </div>
    
      </div>

   
      <div className="absolute top-[2%] right-5 md:right-10 h-[70px] w-[70px] bg-[#A3D95D] rounded-full flex justify-center items-center">
        <img src={angleup} alt="Scroll Up" className="h-2/4 w-2/4" />
      </div>

      <h1 className="text-white font-bold text-5xl md:text-8xl lg:text-[210px] text-center py-2 ">Upskillink</h1>
    
      <div className="max-w-full mt-12  sm:h-[80px] md:h-[100px] bg-gray-800 rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-center px-7 md:px-10 md:mx-auto md:max-w-[1700px] lg:mt-9">
        <div className="mb-3 md:mb-0">
          <p className="text-left text-white text-lg md:text-2xl">
            Copyright©2024Upskillink
          </p>
        </div>

        <div className="flex text-white md:text-2xl">
          <ul className="flex flex-wrap justify-center space-x-20  ">
            <li className="hover:text-gray-400 cursor-pointer">Term of Use</li>
            <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-400 cursor-pointer">Licensing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
