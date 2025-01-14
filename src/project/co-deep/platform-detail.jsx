import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./PlatformDetail.module.css";

const PlatformDetail = () => {
  const [modalImage, setModalImage] = useState(null); // 모달에 띄울 이미지 상태

  const openModal = (imageSrc) => {
    console.log("모달 열림, 이미지 경로:", imageSrc); // 디버깅
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

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
          onClick={() => openModal("/images/main-page.png")}
        />
        <p className={styles.description}>
          PoliTracker는 사용자의 정치 참여를 돕기 위해 <strong>3가지 주요 기능</strong>을 제공합니다.
        </p>
      </section>


      {/* 나의 정치 성향 분석하기 */}
      <section className={styles.section}>
  <h2 className={styles.sectionTitle}>1. 나의 정치 성향 분석하기</h2>
  <div className={styles.imageGrid}>
    {/* 첫 번째 이미지와 설명 */}
    <div>
      <img
        src="/images/owl-country.png"
        alt="부엉이 캐릭터와 동물 나라 설정"
        className={styles.image}
        onClick={() => openModal("/images/owl-country.png")}
      />
      <p className={styles.description}>
        흥미를 높이기 위해 사용자는 "부엉이 나라의 지도자"가 되어, 더 나은 나라를 만드는 테스트를 진행합니다.
      </p>
    </div>

    {/* 두 번째 이미지와 설명 */}
    <div>
      <img
        src="/images/question.png"
        alt="15개 질문 화면"
        className={styles.image}
        onClick={() => openModal("/images/question.png")}
      />
      <p className={styles.description}>
        15개의 질문으로 구성되며, 정치, 외교, 사회 카테고리에서 진보와 보수 선택 갯수를 분석합니다.
      </p>
    </div>

    {/* 세 번째 이미지와 설명 */}
    <div>
      <img
        src="/images/result-screen.png"
        alt="검사 결과 화면"
        className={styles.image}
        onClick={() => openModal("/images/result-screen.png")}
      />
      <p className={styles.description}>
        결과 화면에서는 사용자의 성향에 맞는 역사적 인물 추천을 통해 정치적 이해를 돕습니다.
      </p>
    </div>
  </div>
</section>

      {/* 우리 지역 정치인 트래킹하기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. 우리 지역 정치인 트래킹하기</h2>
        <div className={styles.imageGrid}>
          <div>
            <img
              src="/images/district.png"
              alt="구 선택 화면"
              className={styles.image}
              onClick={() => openModal("/images/district.png")}
            />
            <p className={styles.description}>사용자는 구를 선택하여 해당 지역의 구청장과 국회의원 정보를 조회할 수 있습니다.</p>
          </div>
          <div>
            <img
              src="/images/district-detail.png"
              alt="종로구 상세 정보 화면"
              className={styles.image}
              onClick={() => openModal("/images/district-detail.png")}
            />
            <p className={styles.description}>종로구를 선택하면 구청장 정보와 국회의원 정보로 이동할 수 있는 옵션이 제공됩니다.</p>
          </div>
          <div>
            <img
              src="/images/mayor.png"
              alt="구청장 정보 화면"
              className={styles.image}
              onClick={() => openModal("/images/mayor.png")}
            />
            <p className={styles.description}>구청장 정보 화면에서는 기본 정보와 함께 정책 이행률을 그래프로 제공합니다.</p>
          </div>
          <div>
            <img
              src="/images/assemblyman.png"
              alt="국회의원 정보 화면"
              className={styles.image}
              onClick={() => openModal("/images/assemblyman.png")}
            />
            <p className={styles.description}>
              국회의원 정보 화면에서는 국회의원 정보뿐만 아니라 발의 법안과 의안 투표 현황이 실시간으로 조회 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 최신 뉴스와 챗봇 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. 최신 뉴스 및 챗봇</h2>
        <div className={styles.imageContainer}>
          <img
            src="/images/news.png"
            alt="최신 뉴스 섹션"
            className={styles.image}
            onClick={() => openModal("/images/news.png")}
          />
          <p className={styles.description}>
            사용자는 구별로 최신 뉴스를 확인할 수 있습니다. 각 뉴스 카드에는 간단한 미리보기와 "더 보기" 버튼이 제공됩니다.
          </p>
        </div>
      </section>

      {/* 모달 */}
      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src={modalImage} alt="확대된 이미지" className={styles.modalImage} />
          </div>
        </div>
      )}

      
    </motion.div>
  );
};

export default PlatformDetail;
