import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "MySQL",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "Android",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Solution Advisor",
    company_name: "Deloitte LLP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2019 - August 2021",
    points: [
      "Developed REST based microservice applications for Deloitte, streamlined object transfer between business and front-end layers which resulted in a 20% reduction in data transfer time, significantly improving application performance.",
      "Implemented design patterns related to dependency injection, ORM, and DAO using Spring MVC and JPA. Utilized these patterns to optimize application architecture and improve maintainability.",
      "Utilised Docker to image the application, and deployed it to a Kubernetes Cluster using kubectl. Performed load balancing for the application using NGNIX. Configured VPCs, subnets, and IAM roles to enable the Kubernetes cluster access to AWS RDS and S3.",
      "Executed complex queries, triggers and stored procedures. Improved query performance by more than 50% through effective use of indexing and caching techniques, resulting in faster data retrieval and processing.",
      "Developed robust and maintainable test cases and performed thorough unit testing to ensure the quality and reliability of the application, resulting in the timely detection and resolution of critical issues.",
      "Tech Stack: Spring Boot, Unit Testing, SQL, Containers, AWS",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Deloitte LLP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2018 - February 2019",
    points: [
      "Spearheaded client walkthroughs to comprehend their IT environment, and performed risk assessments with respect to the financial applications.",
      "Helped clients pivot away from manual data reconciled to using Deloitte’s internal automation tools which reduced the clients operational cost overhead by 500K USD.",
      "Worked on SAS, SQL and Optix (Deloitte Internal Tool) to transform and document financial data into insights for multiple clients. Also, verified the completeness and accuracy of the data.",
      "Tech Stack: SAS, SQL, Excel",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Stumagz",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2018 - August 2018",
    points: [
      "Designed intuitive, responsive, and functional web pages to provide metrics related to user interaction data.",
      "Implemented title, tags search, and client-side routing. Integrated the web pages into main website which helped the team identify and remediate bottlenecks, enhance user experience leading to an increase in user traffic by 9%.",
      "Tech Stack: JavaScript, React, Node, MongoDB",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ECS",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2017 - August 2017",
    points: [
      "Built Restful Web Services to optimise customer search functionality. Enhanced search results accuracy by implementing a customised search algorithm, resulting in increased customer satisfaction by 25%.",
      "Optimised application search performance by over 30% using multithreading and Java Caching System (JCS).",
      "Designed a Web Service to automate the push of user files to Document Management System (DMS) and mark the user as registered, and recorded timestamp of the transaction in the database for audit tracking.",
      "Tech Stack: Java, MySQL,  Spring Boot",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Virtual Interview Training",
    description:
      "VR application designed based on user feedback from a prototype that simulates a virtual interview session between interviewer (virtual avatar) and an interviewee.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "GPT-3",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/arunreddy-padala/XR_Virtual_Interview_Unity",
  },
  {
    name: "Fantasy Football League",
    description:
      "Developed an android application that presents data related to player rankings, trades, standings, current, and previous league information on multiple screens.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/arunreddy-padala/Android_Fantasy_Football-",
  },
  {
    name: "Dungeon Crawler",
    description:
      "Programmed a Dungeon maze game that supports interactive features like movement, custom layout, ability to capture creatures, and treasure.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
      {
        name: "Junit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/arunreddy-padala/Java_Model_Controller_Maze_Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
