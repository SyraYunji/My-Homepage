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

      {/* My Role */}
      <section className={styles.myRole}>
        <h2 className={styles.sectionTitle}>My Role</h2>
        <p className={styles.description}>
          저는 시간 입력 화면 중에서 <b>Number 입력 화면</b>, 즉 시간을 선택하는
          화면을 구현했습니다. 또한 <b>로그인 화면</b> 설계 및 구현을 맡았습니다.
        </p>
        <p className={styles.description}>
          이 프로젝트를 통해 처음으로 <b>query parameter로 값을 전달</b>하고,{" "}
          <b>프론트엔드와 백엔드 연결</b>을 <b>axios</b>를 사용해 구현하는 경험을
          했습니다.
        </p>
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
          <div className = {styles.detail}>
          <p className = "detail">모바일에 최적화된 환경으로 2가지 방법(드래그, 시간 선택)으로 간편하게 그룹 시간 관리를 할 수 있도록 하였음</p>
        </div>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service2.jpg"
            alt="간편한 일정 생성"
            className={styles.serviceImage}
          />
          <div className = {styles.detail}>
          <p className = "detail">회원가입이 아닌, 간단한 일회성 로그인으로 일정 생성 및 관리 가능</p>
        </div>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service5.jpg"
            alt="시간별 코멘트 기능"
            className={styles.serviceImage}
          />
          <div className = {styles.detail}>
          <p>기존 존재하는 플랫폼의 한계를 보완하여 눈에 띄는 색으로 모든 팀원이 가능한 시간을 표시</p>
        </div>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service3.jpg"
            alt="시간별 코멘트 기능"
            className={styles.serviceImage}
          />
          <div className = {styles.detail}>
          <p>시간별 코멘트를 통해 그룹 구성원 간의 효과적인 소통</p>
        </div>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/images/service4.jpg"
            alt="시간별 코멘트 기능"
            className={styles.serviceImage}
          />
           <div className = {styles.detail}>
          <p>최종 확정 시간과 미팅 장소를 적어서 공유할 수 있도록 하였음</p>
        </div>
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
