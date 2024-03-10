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
    <div className="border border-slate-400 shadow-md p-6 rounded-lg drop-shadow-[0px_0px_35px_rgba(100,155,255,0.75)]">
      <p className="font-semibold">{date}</p>
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="text-base">@{organization}</p>
      </div>

      <ul className="list-disc pl-6">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
