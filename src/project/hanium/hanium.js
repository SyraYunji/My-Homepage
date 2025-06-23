import React from "react";
import styles from "./hanium.module.css";

const Hanium = () => {
  return (
    <div className={styles.haniumContainer}>
      {/* 프로젝트 소개 */}
      <section className={styles.intro}>
        <h1 className={styles.title}>한이음 드림업</h1>
        <p className={styles.subtitle}>
          AI 기반 개인 맞춤형 수면 유도 사운드 추천 플랫폼 및 수면 로봇 개발
        </p>
        <p className={styles.description}>
          Flutter를 이용한 앱 프론트엔드와 하드웨어 구현을 통해,
          사용자의 수면 데이터를 바탕으로 AI가 수면 유도 사운드를 추천하고,
          수면 리포트를 시각적으로 제공하는 서비스를 개발했습니다.
        </p>
      </section>

      {/* 주요 UI 스크린샷 섹션 */}
      <section className={styles.uiSection}>
        <h2 className={styles.sectionTitle}>📱 주요 UI 화면</h2>
        <div className={styles.imageGrid}>
        <img src="/intro.png" alt="Intro 화면" />
<img src="/speech_home.png" alt="음성 기반 홈 화면" />
<img src="/sleep_report1.png" alt="수면 점수 리포트" />
<img src="/time_picker.png" alt="수면 시간 설정 UI" />
<img src="/month_calender.png" alt="월간 수면 캘린더" />
<img src="/login.png" alt="로그인 화면" />
<img src="/register.png" alt="회원가입 화면" />
        </div>
      </section>

      {/* 맡은 역할 */}
      <section className={styles.myRole}>
        <h2 className={styles.sectionTitle}>👩‍💻 My Role</h2>
        <p className={styles.description}>
          저는 앱 개발의 <b>프론트엔드</b>를 Flutter로 구현하고,
          <b>수면관리 페이지 / 사운드 관리 페이지 / 홈화면</b>을 담당했습니다.
        </p>
        <p className={styles.description}>
          다양한 시각화 컴포넌트와 음성 입력 기능 구현에 집중했으며,
          사용자의 수면 경험을 직관적으로 보여줄 수 있도록 UI/UX를 설계했습니다.
        </p>
      </section>
    </div>
  );
};

export default Hanium;
