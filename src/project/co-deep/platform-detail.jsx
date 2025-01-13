import React from "react";
import { motion } from "framer-motion";
import styles from "./PlatformDetail.module.css";

const PlatformDetail = () => {
  return (
    <motion.div
      className={styles.platformDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* 메인 페이지 설명 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>플랫폼 메인 화면</h2>
        <img
          src="/images/main-page.png"
          alt="플랫폼 메인 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          PoliTracker는 사용자의 정치 참여를 돕기 위해 <strong>3가지 주요 기능</strong>을 제공합니다.
        </p>
      </section>

      {/* 나의 정치 성향 분석하기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. 나의 정치 성향 분석하기</h2>
        <img
          src="/images/owl-country.png"
          alt="부엉이 캐릭터와 동물 나라 설정"
          className={styles.image}
        />
        <p className={styles.description}>
          흥미를 높이기 위해 사용자는 "부엉이 나라의 지도자"가 되어, 더 나은 나라를 만드는 테스트를 진행합니다.
        </p>
        <img
          src="/images/question.png"
          alt="15개 질문 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          15개의 질문으로 구성되며, 정치, 외교, 사회 카테고리에서 진보와 보수 선택 갯수를 분석합니다.
        </p>
        <img
          src="/images/result-screen.png"
          alt="검사 결과 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          결과 화면에서는 사용자의 성향에 맞는 역사적 인물 추천을 통해 정치적 이해를 돕습니다.
        </p>
      </section>

      {/* 우리 지역 정치인 트래킹하기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. 우리 지역 정치인 트래킹하기</h2>
        <img
          src="/images/district.png"
          alt="구 선택 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          사용자는 구를 선택하여 해당 지역의 구청장과 국회의원 정보를 조회할 수 있습니다.
        </p>
        <img
          src="/images/district-detail.png"
          alt="종로구 상세 정보 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          종로구를 선택하면 구청장 정보와 국회의원 정보로 이동할 수 있는 옵션이 제공됩니다.
        </p>
        <img
          src="/images/mayor.png"
          alt="구청장 정보 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          구청장 정보 화면에서는 기본 정보와 함께 정책 이행률을 그래프로 제공합니다.
        </p>
        <img
          src="/images/assemblyman.png"
          alt="국회의원 정보 화면"
          className={styles.image}
        />
        <p className={styles.description}>
          국회의원 정보 화면에서는 국회의원 정보 뿐만 아니라 발의 법안과 의안 투표 현황이 실시간으로 조회 가능합니다.
        </p>
      </section>

      {/* 최신 뉴스와 챗봇 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. 최신 뉴스 및 챗봇</h2>
        <img
          src="/images/news.png"
          alt="최신 뉴스 섹션"
          className={styles.image}
        />
        <p className={styles.description}>
          사용자는 구별로 최신 뉴스를 확인할 수 있습니다. 각 뉴스 카드에는 간단한 미리보기와 "더 보기" 버튼이 제공됩니다.
        </p>
        <img
          src="/images/chatbot.png"
          alt="챗봇 기능"
          className={styles.image}
        />
        <p className={styles.description}>
          POLITRACKER Chatbot을 통해 정치 용어 설명, 최신 뉴스 질의 응답 등 실시간 도움을 받을 수 있습니다.
        </p>
      </section>

      {/* 돌아가기 버튼 */}
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.backButton}>
          메인 페이지로 돌아가기
        </a>
      </div>
    </motion.div>
  );
};

export default PlatformDetail;
