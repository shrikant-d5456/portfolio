import { useState } from "react";
import { Bounce } from "react-awesome-reveal";

const Header = () => {
  const [active, setActive] = useState("#about");

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4 pointer-events-none">
      <Bounce>
        <nav className="pointer-events-auto bg-[#02081fa3]  rounded-full border border-white/10 px-3 py-2 shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
          <ul className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`inline-flex items-center rounded-full px-3 py-2 transition-all duration-200 ${
                    active === link.href
                      ? "bg-white/10 text-white shadow-inner shadow-cyan-400/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Bounce>
    </div>
  );
};

export default Header;
