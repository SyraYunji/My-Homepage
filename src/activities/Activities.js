import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Activities.module.css";

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.activities}>
      <h1 className={styles.title}>나의 활동</h1>
      <p className={styles.intro}>
        아래는 제가 참여한 다양한 활동들을 요약한 내용입니다. 각 항목을 클릭하면 자세한 내용을 확인할 수 있습니다.
      </p>

      {/* AIESEC 섹션 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>AIESEC</h2>
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
            onClick={() => navigate("/activities/nldc")}
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

      
      {/* BDA 섹션 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>BDA (빅데이터 학회)</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>빅데이터 분석 및 머신러닝</h3>
            <p className={styles.cardContent}>
              데이터를 분석하고 머신러닝 모델을 학습하며 데이터 처리 능력을 향상시켰습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 해율 법무법인 서포터즈 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>해율 법무법인 서포터즈</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>법률 캠페인 지원 및 홍보</h3>
            <p className={styles.cardContent}>
              법률 캠페인을 기획 및 홍보하며, 대중과의 소통 능력을 강화했습니다.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Activities;
