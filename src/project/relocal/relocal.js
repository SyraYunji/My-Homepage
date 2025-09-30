import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaServer, FaDatabase, FaMicrophone, FaSpider, FaUsers, FaLightbulb } from "react-icons/fa";
import styles from "./relocal.module.css";

const ReLocal = () => {
  const projectInfo = {
    title: "Re-local",
    subtitle: "혜화 소극장 외국인 관객을 위한 언어 장벽 해소 플랫폼",
    category: "Full-Stack Development",
    period: "2024",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "STT", "Translation API", "TTS", "WebSocket", "Web Crawling"],
    role: "팀장 & Full-Stack Developer",
    team: "3명",
    github: "https://github.com/Re-Local"
  };

  const features = [
    {
      title: "팀 리더십",
      description: "프로젝트 기획 및 팀원 교육",
      icon: <FaUsers />,
      color: "#667eea",
      details: [
        "프로젝트 기획 및 방향성 설정",
        "팀원 역할 분담 및 일정 관리",
        "프론트엔드 초보자 교육"
      ]
    },
    {
      title: "백엔드 개발",
      description: "Express.js + MongoDB 서버 구축",
      icon: <FaServer />,
      color: "#764ba2",
      details: [
        "RESTful API 구현",
        "MongoDB 스키마 설계",
        "WebSocket 실시간 통신"
      ]
    },
    {
      title: "웹 크롤링",
      description: "연극 정보 자동 수집 시스템",
      icon: <FaSpider />,
      color: "#f093fb",
      details: [
        "crawl.js 활용한 자동 크롤링",
        "실시간 공연 정보 업데이트",
        "데이터 정제 및 저장"
      ]
    },
    {
      title: "AI 음성 파이프라인",
      description: "STT→번역→TTS 실시간 변환",
      icon: <FaMicrophone />,
      color: "#4facfe",
      details: [
        "Speech-to-Text 연동",
        "다국어 번역 API 통합",
        "Text-to-Speech 구현"
      ]
    },
    {
      title: "프론트엔드 개발",
      description: "React.js 사용자 인터페이스",
      icon: <FaLightbulb />,
      color: "#667eea",
      details: [
        "React.js 기반 페이지",
        "현장 최적화 UI/UX",
        "팀원 프론트엔드 멘토링"
      ]
    }
  ];

  const screenshots = [
    {
      src: "/relocal1.png",
      alt: "혜화 소극장 외국인 관객",
      title: "외국인 관객 유입"
    },
    {
      src: "/relocal2.png",
      alt: "웹 크롤링 시스템",
      title: "연극 정보 크롤링"
    },
    {
      src: "/relocal3.png",
      alt: "STT-TTS 파이프라인",
      title: "AI 음성 파이프라인"
    },
    {
      src: "/relocal4.png",
      alt: "STT-TTS 파이프라인",
      title: "AI 음성 파이프라인"
    }
  ];

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.projectHeader}>
            <div className={styles.projectCategory}>{projectInfo.category}</div>
            <h1 className={styles.projectTitle}>{projectInfo.title}</h1>
            <p className={styles.projectSubtitle}>{projectInfo.subtitle}</p>
          </div>

          <div className={styles.projectSummary}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryHeader}>
                <h3>About my Project</h3>
                <div className={styles.projectBadge}>{projectInfo.category}</div>
              </div>
              
              <div className={styles.summaryContent}>
                <div className={styles.summaryText}>
                  <p><strong>역할:</strong> {projectInfo.role}</p>
                  <p><strong>팀:</strong> {projectInfo.team}</p>
                  <p><strong>기간:</strong> {projectInfo.period}</p>
                </div>
                
                <div className={styles.summaryTech}>
                  <h4>사용 기술</h4>
                  <div className={styles.techList}>
                    {projectInfo.tech.map((tech, index) => (
                      <span key={index} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.summaryActions}>
                <motion.a
                  href={projectInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  <span>GitHub에서 보기</span>
                </motion.a>
              </div>
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
                <strong>Re-local</strong>은 혜화 소극장의 외국인 관객을 위한 언어 장벽 해소 플랫폼입니다.
              </p>
              <div className={styles.highlightBox}>
                <h4>핵심 기능</h4>
                <ul>
                  <li>실시간 음성 번역 (STT → 번역 → TTS)</li>
                  <li>웹 크롤링을 통한 연극 정보 자동 수집</li>
                  <li>Express.js + MongoDB 기반 백엔드 시스템</li>
                </ul>
              </div>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <div className={styles.roleCard}>
                  <h4>팀장 역할</h4>
                  <p>프로젝트 전체 기획 및 팀원 성장 지원</p>
                </div>
                <div className={styles.roleCard}>
                  <h4>백엔드 개발</h4>
                  <p>Express.js API, MongoDB 설계, AI 파이프라인 구현</p>
                </div>
                <div className={styles.roleCard}>
                  <h4>웹 크롤링</h4>
                  <p>crawl.js를 활용한 연극 정보 자동 수집 시스템</p>
                </div>
                <div className={styles.roleCard}>
                  <h4>프론트엔드 교육</h4>
                  <p>React.js 개발 및 팀원 멘토링</p>
                </div>
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
