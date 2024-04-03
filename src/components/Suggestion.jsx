import React from 'react'
import SuggestionCard from './SuggestionCard'
import arrowImage from "../assets/images/Group 4.png";

function Suggestion() {
  return (
    <>
        <section className='mt-[400px] mb-[50px]'>
            <SuggestionCard text="Workout at Home"  image={arrowImage} num="  01" vid="15 videos"  />
            <SuggestionCard text="Stay Strong and Fit"  image={arrowImage} num="  02" vid="48 videos"  />
            <SuggestionCard text="High Intensity"  image={arrowImage} num="  03" vid="23 videos"  />
            <SuggestionCard text="Simple Workout"  image={arrowImage} num="  04" vid="40 videos"  />
            <SuggestionCard text="Burn Calories"  image={arrowImage} num="  05" vid="35 videos"  />

        </section>
    </>
  )
}

export default Suggestion