import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProjectList from "../components/ProjectList";
import {
  researchProjects,
  roboticsProjects,
  mlProjects,
} from "../data/projects";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroDecor} aria-hidden="true">
            <span className={styles.decorIcon}>◇</span>
            <span className={styles.decorIcon}>△</span>
          </div>

          <div className={styles.heroInner}>
            <div className={styles.statementWrap}>
              <p className={styles.eyebrow}>Physical AI · Robotics</p>
              <blockquote className={styles.statement}>
                I design intelligent systems
                <br />
                that connect <span>human insight</span>
                <br />
                with the <strong>physical world</strong>.
              </blockquote>
              <p className={styles.statementSub}>
                Undergraduate researcher under Prof. Yuseong Kim, building
                toward robotics and Physical AI through embodied systems,
                sensors, and software.
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a href="mailto:syralee1004@naver.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/SyraYunji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/%EC%9D%B4%EC%9C%A4%EC%A7%80-%EA%B2%BD%EC%98%81%ED%95%99%EA%B3%BC-324760365/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        <div className={styles.mainGrid}>
          <div className={styles.contentColumn}>
            <section className={`${styles.section} ${styles.sectionHighlight}`}>
              <h2 className={styles.sectionTitle}>
                Physical AI & Robotics
                <span className={styles.sectionArrow}>→</span>
              </h2>
              <p className={styles.sectionDesc}>
                Core focus — wearable IoT, sleep companion robots, and
                embodied intelligent systems.
              </p>
              <ProjectList items={roboticsProjects} showHeaders highlight />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                AI &amp; Machine Learning
                <span className={styles.sectionArrow}>→</span>
              </h2>
              <p className={styles.sectionDesc}>
                Modeling, validation design, and competition work — where the
                learning side of my systems comes from.
              </p>
              <ProjectList items={mlProjects} showHeaders />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Research
                <span className={styles.sectionArrow}>→</span>
              </h2>
              <p className={styles.sectionDesc}>
                Lab research and international collaboration in Physical AI
                and urban intelligence.
              </p>
              <ProjectList items={researchProjects} showHeaders />
            </section>

            <div className={styles.viewAll}>
              <Link to="/project#more" className={styles.viewAllLink}>
                View all projects →
              </Link>
            </div>
          </div>

          <aside className={styles.profileColumn}>
            <img
              src="/Profile.png"
              alt="Yunji Lee"
              className={styles.profileImage}
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>Yunji Lee</h1>
              <p className={styles.affiliation}>Sungkyunkwan University</p>
              <p className={styles.role}>
                B.S. Business · B.S. Software (Dual Major)
              </p>
              <p className={styles.focus}>
                Robotics · Physical AI · Embodied Intelligence
              </p>
            </div>
          </aside>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Yunji Lee</p>
      </footer>
    </div>
  );
};

export default Home;
