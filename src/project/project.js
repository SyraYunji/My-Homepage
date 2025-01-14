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
            React.js를 이용하여 정치 트래킹 플랫폼을 팀원들과 개발하였습니다.
          </p>
          <Link to="/co-deep" className={styles.projectLink}>
            자세히 보기
          </Link>
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Timi Project</h3>
          <p className={styles.cardContent}>
            팀의 생산성을 최적화하기 위한 시간 관리 도구. 실시간 환경에서의 팀 작업에 특화되어 있습니다.
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
