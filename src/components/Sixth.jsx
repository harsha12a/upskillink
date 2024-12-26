import React from "react";
import Pg6_1 from "../assets/Pg6_1.svg";
import Pg6_2 from "../assets/Pg6_2.svg";
import Pg6_3 from "../assets/Pg6_3.svg";
import Pg6_4 from "../assets/Pg6_4.svg";
import Pg6_5 from "../assets/Pg6_5.svg";
import Pg6_6 from "../assets/Pg6_6.svg";
import Pg6_7 from "../assets/Pg6_7.svg";
import Pg6_8 from "../assets/Pg6_8.svg";
import student from "../assets/student.svg";
import mentor from "../assets/mentor.svg";
function Sixth() {
  let arr = [
    {
      id: 1,
      title: "Business",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_1,
    },
    {
      id: 2,
      title: "Development",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_2,
    },
    {
      id: 3,
      title: "IT & Software",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_3,
    },
    {
      id: 4,
      title: "Marketing",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_4,
    },
    {
      id: 5,
      title: "Art",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_5,
    },
    {
      id: 6,
      title: "Music",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_6,
    },
    {
      id: 7,
      title: "Photography & Video",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_7,
    },
    {
      id: 8,
      title: "Video Editing",
      first: "35+ Mentors",
      second: "500+ Students",
      img: Pg6_8,
    },
  ];
  return (
    <div className="h-[full] bg-white">
      <div className="pl-4 md:pl-40 pt-20">
        <div className="flex items-center justify-center font-bold rounded-full border-[3px] border-black h-[40px] w-[200px] ">
          TOP CATEGORY
        </div>
      </div>
      <div className="flex items-center justify-between pl-4 pr-4 md:pl-40 md:pr-40 pt-10">
        <div className="text-4xl font-bold text-center">
          Category You Must Know
        </div>
        <div className="font-bold text-[gray]">SEE ALL</div>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap p-10">
        {arr.map((item) => (
          <div className="flex items-start flex-col justify-center border-[3px] my-3 h-[320px] w-[350px] border-black rounded-[30px] effect" key={item.id}>
            <div className="w-[300px] border-[3px] border-black h-[190px] mt-3 m-auto rounded-[30px] main">
              <img className="m-auto" src={item.img} alt="" />
            </div>
            <div>
              <div className="ml-5 mb-5">
                <div className="text-xl font-bold mb-2">{item.title}</div>
                <div className="text-sm flex">
                  <img src={mentor} className="mr-2" />
                  {item.first}
                </div>
                <div className="text-sm flex">
                  <img src={student} className="mr-2" />
                  {item.second}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sixth;
