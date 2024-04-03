import React from 'react'



function Card({name, num, image, text}) {
  return (
  <>
    <div>
      <div className='w-[373px] h-[296px]'>
          <img src={image} alt=""  className='rounded-lg '/>
          <div className='flex justify-between items-center px-3  -mt-4 ' >
            <h1 className='text-white font-Poppins font-semibold text-[50px]
            leading-[45px] tracking-[0.3px]'>{name}</h1>
             <h3 className='text-white font-Poppins font-semibold text-[20px]
             leading-[19px] tracking-[1.37px] bg-gray-900 px-2 py-2
             rounded-full'>{num}</h3> 
          </div>
          <p className='text-gray-600 font-Poppins font-normal text-[13px]
          leading-[14px] tracking-[0.5px] mt-2'>{text}</p>
      </div>
    </div>
  </>
  )
}

export default Card