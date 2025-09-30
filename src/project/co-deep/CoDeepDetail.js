import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./CoDeepDetail.module.css";

const CoDeepDetail = () => {
  const projectInfo = {
    title: "Co-Deep Learning Project: PoliTracker",
    subtitle: "정치 트래킹 플랫폼",
    category: "Frontend Development",
    period: "2024",
    award: "최우수상",
    tech: ["React.js", "Next.js", "JavaScript", "CSS", "HTML"],
    role: "Frontend Developer",
    team: "4명 (교수-학생 협동 프로젝트)",
    github: "https://github.com/Co-Deep-Project/Backend.git",
    demo: "/files/report.pdf"
  };

  const features = [
    {
      title: "정치성향테스트",
      description: "질문을 통해 사용자의 정치 성향을 분석하고 맞춤형 정보 제공",
      icon: "🎯"
    },
    {
      title: "지역 정치인 트래킹",
      description: "공약 이행률을 시각화하여 정치인의 활동을 직관적으로 확인",
      icon: "📊"
    },
    {
      title: "정치 용어 및 뉴스",
      description: "최신 정치 정보와 용어 설명을 제공하여 이해도 향상",
      icon: "📰"
    }
  ];

  const challenges = [
    "청년층의 낮은 정치 참여율",
    "체계적인 정치 플랫폼의 부재",
    "정치 정보 접근성 문제"
  ];

  const solutions = [
    "사용자 친화적 UI/UX 디자인",
    "맞춤형 정보 제공 시스템",
    "직관적인 데이터 시각화"
  ];

  const results = [
    { metric: "67.9%", label: "정치 관심도 증가" },
    { metric: "95.9%", label: "직관적 이해도" },
    { metric: "89%", label: "뉴스 유익성 인정" }
  ];

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >

          <div className={styles.projectHeader}>
            <div className={styles.projectCategory}>{projectInfo.category}</div>
            <div className={styles.awardBadge}>🏆 최우수상 수상</div>
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
                  {projectInfo.award && (
                    <p><strong>수상:</strong> 🏆 {projectInfo.award}</p>
                  )}
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
                <motion.a
                  href={projectInfo.demo}
                  download
                  className={styles.githubButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  <span>보고서 다운로드</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Content */}
      <section className={styles.projectContent}>
        <div className={styles.container}>
          {/* Overview */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.sectionDescription}>
              Co-Deep Learning Project는 교수와 학생의 공동 프로젝트를 통해 교수-학생 간 소통의 기회를 확대하고, 
              심도 있는 협동 학습과 자기주도 학습을 지원하는 프로그램입니다. 
              정치성향테스트 부분 스토리 포함하여 전체 제작 + 구청장 조회하기 페이지 전체 제작 + Chatbot 제작 + 전체 CSS 다듬기를 담당했습니다.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Problem & Solution */}
          <div className={styles.problemSolutionSection}>
            <motion.div
              className={styles.problemSection}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Problem Statement</h2>
              <div className={styles.problemList}>
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className={styles.problemItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.problemIcon}>❌</span>
                    <span>{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.solutionSection}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Our Solution</h2>
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
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>User Test Results</h2>
            <div className={styles.resultsGrid}>
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  className={styles.resultCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.resultMetric}>{result.metric}</div>
                  <div className={styles.resultLabel}>{result.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Demo Images */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Project Screenshots</h2>
            <div className={styles.imageGrid}>
              <motion.img
                src="/images/test1.png"
                alt="사용자 테스트 결과 1"
                className={styles.demoImage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
              <motion.img
                src="/images/test2.png"
                alt="사용자 테스트 결과 2"
                className={styles.demoImage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>

          {/* Related Projects */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Learn more about this poject</h2>
            <div className={styles.relatedProjects}>
              <Link to="/platform-detail" className={styles.relatedProject}>
                <FaExternalLinkAlt />
                <span>플랫폼 더 자세히 보러가기</span>
              </Link>
              <Link to="/urp" className={styles.relatedProject}>
                <FaExternalLinkAlt />
                <span>URP 프로젝트 바로가기</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoDeepDetail;
