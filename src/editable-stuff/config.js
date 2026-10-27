// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mohammed",
  middleName: "Suhail",
  lastName: "Manas",
  message: "Frontend Developer · React.js · Next.js · TypeScript",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Suhailmanas",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/suhail-manas-3197a31a4",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:manassuhail@gmail.com",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/manassuhail.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Frontend Developer",
  imageLink: require("../assets/img/about.png"),
  imageWidth: 300,
  imageHeight: 280,
  message:
    `I'm Mohammed Suhail Manas, a Frontend Developer with experience at Beroe and Energetics AI. I build responsive, reliable web experiences with React.js, Next.js, TypeScript, Redux Toolkit, and REST APIs, and use Playwright for browser testing.`,
  resume: require("../editable-stuff/Suhail.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Suhailmanas", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      // img: require("../editable-stuff/suhail.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/suhail.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 70 },
    { name: "JavaScript", value: 80 },
    { name: "React.js", value: 85 },
    { name: "Next.js", value: 75 },
    { name: "Redux Toolkit", value: 70 },
    { name: "REST APIs", value: 75 },
    { name: "Playwright", value: 65 },
    { name: "Bootstrap", value: 60 },
    { name: "TypeScript", value: 50 },
    { name: "Tailwind", value: 20 },
    { name: "React Native", value: 10 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Discuss a Project",
  message:
    "Need help with a React or Next.js fix? Tell me what you're working on and let's discuss the scope:",
  email: "manassuhail@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'UI Developer',
      companylogo: require('../assets/img/boeing.png'), //add energetics logo here
      date: 'Jan 2026 – Current',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'), //add energetics logo here
      date: 'March 2023 – Nov 2025',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
