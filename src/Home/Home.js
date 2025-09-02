import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const sections = [
    {
      id: "planning",
      title: "기획 & 전략",
      subtitle: "비즈니스 통찰력과 전략적 사고",
      icon: "📋",
      color: "#667eea",
      projects: [
        {
          name: "국외교류부서(oGX) 부서장",
          description: "해외 인턴십, 봉사 프로그램과 한국 학생들을 중계해주는 부서",
          link: "/activities/aiesec1"
        },
        {
          name: "NLDC 컨퍼런스 전체 회장", 
          description: "129명이 참여하는 컨퍼런스 개최 및 총괄",
          link: "/activities/aiesec2"
        }
      ]
    },
    {
      id: "Frontend",
      title: "프론트엔드 개발",
      subtitle: "사용자 경험 중심의 웹/앱 개발",
      icon: "💻",
      color: "#764ba2",
      projects: [
        {
          name: "Timi",
          description: "그룹 시간 조율 서비스",
          link: "/project/timi"
        },
        {
          name: "Co-Deep Project",
          description: "AI 기반 정치 성향 분석 플랫폼",
          link: "/project/co-deep"
        },
        {
          name: "한이음 드림업",
          description: "AI 기반 수면 유도 사운드 추천",
          link: "/project/hanium"
        }
      ]
    },
    {
      id: "Full-Stack",
      title: "풀스택 개발",
      subtitle: "백엔드 시스템 및 AI 파이프라인 구축",
      icon: "⚙️",
      color: "#4facfe",
      projects: [
        {
          name: "Re-local",
          description: "혜화 소극장 언어 장벽 해소 플랫폼",
          link: "/project/re-local"
        },
        {
          name: "성슐랭",
          description: "대학생 맛집 추천 웹서비스 & 동아리",
          link: "/project/lachu"
        }
      ]
    },
    {
      id: "Hardware",
      title: "하드웨어 개발",
      subtitle: "IoT와 임베디드 시스템 구현",
      icon: "🔧",
      color: "#f093fb",
      projects: [
        {
          name: "KurtainCall",
          description: "스마트 커튼 제어 시스템",
          link: "/project/kurtaincall"
        }
      ]
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.heroContent}
        >
          <img src="/Profile.jpg" alt="Profile" className={styles.profileImage} />
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.highlight}>
              <Typewriter
                words={["My Portfolio", "My Creative Space"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className={styles.subtitle}>
            소프트웨어 기술과 경영학의 전략적 사고를 결합한 <strong>융합형 인재</strong>로,  
            창의적 문제 해결과 효과적인 커뮤니케이션 능력을 바탕으로  
            가치를 만들어내는 풀스텍 개발자입니다.
          </p>

          <div className={styles.achievementBadge}>
            🏆 국외교류부서 부서장 - 1000% 수익 달성
          </div>
        </motion.div>
      </section>

      {/* Main Sections - Compact Grid Layout */}
      <div className={styles.mainSections}>
        <div className={styles.sectionsGrid}>
          {sections.map((section, index) => (
            <motion.section 
              key={section.id}
              className={`${styles.section} ${styles[section.id + 'Section']}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.sectionContent}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon} style={{ color: section.color }}>
                    {section.icon}
                  </div>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <p className={styles.sectionSubtitle}>{section.subtitle}</p>
                </div>
                
                <div className={styles.projectsGrid}>
                  {section.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      className={styles.projectCard}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Link to={project.link} className={styles.projectLink}>
                        <h3 className={styles.projectTitle}>{project.name}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.projectArrow}>→</div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2>함께 성장할 프로젝트를 찾고 계신가요?</h2>
          <p>기획부터 개발까지, 모든 과정에서 가치를 창출하는 파트너가 되어드리겠습니다.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaButton}>
              연락하기
            </Link>
            <Link to="/about" className={styles.ctaButtonAlt}>
              더 알아보기
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
