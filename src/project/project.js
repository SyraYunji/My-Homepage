import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <div className={styles.total}>
      <div className={styles.projects}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.intro}>
          아래는 제가 참여한 다양한 프로젝트들을 요약한 내용입니다. 각 항목을 클릭하면 자세한 내용을 확인할 수 있습니다.
          <br />현재 서버비 문제로 사이트는 내려간 상태입니다.
        </p>

        {/* 🔧 모든 프로젝트 섹션 */}
        <div className={styles.cardContainer}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Co-Deep Project (최우수상 수상)</h3>
            <p className={styles.cardContent}>
              React.js를 이용하여 맞춤형 정치 정보를 제공하는 정치 트래킹 플랫폼 개발
            </p>
            <Link to="/co-deep" className={styles.projectLink}>
              자세히 보기
            </Link>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Timi Project</h3>
            <p className={styles.cardContent}>
              회의 시간이나 약속 시간을 편리하게 정할 수 있도록 시간 조율 서비스 플랫폼 개발
            </p>
            <Link to="/timi" className={styles.projectLink}>
              자세히 보기
            </Link>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>한이음 드림업</h3>
            <p className={styles.cardContent}>
            AI 기반 개인 맞춤형 수면 유도 사운드 추천 플랫폼 및 수면 로봇 개발
            </p>
            <Link to="/hanium" className={styles.projectLink}>
              자세히 보기
            </Link>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Coming Soon</h3>
            <p className={styles.cardContent}></p>
            <Link to="/coming-soon" className={styles.projectLink}>
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
