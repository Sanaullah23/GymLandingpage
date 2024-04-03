import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className='text-white flex justify-between items-center px-8 py-4'>
            <h1 className='font-Poppins font-semibold text-[18px] leading-[22px]
            tracking-[1px]'>WORKOUT</h1>
            <ul className='font-Poppins font-normal  text-[12px] flex justify-between items-center
            gap-6 leading-[12px] tracking-[1.5px]'>
                <li>EXERCISES</li>
                <li>TRAINERS</li>
                <li>PRICE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar