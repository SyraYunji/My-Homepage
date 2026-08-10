import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectList.module.css";

const ProjectList = ({ items, showHeaders = false, highlight = false }) => {
  return (
    <div className={styles.list}>
      {showHeaders && (
        <div className={styles.listHeader}>
          <span className={styles.headerDate}>Date</span>
          <span className={styles.headerTitle}>Title</span>
        </div>
      )}
      {items.map((project) => (
        <article
          key={project.id}
          className={`${styles.item} ${highlight ? styles.itemHighlight : ""}`}
        >
          <div className={styles.itemDate}>{project.date}</div>
          <div className={styles.itemBody}>
            <div className={styles.itemMain}>
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt=""
                  className={styles.thumbnail}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>
                  <Link to={project.link}>{project.title}</Link>
                </h3>
                <p className={styles.itemSubtitle}>{project.subtitle}</p>
                <p className={styles.itemDescription}>{project.description}</p>
                {project.authors && (
                  <p className={styles.itemAuthors}>
                    {project.authors.map((author, i) => (
                      <span key={author}>
                        {i > 0 && ", "}
                        <strong
                          className={
                            author === "Yunji Lee" ? styles.authorSelf : ""
                          }
                        >
                          {author}
                        </strong>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.itemMeta}>
              {project.badge && (
                <span className={styles.badge}>{project.badge}</span>
              )}
              {project.tags?.slice(0, 2).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
              <Link to={project.link} className={styles.arrowLink} aria-label={`View ${project.title}`}>
                →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectList;
