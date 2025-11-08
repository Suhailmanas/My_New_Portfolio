import React from 'react';
// import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  // Row,
} from "react-bootstrap";
import ResumeContent from '../ResumeContent';

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white" id="experience">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <ResumeContent
              title="Front-end developer | Energetics AI"
              subtitle="Technical Experience"
              date="March 2023 - Present"
              content={[
                "Proficient in React.js, HTML, CSS, and JavaScript, leveraging the power of React to build interactive and responsive user interfaces.",
                "Experienced in creating HTML reports and templates, ensuring data presentation is clear, concise, and visually appealing.",
                "Skilled in Progressive Web App (PWA) development, optimizing web experiences for various devices and platforms.",
                "Familiar with media queries and Bootstrap for creating mobile-responsive designs that adapt flawlessly across devices.",
                "Utilized TypeScript to enhance code readability, maintainability, and overall development efficiency.",
                "Leveraged the power of Playwright tool for end-to-end testing and automation, ensuring application reliability and performance.",
                "Worked extensively on admin dashboards, integrating GraphQL APIs seamlessly for efficient data fetching and management.",
              ]}
            />
          <ResumeContent
              subtitle="Professional Experience"
              content={[
                `Developing intuitive user interfaces using React.js, HTML, CSS, and Bootstrap, ensuring a seamless user experience across devices.`,
                `Implementing Progressive Web App (PWA) features to enhance performance, offline functionality, and overall user engagement.`,
                `Integrating TypeScript for type safety and enhanced code quality, resulting in reduced bugs and improved development workflows.`,
                `Collaborating with backend teams to integrate GraphQL APIs, enabling efficient data retrieval and management for admin dashboards.`,
                `Utilizing media queries and responsive design techniques to create mobile-friendly layouts, enhancing accessibility and usability.`,
                `Leveraging Playwright for automated testing, ensuring robustness and reliability of the application under various scenarios.`,
              ]}
            />
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;