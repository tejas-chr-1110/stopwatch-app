
import React from 'react';
import '../../App.css';
import Header from '../header';
import Footer from '../footer';
import ProjectCard from '../projectcard';
import ExamplePage from '../examples';
import styles from "./ProjectPages.module.scss"

const projects = [
  {
    title: 'Touch Vend App',
    description: 'A vending machine control and management system.',
    technologies: ['React Native', 'Kotlin', 'SCSS']
  },
  {
    title: 'Med Teams',
    description: 'Frontend initiatives for healthcare platforms.',
    technologies: ['ReactJS', 'Material UI', 'NodeJS']
  },
  {
    title: 'Archy',
    description: 'Dental practice management platform.',
    technologies: ['ReactJS', 'TypeScript', 'SpringBoot']
  },
];

const ProjectsPage = () => (
  <div>
    <Header />
    <div className={styles.wrapper}>
    <div className={styles.section_1}> {projects.map((project, index) => (
        <div
          key={index}
          // title={project.title}
          // description={project.description}
          // technologies={project.technologies}
        >{project.title}</div>
      ))} </div>
    <div  className={styles.section_2}>   <main className="main">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </main></div>
    </div>
    {/* <ExamplePage/> */}
    <Footer />
  </div>
);

export default ProjectsPage;
