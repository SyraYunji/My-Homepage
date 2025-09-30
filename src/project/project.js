import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./project.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const projects = [
    {
      id: 1,
      title: "Co-Deep Project",
      subtitle: "AI 기반 정치 성향 분석 플랫폼",
      description: "React.js와 데이터 분석을 활용한 맞춤형 정치 정보 제공 플랫폼. 사용자 맞춤 정치 트래킹 서비스를 구현했습니다.",
      tech: ["React.js", "Next.js", "데이터 분석", "UI/UX"],
      award: "최우수상",
      image: "/images/district-detail.png",
      link: "/project/co-deep",
      category: "Software Projects",
      icon: "💻"
    },
    {
      id: 2,
      title: "Timi",
      subtitle: "그룹 시간 조율 서비스",
      description: "회의나 약속 시간을 효율적으로 조율할 수 있는 웹 플랫폼. 사용자 친화적인 인터페이스로 시간 관리의 복잡성을 해결했습니다.",
      tech: ["React.js", "JavaScript", "API", "Responsive Design"],
      image: "/images/main.jpg",
      link: "/project/timi",
      category: "Software Projects",
      icon: "💻"
    },
    {
      id: 3,
      title: "한이음 드림업",
      subtitle: "AI 기반 수면 유도 사운드 추천",
      description: "Flutter로 개발한 AI 기반 수면 로봇 '알라'와 연동되는 모바일 앱. IoT와 AI를 결합한 혁신적인 수면 솔루션입니다.",
      tech: ["Flutter", "AI/ML", "IoT", "Python", "하드웨어"],
      award: "베타테스트 배포",
      images: [
        "/sleep_report3.png",
        "/sleep_report2.png",
        "/sleep_report5.png",
        "/sleep_speech1.png"
      ],
      link: "/project/hanium",
      category: "Software Projects",
      icon: "💻"
    },
    {
      id: 4,
      title: "Re-local",
      subtitle: "혜화 소극장 언어 장벽 해소 플랫폼",
      description: "STT→번역→TTS 파이프라인을 구축한 다국어 지원 플랫폼. MongoDB와 Node.js를 활용한 풀스택 개발 프로젝트입니다.",
      tech: ["React.js", "Node.js", "MongoDB", "STT/TTS", "API"],
      images: [
        "/relocal1.png",
        "/relocal2.png",
        "/relocal3.png",
        "/relocal4.png"
      ],
      link: "/project/re-local",
      category: "Software Projects",
      icon: "💻",
      isWideImage: true
    },
    {
      id: 5,
      title: "성슐랭",
      subtitle: "대학생 맛집 추천 웹서비스 & 동아리",
      description: "창업팀 라추의 CTO로서 Next.js와 Firebase를 활용한 커뮤니티 플랫폼 개발. MVP 출시를 준비 중입니다.",
      tech: ["Next.js", "Firebase", "TypeScript", "UI/UX"],
      images: [
        "/lachu1.png",
        "/lachu2.png",
        "/lachu3.png",
        "/lachu4.png"
      ],
      link: "/project/lachu",
      category: "Software Projects",
      icon: "💻",
      isWideImage: true
    },
    {
      id: 6,
      title: "KurtainCall",
      subtitle: "스마트 커튼 제어 시스템",
      description: "사용자의 상태에 따라 맞춤형 장소를 추천해주는 웨어러블 장갑 개발",
      tech: ["Arduino", "ESP32", "C++", "IoT", "Bluetooth"],
      image: "/images/coming-soon.png",
      link: "/project/kurtaincall",
      category: "Hardware Projects",
      icon: "🔧"
    }
  ];

  return (
    <div className={styles.projectsPage}>
      {/* Hero Section */}
  

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>각 프로젝트를 클릭하면 자세한 내용을 확인할 수 있습니다</p>
          </motion.div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${styles.projectCard} ${styles[project.category.toLowerCase().replace(' ', '')]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.projectImage}>
                  {project.images ? (
                    <div className={project.isWideImage ? styles.wideImageGallery : styles.imageGallery}>
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className={project.isWideImage ? styles.wideGalleryImage : styles.galleryImage}
                        />
                      ))}
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  {project.award && (
                    <div className={project.title === "한이음 드림업" ? styles.betaBadge : styles.awardBadge}>
                      {project.title === "한이음 드림업" ? "🚀 " : "🏆 "}{project.award}
                    </div>
                  )}
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectCategory}>
                      <span className={styles.categoryIcon}>{project.icon}</span>
                      {project.category}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={project.link} className={styles.projectLink}>
                    <span>자세히 보기</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>함께 성장할 프로젝트를 찾고 계신가요?</h2>
          <p>기획부터 개발까지, 모든 과정에서 가치를 창출하는 파트너가 되어드리겠습니다.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaButton}>
              <span>연락하기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/story" className={styles.ctaButtonAlt}>
              <span>내 이야기 보기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
