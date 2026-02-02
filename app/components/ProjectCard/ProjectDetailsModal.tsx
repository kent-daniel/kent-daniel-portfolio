import React from "react";
import Modal from "../Modal";

type Props = {
  title: string;
  images?: string[];
  description: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  projectLink?: string;
  linkType?: string;
  demoLink?: string;
  devpostLink?: string;
  date?: string;
};

const ProjectDetailsModal = ({ title, images, description, isOpen, setIsOpen, projectLink, linkType, demoLink, devpostLink, date }: Props) => {
  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full">
        {date && <p className="text-xs text-[rgb(var(--color-muted))] mb-2">{date}</p>}
        {images && images.length > 0 && (
          <div className="mb-4">
            <div className="w-full h-[320px] sm:h-[420px] overflow-hidden rounded-md border">
              <img src={images[0]} alt={`${title} main`} className="w-full h-full object-cover" />
            </div>

            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {images.slice(1).map((img, idx) => (
                  <div key={idx} className="h-24 overflow-hidden rounded-md border">
                    <img src={img} alt={`${title} ${idx + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="text-[rgb(var(--color-text))] mb-6">{description}</div>

        {/* External links section */}
        <div className="flex flex-wrap gap-3 border-t pt-4" style={{ borderColor: "rgba(var(--color-muted), 0.2)" }}>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold transition-all"
              style={{
                background: "rgb(var(--color-primary))",
                color: "rgb(10, 10, 15)",
              }}
            >
              {linkType || "View"}
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold border transition-all"
              style={{
                borderColor: "rgba(var(--color-primary), 0.3)",
                color: "rgb(var(--color-text))",
                background: "transparent",
              }}
            >
              Demo
            </a>
          )}
          {devpostLink && (
            <a
              href={devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold border transition-all"
              style={{
                borderColor: "rgba(var(--color-primary), 0.3)",
                color: "rgb(var(--color-text))",
                background: "transparent",
              }}
            >
              DevPost
            </a>
          )}
          <a
            href="/Kent_Daniel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-sm font-semibold border transition-all"
            style={{
              borderColor: "rgba(var(--color-muted), 0.3)",
              color: "rgb(var(--color-muted))",
              background: "transparent",
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
