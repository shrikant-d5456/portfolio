import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BsArrowBarRight } from "react-icons/bs";
import work_data from "../../Data/WorkData";

const Work = () => {
  const [length, setLength] = useState(4);
  const toggleShow = () => setLength(length === 4 ? work_data.length : 4);

  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="section-shell relative z-10">
        <div className="text-left">
          <span className="section-tag">Experience</span>
          <h2 className="section-title text-white">
            Work <span className="gradient-text">experience</span>
          </h2>
          <p className="section-copy max-w-2xl">
            A journey through my professional milestones, learning, and growth.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/90 to-fuchsia-500/0 lg:block" />

          <div className="space-y-10">
            {work_data.slice(0, length).map((item, index) => (

              <div className={`relative flex justify-center lg:block ${index % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"}`}>

                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-gradient-to-r from-cyan-400 to-fuchsia-500 lg:block" />
                <Fade key={item._id || item.id || index} direction={index % 2 === 0 ? "left" : "right"} triggerOnce></Fade>
                <article className="glass-panel w-full rounded-3xl border border-white/10 p-6 lg:w-fit">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{item.company_name}</h3>
                    <span className="text-sm text-slate-400">
                      {item.start} — {item.end}
                    </span>
                  </div>

                  <p className="mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
                    {item.role}
                  </p>

                  <p className="mt-5 text-base leading-7 text-slate-300">{item.desc}</p>

                  {item.documentLink && (
                    <a
                      href={item.documentLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
                    >
                      See Documents <BsArrowBarRight />
                    </a>
                  )}
                </article>
             
                </div>
             
            ))}
        </div>
      </div>

      {work_data.length > 4 && (
        <Fade direction="up" triggerOnce>
          <div className="mt-12 text-center">
            <button
              onClick={toggleShow}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
            >
              {length === 4 ? "Show All Experience ↓" : "Show Less ↑"}
            </button>
          </div>
        </Fade>
      )}
    </div>
    </section >
  );
};

export default Work;