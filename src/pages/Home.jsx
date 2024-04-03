import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import PopularExercises from '../components/PopularExercises'
import Workout from '../components/Workout'
import Suggestion from '../components/Suggestion'

function Home() {
  return (
    <>
      <section className='bg-black '>
        <NavBar/>
        <HeroSection/>
        <PopularExercises/>
        <Workout/>
        <Suggestion/>
      </section>
    </>
  )
}

export default Home