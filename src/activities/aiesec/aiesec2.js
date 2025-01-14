import React from "react";
import styles from "./aiesec2.module.css";

const AIESEC2 = () => {
  return (
    <div className={styles.container}>
      {/* 히어로 배너 */}
      <section className={styles.hero}>
        <h1 className={styles.title}>National Leadership Development Conference 회장</h1>
        <p className={styles.subtitle}>
          129명이 참여한 2박 3일 컨퍼런스를 성공적으로 주최하며, <br />체계적인 운영과 문제 해결 능력을 통해 효율적인 프로젝트 관리와 리더십 역량을 발휘
        </p>

      </section>

      {/* 타임라인 섹션 */}
      <section className={styles.timeline}>
        <h2 className={styles.sectionTitle}>활동 타임라인</h2>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>
            <strong>컨퍼런스 준비:</strong> 운영진 관리 툴, Room allocation, Quota, Budget 등 데이터를 기반으로 한 다양한 툴 제작 및 공유
          </p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>
            <strong>회의 운영:</strong> 업무 분담표와 회의 시나리오 제작으로 체계적인 관리와 운영
          </p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>
            <strong>참여자 관리:</strong> 구글 폼을 활용해 누락된 인원 확인 및 참여비 최종 정산
          </p>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <p>
            <strong>문제 해결:</strong> 부족한 이불과 방 문제 해결을 위해 추가 방안 마련 및 이불 대여 업체와 협력
          </p>
        </div>
      </section>

      {/* 협업 및 리더십 사례 */}
      <section className={styles.cards}>
        <h2 className={styles.sectionTitle}>협업 및 리더십 사례</h2>
        <div className={styles.card}>
          <h3>효율적인 예산 관리</h3>
          <p>
            한정된 예산 내에서 모든 참여자에게 숙박과 식사를 제공하고, 비용 초과를 방지하기 위해 지속적으로 예산을 점검하며 문제 해결
          </p>
        </div>
        <div className={styles.card}>
          <h3>창의적인 참여자 이벤트</h3>
          <p>
            참여자 만족도를 높이기 위해 "스티커 이벤트"와 같은 독창적인 아이디어를 도입하여 만족도 100% 달성
          </p>
        </div>
      </section>

      {/* 맞춤형 트래킹 툴 */}
      <section className={styles.tools}>
        <h2 className={styles.sectionTitle}>프로젝트 관리 도구</h2>
        <div className={styles.toolContent}>
          <img
            src="/images/input.png"
            alt="운영진 관리 도구"
            className={styles.toolImage}
          />
          <p>
            Room allocation, Quota, Budget 등 데이터를 기반으로 한 맞춤형 툴을 제작하여 운영진과 공유하며 체계적인 관리
          </p>
        </div>
        <div className={styles.toolContent}>
          <img
            src="/images/room.png"
            alt="참여자 관리 도구"
            className={styles.toolImage}
          />
          <p>
            참여자의 부분 참여와 전일 참여를 고려해 모든 경우의 수를 계산하여 비용 효율성을 극대화할 수 있도록 날별로 최적의 방 인원 배정을 설계했습니다.
          </p>
        </div>
        <div className={styles.toolContent}>
          <img
            src="/images/scenario.png"
            alt="시나리오"
            className={styles.toolImage}
          />
          <p>
          모든 참여자가 만족할 수 있는 컨퍼런스를 위하여 2박 3일 시나리오를 시간대별로 세분화하여 정리하였으며, 이를 임원진들과 공유하며 각자의 역할과 책임을 명확히 분배했습니다. 또한, 예상 가능한 문제 상황에 대한 대처 방안을 미리 논의함으로써 컨퍼런스 진행 중 발생할 수 있는 돌발 상황에 효과적으로 대응할 수 있도록 준비했습니다.
          </p>
        </div>
      </section>

      {/* 데이터 및 성과 */}
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>결과</h2>
        <div className={styles.skillItems}>
          <div className={styles.skillItem}>
            <h3>끈기</h3>
            <p>예산 관리 및 반복적인 조율 과정을 통해 끝까지 최선을 다하는 자세를 배움</p>
          </div>
          <div className={styles.skillItem}>
            <h3>책임감</h3>
            <p>129명의 참여자와 운영진을 책임지며 문제를 해결하고 팀원들과 신뢰를 구축</p>
          </div>
          <div className={styles.skillItem}>
            <h3>창의적 문제 해결</h3>
            <p>
              참여자 이벤트, 방 배정, 이불 대여 등 다양한 문제를 창의적이고 효율적으로 해결하며 성장
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIESEC2;
