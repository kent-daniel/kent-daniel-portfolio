import React from "react";

interface SkillItemProps {
  icon?: React.ReactNode;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
  return (
    <span 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
      style={{
        background: "rgba(var(--color-primary), 0.08)",
        color: "rgb(var(--color-text))",
        border: "1px solid rgba(var(--color-primary), 0.2)",
      }}
    >
      {icon && <span className="text-base">{icon}</span>}
      {name}
    </span>
  );
};

export default SkillItem;
