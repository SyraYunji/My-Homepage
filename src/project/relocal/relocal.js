import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaServer, FaDatabase, FaMicrophone, FaSpider, FaUsers, FaLightbulb } from "react-icons/fa";
import styles from "./relocal.module.css";

const ReLocal = () => {
  const projectInfo = {
    title: "Re-local",
    subtitle: "혜화 소극장 외국인 관객을 위한 언어 장벽 해소 플랫폼",
    category: "Full-Stack Development",
    period: "2024",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "STT", "Translation API", "TTS", "WebSocket", "Web Crawling"],
    role: "팀장 & Full-Stack Developer",
    team: "4명 팀 (프론트엔드 초보자 포함)",
    github: "https://github.com/relocal-project"
  };

  const features = [
    {
      title: "팀 리더십",
      description: "프로젝트 전체를 주도하고 팀원들의 성장을 지원",
      icon: <FaUsers />,
      color: "#667eea",
      details: [
        "프로젝트 기획 및 방향성 설정",
        "팀원 역할 분담 및 일정 관리",
        "프론트엔드 초보자를 위한 교육 진행"
      ]
    },
    {
      title: "백엔드 시스템",
      description: "Express.js와 Node.js 기반의 안정적인 서버 구축",
      icon: <FaServer />,
      color: "#764ba2",
      details: [
        "Express.js를 활용한 RESTful API 구현",
        "MongoDB 데이터베이스 스키마 설계",
        "WebSocket을 통한 실시간 통신"
      ]
    },
    {
      title: "웹 크롤링 시스템",
      description: "crawl.js를 활용한 연극 정보 자동 수집 시스템",
      icon: <FaSpider />,
      color: "#f093fb",
      details: [
        "웹페이지에서 연극 정보 자동 크롤링",
        "실시간 공연 일정 및 정보 업데이트",
        "데이터 정제 및 MongoDB 저장"
      ]
    },
    {
      title: "AI 음성 파이프라인",
      description: "STT→번역→TTS를 연결한 실시간 언어 변환 시스템",
      icon: <FaMicrophone />,
      color: "#4facfe",
      details: [
        "Speech-to-Text (STT) 연동",
        "다국어 번역 API 통합",
        "Text-to-Speech (TTS) 구현"
      ]
    },
    {
      title: "프론트엔드 개발",
      description: "React.js로 현장용 사용자 친화적 인터페이스 제작",
      icon: <FaLightbulb />,
      color: "#667eea",
      details: [
        "React.js 기반 사용자 페이지",
        "현장 환경에 최적화된 UI/UX",
        "팀원 프론트엔드 교육 및 멘토링"
      ]
    }
  ];

  const screenshots = [
    {
      src: "/images/relocal1.jpg",
      alt: "혜화 소극장 외국인 관객",
      title: "외국인 관객 유입"
    },
    {
      src: "/images/relocal2.jpg",
      alt: "웹 크롤링 시스템",
      title: "연극 정보 크롤링"
    },
    {
      src: "/images/relocal3.jpg",
      alt: "STT-TTS 파이프라인",
      title: "AI 음성 파이프라인"
    }
  ];

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.backButton}>
            <Link to="/" className={styles.backLink}>
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className={styles.projectHeader}>
            <div className={styles.projectCategory}>{projectInfo.category}</div>
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
                <strong>Re-local</strong>은 혜화 소극장의 외국인 관객 유입을 돕는 혁신적인 언어 장벽 해소 플랫폼입니다.
                문화 예술 공연에 대한 접근성을 높이고, 언어의 차이로 인한 소통의 한계를 극복하기 위해 개발되었습니다.
                Express.js와 Node.js 기반의 서버와 STT→번역→TTS 파이프라인을 구축하여, 
                실시간으로 외국어를 한국어로 변환하고 한국어를 외국어로 변환하는 서비스를 제공합니다.
                또한 <strong>crawl.js</strong>를 활용하여 웹페이지에서 연극 정보를 자동으로 크롤링하고 
                MongoDB에 저장하는 시스템까지 구현했습니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>팀장 역할</strong>: 프로젝트 전체를 주도하고 팀원들의 성장을 지원하며, 
                  프로젝트의 방향성과 일정을 관리했습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>백엔드 개발</strong>: Express.js와 Node.js를 활용한 RESTful API 구현, 
                  MongoDB 스키마 설계, STT→번역→TTS 파이프라인 구현, WebSocket을 통한 실시간 통신 시스템을 담당했습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>웹 크롤링 시스템</strong>: crawl.js를 활용하여 웹페이지에서 연극 정보를 자동으로 크롤링하고, 
                  데이터를 정제하여 MongoDB에 저장하는 시스템을 구현했습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>프론트엔드 개발</strong>: React.js로 현장용 사용자 페이지를 제작하고, 
                  프론트엔드가 처음인 팀원을 위한 교육과 멘토링을 진행했습니다.
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
                  <div className={styles.featureDetails}>
                    {feature.details.map((detail, detailIndex) => (
                      <span key={detailIndex} className={styles.featureDetail}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UI Screenshots & Technical Details */}
          <div className={styles.bottomSection}>
            <div className={styles.screenshotsSection}>
              <h2 className={styles.sectionTitle}>Project Screenshots</h2>
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
                    <h3 className={styles.screenshotTitle}>{screenshot.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.technicalSection}>
              <h2 className={styles.sectionTitle}>Technical Details</h2>
              <div className={styles.technicalDetails}>
                <div className={styles.technicalCategory}>
                  <h3>🎭 문화 예술 접근성</h3>
                  <p>혜화 소극장의 외국인 관객을 위한 언어 장벽 해소 플랫폼</p>
                  <div className={styles.technicalStats}>
                    <span>대상: 외국인 관객</span>
                    <span>장소: 혜화 소극장</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>🕷️ 웹 크롤링 시스템</h3>
                  <p>crawl.js를 활용한 연극 정보 자동 수집 및 MongoDB 저장</p>
                  <div className={styles.technicalStats}>
                    <span>자동 정보 수집</span>
                    <span>실시간 데이터 업데이트</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>🔊 AI 음성 파이프라인</h3>
                  <p>STT→번역→TTS를 연결한 실시간 언어 변환 시스템</p>
                  <div className={styles.technicalStats}>
                    <span>STT: 음성을 텍스트로 변환</span>
                    <span>TTS: 텍스트를 음성으로 변환</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>👥 팀 리더십 & 교육</h3>
                  <p>프로젝트 주도 및 프론트엔드 초보자 교육 진행</p>
                  <div className={styles.technicalStats}>
                    <span>팀장 역할</span>
                    <span>프론트엔드 교육 및 멘토링</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReLocal;
