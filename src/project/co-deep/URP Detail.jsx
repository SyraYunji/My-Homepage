import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./URPDetail.module.css";

const URPDetail = () => {
  const [showDetails, setShowDetails] = useState({
    save: false,
    share: false,
    business: false,
  });

  return (
    <motion.div
      className={styles.urpDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 페이지 제목 */}
      <h1 className={styles.title}>URP 학부연구생 프로젝트 - My Role</h1>
      <p className={styles.intro}>
        학부연구생으로 활동하며 <strong>PoliTracker 플랫폼</strong> 기능을 추가하고, 비즈니스 모델 개발을 통해 프로젝트 발전에 기여했습니다.
      </p>

{/* 이미지 예시 */}
<div className={styles.imageGrid}>
  <div className={styles.imageWrapper}>
    <img
      src="/images/finish.png"
      alt="결과 화면 캡처 예시 1"
      className={styles.image}
    />
  </div>
  <div className={styles.imageWrapper}>
    <img
      src="/images/finish1.png"
      alt="결과 화면 캡처 예시 2"
      className={styles.image1}
    />
  </div>
</div>


 {/* 결과 화면 저장 기능 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🖼 결과 화면 저장 기능</h2>
        <p className={styles.description}>
          사용자가 테스트 결과 화면을 캡처하고 로컬 디바이스에 저장할 수 있는 기능을 구현했습니다.
        </p>
        <ul className={styles.list}>
          <li>초기에는 html-to-image 라이브러리를 사용했으나 모바일 환경에서 오류 발생</li>
          <li>html2canvas로 전환하여 안정적이고 빠른 캡처 기능 구현</li>
        </ul>
        {showDetails.save && (
          <>
            <h4 className={styles.detailTitle}>🔧 구현 과정</h4>
            <ul className={styles.list}>
              <li>html2canvas를 활용해 DOM 요소를 캡처 및 이미지 생성</li>
              <li>useCORS 옵션을 통해 외부 리소스 로드 문제 해결</li>
              <li>모바일과 데스크톱 환경 모두에서 테스트 및 성능 최적화</li>
            </ul>
          </>
        )}
        <button
          className={styles.toggleButton}
          onClick={() => setShowDetails((prev) => ({ ...prev, save: !prev.save }))}
        >
          {showDetails.save ? "간단히 보기" : "더 보기"}
        </button>
      </section>

      {/* 링크 공유 기능 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔗 링크 공유 기능</h2>
        <p className={styles.description}>
          테스트 결과를 URL을 통해 타인과 공유할 수 있는 기능을 설계하고 구현했습니다.
        </p>
        <ul className={styles.list}>
          <li>기존 localStorage 방식에서 URL 기반 쿼리 파라미터 방식으로 전환</li>
          <li>URL에서 데이터를 복원하여 결과 화면 재구성</li>
        </ul>
        {showDetails.share && (
          <>
            <h4 className={styles.detailTitle}>🔧 구현 과정</h4>
            <ul className={styles.list}>
              <li>
                React Router와 searchParams를 활용해 URL에서 점수 데이터를 추출 및 상태 복원
              </li>
              <li>
                클립보드 API를 사용해 "공유하기" 버튼으로 URL 복사 및 성공/실패 메시지 표시
              </li>
              <li>
                테스트 결과 데이터를 URL로 공유해 사용자가 타인과 결과를 쉽게 전달 가능
              </li>
            </ul>
          </>
        )}
        <button
          className={styles.toggleButton}
          onClick={() => setShowDetails((prev) => ({ ...prev, share: !prev.share }))}
        >
          {showDetails.share ? "간단히 보기" : "더 보기"}
        </button>
      </section>

      <section className={styles.section}>
  <h2 className={styles.sectionTitle}>💡 비즈니스 모델 구축</h2>
  <p className={styles.description}>
    정치적 관심 증대와 지속 가능한 플랫폼 수익화를 목표로, 사용자 지불 의사 금액(WTP) 조사와 게이미피케이션 요소를 활용한 비즈니스 모델을 설계했습니다.
  </p>
  <ul className={styles.list}>
    <li>WTP 데이터를 기반으로 기본 및 프리미엄 구독 플랜 설계</li>
    <li>게이미피케이션 요소 도입으로 사용자 참여와 재미를 결합</li>
    <li>광고 기반 수익화 모델과 소액 결제를 통한 수익 다각화</li>
  </ul>
  {showDetails.business && (
    <>
      {/* WTP 조사 */}
      <h4 className={styles.detailTitle}>📊 WTP 조사 및 분석</h4>
      <ul className={styles.list}>
        <li>
          <strong>공공서비스 WTP 연구:</strong> 사용자 지불 의사 금액은 신뢰성과 데이터 정확성에 따라 증가.
        </li>
        <li>
          <strong>유사 사례 분석:</strong> 뉴욕타임스($4)와 워싱턴포스트($10) 사례 참고.
        </li>
        <li>
          <strong>기능별 만족도:</strong> 정치 성향 분석(67.9%), 지역 정치인 트래킹(95.9%)은 높은 사용자 만족도를 기록.
        </li>
      </ul>

      {/* 비즈니스 모델 구조 */}
      <h4 className={styles.detailTitle}>🏗️ 비즈니스 모델 구조</h4>
      <ul className={styles.list}>
        <li>
          <strong>무료 플랜:</strong> 기본 정치 뉴스 제공 및 광고 기반 수익화.
        </li>
        <li>
          <strong>프리미엄 플랜:</strong> 광고 제거, 맞춤형 보고서 제공, 심화 데이터 분석(월 3,000~5,000원).
        </li>
        <li>
          <strong>게이미피케이션 요소:</strong> 부엉이 키우기, 미션과 보상을 통해 사용자 몰입도 향상.
        </li>
      </ul>

      {/* 게이미피케이션 요소 */}
      <h4 className={styles.detailTitle}>🎮 게이미피케이션 요소</h4>
      <ul className={styles.list}>
        <li>
          <strong>부엉이 키우기 컨셉:</strong> 기사를 읽거나 특정 정치인을 팔로우하면 포인트(벌레)를 획득.
        </li>
        <li>
          <strong>미션 기반 참여:</strong> 기사 읽기, 퀴즈 참여 등을 통해 추가 보상 제공.
        </li>
        <li>
          <strong>포인트 활용:</strong> 프리미엄 콘텐츠 체험, 가상 아이템 구매, 또는 소액 결제.
        </li>
      </ul>

      {/* 수익화 방식 */}
      <h4 className={styles.detailTitle}>💰 수익화 방식</h4>
      <ul className={styles.list}>
        <li>
          <strong>구독료:</strong> 프리미엄 플랜(월 3,000~5,000원)으로 안정적인 수익 창출.
        </li>
        <li>
          <strong>광고 수익:</strong> 무료 사용자 대상 맞춤형 광고 제공.
        </li>
        <li>
          <strong>가상 아이템 판매:</strong> 부엉이 꾸미기 아이템과 추가 포인트 소액 결제.
        </li>
      </ul>

      {/* 플랫폼의 차별화 포인트 */}
      <h4 className={styles.detailTitle}>🚀 차별화 포인트</h4>
      <ul className={styles.list}>
        <li>
          <strong>사용자 참여 극대화:</strong> 부엉이 키우기와 랭킹 시스템으로 재미와 학습을 결합.
        </li>
        <li>
          <strong>유연한 수익 구조:</strong> 구독료, 광고 수익, 소액 결제를 통한 수익 다각화.
        </li>
        <li>
          <strong>정치적 관심 유도:</strong> 미션과 보상을 통해 자연스럽게 정치적 관심 증가.
        </li>
      </ul>
    </>
  )}
  <button
    className={styles.toggleButton}
    onClick={() => setShowDetails((prev) => ({ ...prev, business: !prev.business }))}
  >
    {showDetails.business ? "간단히 보기" : "더 보기"}
  </button>
</section>
    </motion.div>
  );
};

export default URPDetail;