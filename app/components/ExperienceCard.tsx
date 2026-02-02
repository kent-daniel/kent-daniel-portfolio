import React from "react";

interface ExperienceProps {
  date: string;
  title: string;
  organization: string;
  description: string[];
}
const ExperienceCard: React.FC<ExperienceProps> = ({
  date,
  title,
  organization,
  description,
}) => {
  return (
    <div 
      className="shadow-lg p-6 rounded-lg"
      style={{
        border: "1px solid rgba(var(--color-primary), 0.2)",
        background: "rgba(var(--color-primary), 0.02)",
      }}
    >
      <p 
        className="font-semibold text-sm mb-1"
        style={{ color: "rgb(var(--color-primary))" }}
      >
        {date}
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1">
        <h3 
          className="text-xl font-semibold"
          style={{ color: "rgb(var(--color-text))" }}
        >
          {title}
        </h3>
        <p 
          className="text-base"
          style={{ color: "rgb(var(--color-muted))" }}
        >
          @{organization}
        </p>
      </div>

      <ul 
        className="list-disc pl-6 space-y-1"
        style={{ color: "rgb(var(--color-text))" }}
      >
        {description.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
