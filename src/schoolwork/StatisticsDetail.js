import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChalkboardTeacher, FaUsers, FaLightbulb, FaChartLine, FaBookOpen, FaRocket, FaCheckCircle } from "react-icons/fa";
import styles from "./StatisticsDetail.module.css";

const StatisticsDetail = () => {
  const activityData = {
    title: "경영통계 튜터링",
    subtitle: "이해한 내용을 설명해야 진짜 아는 것",
    category: "멘토링 & 교육",
    period: "2024 2학기(9월 ~ 12월)",
    background: "통계학에 대한 흥미를 계기로 교내 하계 특강을 수강",
    motivation: "기초 통계 개념을 더 깊이 익히고 싶었고, 이를 남에게 설명하며 복습하고자 멘토링 진행"
  };

  const sections = [
    {
      title: "활동 배경",
      icon: <FaBookOpen />,
      color: "#667eea",
      content: [
        "통계학에 대한 흥미를 계기로 교내 하계 특강을 수강",
        "기초 통계 개념을 더 깊이 익히고 싶었고, 이를 남에게 설명하며 복습하고자 멘토링 진행",
        "📌 \"이해한 내용을 설명해야 진짜 아는 것\"이라는 신념으로, 직접 가르치는 방식으로 학습을 심화하고자 함"
      ]
    },
    {
      title: "역할과 기여",
      icon: <FaChalkboardTeacher />,
      color: "#764ba2",
      content: [
        "멘토 역할 수행: 기초 통계 이론(평균, 분산, 확률분포 등)을 중심으로 멘토링 진행",
        "커리큘럼 구성: 수강한 하계 특강 내용을 바탕으로 수업안 설계 및 자료 제작",
        "소통 중심 수업: 단순 설명이 아닌, 예시와 실습을 통해 참여자와 함께 학습"
      ]
    },
    {
      title: "성과 및 배움",
      icon: <FaChartLine />,
      color: "#f093fb",
      content: [
        "설명 과정에서 본인도 기초 개념을 체계적으로 정리",
        "향후 수강한 전공 과목 「통계학원론」과 BDA 학회 활동 시 기초 체력이 되어 큰 도움",
        "참여자들의 피드백: \"이해가 쉬웠다\", \"전공 수업 전에 자신감이 생겼다\""
      ]
    },
    {
      title: "활동의 연계성",
      icon: <FaRocket />,
      color: "#4facfe",
      content: [
        "BDA 학회 활동: 수요 예측, 회귀분석 프로젝트 수행 시 이 멘토링 기반의 개념들이 실제로 적용됨",
        "포트폴리오 가치: 단순 수강/수용을 넘어, 자발적 복습→지식 전달→응용까지 연결된 경험"
      ]
    }
  ];

  const highlights = [
    {
      title: "능동적 학습자",
      description: "이론을 외우는 학습이 아닌 체화한 지식 기반의 응용 능력",
      icon: "🎯"
    },
    {
      title: "교육자",
      description: "직접 가르치는 방식으로 학습을 심화",
      icon: "👨‍🏫"
    },
    {
      title: "실전 활용자",
      description: "BDA 학회 활동에서 실제 프로젝트에 적용",
      icon: "🚀"
    }
  ];

  return (
    <div className={styles.statisticsDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
     

          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              <span className={styles.highlight}>경영통계</span> 튜터링
            </h1>
            <p className={styles.heroSubtitle}>
              이해한 내용을 설명해야 진짜 아는 것
            </p>
          </div>

          <div className={styles.projectSummary}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryHeader}>
                <h3>About this Activity</h3>
                <div className={styles.projectBadge}>{activityData.category}</div>
              </div>
              
              <div className={styles.summaryContent}>
                <div className={styles.summaryText}>
                  <p><strong>기간:</strong> {activityData.period}</p>
                  <p><strong>배경:</strong> {activityData.background}</p>
                  <p><strong>동기:</strong> {activityData.motivation}</p>
                </div>
                
           
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionsGrid}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={styles.sectionCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.sectionHeader}>
                  <div 
                    className={styles.sectionIcon}
                    style={{ background: section.color }}
                  >
                    {section.icon}
                  </div>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                </div>
                
                <div className={styles.sectionContent}>
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.contentItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlight Section */}
          <div className={styles.highlightSection}>
            <h2 className={styles.highlightTitle}>💡 강조 포인트</h2>
            <div className={styles.highlightCards}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={styles.highlightCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <h4 className={styles.highlightCardTitle}>{highlight.title}</h4>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticsDetail;
