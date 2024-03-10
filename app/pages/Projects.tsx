import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mb-4 text-center" id="projects">
      <h2 className="text-4xl font-semibold mb-7 text-center drop-shadow-[0px_0px_15px_rgba(100,155,255,0.95)]">
        Projects 🛠️
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ProjectCard
          title="Travelogue"
          description="Travelogue is a native iOS social travel application concept that I developed for my portfolio project. It aims to simplify group travel experiences by allowing users to create travel groups, invite members, share trip itineraries, photos, and stay connected with fellow travelers. Leveraging Swift, UIKit, and Firebase, the app provides essential features like group invitations, photo sharing, and real-time updates. While still in continued development, Travelogue showcases my skills in UI/UX design, frontend development, and integration with backend services."
          projectLink="https://github.com/kent-daniel/Travelogue-prototype"
          linkType="GitHub"
        />
        <ProjectCard
          title="Where’s My Pet - UNIHACK 2024"
          description="Where’s My Pet is a UNIHACK 2024 48 hours hackathon project designed to assist pet owners in locating their missing pets. The app allows users to create accounts to post photos of their lost or found pets, along with location and time information. Utilizing AWS services such as SageMaker, Lambda, and S3 bucket, along with Amazon SNS and API Gateway, a similarity AI model is deployed to analyze and compare images of lost and found pets based on facial features and markings. If a potential match is detected, the owner of the missing pet is notified via SMS. The frontend, built with React and TailwindCSS, enables users to browse posts of lost and found pets and connect with each other, fostering a community-driven approach to reuniting pets with their owners."
          projectLink="https://devpost.com/software/where-s-my-pet"
          linkType="Devpost"
        />
        <ProjectCard
          title="Ridentity - UNIHACK 2023"
          description="As part of my first hackathon, we developed an application to improve bike security. We noticed that stolen bikes often get sold on platforms like Facebook Marketplace, leaving buyers unaware of a bike's history. Our solution? We built a platform where users can upload their bike details, generating a digital certificate of ownership and a unique QR code for engraving/sticker onto the bike. Using React and Firebase, we developed a working app prototype in just two days, showcasing technology's potential to solve real-world problems."
          projectLink="https://devpost.com/software/ridentity"
          linkType="Devpost"
        />
        <ProjectCard
          title="Document Reminder Project - Freelance"
          description="For a freelance project, I developed a Document Reminder system to help clients manage legal documents efficiently. The system includes a user-friendly dashboard built with React and Material UI, enabling users to manage documents, user roles, and automated email invitations for user onboarding. Additionally, I integrated a document reminder feature using Google Cloud Functions to send reminders to appropriate user groups as the due date approaches. Acting as both a full-stack developer and product manager, I led client discovery sessions, sprint planning, and designed test cases in Cypress. Maintaining GitHub actions and pipelines ensured smooth project execution."
          projectLink=""
          linkType="Portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
