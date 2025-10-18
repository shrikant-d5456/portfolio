import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async';
import BgAnime from './components/ui/BgAnime';
import Loader from './components/ui/Loader';
const HeroSection = lazy(() => import('./components/pages/HeroSection'));
const Skill = lazy(() => import('./components/pages/Skill'));
const Work = lazy(() => import('./components/pages/Work'));
const Education = lazy(() => import('./components/pages/Education'));
const Project = lazy(() => import('./components/pages/Project'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Navbar = lazy(() => import('./components/pages/Navbar'));
const Compliment = lazy(() => import('./components/pages/Compliment'));
const Header = lazy(() => import('./components/pages/Header'));
const Services = lazy(()=>import('./components/pages/Service'));

const App = () => {
  return (
    <>
      <Helmet>
        <title>Shrikant Dalvi | Frontend Developer & Freelancer</title>
        <meta
          name="description"
          content="I'm a passionate Frontend Developer and Freelancer who builds responsive, modern web applications using React, Tailwind CSS, and MERN stack technologies."
        />
        <meta
          name="keywords"
          content="Frontend Developer, Freelancer, ReactJS, Tailwind CSS, MERN, Web Developer, Portfolio"
        />
        <meta name="author" content="Shrikant Dalvi" />
        <meta property="og:title" content="Shrikant Dalvi | Frontend Developer" />
        <meta property="og:description" content="Portfolio showcasing projects, skills, and work experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-link.com" />
        <meta property="og:image" content="https://your-portfolio-link.com/preview.jpg" />
      </Helmet>
      <Suspense fallback={<Loader/>} >
        <Header />
        <Navbar />
        <HeroSection />
        <Work />
        <Skill />
        {/* <Education/> */}
        <Services/>
        <Project />
        <Compliment />
        <Contact />
      </Suspense>
    </>
  )
}
export default App