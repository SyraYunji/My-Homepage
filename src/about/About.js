import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      {/* 이력서 헤더 */}
      <header className={styles.resumeHeader}>
        <div className={styles.headerContent}>
          <div className={styles.profileSection}>
            <img src="/Profile.jpg" alt="이윤지" className={styles.profileImage} />
            <div className={styles.basicInfo}>
              <h1 className={styles.name}>이윤지</h1>
              <p className={styles.birth}>2002.04.29</p>
              <p className={styles.position}>Robotics & Physical AI Researcher</p>
            </div>
          </div>
          <div className={styles.contactSection}>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <span>010-3423-0041</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <span>syralee1004@naver.com</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>서울특별시 은평구 수색로 322</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fab fa-youtube"></i>
              <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
            <div className={styles.contactItem}>
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/%EC%9D%B4%EC%9C%A4%EC%A7%80-%EA%B2%BD%EC%98%81%ED%95%99%EA%B3%BC-324760365" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-link"></i>
              <a href="https://portfolio-my-project-a6ffa7dc.vercel.app/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 학력 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>학력</h2>
        <div className={styles.educationList}>
          <div className={styles.educationItem}>
            <div className={styles.educationPeriod}>2024.03 ~ 현재</div>
            <div className={styles.educationContent}>
              <h3>성균관대학교 경영학과 (복수전공: 소프트웨어학과)</h3>
              <p>3학년 일반편입 | 학점: 4.35/4.5 (전공: 4.33/4.5)</p>
            </div>
          </div>
          <div className={styles.educationItem}>
            <div className={styles.educationPeriod}>2023.03 ~ 2024.02</div>
            <div className={styles.educationContent}>
              <h3>한국외국어대학교(서울) 영미문학문화학과</h3>
              <p>3학년 일반편입 | 복수전공: 국가리더 | 학점: 4.14/4.5</p>
            </div>
          </div>
          <div className={styles.educationItem}>
            <div className={styles.educationPeriod}>2021.03 ~ 2023.02</div>
            <div className={styles.educationContent}>
              <h3>성신여자대학교 영어영문학과</h3>
              <p>학점: 4.43/4.5 | 전액 장학생</p>
            </div>
          </div>
          <div className={styles.educationItem}>
            <div className={styles.educationPeriod}>2018.03 ~ 2021.02</div>
            <div className={styles.educationContent}>
              <h3>대일외국어고등학교 러시아어학과</h3>
              <p>졸업</p>
            </div>
          </div>
        </div>
      </section>

      {/* 어학 & 자격증 */}
      <section className={styles.section}>
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>어학</h2>
            <div className={styles.languageList}>
              <div className={styles.languageItem}>
                <span className={styles.languageName}>TOEIC</span>
                <span className={styles.languageScore}>990/990</span>
                <span className={styles.languageDate}>2025.04</span>
              </div>
              <div className={styles.languageItem}>
                <span className={styles.languageName}>TOEFL</span>
                <span className={styles.languageScore}>107/120</span>
                <span className={styles.languageDate}>2023.03</span>
              </div>
              <div className={styles.languageItem}>
                <span className={styles.languageName}>OPIC</span>
                <span className={styles.languageScore}>AL</span>
                <span className={styles.languageDate}>2025.05</span>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>자격증</h2>
            <div className={styles.certificationList}>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>컴퓨터 활용 능력 1급</span>
                <span className={styles.certDate}>2021.06</span>
              </div>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>회계관리 2급</span>
                <span className={styles.certDate}>2024.04</span>
              </div>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>한국사능력검정시험 1급</span>
                <span className={styles.certDate}>2024.08</span>
              </div>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>ADsP (데이터분석 준전문가)</span>
                <span className={styles.certDate}>2024.11</span>
              </div>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>정보처리기사 (필기 합격)</span>
                <span className={styles.certDate}>2025.02</span>
              </div>
              <div className={styles.certificationItem}>
                <span className={styles.certName}>SQLD</span>
                <span className={styles.certDate}>2025.05</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 수상 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>수상</h2>
        <div className={styles.awardsList}>
          <div className={styles.awardItem}>
            <div className={styles.awardDate}>2025.02</div>
            <div className={styles.awardContent}>
              <h3>BDA 최종 과제 우수상 (2등)</h3>
              <p>빅데이터 학회</p>
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardDate}>2025.01</div>
            <div className={styles.awardContent}>
              <h3>Co-Deep Learning Project 최우수상</h3>
              <p>성균관대학교 대학혁신과공유센터</p>
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardDate}>2024.07</div>
            <div className={styles.awardContent}>
              <h3>AI 교육캠프 및 경진대회 장려상</h3>
              <p>인공지능혁신융합대학사업단</p>
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardDate}>2024.02</div>
            <div className={styles.awardContent}>
              <h3>Outgoing Global Volunteer Excellence Award</h3>
              <p>AIESEC in Korea</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2023.10 ~ 2024.01</div>
            <div className={styles.activityContent}>
              <h3>법무법인 해율 우수 서포터즈 선정</h3>
              <p> 매주 법률 원고 작성 및 취합</p>
            </div>
          </div>
        </div>
      </section>

      {/* 대외활동 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>대외활동</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2025.06 ~ 현재</div>
            <div className={styles.activityContent}>
              <h3>성균관대 창업팀 라추 CTO</h3>
              <p>교내 학생 커뮤니티 플랫폼 기획·개발 (Next.js + Firebase)</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2025.03 ~ 현재</div>
            <div className={styles.activityContent}>
              <h3>한이음 드림업 공모전 - 수면 로봇 '알라' 프로젝트</h3>
              <p>Flutter 기반 모바일 앱 개발 (LLM 연동, IoT 로봇 연동)</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2025.02 ~ 현재</div>
            <div className={styles.activityContent}>
              <h3>멋쟁이 사자처럼 성균관대 운영진</h3>
              <p>Re-local 프로젝트 주도 (React/Node/MongoDB, STT→번역→TTS 파이프라인), 교육운영부 활동</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2024.09 ~ 2025.02</div>
            <div className={styles.activityContent}>
              <h3>BDA 빅데이터 학회 조장</h3>
              <p>머신러닝반과 데이터 전처리 판다스반 조장, 최종 과제 우수상 수상</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2024.09 ~ 2025.01</div>
            <div className={styles.activityContent}>
              <h3>Co-Deep Project 프론트엔드 개발자</h3>
              <p>정치 트래킹 웹사이트 개발 (React.js, 데이터 시각화) - 최우수상 수상</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2024.03 ~ 2025.01</div>
            <div className={styles.activityContent}>
              <h3>멋쟁이 사자처럼 성균관대 지부 학회원</h3>
              <p>React.js, Next.js 학습, 해커톤 및 4호선톤 참여</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2023.10 ~ 2024.01</div>
            <div className={styles.activityContent}>
              <h3>해율 법무법인 서포터즈(우수 서포터즈 선정)</h3>
              <p>매주 법률 원고 작성, 팀장 활동</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2023.10 ~ 2024.01</div>
            <div className={styles.activityContent}>
              <h3>AIESEC NLDC 전체 회장 (129명 참여)</h3>
              <p>2박 3일 컨퍼런스 총괄 책임자, 엑셀 관리 도구 개발</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityPeriod}>2023.08 ~ 2024.02</div>
            <div className={styles.activityContent}>
              <h3>AIESEC in HUFS 국외교류부서 부서장</h3>
              <p>데이터 기반 전략으로 22명 모집, 수익 1000% 향상 달성</p>
            </div>
          </div>
        </div>
      </section>

      {/* 보유 기술 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>보유 기술</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>언어</h3>
            <div className={styles.skillItems}>
              <span className={styles.skillItem}>JavaScript (상)</span>
              <span className={styles.skillItem}>Python (중)</span>
              <span className={styles.skillItem}>R (상)</span>
              <span className={styles.skillItem}>C (중)</span>
              <span className={styles.skillItem}>C++ (중)</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>프레임워크 & 라이브러리</h3>
            <div className={styles.skillItems}>
              <span className={styles.skillItem}>React.js (상)</span>
              <span className={styles.skillItem}>Next.js (중)</span>
              <span className={styles.skillItem}>Node.js (중)</span>
              <span className={styles.skillItem}>Flutter (중)</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>데이터 분석 & 시각화</h3>
            <div className={styles.skillItems}>
              <span className={styles.skillItem}>Brightics (상)</span>
              <span className={styles.skillItem}>Tableau (상)</span>
              <span className={styles.skillItem}>Pandas (중)</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>기타</h3>
            <div className={styles.skillItems}>
              <span className={styles.skillItem}>Firebase (중)</span>
              <span className={styles.skillItem}>MongoDB (중)</span>
              <span className={styles.skillItem}>Excel (상)</span>
              <span className={styles.skillItem}>PowerPoint (상)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div 
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>더 자세한 이야기가 궁금하신가요?</h2>
          <p>프로젝트의 상세한 과정과 기술적 구현, 그리고 개인적인 성장 스토리를 확인해보세요.</p>
          <div className={styles.ctaButtons}>
                <Link to="/story" className={styles.ctaButton}>
              <span>Learn more about my story</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="/이력서_이윤지.pdf" target="_blank" rel="noreferrer" className={styles.ctaButtonAlt}>
              <i className="fas fa-file-pdf"></i>
              PDF 이력서 보기
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;