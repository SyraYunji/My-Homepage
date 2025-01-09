import React from "react";
import styles from "./timi.module.css";

const Timi = () => {
  return (
    <div className={styles.timiContainer}>
      {/* 프로젝트 소개 */}
      <section className={styles.intro}>
        <h1 className={styles.title}>Timi</h1>
        <p className={styles.subtitle}>가장 간편한 그룹 시간 조율 서비스</p>
        <img
          src="/images/main.jpg"
          alt="Timi 메인 이미지"
          className={styles.mainImage}
        />
      </section>

      {/* User Research */}
      <section className={styles.userResearch}>
        <h2 className={styles.sectionTitle}>User Research</h2>
        <p className={styles.description}>
          Timi는 그룹 시간 조율에 어려움을 겪는 사용자들의 니즈를 반영하여 개발되었습니다.
        </p>
        <div className={styles.imageContainer}>
          <img
            src="/images/research1.jpg"
            alt="User Research 주요 요구"
            className={styles.researchImage}
          />
          <img
            src="/images/research2.jpg"
            alt="When2meet 기능 설명"
            className={styles.researchImage}
          />
          <img
            src="/images/research3.jpg"
            alt="When2meet 한계점"
            className={styles.researchImage}
          />
        </div>
      </section>

      {/* 서비스 기능 설명 */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <div className={styles.serviceCard}>
          <img
            src="/images/service1.jpg"
            alt="모바일 환경 최적화"
            className={styles.serviceImage}
          />
          <p>모바일에 최적화된 환경으로 간편하게 그룹 시간 관리</p>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service2.jpg"
            alt="간편한 일정 생성"
            className={styles.serviceImage}
          />
          <p>간단한 일회성 로그인으로 일정 생성 및 관리 가능</p>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service3.jpg"
            alt="시간별 코멘트 기능"
            className={styles.serviceImage}
          />
          <p>시간별 코멘트를 통해 그룹 구성원 간의 효과적인 소통</p>
        </div>
      </section>

      {/* 결론 */}
      <section className={styles.conclusion}>
        <h2 className={styles.sectionTitle}>결론</h2>
        <p>
          Timi는 기존의 불편한 시간 조율 과정을 혁신적으로 개선한 서비스로, 팀의
          효율성을 극대화합니다.
        </p>
      </section>
    </div>
  );
};

export default Timi;
