import React from "react";

function SuggestionCard({text, num, image, vid}) {
  return (
    <>
      <div className="text-[20px] text-white px-[60px] py-4">
        <div className="flex justify-between items-center">
          <p className="text-[25] leading-[35px] font-Poppins font-semibold text-gray-500">
            {num}
          </p>
          <h1
            className="text-[50px] font-Poppins font-normal leading-[70px]
        tracking-[0.80px]"
          >
            {text}
          </h1>
          <img src={image} alt="" />
        </div>
        <p className="text-center text-[14px] leading-[23px] tracking-[0.5px] text-gray-500">
          {vid}
        </p>
        <hr />
      </div>
    </>
  );
}

export default SuggestionCard;
