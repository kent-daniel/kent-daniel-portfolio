import React from "react";

const Navbar = () => {
  return (
    <nav
      className="sticky top-4 z-30 mx-auto w-[min(96%,1100px)] rounded-xl backdrop-blur-md bg-opacity-60 border border-transparent"
      style={{
        background: "linear-gradient(180deg, rgba(var(--card-bg),0.85), rgba(var(--card-bg),0.78))",
        borderColor: "rgba(255,255,255,0.04)",
        padding: "0.75rem 1.25rem",
      }}
    >
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <ul className="flex items-center gap-4 ml-auto text-sm">
          <li>
            <a href="#experience" className="hover:text-[rgb(var(--color-primary))] transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[rgb(var(--color-primary))] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[rgb(var(--color-primary))] transition">
              Contact
            </a>
           </li>
         </ul>
      </div>
    </nav>
  );
};

export default Navbar;
