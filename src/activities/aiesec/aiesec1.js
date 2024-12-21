import React from "react";
import styles from "./aiesec1.module.css";

const AIESEC1 = () => {
  return (
    <div className={styles.container}>
      {/* 히어로 배너 */}
      <section className={styles.hero}>
        <h1 className={styles.title}>국외교류부서 부서장</h1>
        <p className={styles.subtitle}>
          글로벌 기회를 창출하며 사용자의 요구를 반영한 맞춤형 전략으로 17명의 참여자를 모집하고 1000% 수익 향상 달성
        </p>
        <div className={styles.keyMetrics}>
          <div className={styles.metric}>
            <h2>17명</h2>
            <p>참여자 모집</p>
          </div>
          <div className={styles.metric}>
            <h2>1000%</h2>
            <p>수익 향상</p>
          </div>
          <div className={styles.metric}>
            <h2>Award</h2>
            <p>Global Volunteer Excellence</p>
          </div>
        </div>
      </section>

      {/* 타임라인 섹션 */}
      <section className={styles.timeline}>
        <h2 className={styles.sectionTitle}>활동 타임라인</h2>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>매주 부서 회의를 통해 프로젝트 진행 상황 점검 및 팀 운영</p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>
            MRS 데이터를 활용해 참여자의 요구를 분석하고, 이를 기반으로 효과적인 참여 전략을 수립
          </p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>이틀간 오픈 부스 개최를 통해 학생 참여 독려</p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>해외 지부와 상시 미팅을 통해 프로그램 중계</p>
        </div>
      </section>

      {/* 협업 및 리더십 사례 */}
      <section className={styles.cards}>
        <h2 className={styles.sectionTitle}>협업 및 리더십 사례</h2>
        <div className={styles.card}>
          <h3>팀원들과의 의사소통</h3>
          <p>
            팀원들의 의견을 경청하고, 합리적인 결정을 위해 토론을 진행. 2시간 이상의 대화를 통해 모두가 납득할 수 있는
            결정을 도출.
          </p>
        </div>
        <div className={styles.card}>
          <h3>문제 해결</h3>
          <p>
            참여자 모집 방식을 변경하며 팀원들의 의구심을 해소. 데이터 기반 전략으로 성공적인 결과 도출.
          </p>
        </div>
      </section>

      {/* 맞춤형 트래킹 툴 */}
      <section className={styles.tools}>
        <h2 className={styles.sectionTitle}>사용자 맞춤형 트래킹 툴</h2>
        <div className={styles.toolContent}>
          <img
            src="/images/tracking-tool-example.png"
            alt="엑셀 관리 툴"
            className={styles.toolImage}
          />
          <p>
            참여자 데이터와 요구사항을 체계적으로 관리하고, 진행 상황을 가시화한 맞춤형 트래킹 툴. 
            이를 통해 문제 상황을 사전에 파악하고, 모든 참여자가 만족할 수 있는 솔루션 제공.
          </p>
        </div>
      </section>

      {/* 데이터 및 성과 */}
      <section className={styles.data}>
        <h2 className={styles.sectionTitle}>성과 시각화</h2>
        <div className={styles.charts}>
          <div className={styles.chart}>
            <h3>참여자 증가</h3>
            <p>0명 → 17명</p>
          </div>
          <div className={styles.chart}>
            <h3>수익 향상</h3>
            <p>1000% 상승</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIESEC1;
