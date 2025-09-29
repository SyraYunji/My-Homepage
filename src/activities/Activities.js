import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Activities.module.css";

const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      category: "AIESEC",
      title: "국외교류부서장",
      period: "2023",
      description: "0명의 부서에서 시작해 17명의 참여자를 모집하고 성공적인 프로그램을 운영했습니다.",
      skills: ["리더십", "프로젝트 관리", "국제교류", "커뮤니케이션"],
      icon: "🌍",
      link: "/activities/aiesec",
      color: "#667eea"
    },
    {
      id: 2,
      category: "AIESEC",
      title: "컨퍼런스 전체 회장",
      period: "2023",
      description: "129명 규모의 컨퍼런스를 성공적으로 기획 및 운영했습니다.",
      skills: ["이벤트 기획", "팀 관리", "예산 관리", "협업"],
      icon: "🎯",
      link: "/activities/aiesec2",
      color: "#764ba2"
    },
    {
      id: 3,
      category: "멋쟁이 사자처럼",
      title: "학회원",
      period: "2024",
      description: "React와 Next.js를 학습하며 다양한 팀 프로젝트를 진행했습니다.",
      skills: ["React.js", "Next.js", "JavaScript", "팀 프로젝트"],
      icon: "🦁",
      link: "/project/timi",
      color: "#f39c12"
    },
    {
      id: 4,
      category: "멋쟁이 사자처럼",
      title: "운영진",
      period: "2025",
      description: "교육운영부 임원으로 활동하며 스터디와 세션자료를 제작하고 총무 역할을 수행했습니다.",
      skills: ["교육 운영", "자료 제작", "행정 관리", "멘토링"],
      icon: "👨‍💼",
      link: "/coming-soon",
      color: "#e74c3c"
    }
  ];

  const categories = [...new Set(activities.map(activity => activity.category))];

  return (
    <div className={styles.activitiesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            My <span className={styles.highlight}>Activities</span>
          </h1>
          <p className={styles.heroSubtitle}>
            다양한 조직과 활동을 통해 얻은 경험과 성장 과정을 소개합니다.
            <br />
            각 활동을 클릭하면 자세한 내용을 확인할 수 있습니다.
          </p>
      
        </motion.div>
      </section>

      {/* Activities Section */}
      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className={styles.categorySection}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{category}</h2>
                <p className={styles.categoryDescription}>
                  {category === "AIESEC" 
                    ? "UN 경제사회이사회(ECOSOC)와 협의하는 비정부 기구이며, UN DPI 및 UN 사무총장 청소년 특사실의 독립 기관이자 ICMYO 회원이며 유네스코의 인정을 받은 단체"
                    : "대학생 프로그래밍 동아리로, 웹 개발과 프로그래밍을 학습하며 프로젝트를 진행하는 조직"
                  }
                </p>
              </div>
              
              <div className={styles.activitiesGrid}>
                {activities
                  .filter(activity => activity.category === category)
                  .map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      className={styles.activityCard}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      onClick={() => navigate(activity.link)}
                    >
                      <div className={styles.activityHeader}>
                        <div className={styles.activityIcon} style={{ backgroundColor: activity.color }}>
                          {activity.icon}
                        </div>
                        <div className={styles.activityInfo}>
                          <h3 className={styles.activityTitle}>{activity.title}</h3>
                          <span className={styles.activityPeriod}>{activity.period}</span>
                        </div>
                      </div>
                      
                      <p className={styles.activityDescription}>{activity.description}</p>
                      
                      <div className={styles.skillsList}>
                        {activity.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className={styles.activityLink}>
                        자세히 보기
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>함께 성장할 기회를 찾고 계신가요?</h2>
          <p>새로운 활동이나 협업 기회가 있다면 언제든 연락해주세요.</p>
          <button 
            className={styles.ctaButton}
            onClick={() => navigate("/contact")}
          >
            연락하기
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Activities;
