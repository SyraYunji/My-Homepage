import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getProjectById } from "../data/projects";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/project" replace />;
  }

  const { detail } = project;

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <Link to="/project" className={styles.backLink}>
          ← All projects
        </Link>

        <header className={styles.header}>
          <p className={styles.category}>{project.category}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <dl className={styles.meta}>
            <div>
              <dt>Role</dt>
              <dd>{detail.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{detail.period}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{detail.team}</dd>
            </div>
          </dl>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
            {project.badge && (
              <span className={styles.badge}>{project.badge}</span>
            )}
          </div>
        </header>

        <section className={styles.section}>
          <h2>Overview</h2>
          <p>{detail.overview}</p>
        </section>

        <section className={styles.section}>
          <h2>My Role</h2>
          <ul>
            {detail.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {detail.outcomes?.length > 0 && (
          <section className={styles.section}>
            <h2>Outcomes</h2>
            <ul>
              {detail.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {detail.images?.length > 0 && (
          <section className={styles.section}>
            <h2>Gallery</h2>
            <div className={styles.gallery}>
              {detail.images.map((img) => (
                <figure key={img.src} className={styles.figure}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  {img.caption && (
                    <figcaption>{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.github && (
          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
