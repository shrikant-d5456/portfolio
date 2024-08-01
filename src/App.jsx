import React from 'react'
import HeroSection from './pages/HeroSection'
import Skill from './pages/Skill'
import Work from './pages/Work'
import Education from './pages/Education'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import BgAnime from './pages/BgAnime'

const App = () => {
  return (
    
    <>
    <BgAnime/>
    <Navbar/>
    <HeroSection/>
    <Work/>
    <Skill/>
    <Education/>
    <Project/>
    <Contact/>
    <div className='w-full h-full'>
      <img className='w-full h-full' src="https://camo.githubusercontent.com/08ae9654786c5df644ff2a4652f9dc5fcfd4995e4eb981c5315479448f2a91ba/68747470733a2f2f6163636f756e74732e7077736b696c6c732e636f6d2f696d616765732f7369676e696e2d62616e6e65722e737667" alt="" />
    </div>
    </>
  )
}

export default App
