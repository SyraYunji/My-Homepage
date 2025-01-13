import React from "react";
import { motion } from "framer-motion"; // 애니메이션 라이브러리
import { Link } from "react-router-dom"; // React Router 사용
import styles from "./CoDeepDetail.module.css";

const CoDeepDetail = () => {
  return (
    <motion.div
      className={styles.projectDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 프로젝트 제목 및 설명 */}
      <h1 className={styles.title}>Co-Deep Learning Project: PoliTracker</h1>
      <h2 className={styles.title}>
        Co-Deep Learning Project는 교수와 학생의 공동 프로젝트를 통해 교수-학생 간 소통의 기회를 확대하고, 
        심도 있는 협동 학습과 자기주도 학습을 지원하는 프로그램
      </h2>

      {/* My Role */}
      <h3 className={styles.role}>My Role: Frontend Developer</h3>
      <p className={styles.roleDescription}>
        정치성향테스트 부분 전체 제작 + 구청장 조회하기 페이지 전체 제작 + Chatbot 제작 + 전체 CSS 다듬기
      </p>

      {/* '플랫폼 더 자세히 보기' 버튼 */}
      <div className={styles.buttonContainer}>
        <Link to="/platform-detail" className={styles.detailButton}>
          플랫폼 더 자세히 보러가기
        </Link>
      </div>

      {/* 6가지 항목 */}
      <div className={styles.sections}>
        {/* 01. 배경 및 필요성 */}
        <motion.div 
          className={styles.section} 
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>01. 배경 및 필요성</h2>
          <div className={styles.graphContainer}>
            <div className={styles.graph}>
              {/* 원형 다이어그램 예제 */}
              <h3>문제 상황</h3>
              <ul>
                <li>청년층의 낮은 정치 참여율</li>
                <li>체계적인 정치 플랫폼의 부재</li>
              </ul>
              <h3>타겟팅 대상</h3>
              <ul>
                <li>정치에 무관심한 국민</li>
                <li>정치 정보를 찾기 어려워하는 국민</li>
                <li>정치 전문가</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 02. 기존 플랫폼의 한계 */}
        <motion.div
          className={styles.section}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>02. 기존 플랫폼의 한계</h2>
          <div className={styles.graphContainer}>
            {/* 카드 형태로 분리 */}
            <div className={styles.card}>
              <h3>1. 공약 이행 현황</h3>
              <p>정보가 흩어져 있으며 접근성이 낮음</p>
              <p>효율적인 정보 제공 필요</p>
            </div>
            <div className={styles.card}>
              <h3>2. 국회의원 활동 정보</h3>
              <p>단계별 접근으로 불편함 초래</p>
              <p>직관적인 플랫폼 요구</p>
            </div>
          </div>
        </motion.div>

        {/* 03. 주요 기능 및 UI/UX */}
        <motion.div
          className={styles.section}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>03. 주요 기능 및 UI/UX</h2>
          <div className={styles.graphContainer}>
            <div className={styles.featureList}>
              <h3>주요 기능</h3>
              <ul>
                <li>정치성향테스트: 질문을 통해 성향 분석</li>
                <li>지역 정치인 트래킹: 공약 이행률 시각화</li>
                <li>정치 용어 및 뉴스: 최신 정보 제공</li>
              </ul>
            </div>
            <div className={styles.uiSection}>
              <h3>UI/UX</h3>
              <p>시그니처 색상: 연보라색(#cfc2e9)</p>
              <p>사용자 친화적이고 직관적인 디자인 적용</p>
            </div>
          </div>
        </motion.div>

        {/* 04. 플랫폼 시연 */}
        <motion.div
          className={styles.section}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>04. 플랫폼 시연</h2>
          <p>플랫폼 시연 섹션에서는 주요 기능이 동작하는 모습을 GIF 또는 이미지로 설명</p>
        </motion.div>

        {/* 05. 플랫폼 의의 */}
        <motion.div
          className={styles.section}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>05. 플랫폼 의의</h2>
          <p>정치적 무관심을 해결하고, 정치 참여율을 높이는 데 기여</p>
        </motion.div>

        {/* 06. 한계점 및 후속 연구 */}
        <motion.div
          className={styles.section}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>06. 한계점 및 후속 연구</h2>
          <div className={styles.list}>
            <h3>한계점</h3>
            <ul>
              <li>정치성향 분석의 과리 및 세부 데이터 부족</li>
              <li>사용자 커뮤니티 기능 부족</li>
            </ul>
            <h3>후속 연구</h3>
            <ul>
              <li>트래킹 기능 확장: 전국 단위 확대</li>
              <li>뉴스 필터링 강화</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* 결과 보고서 */}
      <div className={styles.reportSection}>
        <h2 className={styles.sectionTitle}>📄 결과 보고서</h2>
        <a
          href="https://drive.google.com/your-report-link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reportLink}
        >
          결과 보고서 PDF 보기
        </a>
      </div>
    </motion.div>
  );
};

export default CoDeepDetail;
