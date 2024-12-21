// components/ProjectDetail.js
import React from "react";
import styles from "./project.module.css";

const ProjectDetail = ({ title, image, description, link }) => {
  return (
    <div className={styles.projectDetail}>
      <h1 className={styles.title}>{title || "Project Title"}</h1>
      {image && <img src={image} alt={title} className={styles.image} />}
      <p className={styles.description}>
        {description || "Detailed description of the project will go here."}
      </p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
