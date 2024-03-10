import ExperienceCard from "../components/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mb-4" id="experience">
      <h2 className="text-4xl font-semibold mb-4 text-center ">
        Experience ⭐️
      </h2>
      <div className="my-8 flex justify-center items-center">
        <div className="inline-block mr-3 border  hover:bg-gray-700 rounded-lg ">
          <a
            href="https://www.linkedin.com/in/kent-daniel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-min  text-white font-semibold py-2 px-4 items-center"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2" />
            <span className="ml-2">LinkedIn Profile</span>
          </a>
        </div>
        <div className="inline-block">
          <a
            href="/KentCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Kent_Daniel_Resume.pdf"
            className="flex min-w-min bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg items-center"
          >
            Download Resume
            <FontAwesomeIcon icon={faDownload} className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      <div className="space-y-8">
        <ExperienceCard
          date="Mar 2024 - Present"
          title="Monash University Teaching Assistant"
          organization="Monash University - Part-time"
          description={[
            "Taught 3rd year level unit FIT3178 iOS development with Swift and UIKit",
            "Responsible for running one of the lab classes with 15 students",
            "Supported and mentored students with practice lab exercises",
            "Responsible for marking exercises and assignments",
          ]}
        />
        <ExperienceCard
          date="Sep 2023 - Dec 2023"
          title="Freelance Fullstack Developer"
          organization="Self-Employed"
          description={[
            "Creating an end-to-end internal software for managing and recording contracts and legal documents",
            "Conducted UX workshops, gathered requirements, and collaborated with clients to ensure optimal user experiences.",
            "Led a team with another student developer and a UX designer, in a scrum-based workflow using JIRA and Confluence.",
            "Acted as a full-stack developer, using React and Firebase serverless architecture, GitHub actions for CI/CD, and Cypress for E2E tests",
            "Successfully rolled out and tested the software, reporting a significant time-saving impact of 45%.",
          ]}
        />

        <ExperienceCard
          date="Jul 2023 - Dec 2023"
          title="Software Engineer Intern"
          organization="Reecetech"
          description={[
            "Full stack iOS development using UIKit, Combine, and MVVM pattern with UI development, backend integration, analytics, and testing with XCTest",
            "Contributing to team agile ceremonies",
            "Full stack web development with Angular, Spring Boot, and AWS event-driven architecture",
            "Managing releases and deployment to production with GitHub and Jira",
            "Developed a mobile app MVP utilizing OCR and NLP technology for easier form-filling",
            "Implemented backend API optimization mechanism that improved system speed by 15%",
          ]}
        />

        <ExperienceCard
          date="Jul 2023 - Dec 2023"
          title="Student Investment Analyst"
          organization="Monash Student Managed Fund (MSMF)"
          description={[
            "Conducted Equity Research, Risk and competitive advantage analysis, and DCF (Discounted Cash Flow) valuation of Procter and Gamble",
            "Actively participated in weekly team huddles, contributing insights and findings to investment ideas",
            "Presented and pitched the final investment recommendation with the team and defended the investment thesis to a panel of investment bankers and hedge fund managers, adeptly answering questions and demonstrating a deep understanding of the subject matter.",
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
