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
      "Developed REST based microservice apps for Deloitte, optimising object transfer between business and front-end layers with Collections API, achieving a 20% reduction in data transfer time.",
      "Implemented design patterns related to dependency injection, ORM, and DAO using Spring MVC and JPA.",
      "Leveraged Spring Cloud for Service Discovery, Centralised Configuration, and managed fault tolerance with Resilience4J's circuit breaker functionality.",
      "Utilised Docker to containerise applications and deployed them to an AWS EKS Kubernetes Cluster using eksctl, effectively managing the clusters with kubectl.",
      "Performed load balancing for the application using NGINX. Configured VPCs, Subnets, and Security Groups with Terraform HCL, granting cluster access to AWS RDS and S3.",
      "Developed comprehensive test cases and conducted rigorous end-to-end testing, employing test containers and JUnit for unit testing, ensuring quality and reliability of the application.",
      "Tech Stack: Spring Boot, Testing, SQL, Containers, AWS",
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
      "Designed user-friendly, responsive web pages showcasing insightful metrics derived from user interaction data.",
      "Implemented title and tag search along with client-side routing. Integrated web pages into the main website, enabling bottleneck identification, user experience enhancement, resulting in a 9% increase in user traffic.",
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
      "Built Restful Web Services enhancing customer search with a custom algorithm, boosting satisfaction by 25%.",
      "Optimised database query performance by over 50% through effective use of indexing, caching techniques, and executing complex joins, resulting in accelerated data retrieval and processing.",
      "Tech Stack: Java, MySQL, Spring Boot",
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
