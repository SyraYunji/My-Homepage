import React from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Projects = () => {
  return (
    <div className = {styles.total}>
    <div className={styles.projects}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.intro}>
        아래는 제가 참여한 다양한 프로젝트들을 요약한 내용입니다. 각 항목을 클릭하면 자세한 내용을 확인할 수 있습니다.
        <br />현재 서버비 문제로 사이트는 내려간 상태입니다.
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Co-Deep Project</h3>
          <p className={styles.cardContent}>
            정치적 무관심 문제를 해결하기 위해 React.js를 이용하여 맞춤형 정치 정보를 제공하는 정치 트래킹 플랫폼 개발
          </p>
          <Link to="/co-deep" className={styles.projectLink}>
            자세히 보기
          </Link>
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Timi Project</h3>
          <p className={styles.cardContent}>
            회의 시간이나 약속 시간을 잡을 시, 편하게 정할 수 있도록 시간 조율 서비스 플랫폼을 개발
          </p>
          <Link to="/timi" className={styles.projectLink}>
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
