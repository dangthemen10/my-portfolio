import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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
    icon: React.createElement(LuGraduationCap),
    date: 'September, 2016 – April, 2021'
  },
  {
    title: 'Intern Web Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`I gained experience in web development, coding, testing, debugging, front-end and back-end design using various technologies.`,
    icon: React.createElement(CgWorkAlt),
    date: 'July, 2020 – September, 2020'
  },
  {
    title: 'Full-Stack Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`
      I contributed to the development of a web tool for advertising data collection. Utilized VueJS, NuxtJS, Vuetify for UI/UX, NodeJS (ExpressJS) for backend, and implemented security measures. Enabled SQL query-based data collection, automated with cron jobs, and conducted testing with Jest. Managed operational issues and contributed to migrating PHP web app to Java.
    `,
    icon: React.createElement(CgWorkAlt),
    date: 'January, 2020 – June, 2023'
  },
  {
    title: 'Front-End Developer',
    location: 'Techbase Vietnam Company Limited',
    description:`As a Web Developer, I've designed and developed a website supporting social volunteer activities, focusing on disaster relief efforts. I utilized ReactJS/NextJs, Tanstack Query, and Recoil, following Atomic design principles and managing design systems with Storybook. I conducted unit testing, configured CI/CD processes, and provided training while ensuring high-quality deliverables.`,
    icon: React.createElement(FaReact),
    date: 'June, 2023 – Present'
  }
] as const;

export const projectsData = [
  {
    title: 'Social service',
    description:
      `I've designed and developed a website supporting social volunteer activities, focusing on disaster relief efforts.`,
    tags: ['Typescript', 'React', 'Next.js', 'Tanstack Query,', 'Recoil', 'Atomic Design'],
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
    tags: ['Java', 'Sprint Boot', 'Thymeleaf', 'Spring Data JPA', 'MySQL', 'Mapbox GL JS', 'JQuery', 'Javascript'],
    imageUrl: "https://genk.mediacdn.vn/thumb_w/640/2015/mzl-ztnpaftn-1433523495787.png"
  }
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'React',
  'NextJs',
  'VueJs',
  'NuxtJs',
  'NodeJs',
  'ExpressJs',
  'Jest',
  'MySQL',
  'MongoDB',
  'Sequelize ORM',
  'HTML',
  'CSS',
  'Storybook',
  'Git',
  'Sprint Boot',
  'Junit',
  'Golang',
  'Laravel',
  'C/C++',
] as const;
