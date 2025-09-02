import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./project.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const projects = [
    {
      id: 1,
      title: "PoliTracker",
      subtitle: "정치 트래킹 플랫폼",
      description: "React.js를 이용하여 맞춤형 정치 정보를 제공하는 정치 트래킹 플랫폼 개발",
      tech: ["React.js", "Next.js", "데이터 분석", "UI/UX"],
      award: "최우수상 수상",
      image: "/images/district-detail.png",
      link: "/co-deep",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Timi",
      subtitle: "시간 조율 서비스",
      description: "회의 시간이나 약속 시간을 편리하게 정할 수 있도록 시간 조율 서비스 플랫폼 개발",
      tech: ["React.js", "JavaScript", "API", "Responsive Design"],
      image: "/images/main.jpg",
      link: "/project/timi",
      category: "Web Development"
    },
    {
      id: 3,
      title: "코오알라",
      subtitle: "AI 수면 유도 플랫폼",
      description: "AI 기반 개인 맞춤형 수면 유도 사운드 추천 플랫폼 및 수면 로봇 개발",
      tech: ["AI", "Python", "React", "IoT", "하드웨어"],
      award: "앱 출시 예정 (베타테스트 배포 상태)",
      image: "/images/sleep_report1.png",
      images: [
        "/images/sleep_report3.png",
        "/images/sleep_report2.png",
        "/images/sleep_report5.png",
        "/images/sleep_speech1.png"
      ],
      link: "/project/hanium",
      category: "Application Development"
    },
    {
      id: 4,
      title: "성슐랭",
      subtitle: "대학생 맛집 추천 웹서비스를 직접 기획하는 창업 서비스 및 동아리",
      description: "대학생 맛집 추천 웹서비스를 직접 기획하는 창업 서비스 및 동아리 창시에 CTO 1인 풀스택 개발자로 참여",
      tech: ["기술 스택 미정"],
      image: "/images/coming-soon.png",
      link: "/project/lachu",
      category: "Full-Stack Development"
    },
    {
      id: 5,
      title: "KurtainCall",
      subtitle: "스마트 커튼 제어 시스템",
      description: "IoT와 임베디드 시스템을 활용한 스마트 커튼 자동 제어 시스템 개발",
      tech: ["Arduino", "ESP32", "IoT", "Bluetooth", "C++"],
      image: "/images/coming-soon.png",
      link: "/coming-soon",
      category: "Hardware Development"
    }
  ];

  return (
    <div className={styles.projectsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            My <span className={styles.highlight}>Projects</span>
          </h1>
          <p className={styles.heroSubtitle}>
            기획부터 개발까지, 다양한 기술 스택을 활용하여 만든 프로젝트들을 소개합니다.
            <br />
            각 프로젝트를 클릭하면 자세한 내용을 확인할 수 있습니다.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>프로젝트</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>기술 분야</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>수상</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.projectImage}>
                  {project.images ? (
                    <div className={styles.imageGallery}>
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className={styles.galleryImage}
                        />
                      ))}
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  {project.award && (
                    <div className={project.title === "코오알라" ? styles.betaBadge : styles.awardBadge}>
                      {project.title === "코오알라" ? "🚀 " : "🏆 "}{project.award}
                    </div>
                  )}
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectCategory}>{project.category}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={project.link} className={styles.projectLink}>
                    자세히 보기
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
          <h2>함께 프로젝트를 만들어보시겠습니까?</h2>
          <p>새로운 아이디어나 협업 기회가 있다면 언제든 연락해주세요.</p>
          <Link to="/contact" className={styles.ctaButton}>
            연락하기
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
