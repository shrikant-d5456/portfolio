import React from "react";
import { Fade } from "react-awesome-reveal";
import Compliments from "../../Data/ComplimentData";

const Compliment = () => {
  return (
    <section id="testimonial" className="relative py-20 sm:py-24">
      <div className="section-shell relative z-10">
        <div className="text-left">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title text-white">
            Kind <span className="gradient-text">words</span>
          </h2>
          <p className="section-copy max-w-2xl">
            Insights and kind words from mentors, clients, and collaborators about my dedication, creativity, and professionalism.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {Compliments.map((ele, index) => (
            <Fade key={ele._id || ele.id || index} direction="up" triggerOnce>
              <div className="glass-panel rounded-[1.75rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={ele.img || "https://bitviraj.com/images/singh.png"}
                    alt={ele.name}
                    className="h-12 w-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{ele.name}</h3>
                    <p className="text-sm text-slate-400">{ele.comp}</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-300 italic">“{ele.comment}”</p>
                <div className="mt-6 h-[2px] w-1/3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliment;