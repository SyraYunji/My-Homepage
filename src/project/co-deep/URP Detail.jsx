import React from "react";
import { motion } from "framer-motion";
import styles from "./URPDetail.module.css";

const URPDetail = () => {
  return (
    <motion.div
      className={styles.urpDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 페이지 제목 */}
      <h1 className={styles.title}>URP 학부연구생 프로젝트</h1>
      <p className={styles.intro}>
        URP 학부연구생으로 활동하며, PoliTracker 프로젝트를 확장 및 개선하는 데 기여했습니다.
      </p>

      {/* 주요 기능 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>추가된 기능</h2>
        <p className={styles.description}>
          테스트 결과 화면을 캡처하여 사용자의 로컬 디바이스에 저장할 수 있는 기능을 구현했습니다.
        </p>
        <div className={styles.imageGrid}>
          <div>
            <img
              src="/images/capture-example.png"
              alt="캡처 기능 예시"
              className={styles.image}
            />
            <p className={styles.description}>테스트 결과를 캡처한 화면 예시.</p>
          </div>
        </div>
      </section>

      {/* 라이브러리 변경 과정 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔧 구현 과정</h2>
        <h3 className={styles.subTitle}>html-to-image 라이브러리</h3>
        <ul className={styles.list}>
          <li>초기 구현 시 사용한 라이브러리.</li>
          <li>문제점: 모바일 환경에서 이미지가 하얗게 출력되거나 일부 요소가 렌더링되지 않음.</li>
          <li>CORS 문제로 이미지가 제대로 캡처되지 않는 사례 다수 발생.</li>
        </ul>

        <h3 className={styles.subTitle}>html2canvas 라이브러리</h3>
        <ul className={styles.list}>
          <li>최종적으로 선택한 라이브러리.</li>
          <li>모바일 및 데스크톱 환경에서 안정적으로 화면을 캡처.</li>
          <li>
            <code>useCORS: true</code> 옵션을 사용하여 CORS 문제를 해결.
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default URPDetail;
