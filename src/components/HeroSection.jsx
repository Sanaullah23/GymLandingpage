import React from "react";
import herImage from "../assets/images/image 1.png";

function HeroSection() {
  return (
    <>
      <section className="mt-[64px] text-white  px-8 h-[1170px]">
        <div className="flex">
          <div className="flex-1">
            <div className="bg-gray-900 w-[329px] h-[36px] flex  items-center gap-2 
             rounded-full px-1 mb-8">
              <button className="bg-green-500 rounded-full px-2 text-[10px] font-Poppins 
              font-semibold leading-[18px] tracking-[1.5px] py-1">NEW</button>
              <p className="text-[12px] font-Poppins font-normal leading-[18px] tracking-[0.5px]"> High Intensity workout to burn calories</p>
            </div>
            <div className="">
              <h1 className="font-Poppins font-semibold text-[200px] 
              leading-[170px] traacking-[-2px]">Cardio Exercise</h1>
              <p className="text-[16px] font-Poppins font-normal leading-[29px]
              tracking-[0.5px] mt-8 mb-8 w-[600px] text-gray-600 px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" flex gap-4 items-center">
              <button className="bg-[#25AB75] text-[18px] font-Poppins font-semibold
              leading-[22px] tracking-[1px] px-[65px] py-6 rounded-[10px]">Get Start</button>
             <button className="bg-gray-900 text-[18px] font-Poppins font-semibold
              leading-[22px] tracking-[1px] px-[65px] py-6 rounded-[10px]">Preview</button>
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <img src={herImage} alt="" className="absolute  top-[-4.5rem] right-[-5.2rem]" />
          </div>
          <div className="flex-1 mt-[7.2rem]">
            <div className="bg-gray-900 px-8 py-4 rounded-xl w-[11rem] flex flex-col gap-2">
                <h1 className="font-Poppins text-[40px] font-semibold leading-[40px] tracking-[1px] text-[#FFE642]">38:16</h1>
                <p className="font-Poppins text-[13px] leading-[13px] tracking-[1px]">TIME</p>
            </div>
            <div className="bg-gray-900 px-8 py-4 rounded-xl w-[11rem] mt-6
            flex flex-col gap-2">
            <h1 className="font-Poppins text-[40px] font-semibold leading-[40px] tracking-[1px] text-[#FB1351]">165</h1>
                <p className="font-Poppins text-[13px] leading-[20px] tracking-[1px]">EST CALORIES</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
