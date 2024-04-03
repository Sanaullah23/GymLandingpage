import React from "react";
import herImage from "../assets/images/image 1.png";

function HeroSection() {
  return (
    <>
      <section className="mt-[64px] text-white">
        <div className="flex">
          <div>
            <div>
              <button>NEW</button>
              <p> High Intensity workout to burn calories</p>
            </div>
            <div>
              <h1 className="font-Poppins font-semibold text-[200px] 
              leading-[170px] traacking-[-2px]">Cardio Exercise</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <button>Get Start</button>
              <button>Preview</button>
            </div>
          </div>
          <div className="">
            {" "}
            <img src={herImage} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-900 px-8 py-2 rounded-lg">
                <h1 className="font-Poppins text-[40px] text-[#FFE642]">38:16</h1>
                <p>TIME</p>
            </div>
            <div className="bg-gray-900 px-8 py-2 rounded-lg">
            <h1 className="font-Poppins text-[40px] text-[#FB1351]">165</h1>
                <p>EST CALORIES</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
