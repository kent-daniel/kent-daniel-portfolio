import ExperienceCard from "../components/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Experience = () => {
  return (
    <div className="w-[min(96%,1100px)] mx-auto p-6 mb-8" id="experience">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[rgb(var(--color-text))]">
        Experience ⭐️
      </h2>

      <div className="my-6 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/kent-daniel/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border"
          style={{
            borderColor: "rgba(var(--color-muted),0.12)",
            color: "rgb(var(--color-text))",
            background: "transparent",
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          LinkedIn Profile
        </a>

        <a
          href="/Kent_Daniel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Kent_Daniel_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-all"
          style={{
            background: "rgb(var(--color-primary))",
            color: "rgb(10, 10, 15)",
          }}
        >
          Download Resume
          <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
        </a>
      </div>

      <div className="space-y-8">
        <ExperienceCard
          date="Feb 2025 - Present"
          title="Associate Software Engineer"
          organization="REA Group (realestate.com.au)"
          description={[
            "Build high-quality features across microservices and event-driven architecture, using React/TypeScript, Kotlin (Spring Boot), Python, and AWS.",
            "Productionised a config driven data ingester tool to support multiple data schemas and file types with AWS Batch, and Airflow. Reducing new data schema onboarding lead time by 50%.",
            "Led a data dashboard initiative, prototyping a low-code solution that fast-tracked delivery and reduced L3 support tickets through improved data observability.",
            "Spearheaded a technical spike and knowledge-sharing for migrating workloads to an in-house Kubernetes (K8s) platform, directly influencing the team's migration strategy.",
            "Set up a scalable kafka infrastructure with AWS MSK and Glue Schema Registry to enrich 2M+ user profile data in real time.",
            "Collaborated with Heads of Product and Engineering Managers to lead a winning Hackday project through the internal incubator, proposing and implementing technical solutions to transform a hackathon project to an AI experiment to make property listings interactive.",
            "Delivered 4 knowledge sharing sessions on Serverless AI coding agents, fine-tuning YOLO model, and Google Cloud Run, contributing to high performance culture.",
          ]}
        />

        <ExperienceCard
          date="Sep 2023 - Present"
          title="Freelance Software Engineer"
          organization="Self Employed"
          description={[
            "Pitched and delivered a contract project with a local Melbourne grocery store to build an automation for their vendor management process, built internal dashboard with Next.js, React, Supabase and Google Cloud Run.",
            "Developed and maintained Magic Regex Generator, a web application that generates, executes, and tests regular expressions using an AI coding agent, built using Next.js, React, AI SDK, Posthog for analytics, and Cloudflare Durable Objects. The application was launched to Product Hunt and has over 250+ Monthly Active Users to date.",
            "Served as the lead developer and consultant in a team of 3, conducting UX workshops and planning team sprints using JIRA. Developed and implemented an end-to-end internal software application for managing and recording contracts and legal documents using React, Typescript, Firebase, and GitHub Actions for CI/CD. This resulted in a time-saving impact of 45%.",
          ]}
        />

        <ExperienceCard
          date="Feb 2024 - Jun 2024"
          title="Teaching Assistant"
          organization="Monash University"
          description={[
            "Taught 3rd year level unit FIT3178 iOS development with Swift and UIKit. Responsible for running one of the lab classes with 15 students.",
          ]}
        />
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <a
          href="/Kent_Daniel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium border transition-all"
          style={{
            borderColor: "rgba(var(--color-primary), 0.3)",
            color: "rgb(var(--color-text))",
            background: "transparent",
          }}
        >
          View More Experience
        </a>
      </div>
    </div>
  );
};

export default Experience;
