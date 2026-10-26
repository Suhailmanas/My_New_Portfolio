import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from './migration';
import ResumeContent from '../ResumeContent';

const Experience = ({ experiences }) => (
  <section className="section">
    <Container>
      <Jumbotron className="bg-white" id="experience">
        <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>

        <ResumeContent
          title="UI Developer | Beroe Inc."
          date="January 2026 – Present"
          subtitle="Project – Beroe MAX"
          content={[
            'Technologies: React.js, Next.js, TypeScript, Redux Toolkit, REST APIs, and Subframe.',
          ]}
        />
        <ResumeContent
          subtitle="Technical Experience"
          content={[
            'Developed scalable and reusable UI modules for Beroe MAX, an AI-powered Procurement Intelligence SaaS platform.',
            'Used React.js, Next.js, and TypeScript to build maintainable, high-performance user interfaces.',
            'Built reusable UI components with the Subframe design system to maintain consistency across the application.',
            'Integrated REST APIs to enable seamless data exchange between frontend modules and backend services.',
            'Implemented state management with Redux Toolkit to manage application data and state efficiently.',
            'Translated Figma designs into responsive, production-ready interfaces in collaboration with design teams.',
            'Contributed to Admin, Onboarding, and Opportunity Management modules, improving application functionality and user experience.',
          ]}
        />
        <ResumeContent
          subtitle="Professional Experience"
          content={[
            'Developing and enhancing Beroe MAX features, with a focus on scalable, responsive, and user-friendly interfaces.',
            'Building and maintaining reusable frontend components to improve code reuse and development efficiency.',
            'Collaborating with designers and backend developers to deliver features aligned with business requirements and design specifications.',
            'Integrating REST APIs and managing application state with Redux Toolkit to support dynamic, data-driven workflows.',
            'Improving application performance, maintainability, and code quality using React.js, Next.js, and TypeScript.',
            'Implementing new features and refining existing modules to improve usability and support evolving product requirements.',
          ]}
        />

        <ResumeContent
          title="Front-end Developer | Energetics AI"
          date="March 2023 – November 2025"
          subtitle="Technical Experience"
          content={[
            'Built interactive and responsive user interfaces using React.js, HTML, CSS, and JavaScript.',
            'Created HTML reports and templates to present data clearly and effectively.',
            'Developed Progressive Web App features and optimized web experiences across devices and platforms.',
            'Used media queries and Bootstrap to create mobile-responsive designs.',
            'Applied TypeScript to improve code readability, maintainability, and development efficiency.',
            'Used Playwright for end-to-end testing and browser automation.',
            'Worked on admin dashboards and integrated GraphQL APIs for efficient data fetching and management.',
          ]}
        />
        <ResumeContent
          subtitle="Professional Experience"
          content={[
            'Developed intuitive user interfaces with React.js, HTML, CSS, and Bootstrap for a seamless cross-device experience.',
            'Implemented Progressive Web App features to improve performance, offline functionality, and user engagement.',
            'Integrated TypeScript for type safety and improved code quality.',
            'Collaborated with backend teams to integrate GraphQL APIs for admin dashboards.',
            'Created mobile-friendly layouts using responsive design techniques.',
            'Used Playwright for automated testing to improve application reliability.',
          ]}
        />
      </Jumbotron>
    </Container>
  </section>
);

export default Experience;
