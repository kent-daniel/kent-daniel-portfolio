"use client";
import React from "react";
import SkillItem from "../components/SkillItem";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiSpringboot,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiSwift,
  SiFirebase,
  SiCloudflare,
  SiKubernetes,
  SiPython,
  SiKotlin
} from "react-icons/si";
import { FaCode, FaMobileAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-[min(96%,1100px)] mx-auto p-6 my-8">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
        <span style={{ color: "rgb(var(--color-text))" }}>
          Skills
        </span>
        <span> 🚀</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <SkillItem name="Full Stack Development" icon={<FaCode />} />
        <SkillItem name="React.js" icon={<SiReact />} />
        <SkillItem name="Next.js" icon={<SiNextdotjs />} />
        <SkillItem name="TypeScript" icon={<SiTypescript />} />
        <SkillItem name="Tailwind CSS" icon={<SiTailwindcss />} />
        <SkillItem name="Redux" icon={<SiRedux />} />
        <SkillItem name="Spring Boot" icon={<SiSpringboot />} />
        <SkillItem name="Kotlin" icon={<SiKotlin />} />
        <SkillItem name="Python" icon={<SiPython />} />
        <SkillItem name="AWS" icon={<SiAmazon />} />
        <SkillItem name="Kubernetes" icon={<SiKubernetes />} />
        <SkillItem name="Docker" icon={<SiDocker />} />
        <SkillItem name="GitHub Actions" icon={<SiGithubactions />} />
        <SkillItem name="iOS Development" icon={<FaMobileAlt />} />
        <SkillItem name="Swift" icon={<SiSwift />} />
        <SkillItem name="Firebase" icon={<SiFirebase />} />
        <SkillItem name="Cloudflare Workers" icon={<SiCloudflare />} />
      </div>
    </div>
  );
};

export default Skills;
