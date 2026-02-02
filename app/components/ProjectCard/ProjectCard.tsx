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
  demoLink?: string;
  devpostLink?: string;
  date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  images,
  description,
  projectLink,
  skills,
  linkType,
  demoLink,
  devpostLink,
  date,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <article
      onClick={handleClick}
      className="flex flex-col justify-between rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer"
      style={{
        background: "rgba(var(--color-primary), 0.02)",
        borderColor: "rgba(var(--color-primary), 0.15)",
      }}
    >
      {/* Banner image (consistent ratio) */}
      {images && images.length > 0 && (
        <div className="w-full h-[180px] sm:h-[160px] lg:h-[200px] overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            style={{ display: "block" }}
          />
        </div>
      )}

       <div className="p-5 flex flex-col gap-4">
         <div>
           <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
           {date && <p className="text-xs text-[rgb(var(--color-muted))] mt-1">{date}</p>}
           <p className="mt-2 text-[rgb(var(--color-muted))] text-sm">{summary}</p>
         </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-full"
              style={{
                background: "rgba(var(--color-primary),0.12)",
                color: "rgb(var(--color-text))",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(projectLink, "_blank");
            }}
            className="px-4 py-2 rounded-md font-semibold transition-all"
            style={{
              background: "rgb(var(--color-primary))",
              color: "rgb(10, 10, 15)",
            }}
          >
            {linkType}
          </button>
          {devpostLink && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(devpostLink, "_blank");
              }}
              className="px-4 py-2 rounded-md font-semibold border transition-all"
              style={{
                borderColor: "rgba(var(--color-primary), 0.3)",
                color: "rgb(var(--color-text))",
                background: "transparent",
              }}
            >
              DevPost
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ProjectDetailsModal
          title={title}
          description={description}
          images={images}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          projectLink={projectLink}
          linkType={linkType}
          demoLink={demoLink}
          devpostLink={devpostLink}
          date={date}
        />
      )}

      <style jsx>{`
        article:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--color-primary), 0.3);
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
