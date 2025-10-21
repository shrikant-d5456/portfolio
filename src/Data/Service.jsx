import { FaCode, FaLaptopCode, FaPaintBrush, FaServer, FaMobileAlt } from "react-icons/fa";
const services = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "I craft responsive, user-friendly, and pixel-perfect web interfaces using ReactJS, Tailwind CSS, and modern UI libraries. I focus on performance, accessibility, and seamless user experiences.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Full Stack Development",
    desc: "I build scalable web applications using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), ensuring efficient APIs, database design, and secure authentication systems.",
    icon: <FaServer />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Designing intuitive layouts and interactive prototypes in Figma with a strong sense of visual hierarchy, consistency, and modern design principles.",
    icon: <FaPaintBrush />,
  },
  {
    id: 4,
    title: "API Integration & Automation",
    desc: "Integrating third-party APIs (OpenAI, Third party platform api etc.) and building custom REST APIs to enhance app capabilities and automation workflows.",
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "Web Optimization",
    desc: "Ensuring all projects are optimized for mobile, tablet, and desktop with fast loading times and smooth responsive layouts.",
    icon: <FaMobileAlt />,
  },
];

export default services;