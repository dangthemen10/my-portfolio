import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa";

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'University graduate',
    location: 'Can Tho University',
    description: 'I graduated from Can Tho University with a degree in Information Technology and Communication, specializing in Data Communication and Computer Networking.',
    icon: React.createElement(FaGraduationCap),
    date: 'September, 2016 – April, 2021',
    skills: ["Javascript", "PHP", "MySQL", "HTML", "CSS", "Python", "C++"]
  },
  {
    title: 'Intern Web Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`I gained experience in web development, coding, testing, debugging, front-end and back-end design using various technologies.`,
    icon: React.createElement(CgWorkAlt),
    date: 'July, 2020 – September, 2020',
    skills: [
      "Javascript",
      "HTML",
      "CSS",
      "NodeJs",
      "ExpressJs",
      "MySQL",
      "Sequelize",
      "Jquery",
      "Ajax"
    ],
  },
  {
    title: 'Full-Stack Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`
      I contributed to the development of a web tool for advertising data collection. Utilized VueJS, NuxtJS, Vuetify for UI/UX, NodeJS (ExpressJS) for backend, and implemented security measures. Enabled SQL query-based data collection, automated with cron jobs, and conducted testing with Jest. Managed operational issues and contributed to migrating PHP web app to Java.
    `,
    icon: React.createElement(CgWorkAlt),
    date: 'January, 2021 – June, 2023',
    skills: [
      "Javascript",
      'VueJs', 
      'NuxtJs', 
      'Vuetify', 
      'NodeJs', 
      'ExpressJS', 
      'Sequelize ORM', 
      'MySQL',
      'Spring Boot', 
      'Thymeleaf', 
      'Spring Data JPA', 
      'MySQL', 
      'Mapbox GL JS'
    ],
  },
  {
    title: 'Front-End Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`As a Web Developer, I've designed and developed a website supporting social volunteer activities, focusing on disaster relief efforts. I utilized ReactJS/NextJs, Tanstack Query, and Recoil, following Atomic design principles and managing design systems with Storybook. I conducted unit testing, configured CI/CD processes, and provided training while ensuring high-quality deliverables.`,
    icon: React.createElement(FaReact),
    date: 'June, 2023 – Present',
    skills: [
      "Typescript",
      "Javascript",
      "React",
      "Next.js",
      "Tanstack Query",
      "Recoil",
      "Atomic Design"
    ],
  }
] as const;

export const projectsData = [
  {
    title: 'Social service',
    description:
      `I've designed and developed a website supporting social volunteer activities, focusing on disaster relief efforts.`,
    tags: ['Typescript', 'React', 'Next.js', 'Tanstack Query', 'Recoil', 'Atomic Design'],
    imageUrl: "https://s.yimg.jp/images/donation/assets/common/img/donation_ogp.jpg"
  },
  {
    title: 'DS.LIBRARY',
    description:
      'I contributed to the development of a web tool for advertising data collection',
    tags: ['VueJs', 'NuxtJs', 'Vuetify', 'NodeJs', 'ExpressJS', 'Sequelize ORM', 'MySQL'],
    imageUrl: "https://storage.googleapis.com/users-cuuf/env/production/brandId/461/f577a5b0-6ef7-11ed-ac6c-29e685f012aa.png"
  },
  {
    title: 'Map',
    description:
      'I contributed to the develop a map tool and migrate a PHP web application to Java.',
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Spring Data JPA', 'MySQL', 'Mapbox GL JS', 'JQuery', 'Javascript'],
    imageUrl: "https://genk.mediacdn.vn/thumb_w/640/2015/mzl-ztnpaftn-1433523495787.png"
  }
] as const;

export const skillsData = [
  { name: "JavaScript", icon: "https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" },
  { name: "TypeScript", icon: "https://iconape.com/wp-content/files/wd/371584/svg/371584.svg" },
  { name: "React", icon: "https://www.svgrepo.com/show/354259/react.svg" },
  { name: "Next.js", icon: "https://www.svgrepo.com/show/342062/next-js.svg" },
  { name: "VueJs", icon: "https://www.svgrepo.com/show/303494/vue-9-logo.svg" },
  { name: "NuxtJs", icon: "https://iconape.com/wp-content/files/ut/371242/svg/371242.svg" },
  { name: "Node.js", icon: "https://iconape.com/wp-content/files/gu/371210/svg/371210.svg" },
  { name: "ExpressJs", icon: "https://www.svgrepo.com/show/330398/express.svg" },
  { name: "Jest", icon: "https://iconape.com/wp-content/png_logo_vector/jest-logo.png" },
  { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
  { name: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  { name: "Sequelize ORM", icon: "https://www.svgrepo.com/show/354333/sequelize.svg" },
  { name: "HTML", icon: "https://www.svgrepo.com/show/452228/html-5.svg" },
  { name: "CSS", icon: "https://www.svgrepo.com/show/349330/css3.svg" },
  { name: "Storybook", icon: "https://www.svgrepo.com/show/354397/storybook-icon.svg" },
  { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg" },
  { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Spring Boot", icon: "https://www.svgrepo.com/show/376350/spring.svg" },
  { name: "Junit", icon: "https://www.svgrepo.com/show/330758/junit5.svg" },
  { name: "Golang", icon: "https://www.svgrepo.com/show/355038/golang.svg" },
  { name: "Laravel", icon: "https://www.svgrepo.com/show/303379/laravel-logo.svg" },
  { name: "C/C++", icon: "https://iconape.com/wp-content/png_logo_vector/c-3.png" },
] as const;
