import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className=" text-neutral-100 p-4 flex justify-center items-center w-screen h-32">
      <div className="flex items-center">
        <a
          href="https://github.com/kent-daniel"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kent-daniel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </a>
      </div>
      <div>
        <span className="mx-1">•</span> Kent Daniel 2024
      </div>
    </footer>
  );
};

export default Footer;
