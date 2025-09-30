import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaMobile, FaChartLine, FaPlay, FaComments } from "react-icons/fa";
import styles from "./hanium.module.css";

const Hanium = () => {
  const projectInfo = {
    title: "한이음 드림업",
    subtitle: "AI 기반 수면 로봇 '알라'와 연동되는 모바일 앱",
    category: "Mobile Development",
    period: "2025.03 - 2025.10",
    tech: ["Flutter", "Dart", "AI/ML", "IoT", "하드웨어"],
    role: "1인 프론트엔드 개발자",
    team: "Kooala",
    github: "https://github.com/Ko-o-ala/NewFrontend",
    status: "베타테스트 배포 완료"
  };

  const features = [
    {
      title: "AI 수면 분석",
      description: "LLM 연동으로 개인별 수면 패턴 분석 및 맞춤형 인사이트 제공",
      icon: <FaChartLine />,
      color: "#667eea"
    },
    {
      title: "알라와의 대화",
      description: "수면 로봇 '알라'와의 실시간 대화형 인터랙션 시스템",
      icon: <FaComments />,
      color: "#764ba2"
    },
    {
      title: "IoT 하드웨어 연동",
      description: "LED, 스피커, 음성을 제어하는 맞춤형 수면 인터랙션",
      icon: <FaPlay />,
      color: "#f093fb"
    },
    {
      title: "수면 리포트",
      description: "직관적인 UI로 수면 데이터를 시각화하고 관리",
      icon: <FaMobile />,
      color: "#4facfe"
    }
  ];

  const screenshots = [
    {
      src: "/sleep_report1.png",
      alt: "수면 분석 리포트",
      title: "수면 분석 리포트",
      className: "sleep_image",
      description: "일별 수면 패턴과 AI 인사이트"
    },
    {
      src: "/sleep_speech1.png",
      alt: "알라와의 대화",
      title: "알라와의 대화",
      className: "sleep_image",
      description: "수면 로봇과의 실시간 대화"
    },
    {
      src: "/images/sleep_sound1.png",
      alt: "수면 사운드",
      title: "수면 사운드",
      className: "sleep_image",
      description: "맞춤형 수면 유도 사운드"
    },
    {
      src: "/sleep_report2.png",
      alt: "월간 캘린더",
      title: "월간 캘린더",
      className: "sleep_image",
      description: "월별 수면 패턴 시각화"
    }
  ];

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
    

          <div className={styles.projectHeader}>
            <div className={styles.projectCategory}>{projectInfo.category}</div>
            <div className={styles.betaBadge}>🚀 {projectInfo.status}</div>
            <h1 className={styles.projectTitle}>{projectInfo.title}</h1>
            <p className={styles.projectSubtitle}>{projectInfo.subtitle}</p>
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role:</span>
                <span className={styles.metaValue}>{projectInfo.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team:</span>
                <span className={styles.metaValue}>{projectInfo.team}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Period:</span>
                <span className={styles.metaValue}>{projectInfo.period}</span>
              </div>
            </div>

            <div className={styles.techStack}>
              {projectInfo.tech.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.projectActions}>
              <motion.a
                href={projectInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>View Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className={styles.projectContent}>
        <div className={styles.container}>
          {/* Overview & Role */}
          <div className={styles.mainSection}>
            <div className={styles.overviewSection}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p className={styles.sectionDescription}>
                한이음 드림업 공모전에서 개발한 혁신적인 수면 솔루션입니다. 
                Flutter로 개발한 모바일 앱과 수면 로봇 '알라' 인형을 연동하여, 
                AI가 개인별 수면 패턴을 분석하고 맞춤형 수면 유도 사운드를 제공합니다. 
                LED, 스피커, 음성을 제어하는 IoT 기술과 LLM을 활용한 대화형 인터페이스로 
                완전히 새로운 수면 경험을 구현했습니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>1인 프론트엔드 개발자</strong>로서 Flutter 앱 전체를 담당했습니다. 
                  유튜브 Flutter 강의를 일주일만에 완주하며 빠르게 학습하고, 
                  <strong>수면 분석, 대화형 인터페이스, IoT 연동</strong> 기능을 모두 구현했습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>애플 베타테스트</strong>까지 완료하며, 개발자와 사용자 시선의 차이를 깊이 배웠습니다. 
                  사용자 중심의 직관적인 UI/UX 설계와 하드웨어 연동의 복잡성을 해결하는 경험을 얻었습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.featureIcon} style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UI Screenshots & Tech Stack */}
          <div className={styles.bottomSection}>
            <div className={styles.screenshotsSection}>
              <h2 className={styles.sectionTitle}>UI Screenshots</h2>
              <div className={styles.screenshotsGrid}>
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className={styles.screenshotCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className={styles.screenshotImage}
                    />
                    <div className={styles.screenshotContent}>
                      <h3 className={styles.screenshotTitle}>{screenshot.title}</h3>
                      <p className={styles.screenshotDescription}>{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.techSection}>
              <h2 className={styles.sectionTitle}>Technology Stack</h2>
              <div className={styles.techDetails}>
                <div className={styles.techCategory}>
                  <h3>Mobile Development</h3>
                  <p>Flutter & Dart로 크로스 플랫폼 모바일 앱 개발, 일주일만에 강의 완주하며 빠른 학습</p>
                </div>
                <div className={styles.techCategory}>
                  <h3>AI & Machine Learning</h3>
                  <p>LLM 연동으로 개인별 수면 패턴 분석 및 맞춤형 인사이트 제공</p>
                </div>
                <div className={styles.techCategory}>
                  <h3>IoT & Hardware</h3>
                  <p>수면 로봇 '알라'와 연동하여 LED, 스피커, 음성 제어하는 하드웨어 통합</p>
                </div>
                <div className={styles.techCategory}>
                  <h3>User Experience</h3>
                  <p>애플 베타테스트를 통한 사용자 피드백 반영, 직관적인 UI/UX 설계</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hanium;
