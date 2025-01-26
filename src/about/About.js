import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      {/* 헤더 */}
      <header className={styles.header}>
        <h1>ABOUT</h1>
      </header>

      {/* 소개 및 소셜 링크 */}
      <section className={styles.introduction}>
        <div className = {styles.aboutIntro}>
        <p>
          안녕하세요! 저는 <strong>융합형 인재</strong>로, 문과와 이과의 경계를 넘나들며  
          창의적 문제 해결과 소프트웨어 기술을 통해 가치를 만들어내는 개발자입니다.
        </p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> Youtube: MyChannel
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram: @myprofile
          </a>
          <a href="https://myblog.com/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-blog"></i> Blog: myblog.com
          </a>
        </div>
      </section>

      {/* 메인 레이아웃 */}
      <div className={styles.layout}>
        {/* 왼쪽 섹션 */}
        <div className={styles.leftSection}>
          {/* Certifications */}
          <section className={styles.certifications}>
            <h2>Certifications</h2>
            
                {/* 어학 섹션 */}
                <div className={styles.languageSection}>
                  <h3>어학</h3>
                  <ul>
                    <li>TOEIC 975 / 990</li>
                    <li>TOEFL 109 / 120</li>
                    <li>OPIC IH</li>
                  </ul>
                </div>
            
                {/* 자격증 섹션 */}
                <div className={styles.qualificationSection}>
                  <h3>자격증</h3>
                  <ul>
                    <li>컴퓨터 활용 능력 1급</li>
                    <li>회계관리 2급</li>
                    <li>한국사 능력 검정시험 1급</li>
                    <li>ADsP (데이터분석 준전문가)</li>
                  </ul>
                </div>
          </section>

          {/* Education */}
          <section className={styles.education}>
            <h2>Education</h2>
            <ul>
              <li>2024.03~2026.02 <strong>성균관대학교 경영학과<br />(소프트웨어학과 복수전공)</strong> (학점: 4.4/4.5)</li>
              <li>2023.03~2024.02 <strong>한국외국어대학교 <br />영미문학문화학과</strong> (학점: 4.14/4.5)</li>
              <li>2021.03~2023.02 <strong>성신여자대학교 영어영문학과</strong> (학점: 4.43/4.5, 전액 장학생)</li>
              <li>2018.03~2021.02 <strong>대일외국어고등학교 <br />러시아어학과</strong> 졸업</li>
            </ul>
          </section>

          {/* Skills */}
          <section className={styles.skills}>
            <h2>Skills</h2>
            <ul>
              <li><strong>OA 도구:</strong> Excel (上), PowerPoint (上)</li>
              <li><strong>프로그래밍 언어:</strong> Python (中), R (上), <br />JavaScript (上)</li>
              <li><strong>프론트엔드 기술:</strong> React.js (上), Next.js (中)</li>
              <li><strong>데이터 분석:</strong> Brightics(上), Tableau (上)</li>
              
            </ul>
          </section>

        </div>

        {/* 오른쪽 섹션 */}
        <div className={styles.rightSection}>
          {/* Experience & Projects */}
          <section className={styles.experience}>
            <h2>Experience & Projects</h2>
            <ul className = {styles.experienceDetail}>
              <li><strong>AIESEC 국외교류부서 부서장</strong> - 해외 인턴십 및 봉사 프로그램을 한국 학생들에게 중계</li>
              <li><strong>AIESEC 컨퍼런스 전체 회장</strong> - National Leadership Development Conference 전체 회장(129명 참여)</li>
              <li><strong>멋쟁이 사자처럼 학회원</strong> - React.js, Next.js를 공부하며 프로젝트에 참여</li>
              <li><strong>AI 교육캠프 및 경진대회 장려상</strong> 인공지능혁신융합대학사업단에서 주최한 교육 캠프 및 경진대회에서 장려상 수상</li>
              <li><strong>BDA 학회(빅데이터 분석 학회)</strong> 머신러닝반과 데이터 전처리(판다스)반에서 조장으로 활동 </li>
              <li><strong>Co-Deep Project</strong> 교수-학생 협동 프로젝트인 Co-Deep Project에서 정치 트래킹 플랫폼 개발</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
