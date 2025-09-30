import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaUsers, FaServer, FaDatabase, FaShieldAlt, FaLightbulb, FaRocket, FaUtensils, FaBook } from "react-icons/fa";
import styles from "./lachu.module.css";

const Lachu = () => {
  const projectInfo = {
    title: "성슐랭",
    subtitle: "대학생 맛집 추천 웹서비스 & 동아리 창업 프로젝트",
    category: "Startup & Full-Stack Development",
    period: "2024.08 ~ 현재",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "WebSocket", "UI/UX Design", "Architecture Design"],
    role: "CTO & Full-Stack Developer",
    team: "성균관대 창업팀 라추",
    github: "https://github.com/sungsullang-project"
  };

  const features = [
    {
      title: "CTO 리더십",
      description: "창업팀의 기술 방향성 설정 및 팀 리딩",
      icon: <FaRocket />,
      color: "#667eea",
      details: [
        "서비스 아키텍처 설계 및 기술 스택 결정",
        "개발 일정 및 우선순위 관리",
        "팀원 기술 교육 및 멘토링"
      ]
    },
    {
      title: "풀스택 개발",
      description: "프론트엔드와 백엔드 전 과정을 담당하는 1인 개발자",
      icon: <FaUsers />,
      color: "#764ba2",
      details: [
        "React.js 기반 프론트엔드 개발",
        "Node.js + Express.js 백엔드 API 구현",
        "MongoDB 데이터베이스 설계 및 구축"
      ]
    },
    {
      title: "🍽️ 맛집 탐방",
      description: "대학생을 위한 맛집 추천 및 탐방 플랫폼",
      icon: <FaUtensils />,
      color: "#f093fb",
      details: [
        "맛집 정보 및 후기 시스템",
        "맛집 탐방팀 매칭 및 일정 관리",
        "탐방 기록 및 포트폴리오 관리"
      ]
    },
    {
      title: "👥 멘토/선배 찾기",
      description: "진로 준비생과 선배를 연결하는 멘토링 시스템",
      icon: <FaLightbulb />,
      color: "#4facfe",
      details: [
        "로스쿨, 대기업, 공기업 준비생 매칭",
        "현직 선배와의 네트워킹",
        "진로 상담 및 조언 시스템"
      ]
    },
    {
      title: "💕 미팅/소개팅",
      description: "대학생들의 새로운 만남을 위한 소개팅 플랫폼",
      icon: <FaBook />,
      color: "#667eea",
      details: [
        "관심사 기반 매칭 시스템",
        "안전한 미팅 환경 제공",
        "대학생 전용 소개팅 서비스"
      ]
    }
  ];

  const screenshots = [
    {
      src: "/lachu1.png",
      alt: "성슐랭 메인 화면",
      title: "메인 화면"
    },
    {
      src: "/lachu2.png",
      alt: "맛집 탐방 기능",
      title: "맛집 탐방"
    },
    {
      src: "/lachu3.png",
      alt: "멘토/선배 찾기 기능",
      title: "멘토/선배 찾기"
    },
    {
      src: "/lachu4.png",
      alt: "미팅/소개팅 기능",
      title: "미팅/소개팅"
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
                      <span key={index} className={styles.techItem}>
                        {tech}
                      </span>
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
                <strong>성슐랭(SungSulLang)</strong>은 성균관대학교 창업팀 라추에서 운영하는 
                혁신적인 대학생 맛집 추천 웹서비스이자 동아리 창업 프로젝트입니다.
                <strong>맛집 탐방</strong>, <strong>멘토/선배 찾기</strong>, <strong>미팅/소개팅</strong>의 
                세 가지 핵심 기능을 통해 대학생들의 일상과 진로 준비를 모두 지원합니다.
                단순한 맛집 추천 서비스를 넘어서, 맛집 탐방팀과 프로젝트팀을 운영하며
                친목과 스펙을 동시에 쌓을 수 있는 플랫폼을 제공합니다.
                장기적으로는 이 서비스를 대학생 커뮤니티 플랫폼으로 확장하여
                더욱 다양한 대학생 활동을 지원할 계획입니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>CTO 역할</strong>: 창업팀의 기술 방향성을 설정하고, 서비스 아키텍처 설계부터 
                  개발 일정 관리까지 전 과정을 주도적으로 이끌고 있습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>풀스택 개발</strong>: 팀의 1인 개발자로서 프론트엔드와 백엔드 전반을 모두 담당하며, 
                  React.js, Node.js, MongoDB 등을 활용한 전면적인 시스템 개발을 진행하고 있습니다.
                </p>
                <p className={styles.roleDescription}>
                  <strong>동아리 운영 시스템</strong>: 맛집 탐방팀과 프로젝트팀을 위한 통합 플랫폼을 구축하여
                  팀 매칭, 일정 관리, 활동 기록 등을 체계적으로 관리할 수 있도록 했습니다.
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
                  <h3>🍽️ 맛집 탐방</h3>
                  <p>대학생을 위한 맛집 정보 및 탐방 플랫폼</p>
                  <div className={styles.technicalStats}>
                    <span>맛집 정보 데이터베이스</span>
                    <span>탐방팀 매칭 시스템</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>👥 멘토/선배 찾기</h3>
                  <p>진로 준비생과 선배를 연결하는 멘토링 시스템</p>
                  <div className={styles.technicalStats}>
                    <span>관심사 기반 매칭</span>
                    <span>멘토링 관리 시스템</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>💕 미팅/소개팅</h3>
                  <p>대학생들의 새로운 만남을 위한 소개팅 플랫폼</p>
                  <div className={styles.technicalStats}>
                    <span>프로필 매칭 알고리즘</span>
                    <span>안전한 미팅 환경</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>🚀 창업팀 CTO 경험</h3>
                  <p>기술 방향성 설정 및 팀 리딩을 통한 리더십 역량 개발</p>
                  <div className={styles.technicalStats}>
                    <span>아키텍처 설계</span>
                    <span>개발 일정 관리</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>💻 풀스택 개발 역량</h3>
                  <p>프론트엔드부터 백엔드까지 전 과정을 담당하는 1인 개발자</p>
                  <div className={styles.technicalStats}>
                    <span>React.js + Node.js</span>
                    <span>MongoDB + AWS</span>
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

export default Lachu;
