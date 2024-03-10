import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex items-center 
        sticky 
        backdrop-filter backdrop-blur-md
        bg-opacity-60
        top-0 z-20 justify-between w-100% py-4 px-10 mt-3 border border-gray-400 rounded-md bg-neutral-700"
    >
      <div className="text-2xl font-semibold mr-auto">Kent Daniel</div>
      <ul className="flex">
        <li className="mx-4">
          <a
            href="#experience"
            className="text-md relative hover:text-blue-500"
          >
            Experience
          </a>
        </li>
        <li className="mx-4">
          <a href="#projects" className="text-md relative hover:text-blue-500">
            Projects
          </a>
        </li>
        <li className="mx-4">
          <a href="#contact" className="text-md relative hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
