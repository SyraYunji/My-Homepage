import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToContent = () => {
    const mainSections = document.querySelector(`.${styles.mainSections}`);
    if (mainSections) {
      mainSections.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const sections = [
    {
      id: "software",
      title: "Software Projects",
      subtitle: "웹/앱 개발 및 AI 기반 솔루션",
      icon: "💻",
      color: "#667eea",
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
        },
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
      id: "hardware",
      title: "Hardware Projects",
      subtitle: "IoT와 임베디드 시스템 구현",
      icon: "🔧",
      color: "#f093fb",
      projects: [
        {
          name: "KurtainCall",
          description: "사용자의 상태에 따라 맞춤형 장소를 추천해주는 웨어러블 장갑 개발",
          link: "/project/kurtaincall"
        }
      ]
    },
    {
      id: "planning",
      title: "Planning & Strategy",
      subtitle: "비즈니스 통찰력과 전략적 사고",
      icon: "📋",
      color: "#4facfe",
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
    }
  ];

  const journeyButtons = [
    {
      title: "Go to my story",
      description: "개발자로 성장한 여정을 확인해보세요",
      link: "/story",
      icon: "📖",
      color: "#667eea"
    },
    {
      title: "Check out my school work",
      description: "교내 활동과 학업 성과를 살펴보세요",
      link: "/schoolwork",
      icon: "🎓",
      color: "#764ba2"
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <div className={styles.profileSection}>
            <img src="/Profile.png" alt="Profile" className={styles.profileImage} />
            <div className={styles.profileInfo}>
                  <div className={styles.philosophy}>
                      <div className={styles.munsainseong}>
                        <h2 className={styles.munsainseongTitle}>문사인성 (問思人成)</h2>
                        <p className={styles.munsainseongSubtitle}>질문으로부터 사고하고, 사람으로 완성된다</p>
                      </div>
                      <p className={styles.philosophyText}>
                        <span className={styles.philosophyHighlight}><strong>문제에서 출발해 사람으로 완성하는 개발자</strong>, 이윤지입니다</span>
                      </p>
                    <p className={styles.philosophySubtext}>
                      현장에서 고객 불만을 직접 들어본 경험은, 단순한 버그 수정이 아니라 
                      <strong> '사람을 위한 해결'</strong>을 고민하게 만들었습니다.
                    </p>
                  </div>
                <h1 className={styles.myTitle}>
                  
                </h1>
            

            </div>
          </div>
          
          {/* Journey Buttons */}
          <motion.div 
            className={styles.journeySection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className={styles.journeyTitle}>문과에서 이과까지, 오뚝이처럼 진심과 깊이로 쌓아온 도전의 기록<br />이 모든 것을 어떻게 이루어냈을까요?</h3>
            <div className={styles.journeyButtons}>
              {journeyButtons.map((button, index) => (
                <motion.div
                  key={index}
                  className={styles.journeyButton}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={button.link} className={styles.journeyLink}>
                    <div className={styles.journeyIcon} style={{ backgroundColor: button.color }}>
                      {button.icon}
                    </div>
                    <div className={styles.journeyContent}>
                      <h4 className={styles.journeyButtonTitle}>{button.title}</h4>
                      <p className={styles.journeyButtonDescription}>{button.description}</p>
                    </div>
                    <div className={styles.journeyArrow}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Fixed Scroll Arrow */}
      <div className={styles.fixedScrollArrow}>
        <div className={styles.scrollArrow} onClick={scrollToContent}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13l3 3 3-3M7 6l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Main Sections */}
      <section className={styles.mainSections}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>My Work</h2>
            <p className={styles.sectionSubtitle}>다양한 분야에서의 프로젝트와 경험</p>
          </motion.div>

          <div className={styles.sectionsGrid}>
            {sections.map((section, index) => (
              <motion.div 
                key={section.id}
                className={`${styles.sectionCard} ${styles[section.id + 'Card']}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon} style={{ backgroundColor: section.color }}>
                    {section.icon}
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{section.title}</h3>
                    <p className={styles.cardSubtitle}>{section.subtitle}</p>
                  </div>
                </div>
                
                <div className={styles.projectsList}>
                  {section.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      className={styles.projectItem}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={project.link} className={styles.projectLink}>
                        <div className={styles.projectContent}>
                          <h4 className={styles.projectTitle}>{project.name}</h4>
                          <p className={styles.projectDescription}>{project.description}</p>
                        </div>
                        <div className={styles.projectArrow}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2>함께 멋진 프로젝트를 만들어보시겠습니까?</h2>
          <p>새로운 아이디어나 협업 기회가 있다면 언제든 연락해주세요.</p>
          <a href="mailto:syralee1004@naver.com" className={styles.ctaButton}>
            바로 연락하기
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
