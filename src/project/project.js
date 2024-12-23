// components/Projects.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.gallery}>
        <div className={styles.projectCard}>
        <h3 className={styles.projectTitle}>Co-deep project</h3>
          <Link to="/co-deep" className={styles.projectLink}>
            View Details
          </Link>
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Project B</h3>
          <Link to="/project-b" className={styles.projectLink}>
            View Details
          </Link>
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Project C</h3>
          <Link to="/project-c" className={styles.projectLink}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
