import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import {
  researchProjects,
  roboticsProjects,
  otherProjects,
  mlProjects,
  PROJECT_CATEGORIES,
} from "../data/projects";
import styles from "./project.module.css";

const Projects = () => {
  useEffect(() => {
    if (window.location.hash === "#more") {
      const el = document.getElementById("more");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <p className={styles.pageEyebrow}>Portfolio</p>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p className={styles.pageSubtitle}>
            Physical AI and robotics at the center — with research, software,
            and leadership work organized around it.
          </p>
        </header>

        <section className={`${styles.categorySection} ${styles.featuredSection}`}>
          <h2 className={styles.categoryTitle}>
            {PROJECT_CATEGORIES.ROBOTICS}
          </h2>
          <p className={styles.categoryDesc}>
            Wearable IoT, companion robots, and embodied systems — my primary
            direction.
          </p>
          <ProjectList items={roboticsProjects} showHeaders highlight />
        </section>

        <section className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {PROJECT_CATEGORIES.MACHINE_LEARNING}
          </h2>
          <p className={styles.categoryDesc}>
            Ensemble modeling, validation design, and competition work.
          </p>
          <ProjectList items={mlProjects} showHeaders />
        </section>

        <section className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {PROJECT_CATEGORIES.RESEARCH}
          </h2>
          <p className={styles.categoryDesc}>
            Lab work under Prof. Yuseong Kim and international research
            collaborations.
          </p>
          <ProjectList items={researchProjects} showHeaders />
        </section>

        <section id="more" className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>More Projects</h2>
          <p className={styles.categoryDesc}>
            Software development, product building, and leadership experience
            across other domains.
          </p>
          <ProjectList items={otherProjects} showHeaders />
        </section>

        <div className={styles.backHome}>
          <Link to="/">← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
