import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaSave, FaShare, FaLightbulb, FaChartLine } from "react-icons/fa";
import styles from "./URPDetail.module.css";

const URPDetail = () => {
  const projectInfo = {
    title: "URP 학부연구생 프로젝트",
    subtitle: "PoliTracker 플랫폼 기능 확장 및 비즈니스 모델 개발",
    category: "Research & Development",
    period: "2024",
    tech: ["React.js", "html2canvas", "React Router", "Business Model", "Gamification"],
    role: "학부연구생",
    team: "개인 프로젝트",
    github: "https://github.com/urp-project"
  };

  const features = [
    {
      title: "결과 화면 저장 기능",
      description: "html2canvas를 활용한 안정적인 캡처 및 저장 시스템",
      icon: <FaSave />,
      color: "#667eea",
      details: [
        "html-to-image에서 html2canvas로 전환",
        "모바일 환경 최적화",
        "useCORS 옵션을 통한 외부 리소스 문제 해결"
      ]
    },
    {
      title: "링크 공유 기능",
      description: "URL 기반 테스트 결과 공유 및 상태 복원 시스템",
      icon: <FaShare />,
      color: "#764ba2",
      details: [
        "localStorage에서 URL 쿼리 파라미터 방식으로 전환",
        "React Router searchParams 활용",
        "클립보드 API를 통한 URL 복사 기능"
      ]
    },
    {
      title: "비즈니스 모델 구축",
      description: "WTP 조사 기반 수익화 전략 및 게이미피케이션 설계",
      icon: <FaLightbulb />,
      color: "#f093fb",
      details: [
        "사용자 지불 의사 금액(WTP) 조사",
        "구독 플랜 및 광고 수익 모델",
        "부엉이 키우기 게이미피케이션 요소"
      ]
    }
  ];

  const screenshots = [
    {
      src: "/images/finish.png",
      alt: "결과 화면 캡처 예시 1",
      title: "결과 화면 저장 기능"
    },
    {
      src: "/images/finish1.png",
      alt: "결과 화면 캡처 예시 2",
      title: "링크 공유 기능"
    }
  ];

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.backButton}>
            <Link to="/project" className={styles.backLink}>
              <FaArrowLeft />
              <span>Back to Projects</span>
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
                학부연구생으로 활동하며 <strong>PoliTracker 플랫폼</strong> 기능을 추가하고, 
                비즈니스 모델 개발을 통해 프로젝트 발전에 기여했습니다. 
                사용자 경험 향상을 위한 기능 개발과 지속 가능한 수익화 전략을 동시에 진행했습니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>기능 개발</strong>: 결과 화면 저장 및 링크 공유 기능 구현
                </p>
                <p className={styles.roleDescription}>
                  <strong>비즈니스 모델</strong>: WTP 조사 및 게이미피케이션 요소 설계
                </p>
                <p className={styles.roleDescription}>
                  <strong>사용자 경험</strong>: 모바일 환경 최적화 및 성능 개선
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

          {/* UI Screenshots & Business Model */}
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
                    <h3 className={styles.screenshotTitle}>{screenshot.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.businessSection}>
              <h2 className={styles.sectionTitle}>Business Model</h2>
              <div className={styles.businessDetails}>
                <div className={styles.businessCategory}>
                  <h3>📊 WTP 조사 결과</h3>
                  <p>사용자 지불 의사 금액은 신뢰성과 데이터 정확성에 따라 증가</p>
                  <div className={styles.businessStats}>
                    <span>정치 성향 분석: 67.9% 만족</span>
                    <span>지역 정치인 트래킹: 95.9% 만족</span>
                  </div>
                </div>
                <div className={styles.businessCategory}>
                  <h3>🏗️ 수익화 구조</h3>
                  <p>구독료, 광고 수익, 소액 결제를 통한 수익 다각화</p>
                  <div className={styles.businessStats}>
                    <span>프리미엄 플랜: 월 3,000~5,000원</span>
                    <span>게이미피케이션: 부엉이 키우기 시스템</span>
                  </div>
                </div>
                <div className={styles.businessCategory}>
                  <h3>🎮 게이미피케이션</h3>
                  <p>부엉이 키우기, 미션과 보상을 통해 사용자 몰입도 향상</p>
                  <div className={styles.businessStats}>
                    <span>포인트 시스템: 벌레 획득</span>
                    <span>미션 기반: 기사 읽기, 퀴즈 참여</span>
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

export default URPDetail;