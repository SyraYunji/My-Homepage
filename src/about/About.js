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
        <p>
          안녕하세요! 저는 <strong>융합형 인재</strong>로, 문과와 이과의 경계를 넘나들며  
          창의적 문제 해결과 소프트웨어 기술을 통해 가치를 만들어내는 개발자입니다.
        </p>
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
            <ul>
              <li>Google Analytics Individual Qualification (GAIQ)</li>
              <li>SQLD (SQL Developer)</li>
              <li>TOEIC 950점</li>
            </ul>
          </section>

          {/* Education */}
          <section className={styles.education}>
            <h2>Education</h2>
            <ul>
              <li>2024.03~2026.02 <strong>성균관대학교 경영학과(소프트웨어학과 복수전공)</strong> (학점: 4.4/4.5)</li>
              <li>2023.03~2024.02 <strong>한국외국어대학교 영미문학문화학과</strong> (학점: 4.14/4.5)</li>
              <li>2021.03~2023.02 <strong>성신여자대학교 영어영문학과</strong> (학점: 4.43/4.5, 전액 장학생)</li>
              <li>2018.03~2021.02 <strong>대일외국어고등학교 러시아어학과</strong> 졸업</li>
            </ul>
          </section>

          {/* Skills */}
          <section className={styles.skills}>
            <h2>Skills</h2>
            <ul>
              <li><strong>프로그래밍 언어:</strong> Python, R, JavaScript</li>
              <li><strong>프론트엔드 기술:</strong> React.js, Next.js</li>
              <li><strong>데이터 분석:</strong> 머신러닝, Pandas</li>
              <li><strong>OA 도구:</strong> Excel, PowerPoint (상급)</li>
            </ul>
          </section>
        </div>

        {/* 오른쪽 섹션 */}
        <div className={styles.rightSection}>
          {/* Experience & Projects */}
          <section className={styles.experience}>
            <h2>Experience & Projects</h2>
            <ul>
              <li><strong>AIESEC 총괄 회장</strong> - 리더십과 글로벌 프로젝트 관리 경험</li>
              <li><strong>멋쟁이 사자처럼</strong> - React 및 해커톤 참여</li>
              <li><strong>디지털 마케팅 인턴</strong> - 콘텐츠 기획 및 데이터 분석</li>
              <li><strong>SI Project:</strong> 신한금융투자 S-Voice 구축</li>
              <li><strong>SI Project:</strong> 국민대학교 대표 홈페이지 리뉴얼</li>
              <li><strong>SI Project:</strong> 경희대 융합전공 포털 사이트 구축</li>
              <li><strong>SI Project:</strong> 인크루트 취업학교 공채 대비반 홈페이지 제작</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
