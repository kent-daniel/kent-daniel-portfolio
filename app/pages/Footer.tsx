import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-6 mt-8 w-full flex items-center justify-center"
      style={{ color: "rgb(var(--color-muted))" }}
    >
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/kent-daniel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[rgb(var(--color-primary))] transition"
        >
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/kent-daniel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[rgb(var(--color-primary))] transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
        </a>

        <span className="ml-4 text-sm">• Kent Daniel {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
