import React from 'react'
import Card from './Card'
import cardImage1 from '../assets/images/image4.png'
import cardImage2 from '../assets/images/image 7.png'
import cardImage3 from '../assets/images/image 2.png'
import cardImage4 from '../assets/images/image 12.png'
import cardImage5 from '../assets/images/image 6.png'
import cardImage6 from '../assets/images/image 3.png'


function PopularExercises() {
  return (
    <>
       <section className=' mt-[200px] ml-6 pb-[24px]' id='exercises'>
        <h1 className='text-[35px] text-white font-Poppins font-semibold 
        leading-[45px] tracking-[0.3px] pb-8'>Popular Exercises</h1>
         <div className=' grid grid-cols-3 gap-[50px]'>
         <Card name="Treadmill" num="58:24" image={cardImage1} text="250 est calories " />
        <Card name="Stretching" num="58:24" image={cardImage2} text="250 est calories " />
        <Card name="Yoga" num="58:24" image={cardImage3} text="250 est calories " />
        <Card name="Running" num="58:24" image={cardImage4} text="250 est calories " />
        <Card name="Lifting" num="58:24" image={cardImage5} text="250 est calories " />
        <Card name="PushUp" num="58:24" image={cardImage6} text="250 est calories " />
         </div>
       </section>
    </>
  )
}

export default PopularExercises