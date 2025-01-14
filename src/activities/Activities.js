import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Activities.module.css";

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.activities}>
      <h1 className={styles.title}>My Activities</h1>
      <p className={styles.intro}>
        아래는 제가 참여한 다양한 활동들을 요약한 내용입니다. <br />각 항목을 클릭하면 자세한 내용을 확인할 수 있습니다.
      </p>

      {/* AIESEC 섹션 */}
      <div className={styles.section}>
      <h2 className={styles.sectionTitle}>AIESEC</h2>
        <p className={styles.sectionDescription}>
          UN 경제사회이사회(ECOSOC)와 협의하는 비정부 기구이며, UN DPI 및 UN 사무총장 청소년 특사실의 독립 기관이자 
          ICMYO 회원이며 유네스코의 인정을 받은 단체
        </p>

        <div className={styles.cardContainer}>
          <div
            className={styles.card}
            onClick={() => navigate("/activities/aiesec")}
          >
            <h3 className={styles.cardTitle}>국외교류부서장</h3>
            <p className={styles.cardContent}>
              0명의 부서에서 시작해 17명의 참여자를 모집하고 성공적인 프로그램을 운영했습니다.
            </p>
          </div>
          <div
            className={styles.card}
            onClick={() => navigate("/activities/aiesec2")}
          >
            <h3 className={styles.cardTitle}>National Leadership Development Conference</h3>
            <p className={styles.cardContent}>
              129명 규모의 컨퍼런스를 성공적으로 기획 및 운영했습니다.
            </p>
          </div>
        </div>
      </div>

            {/* 멋쟁이 사자처럼 */}
            <div className={styles.section}>
        <h2 className={styles.sectionTitle}>멋쟁이 사자처럼</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>프론트엔드 개발 및 팀 프로젝트</h3>
            <p className={styles.cardContent}>
              React와 Next.js를 학습하며 다양한 팀 프로젝트를 진행했습니다.
            </p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Activities;
