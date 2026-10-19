import React from "react";
import { BsEnvelopeAt, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import img from "../../assets/shrikantimg.png";
import about from "../../Data/About";

const Home = () => {
  const aboutEntry = about[0] || {};

  return (
    <header id="about" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32">
      <div className="grid-glow" />

      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:min-h-[calc(100vh-5rem)]">
        <div className="max-w-2xl">
          <span className="section-tag">Available for work</span>
          <h1 className="section-title mt-6">
            I design and build <span className="gradient-text">digital experiences</span> people love.
          </h1>
          <p className="section-copy mt-6 text-base sm:text-lg">
            {aboutEntry.desc || ""}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={aboutEntry.resume_link || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Download Resume
            </a>
            <a
              href="#project"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-2xl text-slate-200">
            <a href="mailto:dalvishrikant5456@gmail.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:bg-white/10"><BsEnvelopeAt /></a>
            <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:bg-white/10"><BsLinkedin /></a>
            <a href="https://github.com/shrikant-d5456" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:bg-white/10"><BsGithub /></a>
            <a href="https://wa.me/qr/OXX2A3XJPGKXA1" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:bg-white/10"><BsWhatsapp /></a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gradient-to-r from-cyan-400/30 via-violet-400/20 to-pink-400/30 blur-3xl" />
          </div>

          <div className="glass-panel relative w-full max-w-md rounded-[2rem] border border-white/10 p-4 shadow-[0_30px_100px_rgba(8,15,33,0.6)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-3">
              <div className="flex items-center justify-between px-2 pb-3 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                <span>Portfolio</span>
                <span>Frontend Dev</span>
              </div>
              <img
                src={img}
                alt="Shrikant Dalvi"
                className="h-[430px] w-full rounded-[1.3rem] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 left-6 rounded-full border border-cyan-300/30 bg-slate-950/80 px-4 py-2 text-sm text-cyan-100 shadow-lg backdrop-blur-md">
              Er. Shrikant Dalvi
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;