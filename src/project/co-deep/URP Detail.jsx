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
      <h1 className={styles.title}>URP 학부연구생 프로젝트 - 내 역할</h1>
      <p className={styles.intro}>
        학부연구생으로서, <strong>PoliTracker 플랫폼</strong>의 핵심 기능 구현과 비즈니스 모델 개발을 통해 프로젝트 발전에 기여했습니다.
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


{/* 문제와 해결: 테스트 결과 캡처 기능 */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>📌 결과 화면 저장 기능, 공유 기능 추가</h2>
  <p className={styles.description}>
    정치적 관심 증대를 목표로 하는 플랫폼의 상용화 초기 단계에서 추가로 보완해야할 부분들이 발견 되었고, <br />이를 해결하기 위해 <strong>테스트 결과 캡처 및 저장</strong> 기능을 설계하고 구현했습니다.
  </p>

  {/* 문제 분석 */}
  <h3 className={styles.subTitle}>문제 분석</h3>
  <ul className={styles.list}>
    <li>
      <strong>정치적 무관심:</strong> 정치적 관심이 낮은 사용자들에게 결과 데이터를 보관하거나 공유할 동기를 제공하기 어려움.
    </li>
    <li>
      <strong>기술적 제약:</strong> DOM 요소를 안정적으로 이미지로 변환하기 위해 크로스 플랫폼 호환성과 CORS 문제 해결 필요.
    </li>
    <li>
      <strong>차별성 부족:</strong> 기존 뉴스 플랫폼과 비교해 부가가치를 명확히 전달하지 못함.
    </li>
  </ul>

  {/* 해결 방안 */}
  <h3 className={styles.subTitle}>해결 방안</h3>
  <ul className={styles.list}>
    <li>
      사용자 테스트 결과를 이미지로 캡처하고 저장할 수 있는 기능을 도입하여 UX 개선.
    </li>
    <li>
      html2canvas 라이브러리를 활용해 DOM 요소를 canvas로 렌더링 후 이미지로 변환.
    </li>
    <li>
      Cross-Platform 환경을 지원하며, 모바일과 데스크톱 모두에서 안정적인 성능 제공.
    </li>
  </ul>

  {/* 결과 및 성과 */}
  <h3 className={styles.subTitle}>성과</h3>
  <ul className={styles.list}>
    <li>
      사용자는 테스트 결과를 이미지로 저장하고, 소셜 미디어를 통해 공유할 수 있게 됨.
    </li>
    <li>
      모바일 및 데스크톱 환경에서 안정적으로 작동하여 사용자 만족도를 크게 향상.
    </li>
    <li>
      CORS 문제 해결 및 성능 최적화로 플랫폼 안정성을 확보.
    </li>
  </ul>
</section>

{/* 기술 스택 및 구현 세부사항 */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>🔧 기술 스택 및 구현 세부사항</h2>

  {/* 문제 분석 */}
  <h3 className={styles.subTitle}>1. 문제 분석</h3>
  <ul className={styles.list}>
    <li>초기에는 html-to-image 라이브러리를 사용했으나, 렌더링 오류와 성능 저하 문제가 발생.</li>
    <li>특히 모바일 환경에서 하얀 화면 출력 및 SVG 요소 처리 오류가 발생하여 사용성이 저하됨.</li>
  </ul>

  {/* 해결 과정 */}
  <h3 className={styles.subTitle}>2. 해결 과정</h3>
  <ul className={styles.list}>
    <li>
      html2canvas로 전환하여 DOM 요소를 캔버스로 렌더링하고, 이미지 데이터를 생성.
    </li>
    <li>
      <code>useCORS: true</code> 옵션을 적용하여 외부 리소스를 안정적으로 로드하고 CORS 문제 해결.
    </li>
    <li>
      기기별 해상도에 따라 캔버스 크기를 조정하여 모바일과 데스크톱 모두에서 최적화된 이미지를 제공.
    </li>
    <li>
      이미지 렌더링 속도를 개선하여 저사양 기기에서도 원활하게 작동하도록 구현.
    </li>
  </ul>

  {/* 추가 성과 */}
  <h3 className={styles.subTitle}>3. 추가 성과</h3>
  <ul className={styles.list}>
    <li>다양한 기기(Android, iOS, Desktop)에서 기능 테스트를 완료하여 안정성 확보.</li>
    <li>캔버스 기반 렌더링 성능을 최적화하여 UI 왜곡 문제를 해결.</li>
  </ul>


</section>


      {/* WTP 조사 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📊 WTP(지불 의사 금액) 조사</h2>
        <p className={styles.description}>
          <strong>WTP 조사를 통해 사용자들이 지불할 의사가 있는 적정 가격을 분석</strong>했습니다.
        </p>
        <ul className={styles.list}>
          <li>
            공공서비스 WTP 연구에 따르면, 사용자는 정책의 중요성과 신뢰성을 느낄 때 더 높은 금액을 지불할 의사가 있음.
          </li>
          <li>
            뉴욕타임스와 워싱턴포스트 사례 분석: 월 $4(약 5,000원)~$10(약 13,000원) 사이의 유료 구독 모델 성공.
          </li>
          <li>정치 성향 분석(67.9%)과 지역 정치인 트래킹(95.9%)은 사용자 만족도가 가장 높음.</li>
        </ul>
      </section>

      {/* 비즈니스 모델 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>💡 현실적인 비즈니스 모델</h2>
        <h3 className={styles.subTitle}>1. 무료 플랜</h3>
        <ul className={styles.list}>
          <li>정치 뉴스 요약 및 기본 트래킹 기능 제공.</li>
          <li>비디오 및 배너 광고를 통해 무료 사용자의 활동도 수익화.</li>
        </ul>
        <h3 className={styles.subTitle}>2. 프리미엄 플랜</h3>
        <ul className={styles.list}>
          <li>광고 제거, 심화 데이터 분석, 맞춤형 보고서 제공.</li>
          <li>월 구독료: 3,000~10,000원.</li>
        </ul>
        <h3 className={styles.subTitle}>3. 게이미피케이션 요소</h3>
        <ul className={styles.list}>
          <li>
            <strong>부엉이 키우기 컨셉:</strong> 정치 뉴스나 트래킹 활동을 통해 포인트(벌레)를 획득하고 부엉이를 성장시키는 요소 추가.
          </li>
          <li>
            <strong>미션 및 보상 시스템:</strong> 기사 읽기, 퀴즈 참여 등을 통해 포인트와 가상 아이템 제공.
          </li>
          <li>
            <strong>랭킹 시스템:</strong> 부엉이 성장 상태 및 활동량에 따라 사용자 랭킹 제공.
          </li>
        </ul>
      </section>

      {/* 프로젝트 성과 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🚀 프로젝트 성과</h2>
        <ul className={styles.list}>
          <li>
            <strong>UX 개선:</strong> 테스트 결과 캡처 및 저장 기능으로 사용자 경험 대폭 향상.
          </li>
          <li>
            <strong>Cross-Platform 호환성:</strong> 모바일과 데스크톱 환경 모두에서 안정적으로 동작.
          </li>
          <li>
            <strong>WTP 기반 비즈니스 모델:</strong> 유료화 가능성 확인 및 합리적 가격 제시.
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default URPDetail;
