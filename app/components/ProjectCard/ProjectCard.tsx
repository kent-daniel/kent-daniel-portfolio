"use client";
import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

interface ProjectCardProps {
  title: string;
  summary: string;
  images?: string[];
  description: string;
  projectLink: string;
  skills: string[];
  linkType: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  images,
  description,
  projectLink,
  skills,
  linkType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex flex-col justify-between items-center rounded-lg p-6 shadow-md border hover:bg-slate-800 hover:cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="my-3">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300 mb-4">{summary}</p>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="relative mr-2 mb-2">
              <div className="px-2 py-1 bg-blue-500 text-white rounded-2xl cursor-default text-sm">
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="font-semibold border hover:bg-gradient-to-r from-blue-700 via-sky-700 to-sky-600 hover:border-2 transform transition duration-300 hover:cursor-pointer text-white px-4 py-2 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          window.open(projectLink, "_blank");
        }}
      >
        {linkType}
      </button>

      {isModalOpen && (
        <ProjectDetailsModal
          title={title}
          description={description}
          images={images}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ProjectCard;
