import React from "react";
import backyellow from "../assets/images/Group 140.png";
import workoutimage from "../assets/images/Group 146.png";
import workoutimage2 from "../assets/images/Group 142.png";
import workoutimage3 from "../assets/images/Group 147.png";



function Workout() {
  return (
    <>
      <section className="mt-[100px]" id="trainer">
        <div className="flex relative">
          <div className="flex-1 ">
            <h1
              className="font-Poppins font-semibold text-[120px]
          leading-[120px] tracking-[-2px] text-white w-[523px] ml-[50px] absolute mt-[60px] z-10"
            >
              Workout Program Made For You
            </h1>
            <img
              src={backyellow}
              alt=""
              className="absolute bottom-[6rem] left-[2rem] 
            top-[27.2rem] "
            />
          </div>
          <div className="bg-[#252424] w-[900px] h-[733px] pt-[6rem] pl-[18rem]">
            <p
              className="w-[558px] text-[25px] font-Poppins font-normal leading-[50px]
            tracking-[0.5px] text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </p>
            <button
              className="bg-[#25AB75] text-[18px] font-Poppins font-semibold
              leading-[22px] tracking-[1px] px-[65px] py-6 rounded-[10px] mt-8 text-white"
            >
              Get Start
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black  relative">
        <div className="absolute right-[1.5rem] bottom-[-0.2rem]">
          <img src={workoutimage} alt="" />
          <h1 className="text-white text-[20px] font-Poppins font-medium 
          leading-[20px] tracking-[0.5px] mt-2 ml-3">Jonathan Wise</h1>
          <p className="text-gray-600 font-Poppins font-normal text-[14px] leading-[14px]
          tracking-[0.5px] mt-2  ml-3">Trainer</p>
        </div>

        <div className="ml-[42px]">
           <img src={workoutimage2} alt="" />
           <h1 className="
           text-white text-[20px] font-Poppins font-medium 
           leading-[20px] tracking-[0.5px] mt-2
           ">Samantha William</h1>
           <p className="
           text-gray-600 font-Poppins font-normal text-[14px] leading-[14px]
           tracking-[0.5px] mt-2
           ">Trainer</p>
        </div>

        <div className="absolute  top-[20.2rem] left-[22.5rem]">
           <img src={workoutimage3} alt="" />
           <h1 className="
           text-white text-[20px] font-Poppins font-medium 
           leading-[20px] tracking-[0.5px] mt-2
           ">Karen Summer</h1>
           <p className="
           text-gray-600 font-Poppins font-normal text-[14px] leading-[14px]
           tracking-[0.5px] mt-2
           ">Trainer</p>
        </div> 
      </section>
    </>
  );
}

export default Workout;
