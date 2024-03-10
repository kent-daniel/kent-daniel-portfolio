import React from "react";
import SkillItem from "../components/SkillItem";

const Skills = () => {
  return (
    <div className="mt-8 text-lg text-center my-8">
      <h1 className="font-semibold text-4xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 inline-block text-transparent bg-clip-text">
        Skills
      </h1>
      <span className="font-semibold text-4xl"> 🚀</span>
      <div className="flex flex-wrap justify-center mt-2">
        <SkillItem name="Full Stack Development" />
        <SkillItem name="React.js" />
        <SkillItem name="Tailwind CSS" />
        <SkillItem name="Next.js" />
        <SkillItem name="Redux" />
        <SkillItem name="Spring Boot" />
        <SkillItem name="SCSS" />
        <SkillItem name="AWS" />
        <SkillItem name="Microservices" />
        <SkillItem name="Docker" />
        <SkillItem name="GitHub Actions" />
        <SkillItem name="Native Mobile Development" />
        <SkillItem name="iOS development" />
        <SkillItem name="Swift" />
        <SkillItem name="UIKit" />
        <SkillItem name="Test Driven Development" />
        <SkillItem name="Jetpack Compose" />
      </div>
    </div>
  );
};

export default Skills;
