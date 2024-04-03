import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <>
      <section className='bg-black'>
        <NavBar/>
        <HeroSection/>
      </section>
    </>
  )
}

export default Home