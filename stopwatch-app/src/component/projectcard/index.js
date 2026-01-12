import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ title, description, technologies }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
  </div>
);

export default ProjectCard;
