import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaMicrochip, FaWifi, FaLightbulb, FaCog } from "react-icons/fa";
import styles from "./kurtaincall.module.css";

const KurtainCall = () => {
  const projectInfo = {
    title: "KurtainCall",
    subtitle: "스마트 커튼 제어 시스템",
    category: "Hardware Development",
    period: "2024",
    tech: ["Arduino", "ESP32", "IoT", "Bluetooth", "Servo Motor", "C++"],
    role: "Hardware Developer",
    team: "개인 프로젝트",
    github: "https://github.com/kurtaincall-project"
  };

  const features = [
    {
      title: "IoT 연결",
      description: "ESP32를 활용한 WiFi 및 Bluetooth 연결",
      icon: <FaWifi />,
      color: "#667eea",
      details: [
        "WiFi 연결을 통한 원격 제어",
        "Bluetooth를 통한 근거리 제어",
        "모바일 앱과의 연동"
      ]
    },
    {
      title: "서보 모터 제어",
      description: "정밀한 커튼 개폐 제어 시스템",
      icon: <FaCog />,
      color: "#764ba2",
      details: [
        "180도 서보 모터 제어",
        "부드러운 커튼 움직임",
        "위치 기억 기능"
      ]
    },
    {
      title: "센서 시스템",
      description: "환경 감지 및 자동 제어",
      icon: <FaLightbulb />,
      color: "#f093fb",
      details: [
        "조도 센서를 통한 자동 제어",
        "온도 센서 연동",
        "모션 감지 센서"
      ]
    },
    {
      title: "임베디드 시스템",
      description: "Arduino 기반 마이크로컨트롤러",
      icon: <FaMicrochip />,
      color: "#4facfe",
      details: [
        "Arduino Uno/ESP32 활용",
        "C++ 프로그래밍",
        "실시간 제어 시스템"
      ]
    }
  ];

  const screenshots = [
    {
      src: "/images/hardware1.jpg",
      alt: "하드웨어 구성도",
      title: "하드웨어 구성도"
    },
    {
      src: "/images/hardware2.jpg",
      alt: "회로도",
      title: "회로도"
    },
    {
      src: "/images/hardware3.jpg",
      alt: "제어 시스템",
      title: "제어 시스템"
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
                KurtainCall은 IoT 기술을 활용한 스마트 커튼 제어 시스템입니다. 
                ESP32와 Arduino를 기반으로 WiFi 및 Bluetooth 연결을 통해 원격으로 커튼을 제어할 수 있으며, 
                다양한 센서를 통해 환경에 따른 자동 제어가 가능합니다.
              </p>
            </div>

            <div className={styles.roleSection}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <div className={styles.roleContent}>
                <p className={styles.roleDescription}>
                  <strong>하드웨어 설계</strong>: Arduino와 ESP32를 활용한 회로 설계 및 구성
                </p>
                <p className={styles.roleDescription}>
                  <strong>임베디드 프로그래밍</strong>: C++를 사용한 마이크로컨트롤러 프로그래밍
                </p>
                <p className={styles.roleDescription}>
                  <strong>IoT 시스템</strong>: WiFi 및 Bluetooth 연결을 통한 원격 제어 시스템 구현
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
              <h2 className={styles.sectionTitle}>Hardware Screenshots</h2>
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
                  <h3>🔌 하드웨어 구성</h3>
                  <p>Arduino Uno와 ESP32를 활용한 듀얼 마이크로컨트롤러 시스템</p>
                  <div className={styles.technicalStats}>
                    <span>메인 컨트롤러: Arduino Uno</span>
                    <span>통신 모듈: ESP32</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>⚙️ 제어 시스템</h3>
                  <p>서보 모터와 센서를 활용한 정밀한 커튼 제어</p>
                  <div className={styles.technicalStats}>
                    <span>서보 모터: SG90 (180도)</span>
                    <span>제어 정밀도: 1도 단위</span>
                  </div>
                </div>
                <div className={styles.technicalCategory}>
                  <h3>📡 통신 프로토콜</h3>
                  <p>WiFi와 Bluetooth를 통한 다양한 연결 방식</p>
                  <div className={styles.technicalStats}>
                    <span>WiFi: 802.11 b/g/n</span>
                    <span>Bluetooth: 4.2 BLE</span>
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

export default KurtainCall;
