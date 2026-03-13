import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../components/ui/Loader";
import NeonCursorTrails from "../components/ui/NeonCursorTrails";

const HeroSection = lazy(() => import("../components/pages/HeroSection"));
const Skill = lazy(() => import("../components/pages/Skill"));
const Work = lazy(() => import("../components/pages/Work"));
const Project = lazy(() => import("../components/pages/Project"));
const Contact = lazy(() => import("../components/pages/Contact"));
const Navbar = lazy(() => import("../components/pages/Navbar"));
const Compliment = lazy(() => import("../components/pages/Compliment"));
const Header = lazy(() => import("../components/pages/Header"));
const Services = lazy(() => import("../components/pages/Service"));

const PortfolioHome = () => {
  return (
    <>
      <Helmet>
        <title>Shrikant Dalvi | Software Developer & Freelancer</title>
        <meta
          name="description"
          content="I'm a passionate Frontend Developer and Freelancer who builds responsive, modern web applications using React, Tailwind CSS, and MERN stack technologies."
        />
        <meta
          name="keywords"
          content="Frontend Developer, Freelancer, ReactJS, Tailwind CSS, MERN, Web Developer, Portfolio"
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="Shrikant Dalvi" />
        <meta property="og:title" content="Shrikant Dalvi | Software Developer" />
        <meta
          property="og:description"
          content="Portfolio showcasing projects, skills, and work experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" href="/portfolio.png" />
        <meta property="og:image" href="/portfolio.png" />
      </Helmet>

      <Suspense fallback={<Loader />}>
        <NeonCursorTrails />
        <Header />
        <Navbar />
        <HeroSection />
        <Work />
        <Skill />
        <Services />
        <Project />
        <Compliment />
        <Contact />
      </Suspense>
    </>
  );
};

export default PortfolioHome;
