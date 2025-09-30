import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaMobile, FaClock, FaUsers, FaComment, FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";
import styles from "./timi.module.css";

const Timi = () => {
  const projectInfo = {
    title: "Timi",
    subtitle: "가장 간편한 그룹 시간 조율 서비스",
    category: "Frontend Development",
    period: "2024",
    tech: ["React.js", "JavaScript", "Axios", "Query Parameters", "Mobile-First"],
    role: "Frontend Developer",
    team: "4LineThon 팀",
    github: "https://github.com/4LineThon/Frontend.git"
  };

  const features = [
    {
      title: "시간 입력 화면",
      description: "Number 입력 화면과 드래그 방식으로 간편한 시간 선택",
      icon: <FaClock />,
      color: "#667eea",
      details: ["Number 입력 화면 구현", "드래그 방식 시간 선택", "모바일 최적화"]
    },
    {
      title: "로그인 시스템",
      description: "간단한 일회성 로그인으로 빠른 일정 생성 및 관리",
      icon: <FaUsers />,
      color: "#764ba2",
      details: ["로그인 화면 설계", "일회성 로그인", "사용자 인증"]
    },
    {
      title: "시간별 코멘트",
      description: "그룹 구성원 간의 효과적인 소통을 위한 코멘트 시스템",
      icon: <FaComment />,
      color: "#f093fb",
      details: ["시간별 코멘트 기능", "팀원 간 소통", "시각적 표시"]
    },
    {
      title: "일정 확정 및 공유",
      description: "최종 확정 시간과 미팅 장소를 공유하는 기능",
      icon: <FaCalendarCheck />,
      color: "#4facfe",
      details: ["일정 확정", "장소 공유", "팀원 알림"]
    }
  ];

  const screenshots = [
    {
      src: "/images/main.jpg",
      alt: "Timi 메인 화면",
      title: "메인 화면"
    },
    {
      src: "/images/research1.jpg",
      alt: "User Research 주요 요구",
      title: "사용자 요구사항"
    },
    {
      src: "/images/service1.jpg",
      alt: "모바일 환경 최적화",
      title: "모바일 최적화"
    },
    {
      src: "/images/service2.jpg",
      alt: "간편한 일정 생성",
      title: "일정 생성"
    }
  ];

  const services = [
    {
      title: "모바일 최적화",
      description: "모바일에 최적화된 환경으로 2가지 방법(드래그, 시간 선택)으로 간편하게 그룹 시간 관리",
      image: "/images/service1.jpg"
    },
    {
      title: "간편한 일정 생성",
      description: "회원가입이 아닌, 간단한 일회성 로그인으로 일정 생성 및 관리 가능",
      image: "/images/service2.jpg"
    },
    {
      title: "시각적 시간 표시",
      description: "기존 존재하는 플랫폼의 한계를 보완하여 눈에 띄는 색으로 모든 팀원이 가능한 시간을 표시",
      image: "/images/service5.jpg"
    },
    {
      title: "시간별 코멘트",
      description: "시간별 코멘트를 통해 그룹 구성원 간의 효과적인 소통",
      image: "/images/service3.jpg"
    },
    {
      title: "일정 확정 및 공유",
      description: "최종 확정 시간과 미팅 장소를 적어서 공유할 수 있도록 구현",
      image: "/images/service4.jpg"
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
                Timi는 그룹 시간 조율에 어려움을 겪는 사용자들의 니즈를 반영하여 개발된 서비스입니다. 
                기존의 불편한 시간 조율 과정을 혁신적으로 개선하여 팀의 효율성을 극대화합니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>시간 입력 화면</strong>: Number 입력 화면과 드래그 방식으로 간편한 시간 선택 구현
                </p>
                <p className={styles.roleDescription}>
                  <strong>로그인 시스템</strong>: 로그인 화면 설계 및 구현, 일회성 로그인 시스템
                </p>
                <p className={styles.roleDescription}>
                  <strong>기술적 경험</strong>: query parameter로 값을 전달하고, axios를 사용한 프론트엔드-백엔드 연결
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

          {/* Services */}
          <div className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>Services</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UI Screenshots & User Research */}
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

            <div className={styles.researchSection}>
              <h2 className={styles.sectionTitle}>User Research</h2>
              <div className={styles.researchContent}>
                <p className={styles.researchDescription}>
                  Timi는 그룹 시간 조율에 어려움을 겪는 사용자들의 니즈를 반영하여 개발되었습니다.
                </p>
                <div className={styles.researchImages}>
                  <img
                    src="/images/research2.jpg"
                    alt="When2meet 기능 설명"
                    className={styles.researchImage}
                  />
                  <img
                    src="/images/research3.jpg"
                    alt="When2meet 한계점"
                    className={styles.researchImage}
                  />
                </div>
                <div className={styles.researchInsights}>
                  <h3>주요 인사이트</h3>
                  <ul>
                    <li>기존 플랫폼의 복잡한 인터페이스</li>
                    <li>모바일 환경에서의 사용성 부족</li>
                    <li>팀원 간 소통의 어려움</li>
                    <li>일정 확정 과정의 비효율성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timi;
