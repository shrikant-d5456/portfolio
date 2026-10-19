import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import projectData from "../../Data/ProjectData";

import pattern from "../../assets/pattern.png";
import student from "../../assets/student.jpeg";
import aayurmedguide from "../../assets/aayurmedguide.png";
import invitationcard from "../../assets/invitationcard.png";
import scanner from "../../assets/scanner.png";
import shortlink from "../../assets/shortlink.png";
import task from "../../assets/task.png";
import transaction from "../../assets/transaction.png";
import unsplash from "../../assets/unsplash.png";
import assist from "../../assets/assist.png";

const projectImageMap = {
  pattern,
  student,
  aayurmedguide,
  invitationcard,
  scanner,
  shortlink,
  task,
  transaction,
  unsplash,
  assist,
};

const Card = ({ project }) => {
  const imgSrc = projectImageMap[project?.imageKey] || project?.img || "";

  return (
    <div className="relative mx-3 flex-shrink-0 w-72 md:w-80">
      <div className="glass-panel group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
        <img
          src={imgSrc}
          alt={project?.projectName}
          className="h-52 w-full rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-3 flex flex-col justify-between rounded-[1.25rem] bg-slate-950/80 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="flex justify-between">
            <a href={project?.gitLink} target="_blank" rel="noreferrer">
              <span className="inline-flex rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <BsGithub className="text-xl" />
              </span>
            </a>
            {project?.webLink && (
              <a href={project?.webLink} target="_blank" rel="noreferrer">
                <span className="inline-flex rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                  <BsLink45Deg className="text-xl" />
                </span>
              </a>
            )}
          </div>

          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              {project?.skill?.map((tech, idx) => (
                <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-base font-semibold text-white">{project?.projectName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const topRow = projectData.filter((_, i) => i % 2 === 0);
  const bottomRow = projectData.filter((_, i) => i % 2 !== 0);
  const duplicateTop = [...topRow, ...topRow];
  const duplicateBottom = [...bottomRow, ...bottomRow];

  return (
    <section id="project" className="relative py-20 sm:py-24">
      <div className="section-shell relative z-10">
        <div className="text-left">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title text-white">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="section-copy max-w-3xl">
            Every project begins with a spark of imagination and grows into something extraordinary.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicateTop.map((project, index) => (
                <Card key={`${project._id || project.id || "project"}-top-${index}`} project={project} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex  animate-scroll-right">
              {duplicateBottom.map((project, index) => (
                <Card key={`${project._id || project.id || "project"}-bottom-${index}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 42s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 42s linear infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Project;
