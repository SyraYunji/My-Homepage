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
      <p className={styles.introText}>
        Co-Deep Learning Project는 교수와 학생의 공동 프로젝트를 통해 교수-학생 간 소통의 기회를 확대하고, 
        심도 있는 협동 학습과 자기주도 학습을 지원하는 프로그램
      </p>

      {/* My Role */}
      <h3 className={styles.role}>My Role: Frontend Developer</h3>
      <p className={styles.roleDescription}>
        정치성향테스트 부분 스토리 포함하여 전체 제작 + 구청장 조회하기 페이지 전체 제작 + Chatbot 제작 + 전체 CSS 다듬기
      </p>

      {/* '플랫폼 더 자세히 보기' 버튼 */}
      <div className={styles.buttonContainer}>
        <Link to="/platform-detail" className={styles.detailButton}>
          플랫폼 더 자세히 보러가기
        </Link>
      </div>

      {/* 6가지 항목을 Flex 컨테이너로 감싸기 */}
      <div className={styles.flexContainer}>
        {/* 01. 배경 및 필요성 */}
        <motion.div
          className={styles.section}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2 className={styles.sectionTitle}>01. 배경 및 필요성</h2>
          <div className={styles.contentContainer}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>문제 상황</h3>
              <ul className={styles.list}>
                <p>청년층의 낮은 정치 참여율</p>
                <p>체계적인 정치 플랫폼의 부재</p>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>타겟팅 대상</h3>
              <ul className={styles.list}>
                <p>정치에 무관심한 국민</p>
                <p>정치 정보를 찾기 어려워하는 국민</p>
                <p>정치에 관심이 많은데 구체적이고 정확한 정보를 찾고 싶은 국민</p>
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
          <div className={styles.contentContainer}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>1. 공약 이행 현황</h3>
              <ul className={styles.list}>
              <p>정보가 흩어져 있으며 접근성이 낮음</p>
              <p>효율적인 정보 제공 필요</p>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>2. 국회의원 활동 정보</h3>
              <ul className={styles.list}>
              <p>단계별 접근으로 불편함 초래</p>
              <p>직관적인 플랫폼 요구</p>
              </ul>
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
          <div className={styles.contentContainer}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>주요 기능</h3>
              <ul className={styles.list}>
                <p>정치성향테스트 <br />: 질문을 통해 성향 분석</p>
                <p>지역 정치인 트래킹 <br />: 공약 이행률 시각화</p>
                <p>정치 용어 및 뉴스 : 최신 정보 제공</p>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>UI/UX</h3>
              <ul className = {styles.list}>
              <p>시그니처 색상: 연보라색(#cfc2e9)</p>
              <p>사용자 친화적이고 직관적인 디자인 적용</p>
              </ul>
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
          <h2 className={styles.sectionTitle}>04. 사용자 테스트 결과</h2>
          
          {/* 이미지 컨테이너 */}
          <div className={styles.imageContainer}>
            <img
              src="/images/test1.png"
              alt="사용자 테스트 결과 1"
              className={styles.demoImage}
            />
            <img
              src="/images/test2.png"
              alt="사용자 테스트 결과 2"
              className={styles.demoImage}
            />
          </div>
          <div className = {styles.survey}>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>67.9%</span> 가 정치에 대한 관심이 증가했다고 함
            <br />
            <span className={styles.highlight}>95.9%</span> 가 각 정치인의 활동을 직관적으로 알기 쉬웠다고 함
            <br />
            <span className={styles.highlight}>89%</span> 응답자가 지역 별 정치 관련 뉴스가 유익하다고 함
          </p>
          </div>
        </motion.div>

        {/* 05. 플랫폼 의의 */}
        <motion.div
        className={styles.section}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}>

        <h2 className={styles.sectionTitle}>5.플랫폼 의의</h2>
        <div className={styles.contentContainer}>
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>사용자 참여 유도</h3>
            <ul className={styles.list}>
              <p>정치적 관심을 유도하고 태도 변화에 긍정적인 영향</p>
              <p>정치 참여를 쉽게 시작할 수 있는 계기 제공</p>
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>사용자 친화적 접근</h3>
            <ul className={styles.list}>
              <p>맞춤형 정보 제공으로 실질적인 도움</p>
              <p>사용자 친화적 UI/UX로 정보 접근성을 높임</p>
            </ul>
          </div>
      
      </div> 
      </motion.div>
      


        {/* 06. 한계점 및 후속 연구 */}
        <motion.div
          className={styles.section}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >

        <div className={styles.subSection}>
          <h2 className={styles.sectionTitle}>06. 한계점 및 후속 연구</h2>
          <div className={styles.contentContainer}>
          <div className={styles.subSection}>
          <h3 className={styles.subTitle}>사용자 친화적 접근</h3>
          <div className={styles.list}>
          <ul className={styles.list}>
              <p>정치성향 분석의 과리 및 세부 데이터 부족</p>
              <p>사용자 커뮤니티 기능 부족</p>
            </ul>
            <h3 className={styles.subTitle}>사용자 친화적 접근</h3>
            <ul>
              <p>트래킹 기능 확장: 전국 단위 확대</p>
              <p>뉴스 필터링 강화</p>
            </ul>
          </div>
          </div>
          </div>
          </div>
        </motion.div>
     
      
          {/* 결과 보고서 */}
          <div className={styles.reportSection}>
            <h2 className={styles.sectionTitle}>📄 결과 보고서</h2>
            <a 
              href="/files/report.pdf" 
              download 
              className={styles.reportLink}
            >
              결과 보고서 다운로드
            </a>
          </div>

      
      </div>
      <section className={styles.githubSection}>
        <h2 className={styles.sectionTitle}>GitHub Repository</h2>
        <p className={styles.githubDescription}>
          프로젝트의 코드는 GitHub에서 확인할 수 있습니다. 아래 링크를 클릭하세요:
        </p>
        <a
          href="https://github.com/Co-Deep-Project/Backend.git" // 여기에 실제 깃허브 주소 입력
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub Repository 바로가기
        </a>
      </section>
      </motion.div>
  );
};

export default CoDeepDetail;
