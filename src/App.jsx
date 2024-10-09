import React from 'react'
import HeroSection from './pages/HeroSection'
import Skill from './pages/Skill'
import Work from './pages/Work'
import Education from './pages/Education'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import BgAnime from './pages/BgAnime'
import Compliment from './pages/Compliment'

const App = () => {
  return (
    
    <>
    <main className='bg-light-gradient dark:bg-dark-gradient text-light-text dark:text-dark-text'>
    <BgAnime/>
    <Navbar/>
    <HeroSection/>
    <Work/>
    <Skill/>
      {/* <Education/> */}
    <Project/>
    <Compliment/>
    <Contact/>
    <div className='w-full h-full'>
      <img className='w-full h-full' src="https://accounts.pwskills.com/images/signin-banner.svg" alt="" />
    </div>
    </main>
    </>
  )
}

export default App
