import React from "react";
import { Fade } from "react-awesome-reveal";
import useApiData from "../../hooks/useApiData";
import { endpoints } from "../../services/api";

const Compliment = () => {
  const { data: Compliments } = useApiData(endpoints.compliments);

  return (
    <section id="testimonial" className="relative py-20 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
        {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      <div className="w-11/12 lg:w-8/12 mx-auto text-center space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights and kind words from mentors, clients, and collaborators
            about my dedication, creativity, and professionalism.
          </p>
          <div className="mt-4 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
        </div>


        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2  gap-8">
          {Compliments.map((ele, index) => (
            <Fade key={ele._id || ele.id || index} direction="up" triggerOnce>
              <div className="relative rounded-2xl bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/40 dark:to-gray-900/20 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-xl p-6 hover:scale-[1.03] transition-transform duration-300">
                
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={ele.img || "https://bitviraj.com/images/singh.png"}
                    alt={ele.name}
                    className="w-12 h-12 rounded-full object-cover shadow-lg border border-gray-300 dark:border-gray-700"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{ele.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {ele.comp}
                    </p>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm line-clamp-3 text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{ele.comment}"
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-4 h-[3px] w-1/3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
              </div>
            </Fade>
          ))}
        </div>

        {/* CTA */}
        <Fade delay={200}>
          <div className="pt-6">
            <a
              href="https://github.com/shrikant-d5456"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-500 hover:to-red-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all">
                View My Work
              </button>
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Compliment;