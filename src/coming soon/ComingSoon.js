import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaClock, FaRocket } from "react-icons/fa";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonPage}>


      {/* Main Content */}
      <main className={styles.mainContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          {/* Icon */}
          <motion.div
            className={styles.iconContainer}
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaTools className={styles.icon} />
          </motion.div>

          {/* Title */}
          <h1 className={styles.title}>
            Coming Soon
            <span className={styles.subtitle}>아직 개발중입니다</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            이 프로젝트는 현재 열심히 개발 중입니다! 🚧
            <br />
            더 나은 서비스를 위해 최선을 다하고 있어요.
          </p>

          {/* Features */}
          <div className={styles.features}>
            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaClock className={styles.featureIcon} />
              <h3>개발 진행률</h3>
              <p>현재 개발 중</p>
            </motion.div>

            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaTools className={styles.featureIcon} />
              <h3>기술 스택</h3>
              <p>Arduino, ESP32, IoT, Bluetooth, C++</p>
            </motion.div>

            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaRocket className={styles.featureIcon} />
              <h3>예상 완성</h3>
              <p>2024년 말 예정</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/" className={styles.primaryButton}>
                홈으로 돌아가기
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link to="/project" className={styles.secondaryButton}>
                다른 프로젝트 보기
              </Link>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className={styles.progressContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className={styles.progressLabel}>
              <span>개발 진행률</span>
              <span>25%</span>
            </div>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ComingSoon;
