import React, { lazy, Suspense } from 'react'
const HeroSection = lazy(() => import('./pages/HeroSection'));
const Skill = lazy(() => import('./pages/Skill'));
const Work = lazy(() => import('./pages/Work'));
const Education = lazy(() => import('./pages/Education'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const Navbar = lazy(() => import('./pages/Navbar'));
const BgAnime = lazy(() => import('./pages/BgAnime'));
const Compliment = lazy(() => import('./pages/Compliment'));
const Header = lazy(() => import('./pages/Header'));

const App = () => {
  return (

    <>
      <main className='bg-light-gradient dark:bg-dark-gradient text-light-text dark:text-dark-text'>


        <Header/>
        <Suspense fallback={<div className=' animate-ping w-full h-screen flex justify-center items-center'>Loading..</div>} >
          <BgAnime />
          <Navbar />
          <HeroSection />
          <Work />
          <Skill />
          {/* <Education/> */}
          <Project />
          <Compliment />
          <Contact />
        </Suspense>
        {/* <div className='w-full h-full'>
      <img className='w-full h-full' src="https://accounts.pwskills.com/images/signin-banner.svg" alt="" />
    </div> */}
      </main>
    </>
  )
}

export default App

