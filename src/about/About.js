import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              안녕하세요! 👋<br />
              <span className={styles.highlight}>이윤지</span>입니다
            </h1>
            <p className={styles.heroSubtitle}>
              경영학적 통찰력과 소프트웨어 기술력을 결합하여<br />
              혁신적인 가치를 창출하는 <strong>풀스택 개발자</strong>
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4.4</span>
                <span className={styles.statLabel}>학점</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>프로젝트</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>수상</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder}>YJ</div>
              </div>
              <div className={styles.profileInfo}>
                <h3>이윤지</h3>
                <p>Full Stack Developer</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://blog.naver.com/syralee1004" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fas fa-blog"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                경영학과 소프트웨어학과를 복수전공하며 <strong>비즈니스와 기술의 융합</strong>을 추구하는 개발자입니다.
                사용자의 니즈를 깊이 이해하고, 데이터 기반 의사결정을 통해 혁신적인 솔루션을 개발합니다.
              </p>
              <p>
                React.js, Python, 데이터 분석 등 다양한 기술 스택을 활용하여 
                <strong>실용적이고 사용자 친화적인 애플리케이션</strong>을 만들어왔습니다.
              </p>
            </div>
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>🎯</div>
                <div className={styles.highlightText}>
                  <h4>문제 해결</h4>
                  <p>복잡한 비즈니스 문제를 기술로 해결</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>🚀</div>
                <div className={styles.highlightText}>
                  <h4>혁신</h4>
                  <p>새로운 아이디어를 현실로 구현</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>🤝</div>
                <div className={styles.highlightText}>
                  <h4>협업</h4>
                  <p>팀워크를 통한 성과 극대화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                <i className="fas fa-code"></i>
                Frontend
              </h3>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>React.js</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Next.js</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>JavaScript</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Flutter</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                <i className="fas fa-server"></i>
                Backend & Data
              </h3>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Python</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>R</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>C</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>SQL</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                <i className="fas fa-chart-bar"></i>
                Data Analysis
              </h3>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Tableau</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Brightics</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Excel</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>PowerPoint</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Experience & Projects</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>AI 기반 수면 유도 플랫폼 개발</h3>
                <p className={styles.timelinePeriod}>2024 - 한이음 공모전</p>
                <p>AI 기반 개인 맞춤형 수면 유도 사운드 추천 플랫폼 및 수면 로봇 개발</p>
                <div className={styles.techStack}>
                  <span>React</span>
                  <span>Python</span>
                  <span>AI</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>정치 트래킹 플랫폼 개발</h3>
                <p className={styles.timelinePeriod}>2024 - Co-Deep Project</p>
                <p>교수-학생 협동 프로젝트로 정치 트래킹 플랫폼 개발 (최우수상 수상)</p>
                <div className={styles.techStack}>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>데이터 분석</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>소개팅/미팅 플랫폼 창업</h3>
                <p className={styles.timelinePeriod}>2024 - 성균관대 창업팀 '라추'</p>
                <p>소개팅/미팅 플랫폼 창업 프로젝트 참여</p>
                <div className={styles.techStack}>
                  <span>Flutter</span>
                  <span>창업</span>
                  <span>비즈니스</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>AIESEC 국외교류부서 부서장</h3>
                <p className={styles.timelinePeriod}>2023 - AIESEC</p>
                <p>해외 인턴십 및 봉사 프로그램을 한국 학생들에게 중계하는 역할 수행</p>
                <div className={styles.techStack}>
                  <span>리더십</span>
                  <span>국제교류</span>
                  <span>프로젝트 관리</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>멋쟁이 사자처럼 운영진</h3>
                <p className={styles.timelinePeriod}>2023 - 멋쟁이 사자처럼</p>
                <p>교육운영부 임원으로 활동하며 스터디와 세션자료 제작, 총무 역할 수행</p>
                <div className={styles.techStack}>
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>교육</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className={styles.educationSection}>
        <div className={styles.container}>
          <div className={styles.educationGrid}>
            <div className={styles.educationCard}>
              <h3 className={styles.cardTitle}>
                <i className="fas fa-graduation-cap"></i>
                Education
              </h3>
              <div className={styles.educationItem}>
                <h4>성균관대학교</h4>
                <p>경영학과 (소프트웨어학과 복수전공)</p>
                <span className={styles.period}>2024.03 - 2026.02</span>
                <span className={styles.gpa}>GPA: 4.4/4.5</span>
              </div>
              <div className={styles.educationItem}>
                <h4>한국외국어대학교</h4>
                <p>영미문학문화학과</p>
                <span className={styles.period}>2023.03 - 2024.02</span>
                <span className={styles.gpa}>GPA: 4.14/4.5</span>
              </div>
              <div className={styles.educationItem}>
                <h4>성신여자대학교</h4>
                <p>영어영문학과</p>
                <span className={styles.period}>2021.03 - 2023.02</span>
                <span className={styles.gpa}>GPA: 4.43/4.5 (전액 장학생)</span>
              </div>
            </div>

            <div className={styles.certificationCard}>
              <h3 className={styles.cardTitle}>
                <i className="fas fa-certificate"></i>
                Certifications
              </h3>
              <div className={styles.certificationGrid}>
                <div className={styles.certificationItem}>
                  <h4>어학</h4>
                  <ul>
                    <li>TOEIC 990/990</li>
                    <li>TOEFL 109/120</li>
                    <li>OPIC AL</li>
                  </ul>
                </div>
                <div className={styles.certificationItem}>
                  <h4>자격증</h4>
                  <ul>
                    <li>컴퓨터 활용 능력 1급</li>
                    <li>회계관리 2급</li>
                    <li>한국사 능력 검정시험 1급</li>
                    <li>ADsP (데이터분석 준전문가)</li>
                    <li>SQLD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className={styles.awardsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Awards & Achievements</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>🏆</div>
              <h3>Co-Deep Project 최우수상</h3>
              <p>성균관대학교 대학혁신과공유센터</p>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>🌟</div>
              <h3>AI 교육캠프 장려상</h3>
              <p>인공지능혁신융합대학사업단</p>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>🎯</div>
              <h3>Global Volunteer Excellence Award</h3>
              <p>AIESEC in Korea</p>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>📊</div>
              <h3>BDA 최종 과제 우수상</h3>
              <p>빅데이터 분석 학회</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
