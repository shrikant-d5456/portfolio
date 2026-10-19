import { useState } from "react";
import { FaAws, FaCloud, FaCode, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaJs, FaLinux, FaMicrosoft, FaNodeJs, FaReact, FaSass, FaSearch } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiExpress, SiFigma, SiFirebase, SiGithubcopilot, SiGooglecloud, SiMongodb, SiMysql, SiNetlify, SiNextdotjs, SiPostgresql, SiPrisma, SiRender, SiSqlite, SiTailwindcss, SiTypescript, SiVercel, SiWix } from "react-icons/si";
const categories = ["Frontend", "Backend", "Databases", "Cloud", "Other"];

const stack = [
  { name: "JavaScript", category: "Frontend", icon: FaJs, active: true },
  { name: "Next.js 13", category: "Frontend", icon: SiNextdotjs, active: true },
  { name: "React.js", category: "Frontend", icon: FaReact, active: true },
  { name: "Node.js", category: "Backend", icon: FaNodeJs, active: true },
  { name: "HTML", category: "Frontend", icon: FaHtml5, active: true },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, active: true },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt, active: true },
  { name: "Express.js", category: "Backend", icon: SiExpress, active: true },
  { name: "Mongoose", category: "Databases", icon: SiMongodb, active: true },
  { name: "Vercel", category: "Cloud", icon: SiVercel, active: true },
  { name: "MySQL", category: "Databases", icon: SiMysql, active: true},
  { name: "PostgreSQL", category: "Databases", icon: SiPostgresql, active: true },
  { name: "SQLite", category: "Databases", icon: SiSqlite, active: true },
  { name: "MongoDB", category: "Databases", icon: SiMongodb, active: true },
  { name: "C++ / C", category: "Other", icon: SiCplusplus, active: true },
  { name: "REST APIs", category: "Backend", icon: FaCode, active: true },
  { name: "C#", category: "Other", icon: SiCsharp, active: true },
  { name: "Render", category: "Cloud", icon: SiRender, active: true },
  { name: "Netlify", category: "Cloud", icon: SiNetlify, active: true },
  { name: "SEO", category: "Other", icon: FaSearch, active: true },
  { name: "Wix", category: "Other", icon: SiWix, active: true },
  { name: "Figma", category: "Other", icon: SiFigma, active: true },
  { name: "Git & GitHub", category: "Other", icon: FaGitAlt, active: true },
  { name: "GitHub Copilot", category: "Other", icon: SiGithubcopilot, active: true },
  { name: "Microsoft Copilot", category: "Other", icon: FaMicrosoft, active: true },
];

const Skill = () => {
  const [category, setCategory] = useState("Frontend");
  const visibleStack = stack;

  return (
    <section id="skill" className="relative overflow-hidden  py-20 text-white sm:py-24">
      
      <div className="mx-auto w-[min(100%-3rem,1360px)]">
        <div className="text-left">
          <span className="section-tag">Skills</span>
          <h2 className="section-title text-white">
            Technical <span className="gradient-text">skills</span>
          </h2>
          <p className="section-copy max-w-2xl">
            A showcase of technologies I use to build modern, scalable, and creative web experiences.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16 mt-4">
          
          <div className="flex items-start justify-between lg:block">
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</p>
              <span className="mt-1 block text-3xl font-light text-white/60">→</span>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-xl px-4 py-2 text-base font-bold transition-all duration-200 ${
                    category === item
                      ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-[0_8px_24px_rgba(217,70,239,0.25)]"
                      : "glass-panel text-white/90 hover:bg-[#0000]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-12 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
              {visibleStack.map((item) => {
                const Icon = item.icon;
                const emphasized = item.category === category;

                return (
                  <div
                    key={`${item.category}-${item.name}`}
                    className={`group flex  min-h-[38px] items-center gap-4 border-b-2 border-[#57575e] pb-2 text-lg transition-colors sm:text-xl ${
                      emphasized ? "text-white" : "text-[#57575e]"
                    }`}
                  >
                    <Icon className="shrink-0 text-[1.35rem]" />
                    <span className="whitespace-nowrap text-sm font-bold">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;




