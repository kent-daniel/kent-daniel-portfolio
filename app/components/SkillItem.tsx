import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillItemProps {
  icon?: IconDefinition;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center">
      {/* <FontAwesomeIcon icon={"fa-brands fa-aws"} /> */}
      <span>{name}</span>
      <span className="m-4">•</span>
    </div>
  );
};

export default SkillItem;
