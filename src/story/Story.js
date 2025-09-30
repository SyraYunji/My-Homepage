import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Story.module.css";

const Story = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages = [
    {
      id: 0,
      title: "Prologue",
      subtitle: "오뚝이 같은 인생, 끝없는 도전",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.quoteSection}>
            <blockquote className={styles.mainQuote}>
              "너가 할 수 있겠니?"에서 "너 아니면 누가해"로 바뀌게 된 나의 이야기
            </blockquote>

          </div>
          <div className={styles.introText}>
            <p>
              문과에서 이과까지, 아무리 넘어져도 다시 일어선 나의 이야기입니다.  
              <strong> <br />호기심을 배움으로 채우는 사람</strong>으로서, 매번 새로운 도전 앞에서 
              "할 수 있을까?"라는 의구심보다는 "해보지 않으면 모르지"라는 마음으로 달려왔습니다.
            </p>
            <p>
              러시아어에서 시작해 영문학, 법학, 경영학을 거쳐 개발자로, 그리고 하드웨어까지—
              각 단계마다 완전히 새로운 분야였지만, <strong>스스로를 향한 믿음</strong>으로 
              모든 것을 가능하게 만들었습니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Chapter 1",
      subtitle: "문과적 소양에서 시작된 나의 이야기",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
            <h3>My Journey through <br /> Language & Logic</h3>
          </div>
          <div className={styles.storyText}>
            <p>
            대일외국어고등학교 러시아어과에서의 배움이 저의 첫 도전이었습니다.
            처음 접한 낯선 문자와 문법은 막막했지만, 구조를 하나씩 파악하며 언어가 가진 질서를 발견하는 과정은 오히려 즐거움이 되었습니다. 이때의 경험은 이후 새로운 프로그래밍 언어를 마주했을 때도 두려움보다 호기심으로 다가가게 해주었습니다.
            </p>
            <p>
            대학에서 영문학을 공부하면서는 텍스트를 다양한 시각에서 바라보는 훈련을 했습니다. 정답보다는 관점이 중요한 세계에서, 사고의 유연함과 사람을 이해하는 감각을 얻을 수 있었습니다. 지금 사용자의 경험을 고민하며 인터페이스를 설계할 때, “이 기능을 쓰는 사람은 어떤 마음일까?”를 묻는 습관은 그때부터 자리 잡은 것입니다.
            </p>
            <p>
            법학을 배운 시간은 또 다른 전환점이었습니다. 복잡한 사안을 구조화하고, 논리적으로 분석하며 답을 찾는 과정은 지금의 개발자로서 문제를 단계별로 쪼개고 해결책을 찾아내는 힘이 되었습니다. 언어, 문학, 법학이라는 각기 다른 학문들은 결과적으로 새로운 기술과 문제를 두려움 없이 마주하는 태도를 만들어 주었습니다.
            </p>
          </div>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>🇷🇺</div>
              <h4>러시아어학과 (대일외국어고등학교)</h4>
              <p><strong>2018.03 - 2021.02</strong> • 졸업</p>
              <ul>
                <li>완전히 새로운 언어 체계에 도전</li>
                <li>다른 문화와 사고방식에 대한 깊은 이해</li>
                <li>언어 학습의 체계적 접근법 습득</li>
              </ul>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>📚</div>
              <h4>영문학과 (성신여자대학교)</h4>
              <p><strong>GPA 4.43/4.5</strong> • 전액 장학생</p>
              <ul>
                <li>과 전체 수석(재학하는 2년 내내 전액 장학생)</li>
                <li>다양한 관점에서의 사고 능력</li>
                <li>정확한 언어 사용과 소통 능력</li>
              </ul>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>⚖️</div>
              <h4>영미문학문화학과 + 법학 전공 (한국외국어대학교)</h4>
              <p><strong>GPA 4.14/4.5</strong></p>
              <ul>
                <li>논리적 사고와 체계적 분석 능력</li>
                <li>복잡한 문제의 구조화와 해결</li>
                <li>정확한 문서 작성과 법적 사고</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Chapter 2",
      subtitle: "해외영업과 마케팅, 129명을 이끈 리더가 되다",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
          <div className={styles.achievementNumber}>1000%</div>
          <div className={styles.achievementText}>수익 향상 달성</div>
            <p className={styles.chapterSubtitle}>2023.08 - 2024.02</p>
          </div>
          <div className={styles.storyText}>
            <p>
              해외영업을 하면서 고객의 진짜 니즈를 파악하는 법을 배웠는데, 
              이는 나중에 사용자 중심의 제품을 개발할 때 중요한 기반이 되었습니다. 
              "사용자가 정말 원하는 게 뭘까?"를 항상 먼저 생각하게 되었습니다.
            </p>
            <p>
              129명이 참여하는 컨퍼런스를 총괄하면서 프로젝트 관리 능력이 크게 향상되었습니다. 
              복잡한 일정을 체계적으로 관리하고, 팀원들과 소통하는 법을 배웠는데, 
              이는 개발 프로젝트에서 팀 리더십을 발휘할 때 큰 도움이 되었습니다.
            </p>
            <p>
              데이터를 분석해서 전략을 수립하는 경험도 많이 했는데, 
              이는 개발할 때도 어떤 기능이 정말 필요한지 데이터로 판단하는 
              습관을 만들어주었습니다. 감이 아닌 근거로 의사결정을 하게 되었습니다.
            </p>
          </div>
          <div className={styles.achievementHighlight}>
            <div className={styles.achievementNumber}>2박 3일 컨퍼런스 전체 총괄</div>
            <p>129명이 참여하는 National Leaders Development Conference 전체 회장 </p>
          </div>
          <div className={styles.leadershipDetails}>
            <div className={styles.leadershipHeader}>
              <h4>고객의 니즈를 배우며 PM으로서의 역량 개발</h4>
              <a 
                href="https://blog.naver.com/syralee1004/223338904231" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.reviewButton}
              >
                자세한 후기 보러가기
              </a>
            </div>
            <div className={styles.leadershipGrid}>
              <div className={styles.leadershipItem}>
                <h5>고객 중심 사고</h5>
                <p>해외영업을 통해 고객의 진짜 니즈를 파악하고 솔루션을 설계하는 능력</p>
              </div>
              <div className={styles.leadershipItem}>
                <h5>프로젝트 관리</h5>
                <p>129명이 참여하는 2박 3일 컨퍼런스 전체 총괄 관리 경험</p>
              </div>
              <div className={styles.leadershipItem}>
                <h5>데이터 기반 의사결정</h5>
                <p>MRS 진행 데이터를 분석하여 효과적인 마케팅 전략 수립</p>
              </div>
            </div>
            
            {/* Conference Photos */}
            <div className={styles.conferencePhotos}>
              <h5 className={styles.photosTitle}>컨퍼런스 현장 스케치</h5>
              <div className={styles.photosGrid}>
                <div className={styles.photoItem}>
                  <img src="/images/conference1.png" alt="컨퍼런스 전체 모습" className={styles.conferenceImage} />
                  <p className={styles.photoCaption}>129명이 참여한 National Leaders Development Conference</p>
                </div>
                <div className={styles.photoItem}>
                  <img src="/images/conference2.png" alt="회장으로서의 역할" className={styles.conferenceImage} />
                  <p className={styles.photoCaption}>국외교류부서장 실적 1등 달성</p>
                </div>
                <div className={styles.photoItem}>
                  <img src="/images/conference3.png" alt="팀워크와 협업" className={styles.conferenceImage} />
                  <p className={styles.photoCaption}>전체 회장으로서 컨퍼런스 총괄 관리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Chapter 3",
      subtitle: "성균관대학교 경영학과 입학",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
            <h3>경영학과에서 시작된 새로운 도전</h3>
            <p className={styles.chapterSubtitle}>2024.03 - 현재</p>
          </div>
          <div className={styles.storyText}>
            <p>
              성균관대학교 경영학과에 입학하면서 새로운 학문의 세계에 발을 들였습니다. 
              마케팅, 조직행동, 경영통계 등 경영학의 다양한 분야를 체계적으로 학습하며 
              비즈니스에 대한 깊은 이해를 쌓아갔습니다.
            </p>
            <p>
              특히 경영통계 수업에서는 데이터 분석의 중요성을 깨달았고, 
              조직행동 수업에서는 팀워크와 리더십의 핵심을 배웠습니다. 
              마케팅관리 수업에서는 고객 중심의 사고방식을 익혔습니다.
            </p>
          </div>
          
          {/* Study Process Images */}
          <div className={styles.studyProcessSection}>
            <h4>체계적인 4단계 학습법으로 고학점 달성</h4>
            <div className={styles.studyImagesGrid}>
              <div className={styles.studyImageCard}>
                <img src="/images/marketing1.jpeg" alt="마케팅관리 학습" />
                <p>마케팅관리 - 고객 중심 사고</p>
              </div>
              <div className={styles.studyImageCard}>
                <img src="/images/organization1.jpeg" alt="조직행동 학습" />
                <p>조직행동 - 팀워크와 리더십</p>
              </div>
              <div className={styles.studyImageCard}>
                <img src="/images/stat1.jpeg" alt="경영통계 학습" />
                <p>경영통계 - 데이터 분석의 중요성</p>
              </div>
            </div>
          </div>

          <div className={styles.storyText}>
            <p>
              하지만 공부를 할수록 한 가지 한계를 느끼게 되었습니다. 
              <strong> 기술을 가진 사람이 되어야 한다</strong>는 생각이 들었습니다. 
              단순히 이론만으로는 부족하다는 것을 깨달았습니다.
            </p>
            <p>
              4차 산업혁명 시대에 걸맞는 <strong>융합형 인재</strong>가 되어야겠다는 결심을 했습니다. 
              경영학의 비즈니스 인사이트와 기술적 구현 능력을 결합하여 
              진정한 가치를 창출할 수 있는 개발자가 되고 싶었습니다.
            </p>
            <p>
              그래서 소프트웨어학과 복수전공을 시작하게 되었습니다. 
              경영학의 전략적 사고와 소프트웨어의 기술적 구현을 모두 갖춘 
              <strong> 비즈니스와 기술의 다리 역할</strong>을 할 수 있는 인재가 되기 위해 노력하고 있습니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Chapter 4",
      subtitle: "프론트엔드 개발의 매력에 빠지다",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
            <h3>멋쟁이 사자처럼</h3>
            <p className={styles.chapterSubtitle}>2024.09 - 현재</p>
          </div>
          <div className={styles.storyText}>
            <p>
            멋쟁이사자처럼 동아리에 가입하며 본격적으로 개발을 시작했고, 첫 해커톤과 '4호선톤'에 참가하며 실무적인 프로젝트 경험을 쌓기 시작했습니다. 밤샘 코딩을 통해 개발의 몰입과 협업의 즐거움을 처음으로 깊이 체감할 수 있었고, 그 과정에서 개발자로서의 방향성을 명확히 하게 되었습니다.
            </p>
            <p>
            디버깅 과정 또한 큰 학습이었습니다. 초기에는 오류에 당황하고 해결에 오랜 시간이 걸렸지만, 문제를 직접 분석하고 해결했을 때의 성취감은 강렬했고, 이는 개발이라는 일이 단순한 구현을 넘어 논리적 사고와 끈기에서 오는 보람을 준다는 사실을 체감하게 해주었습니다.
            </p>
          </div>

          <div className={styles.techJourney}>
            <div className={styles.techPhase}>
              <h4>Co-Deep Learning Project - 개발 시작한지 5개월만에 최우수상 수상</h4>
              <div className={styles.projectHighlight}>
                <strong>모르는 것 있을 때마다 도서관에서 책 다 뒤지고 구글링</strong> - 끝까지 포기하지 않는 노력
              </div>
              <div className={styles.projectButtonContainer}>
                <a href="/project/co-deep" className={styles.projectButton}>
                  <span>Co-Deep 프로젝트 자세히 보기</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.storyText}>
            <p>
              개발을 제대로 시작한 지 얼마 안된 상태에서 프로젝트 두 개를 병행했습니다. 
              정말 모르는 게 너무 많았는데, 그때마다 도서관에 가서 관련 책들을 다 뒤져보고 
              구글링을 하면서 하나씩 배워갔습니다. 포기하지 않고 끝까지 해보자고 마음먹었더니 
              개발 시작한 지 5개월만에 Co-Deep Learning Project에서 최우수상을 받을 수 있었습니다.
            </p>
          </div>
      
          <div className={styles.techJourney}>
            <div className={styles.techPhase}>
              <h4>수면 관리 앱 개발 - 애플 베타테스트 완료</h4>
              <p><strong>1인 프론트엔드 개발 + 애플 베타테스트</strong> </p>
              <div className={styles.projectHighlight}>
                <strong>개발자 시선으로 바라보는 앱과 사용자 입장에서 바라보는 앱(UX)의 차이점에 대해 깨달음</strong> 
              </div>
              <div className={styles.projectButtonContainer}>
                <a href="/project/hanium" className={styles.projectButton}>
                  <span>수면 앱 프로젝트 자세히 보기</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.storyText}>
            <p>
              한이음 프로젝트에서는 아무것도 모르는 상태로 Flutter를 시작했습니다. 
              유튜브에 나와있는 Flutter 전체 강의를 일주일만에 완주하며 시간을 쪼개며 공부했습니다. 
              다른 일들도 하면서 Flutter를 배워야 했는데, 정말 집중해서 빠르게 익혔습니다. 
              혼자서 전체 앱 개발을 다 맡았고, 애플 베타테스트까지 마쳤습니다. 
              이 과정에서 개발자의 시선과 일반 사용자의 시선이 얼마나 다른지 깊이 깨달았습니다. 
              사용자 입장에서 생각하는 것이 얼마나 중요한지 배웠습니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Chapter 5",
      subtitle: "풀스택 개발자로의 도전",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
            <h3>프론트엔드에서 백엔드로, 그리고 창업까지</h3>
            <p className={styles.chapterSubtitle}>2025.08 - 현재</p>
          </div>
          <div className={styles.storyText}>
         
            <p>
              
            </p>
            <p>
              창업팀에서 CTO를 맡으면서 기술과 비즈니스 요구사항을 연결하는 능력이 
              정말 중요하다는 것을 알게 되었습니다. 단순히 기술만 잘하는 것이 아니라, 
              그 기술이 어떤 비즈니스 가치를 만들어내는지 생각해야 한다는 것을 배웠습니다.
            </p>
          </div>
          <div className={styles.integrationGrid}>
            <div className={styles.integrationItem}>
              <h4>Re-local 프로젝트 - 풀스택 개발과 Github, React 교육 진행</h4>
              <p>혜화 소극장 언어 장벽 해소 플랫폼 개발하며 STT→번역→TTS 파이프라인 구축, 팀원 교육까지 담당</p>
              <div className={styles.storyText}>
                Re-local 프로젝트에서 처음으로 백엔드 개발을 맡으며 MongoDB, Node.js, Express.js 기반의 기술 스택을 본격적으로 다뤄보게 되었습니다. 
                STT→번역→TTS 파이프라인을 구축하며 풀스택 개발을 진행했습니다.

