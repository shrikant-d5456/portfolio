import { useState } from "react";
import { Bounce } from "react-awesome-reveal";

const Header = () => {
  const [active, setActive] = useState("#about"); // default active

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed w-full sm:bottom-1 bottom-0 flex justify-center items-center m-auto z-20">
      <Bounce>
        <ul className="w-fit bg-[#ffffff7f] border shadow-md backdrop-blur-md text-gray-600 flex justify-between items-center lg:gap-8 gap-6 lg:text-sm px-8 py-4 sm:rounded-full font-semibold text-xs">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`text-gray-600  ${
                  active === link.href ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Bounce>
    </div>
  );
};

export default Header;
