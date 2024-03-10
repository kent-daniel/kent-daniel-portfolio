"use client";
import React from "react";
interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  linkType: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectLink,
  linkType,
}) => {
  const handleClick = () => {
    window.location.href = projectLink;
  };

  return (
    <div
      className="rounded-lg p-6 shadow-md border hover:bg-slate-800 hover:cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button
        className="font-semibold border hover:bg-gradient-to-r from-blue-700 via-sky-700 to-sky-600 hover:border-2 transform transition duration-300 hover:cursor-pointer text-white px-4 py-2 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        {linkType}
      </button>
    </div>
  );
};

export default ProjectCard;