모든 팀원이 처음 개발을 접하는 상황이었기에, 단순히 백엔드 역할을 넘어서 GitHub 사용법과 프론트엔드 기초까지 함께 교육하며 프로젝트를 이끌었습니다.

<br /> <br />"일단 해보자"는 태도로 시작했지만, 오히려 그 과정에서 훨씬 더 많은 것을 배울 수 있었습니다. 모르는 기술을 빠르게 습득하고, 가르치는 과정에서 제 이해도 또한 깊어졌습니다.

이 경험을 통해 단순한 기능 구현을 넘어서 기술 지식을 팀과 공유하며 함께 성장하는 리더십과 커뮤니케이션의 중요성을 배웠습니다.
              </div>
            </div>
            <div className={styles.integrationItem}>
              <h4>창업 시작 - 라추 CTO</h4>
              <p>1인 CTO를 맡으며 기술적 리더십과 비즈니스 이해를 동시에 발전</p>
              <div className={styles.storyText}>
                성균관대 창업팀 라추에서 CTO를 맡게 되었습니다. 
                교내 학생 커뮤니티 플랫폼을 기획하고 개발하는 일이었는데, 
                Next.js 프론트엔드와 Firebase 백엔드/DB/인증을 모두 담당해야 했습니다. 
                피드, 게시판, 알림 기능까지 포함해서 MVP 출시 준비를 하고 있습니다. 
                기술적 리더십과 비즈니스 이해를 동시에 발전시켜야 하는 상황이었습니다.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Chapter 6",
      subtitle: "low-level language에 사랑에 빠지다",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.chapterIntro}>
            <h3>하드웨어 개발, 새로운 세게로</h3>
            <p className={styles.chapterSubtitle}>2025.03 - 현재</p>
          </div>
          <div className={styles.techJourney}>
            <div className={styles.techPhase}>
              <h4>C언어와 C++에 사랑에 빠지다</h4>
              <p><strong>Low Level Language</strong> • 소프트웨어 전공하며 임베디드 쪽 관심</p>
              <div className={styles.projectHighlight}>
                <strong>SIOR(로봇동아리)</strong> - 하드웨어에 대해 더 알아보고자 활동 시작
              </div>
              <div className={styles.storyText}>
                소프트웨어 전공을 하면서 C언어와 C++을 배우게 되었는데, 
                정말 이 언어들에 사랑에 빠졌습니다. Low Level Language의 매력이 무엇인지 알게 되었습니다. 
                하드웨어와 가까운 언어를 배우면서 임베디드 쪽에 관심이 생겼습니다. 
                그래서 SIOR(로봇동아리)에서 활동을 시작했습니다. 
                하드웨어에 대해 더 알아보고 싶었습니다.
              </div>
            </div>
            <div className={styles.techPhase}>
              <h4>메이킹 해커톤</h4>
              <p><strong>하드웨어 개발</strong> • 아두이노와 다양한 센서 연결, 납땜 등 처음 해봄</p>
              <div className={styles.projectHighlight}>
                <strong>처음이라 어려웠지만</strong> - 그만큼 더 다양한 영상과 인터넷 소스 활용하며 공부
              </div>
              <div className={styles.storyText}>
                메이킹 해커톤에서 하드웨어 개발을 맡게 되었습니다. 
                아두이노와 다양한 센서를 연결하고, 납땜도 처음 해봤습니다. 
                정말 처음이라 어려웠지만, 그만큼 더 다양한 영상과 인터넷 소스를 활용하며 공부했습니다. 
                유튜브에서 아두이노 강의를 찾아보고, 센서 연결 방법을 배우고, 
                납땜하는 방법까지 하나씩 익혔습니다. 
                어려울수록 더 열심히 해야겠다는 마음이 들었습니다.
              </div>
            </div>
            <div className={styles.techPhase}>
              <h4>물리적-디지털 연결</h4>
              <p><strong>IoT 개발</strong> • 수면 로봇 '알라' 프로젝트로 하드웨어와 소프트웨어 융합</p>
              <div className={styles.projectHighlight}>
                <strong>Flutter + IoT</strong> - 모바일 앱과 하드웨어를 연결하는 혁신적 솔루션
              </div>
              <div className={styles.storyText}>
                한이음 드림업 공모전에서 수면 로봇 '알라' 프로젝트를 하게 되었습니다. 
                Flutter로 모바일 앱을 개발하고, 알라 인형과 연동하는 작업이었습니다. 
                LED, 스피커, 음성을 모두 제어할 수 있는 맞춤형 수면 인터랙션을 완성했습니다. 
                Flutter + IoT로 모바일 앱과 하드웨어를 연결하는 정말 혁신적인 솔루션이었습니다. 
                1인 프론트엔드 개발자로 모든 것을 담당했는데, 
                정말 보람 있는 프로젝트였습니다.
              </div>
            </div>
          </div>
          <div className={styles.techPhilosophy}>
            <h4>완전히 새로운 도전</h4>
            <p>
              납땜도 처음, 센서 연결도 처음이었지만 <strong>"해보지 않으면 모르지"</strong>라는 마음으로 
              도전했습니다. 어려울수록 더 다양한 자료를 찾아보고, 유튜브 영상을 보고, 
              인터넷의 모든 정보를 활용하며 공부했습니다. 
              이제 <strong>소프트웨어와 하드웨어를 연결하는 개발자</strong>로 성장하고 있습니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Epilogue",
      subtitle: "오뚝이의 다음 도전",
      content: (
        <div className={styles.pageContent}>
          <div className={styles.futureVision}>
            <h3>이 여정의 다음 챕터를 함께 열어보지 않으시겠어요?</h3>
            <p>
              문과에서 이과까지, 소프트웨어에서 하드웨어까지— 
              <strong>오뚝이처럼 넘어져도 다시 일어서는</strong> 제가 
              어떤 새로운 도전을 할지 기대되지 않으시겠습니까?
            </p>
            <p>
              <strong>"너가 할 수 있겠니?"</strong>라는 질문에 
              <strong>"너 아니면 누가해"</strong>라고 답할 수 있게 된 
              저의 이야기가 계속될 것입니다.
            </p>
            <div className={styles.ctaSection}>
              <a href="/이력서_이윤지.pdf" className={styles.ctaButton} target="_blank" rel="noreferrer">
                <span>PDF 이력서 보기</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="/contact" className={styles.ctaButtonSecondary}>
                <span>연락하기</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.storyContainer}>
      {/* Book Header */}
      <motion.div
        className={styles.bookHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>MY JOURNEY</h1>
        <p>끝없이 도전하며 성장한 여정</p>
        <div className={styles.pageIndicator}>
          {storyPages.map((_, index) => (
            <div
              key={index}
              className={`${styles.pageDot} ${index === currentPage ? styles.active : ''}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Book Content */}
      <div className={styles.bookContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className={styles.bookPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.pageHeader}>
              <h2 className={styles.pageTitle}>{storyPages[currentPage].title}</h2>
              <h3 className={styles.pageSubtitle}>{storyPages[currentPage].subtitle}</h3>
            </div>
            {storyPages[currentPage].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className={styles.pageNavigation}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <i className="fas fa-chevron-left"></i>
            <span>이전</span>
          </button>
          
          <div className={styles.pageInfo}>
            {currentPage + 1} / {storyPages.length}
          </div>
          
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextPage}
            disabled={currentPage === storyPages.length - 1}
          >
            <span>다음</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
