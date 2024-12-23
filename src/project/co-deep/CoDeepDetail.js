import React from "react";
import { motion } from "framer-motion"; // 애니메이션 라이브러리
import styles from "./CoDeepDetail.module.css";

const CoDeepDetail = () => {
  return (
    
    <motion.div 
      className={styles.projectDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.title}>Co-Deep Learning Project: PoliTracker</h1>
      <h2 clasName = {styles.title}>Co-Deep Learning Project는 교수와 학생의 공동 프로젝트를 통해 교수-학생 간 소통의 기회를 확대하고, 심도 있는 협동 학습과 자기주도 학습을 지원하는 프로그램</h2>
      <div className={styles.sections}>
        {/* About our Project 섹션 */}
        <motion.div 
          className={styles.section}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>📂 About our Project</h2>
          <p className={styles.description}>
            이 프로젝트는 청년층의 정치 참여를 높이기 위한 트래킹 플랫폼입니다. 사용자가 쉽게
            정치 데이터를 확인하고, 정책 성과를 분석할 수 있는 기능을 제공합니다.
          </p>
          <ul className={styles.list}>
            <li>🔥 프로젝트 설명</li>
            <li>⏳ 구현된 기능</li>
            <li>✅ 프로젝트 결과</li>
          </ul>
        </motion.div>

        {/* Process(My Role) 섹션 */}
        <motion.div 
          className={styles.section}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>🔍 Process (My Role)</h2>
          <ul className={styles.list}>
            <li>💡 아이디어 구체화</li>
            <li>📊 데이터 분석</li>
            <li>🎨 디자인 (Figma 활용)</li>
            <li>🚀 구현 및 문제 해결</li>
          </ul>
          <p className={styles.note}>
            저는 프론트엔드 개발자로 참여했으며, React와 TailwindCSS를 사용하여 직관적인 UI를 설계했습니다.
          </p>
        </motion.div>
      </div>
      </motion.div>
  );
};

export default CoDeepDetail;
