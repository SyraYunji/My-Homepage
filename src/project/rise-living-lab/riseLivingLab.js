import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe, FaBuilding, FaLightbulb, FaUsers, FaMapMarkerAlt, FaHandshake, FaCode, FaDatabase, FaChartLine } from "react-icons/fa";
import styles from "./riseLivingLab.module.css";

const RiseLivingLab = () => {

  const projectInfo = {
    title: "AI Expansion Living Lab",
    subtitle: "성균관대학교 Rise 사업단 × 한국국토정보공사 × 도요타",
    category: "Research & International Collaboration",
    period: "2024",
    tech: ["Python", "Data Analysis", "AI/ML", "Research", "International Collaboration"],
    role: "Research Developer",
    team: "성균관대학교 Rise 사업단",
    partners: ["한국국토정보공사", "도요타 자동차"],
    location: "일본 도요타 시 (4박 5일 기업 탐방)",
    github: "#",
    demo: "#"
  };

  // 프로젝트 내용
  const projectFeatures = [
    {
      title: "AI 기반 도시 데이터 분석",
      description: "도요타 인사이트 기반 서울시 AI 솔루션 연구",
      icon: <FaCode />,
      color: "#667eea",
      tech: ["Python", "Data Analysis", "AI/ML"],
      details: [
        "도요타 기업 탐방 혁신 사례 분석 및 데이터화",
        "서울시 도시 문제 해결을 위한 AI 솔루션 연구",
        "한국국토정보공사 실무 데이터 활용 및 분석"
      ]
    },
    {
      title: "국제 협업 프로젝트",
      description: "다국적 기관과의 협업 및 프로젝트 관리",
      icon: <FaHandshake />,
      color: "#764ba2",
      tech: ["Project Management", "International Collaboration"],
      details: [
        "한국국토정보공사와의 협업 프로젝트 기획 및 실행",
        "도요타 자동차와의 국제 교류 및 기술 학습",
        "다양한 이해관계자와의 협업 경험"
      ]
    },
    {
      title: "Living Lab 실증 연구",
      description: "실제 도시 환경 데이터 수집 및 분석",
      icon: <FaDatabase />,
      color: "#f093fb",
      tech: ["Data Collection", "Field Research"],
      details: [
        "실제 도시 환경에서의 실증 연구 설계",
        "데이터 수집 파이프라인 구축",
        "실용적인 솔루션 개발 및 검증"
      ]
    }
  ];

  const challenges = [
    "국제 협업 프로젝트의 복잡한 커뮤니케이션",
    "다양한 데이터 소스의 통합 및 분석",
    "실제 도시 환경에서의 실증 연구 설계"
  ];

  const solutions = [
    "체계적인 프로젝트 관리 및 커뮤니케이션 프로세스 구축",
    "데이터 파이프라인 설계 및 통합 분석 시스템 개발",
    "Living Lab 방법론을 활용한 실증 연구 설계"
  ];

  // 일본 탐방 경험 탭 - Toyota Design 영역
  const toyotaObservations = [
    {
      title: "자율주행차 헬스 모니터링",
      description: "아스트라제네카 협업을 통한 이동 중 건강 관리 시스템",
      icon: <FaBuilding />,
      color: "#667eea",
      details: [
        "탑승자의 심박·스트레스 수준 실시간 측정",
        "이상 징후 시 자동 병원 추천 및 경로 변경",
        "이동을 단순 이동이 아닌 헬스케어 경험으로 확장"
      ]
    },
    {
      title: "Dead Time → Value Time 전환",
      description: "버스 이동 중 게임/상호작용 콘텐츠 제공",
      icon: <FaLightbulb />,
      color: "#764ba2",
      details: [
        "이동시간을 Dead Time에서 Value Time으로 전환",
        "이동 공간의 재정의 및 새로운 UX 창출",
        "공간 활용의 혁신적 접근"
      ]
    }
  ];

  // 일본 도시 관찰
  const japanCityObservations = [
    {
      title: "지하철 사선 줄서기",
      description: "공간 효율화를 위한 행동 디자인",
      icon: <FaMapMarkerAlt />,
      color: "#f093fb",
      details: [
        "승하차 효율성 향상",
        "충돌 감소 및 스트레스 감소",
        "공간밀도 관리 방식의 혁신"
      ]
    },
    {
      title: "대기 공간의 재해석",
      description: "버스정류장 및 대기 공간의 휴식/체험 공간화",
      icon: <FaUsers />,
      color: "#4facfe",
      details: [
        "버스정류장 동선 단순화",
        "대기 공간을 휴식/체험 공간으로 재해석",
        "공간 활용의 다층적 접근"
      ]
    }
  ];

  // 서울 적용 아이디어
  const seoulApplications = [
    {
      title: "지하철 플랫폼 사선 대기 시스템",
      description: "일본 사선 줄서기를 한국형으로 리디자인",
      icon: <FaMapMarkerAlt />,
      color: "#667eea"
    },
    {
      title: "혼잡 구간 Micro Activity Zone",
      description: "출퇴근 과정의 낭비되는 대기 공간 활용",
      icon: <FaLightbulb />,
      color: "#764ba2"
    },
    {
      title: "이동 중 맞춤형 정보 제공",
      description: "AI 기반 행동 데이터와 공간 데이터 결합",
      icon: <FaUsers />,
      color: "#f093fb"
    }
  ];

  const insights = [
    {
      category: "도요타의 혁신",
      items: [
        "지속가능한 도시 계획 사례",
        "스마트 시티 기술 적용",
        "기업-도시 협력 모델"
      ]
    },
    {
      category: "서울시 적용 방안",
      items: [
        "AI 기반 도시 관리 시스템",
        "데이터 기반 의사결정 프로세스",
        "시민 참여형 도시 계획"
      ]
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
                <h3>Project Details</h3>
                <div className={styles.projectBadge}>{projectInfo.category}</div>
              </div>
              
              <div className={styles.summaryContent}>
                <div className={styles.summaryText}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Role</span>
                    <span className={styles.infoValue}>{projectInfo.role}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Organization</span>
                    <span className={styles.infoValue}>{projectInfo.team}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Period</span>
                    <span className={styles.infoValue}>{projectInfo.period}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Collaboration</span>
                    <span className={styles.infoValue}>{projectInfo.partners.join(", ")}</span>
                  </div>
                </div>
                
                <div className={styles.summaryTech}>
                  <h4>Tech Stack</h4>
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
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href={projectInfo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe />
                  <span>Demo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Sections Side by Side */}
      <section className={styles.projectContent}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            {/* 프로젝트 내용 섹션 */}
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <FaBuilding className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>프로젝트 내용</h2>
              </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Overview */}
              <div className={styles.section}>
                <p className={styles.sectionDescription}>
                  <strong>AI Expansion Living Lab</strong>은 성균관대학교 Rise 사업단에서 주최한 
                  국제 협업 연구 프로젝트입니다. 한국국토정보공사와의 협업을 통해 실무 데이터를 활용하고, 
                  도요타 자동차 기업 탐방을 통해 얻은 인사이트를 바탕으로 더 나은 서울시를 위한 
                  AI 기반 솔루션을 연구하고 개발하는 프로젝트입니다.
                </p>
              </div>

              {/* Features */}
              <div className={styles.featuresSection}>
                <h3 className={styles.subSectionTitle}>Key Features</h3>
                <div className={styles.featuresGrid}>
                  {projectFeatures.map((feature, index) => (
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
                      <div className={styles.techTags}>
                        {feature.tech.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
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

              {/* Problem & Solution */}
              <div className={styles.problemSolutionSection}>
                <div className={styles.problemSection}>
                  <h3 className={styles.subSectionTitle}>Challenges</h3>
                  <div className={styles.challengeList}>
                    {challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className={styles.challengeItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className={styles.challengeIcon}>⚠️</span>
                        <span>{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={styles.solutionSection}>
                  <h3 className={styles.subSectionTitle}>Solutions</h3>
                  <div className={styles.solutionList}>
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        className={styles.solutionItem}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className={styles.solutionIcon}>✅</span>
                        <span>{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Insights */}
              <div className={styles.insightsSection}>
                <h3 className={styles.subSectionTitle}>Research Insights</h3>
                <div className={styles.insightsGrid}>
                  {insights.map((insight, index) => (
                    <motion.div
                      key={index}
                      className={styles.insightCard}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className={styles.insightCategory}>{insight.category}</h4>
                      <ul className={styles.insightList}>
                        {insight.items.map((item, itemIndex) => (
                          <li key={itemIndex} className={styles.insightItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            </div>

            {/* 일본 탐방 섹션 */}
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <FaGlobe className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>일본 기업 탐방</h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
              {/* Overview - 간결하게 통합 */}
              <div className={styles.section}>
                <div className={styles.overviewBox}>
                  <div className={styles.overviewGrid}>
                    <div className={styles.overviewItem}>
                      <div className={styles.overviewLabel}>기간</div>
                      <div className={styles.overviewValue}>4박 5일</div>
                    </div>
                    <div className={styles.overviewItem}>
                      <div className={styles.overviewLabel}>목적</div>
                      <div className={styles.overviewValue}>공간·교통·모빌리티 인사이트 도출</div>
                    </div>
                    <div className={styles.overviewItem}>
                      <div className={styles.overviewLabel}>접근</div>
                      <div className={styles.overviewValue}>서비스·UX·공간 운영 통합 이해</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Observations - 통합 */}
              <div className={styles.featuresSection}>
                <h3 className={styles.subSectionTitle}>주요 관찰 사항</h3>
                <div className={styles.observationsContainer}>
                  <div className={styles.observationGroup}>
                    <h3 className={styles.groupTitle}>🏢 도요타 Design 영역</h3>
                    <div className={styles.featuresGrid}>
                      {toyotaObservations.map((observation, index) => (
                        <motion.div
                          key={index}
                          className={styles.featureCard}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                        >
                          <div className={styles.featureIcon} style={{ color: observation.color }}>
                            {observation.icon}
                          </div>
                          <h3 className={styles.featureTitle}>{observation.title}</h3>
                          <p className={styles.featureDescription}>{observation.description}</p>
                          <div className={styles.featureDetails}>
                            {observation.details.map((detail, detailIndex) => (
                              <span key={detailIndex} className={styles.featureDetail}>
                                {detail}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.observationGroup}>
                    <h3 className={styles.groupTitle}>🏙️ 일본 도시 관찰</h3>
                    <div className={styles.featuresGrid}>
                      {japanCityObservations.map((observation, index) => (
                        <motion.div
                          key={index}
                          className={styles.featureCard}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                        >
                          <div className={styles.featureIcon} style={{ color: observation.color }}>
                            {observation.icon}
                          </div>
                          <h3 className={styles.featureTitle}>{observation.title}</h3>
                          <p className={styles.featureDescription}>{observation.description}</p>
                          <div className={styles.featureDetails}>
                            {observation.details.map((detail, detailIndex) => (
                              <span key={detailIndex} className={styles.featureDetail}>
                                {detail}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Insight - 더 눈에 띄게 */}
              <div className={styles.section}>
                <div className={styles.insightHighlight}>
                  <div className={styles.insightBadge}>핵심 인사이트</div>
                  <h4 className={styles.insightTitle}>
                    "AI 시대의 도시 공간은<br />문제 해결이 아니라 재해석이 핵심"
                  </h4>
                  <div className={styles.insightGrid}>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>🔄</div>
                      <strong>잉여 자원의 재가공</strong>
                      <p>AI 자동화로 생기는 불필요한 공간/시간을 새로운 UX, 안전, 헬스케어, 엔터테인먼트로 전환</p>
                    </div>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>✨</div>
                      <strong>Living Enhanced</strong>
                      <p>도시 문제 해결보다 삶의 질을 높이는 공간/서비스 디자인이 더 중요</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insights to Apply to Seoul */}
              <div className={styles.featuresSection}>
                <h3 className={styles.subSectionTitle}>서울 적용 아이디어</h3>
                <p className={styles.sectionSubtitle}>
                  Dead Time → Value Time 전환 | AI 기반 행동·공간 데이터 결합
                </p>
                <div className={styles.featuresGrid}>
                  {seoulApplications.map((application, index) => (
                    <motion.div
                      key={index}
                      className={styles.featureCard}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={styles.featureIcon} style={{ color: application.color }}>
                        {application.icon}
                      </div>
                      <h3 className={styles.featureTitle}>{application.title}</h3>
                      <p className={styles.featureDescription}>{application.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Final Reflection - 간결하게 */}
              <div className={styles.section}>
                <div className={styles.reflectionBox}>
                  <h3 className={styles.subSectionTitle}>Final Reflection</h3>
                  <div className={styles.reflectionQuote}>
                    "문제 → 해결"이 아니라<br />
                    <strong>"관찰 → 재해석 → 새로운 가치"</strong>
                  </div>
                  <p className={styles.reflectionText}>
                    AI + 공간 + UX의 재조합을 통해 도시의 새로운 경험을 설계할 수 있다는 것을 배웠습니다. 
                    잉여 자원을 재해석하여 새로운 사용자 경험을 만드는 것이 더 중요합니다.
                  </p>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiseLivingLab;

