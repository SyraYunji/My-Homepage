import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        {/* 1번 사진 추가 */}
        <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />

        {/* 메인 텍스트 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.highlight}>
              <Typewriter
                words={["My Portfolio", "My Creative Space"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </motion.div>
        {/* 부제목 */}
        <p className={styles.subtitle}>
        소프트웨어 기술과 경영학의 전략적 사고를 결합한 <strong>융합형 인재</strong>로,  
        창의적 문제 해결과 효과적인 커뮤니케이션 능력을 바탕으로  
        가치를 만들어내는 개발자입니다.

        I’m a passionate <strong>Frontend Developer</strong> who bridges  
        technology and creativity.
        </p>


        {/* 버튼 섹션 */}
        <div className={styles.buttons}>
          <a href="#projects" className={styles.button}>
            View Projects
          </a>
          <a href="#contact" className={styles.buttonAlt}>
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
