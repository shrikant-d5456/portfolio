import services from "../../Data/Service";

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="section-shell relative z-10">
        <div className="text-left">
          <span className="section-tag">Services</span>
          <h2 className="section-title text-white">
            What I <span className="gradient-text">offer</span>
          </h2>
          <p className="section-copy max-w-2xl">
            Delivering modern, scalable, and elegant digital solutions to help businesses and individuals grow online.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-panel rounded-[1.75rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 text-2xl text-cyan-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
