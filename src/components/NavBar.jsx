import React from 'react'

function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <nav className='text-white flex justify-between items-center px-8 pt-8'>
            <h1 className='font-Poppins font-semibold text-[18px] leading-[22px]
            tracking-[1px]'>WORKOUT</h1>
            <ul className='font-Poppins font-normal  text-[12px] flex justify-between items-center
            gap-6 leading-[12px] tracking-[1.5px]'>
                <li onClick={()=>scrollToSection("exercises")}>EXERCISES</li>
                <li onClick={()=>scrollToSection("trainer")}>TRAINERS</li>
                <li>PRICE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar