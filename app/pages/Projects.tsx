import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-[min(96%,1100px)] mx-auto p-6 mb-8">
      <h2
        className="text-3xl sm:text-4xl font-semibold mb-6"
        style={{ color: "rgb(var(--color-text))" }}
      >
        Projects 🛠️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ProjectCard
          title="InsightFlow"
          date="2024"
          summary="InsightFlow — automates qualitative research using RAG, embeddings clustering, and LlamaIndex to extract themes from user interviews."
          description="A research automation platform built for a hackathon that processes qualitative data like user interviews and survey responses. Uses LlamaIndex for RAG (Retrieval-Augmented Generation), embeddings clustering with K-Means, and Supabase vector store to extract themes and generate insights. Built with Python, Next.js, and Supabase."
          projectLink="https://insight-flow-xi.vercel.app/#demo"
          devpostLink="https://devpost.com/software/insightflow"
          skills={["Python", "LlamaIndex", "RAG", "Embeddings", "Next.js", "Supabase"]}
          linkType="Live"
          images={["/insightflow_cover.png"]}
        />
        <ProjectCard
          title="Magic Regex Generator"
          date="2026"
          summary="Magic Regex Generator — generates and tests regex patterns using Cloudflare AI agents and Durable Objects for serverless stateful WebSocket connections."
          description="An AI-powered regex generator using Cloudflare AI agents and Durable Objects for serverless stateful WebSocket connections. Describe what you want to match and the AI agent generates, tests, and verifies regex patterns in a secure sandbox. Built with Next.js, Cloudflare Workers, and Posthog analytics. Has 250+ monthly active users."
          projectLink="https://magicregexgenerator.xyz"
          skills={["Cloudflare Workers", "Durable Objects", "AI Agents", "Next.js", "WebSocket"]}
          linkType="Live"
          images={["/magic_regex_cover.png"]}
        />
        <ProjectCard
          title="billbot"
          date="2025"
          summary="billbot — AI Discord bot template using Cloudflare Workers and Durable Objects for edge-deployed conversational AI."
          description="An AI Discord bot template built with Cloudflare Workers and Durable Objects for edge deployment. Handles per-user conversation memory and real-time message handling with scalable serverless infrastructure. Built with TypeScript and Discord.js."
          projectLink="https://github.com/kent-daniel/billbot"
          skills={["Cloudflare Workers", "Durable Objects", "TypeScript", "Discord.js"]}
          linkType="GitHub"
        />
        <ProjectCard
          title="ReelMeals (mealbot)"
          date="2024–2025"
          summary="ReelMeals — AI-powered recipe capture and meal planner that turns short videos into saved recipes and shopping lists."
          description="ReelMeals is an AI-powered application that transforms the way users capture and organize recipes. By analyzing short video clips of recipes, the app automatically extracts ingredients, cooking steps, and nutritional information. Users can build a personalized recipe library, plan meals for the week, and generate dynamic shopping lists. Built with Python and modern AI techniques, ReelMeals bridges the gap between content consumption and practical meal management."
          projectLink="https://github.com/kent-daniel/mealbot"
          skills={["Python", "AI", "MVP", "Product"]}
          linkType="GitHub"
        />
        <ProjectCard
          title="Travelogue"
          date="2023–2024"
          summary="A native iOS travel app for small groups — itineraries, photos, and lightweight sharing built with Swift and Firebase."
          description="Travelogue is a native iOS social travel application concept that I developed for my portfolio project. It aims to simplify group travel experiences by allowing users to create travel groups, invite members, share trip itineraries, photos, and stay connected with fellow travelers. Leveraging Swift, UIKit, and Firebase, the app provides essential features like group invitations, photo sharing, and real-time updates. While still in continued development, Travelogue showcases my skills in UI/UX design, frontend development, and integration with backend services."
          projectLink="https://github.com/kent-daniel/Travelogue-prototype"
          skills={["iOS", "Swift", "Firebase", "UI"]}
          linkType="GitHub"
        />
        <ProjectCard
          title="Where's My Pet — UNIHACK 2024"
          date="2024"
          description="A 48hr hackathon project that helps owners find lost pets using an image-similarity model and AWS services to notify matches."
          projectLink="https://devpost.com/software/where-s-my-pet"
          summary="Image-similarity + notifications for lost & found pets — AWS + React prototype."
          skills={["AWS", "SageMaker", "React"]}
          images={["/awsarchitecture.png", "/missingpet.png", "/petforum.png"]}
          linkType="Devpost"
        />
        <ProjectCard
          title="Ridentity — UNIHACK 2023"
          date="2023"
          description="A rapid prototype to improve bike security with digital ownership certificates and QR codes. Built with React and Firebase."
          projectLink="https://devpost.com/software/ridentity"
          linkType="Devpost"
          summary="Digital ownership certificates and QR codes to deter bike theft — React + Firebase prototype."
          skills={["React", "Firebase"]}
        />
        <ProjectCard
          title="Document Reminder"
          date="2023"
          description="A freelance dashboard to manage legal documents with scheduled reminders via Google Cloud Functions; built with React and Material UI."
          projectLink="#"
          images={["/DRPDocuments.png", "/DRPAddMembers.png", "/DRPReminderEmail.png"]}
          linkType="Portfolio"
          summary="Document management and reminder automation for legal workflows — React + Material UI."
          skills={["React", "Material UI", "Cloud Functions"]}
        />
      </div>
    </section>
  );
};

export default Projects;
