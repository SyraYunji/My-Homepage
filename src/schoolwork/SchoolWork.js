import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaQuestionCircle, FaLightbulb, FaUsers, FaTrophy, FaChartLine, FaBookOpen, FaCode, FaRobot, FaCertificate, FaTimes } from "react-icons/fa";
import styles from "./SchoolWork.module.css";

const SchoolWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentSchool = {
    school: "성균관대학교",
    major: "경영학과 + 소프트웨어학과 (복수전공)",
    period: "2024.03 - 현재",
    gpa: "4.35/4.5"
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };


  const qaData = [
    {
      question: "어떻게 다양한 스펙을 한번에 채울 수 있었나요?",
      icon: <FaLightbulb />,
      color: "#764ba2",
      answer: "학교 내 프로젝트와 동아리, 비교과 프로그램을 적극 활용했습니다.",
      categories: [
        {
          title: "챌린지스퀘어 (비교과 프로그램)",
          description: "외부 공모전 동아리? 좋은데.. 경쟁률도 높고 광고가 많아서 믿기가 어려워요..ㅠ 왜 멀리서 찾나요? 챌린지 스퀘어 안에 있는 비교과 프로그램에 좋은 프로그램이 너무 많으니 활용하자!!",
          programs: [
            {
              name: "성균튜터링 튜터",
              description: "학습 멘토링 프로그램 참여",
              projects: [],
              link: "/schoolwork/statistics"
            },
            {
              name: "Co-Deep Learning 프로젝트",
              description: "AI 기반 정치 성향 분석 플랫폼 (최우수상)",
              projects: [
                {
                  name: "Co-Deep Project",
                  description: "AI 기반 정치 성향 분석 플랫폼",
                  link: "/project/co-deep"
                }
              ]
            },
            {
              name: "여름방학 AI 교육캠프 및 경진대회",
              description: "인공지능혁신융합대학사업단 주최 (장려상)",
              projects: [],
              reviewLink: "https://blog.naver.com/syralee1004/223543488972"
            },
            {
              name: "성균공부방: Study with Mooc",
              description: "온라인 학습 플랫폼 활용 프로그램",
              projects: []
            }
          ]
        },
        {
          title: "교내 동아리",
          description: "학교 내 동아리 활동을 통한 실무 경험과 기술 습득",
          programs: [
            {
              name: "기술 동아리",
              description: "소프트웨어와 하드웨어 기술을 동시에 학습",
              projects: [
                {
                  name: "Comit 동아리",
                  description: "소프트웨어 과동아리 - 스터디를 통한 파이썬 지식 습득",
                  link: ""
                },
                {
                  name: "SIOR 동아리",
                  description: "로봇 동아리 - 하드웨어 학습 및 로봇 제작 경험",
                  link: ""
                }
              ]
            },
            {
              name: "멋쟁이 사자처럼 동아리",
              description: "프론트엔드 개발에 필요한 React.js, Next.js를 학습 및 프로젝트 경험 습득",
              projects: [
                {
                  name: "Timi Project",
                  description: "그룹 시간 조율 서비스 개발",
                  link: "/project/timi"
                },
                {
                  name: "Re-local Project", 
                  description: "혜화 소극장 언어 장벽 해소 플랫폼",
                  link: "/project/re-local"
                }
              ]
            }
          ]
        }
      ]
    },
        {
          question: "교내 활동을 하면 가장 좋은 점이 뭔가요?",
          icon: <FaBookOpen />,
          color: "#4facfe",
          answer: "가장 좋은 점은 챌린지 스퀘어에서 나의 모든 활동을 자동으로 기록해준다는 점이에요.",
          description: "포트폴리오를 활동 할때마다 하기 쉽지 않은데 학교에서 자동으로 기록해주니 나중에 방학때 몰아서 회고하기 너무 좋다",
          sections: [
            {
              title: "챌린지스퀘어 e-포트폴리오 데이터",
              description: "성균관대학교 챌린지스퀘어에서 자동으로 기록된 모든 활동 데이터를 한눈에 확인할 수 있습니다.",
              images: [
                "/images/challenge1.jpg",
                "/images/challenge2.jpg"
              ]
            },
            {
              title: "우수 학부생 연구 학점제 확인",
              description: "우수학부생 어떻게 하는지 질문 많은데 저는 교내 프로젝트인 Co-Deep Learning에서 연이 닿은 교수님 아래에서 연구학점제를 프로젝트 연장선으로 진행하였습니다!",
              images: [
                "/images/research.jpg"
              ]
            },
            {
              title: "교과과정과 평점평균, 이수학점도 확인할 수 있어요!",
              description: "",
              images: [
                "/images/curriculum1.jpg",
                "/images/curriculum2.jpg", 
              ]
            }
          ]
        },
    {
      question: "어떻게 고학점을 받았나요?",
      icon: <FaChartLine />,
      color: "#667eea",
      answer: "체계적인 4단계 학습법을 통해 고학점을 달성했습니다.",
      steps: [
        {
          step: "1차",
          title: "강의를 들으며 아이패드로 필기",
          description: "수업 중 실시간으로 핵심 내용을 정리 + 수업 후 키워드 빈칸 뚫어서 공부"
        },
        {
          step: "2차", 
          title: "노트에 나만의 방식으로 정리",
          description: "아이패드 필기를 노트에 체계적으로 재정리"
        },
        {
          step: "3차",
          title: "강의를 다시 들으며 추가 정리",
          description: "복습을 통해 놓친 부분을 보완하고 심화 학습"
        },
        {
          step: "4차",
          title: "다른 사람에게 설명해보기",
          description: "가르치기를 통해 완전한 이해도 확인"
        }
      ],
      studySections: [
        {
          subject: "시스템 프로그램",
          images: [
            "/images/system_program1.jpg.jpeg",
            "/images/system_program2.jpg.jpeg",
            "/images/system_program3.jpg.jpeg",
            "/images/system_program4.jpg.jpeg"
          ]
        },
        {
          subject: "",
          subjects: [
            {
              name: "마케팅관리",
              images: [
                "/images/marketing1.jpeg",
                "/images/marketing2.jpeg"
              ]
            },
            {
              name: "컴퓨터구조개론",
              images: [
                "/images/computer1.jpeg",
                "/images/computer2.jpeg"
              ]
            }
          ]
        },
        {
          subject: "조직행동",
          images: [
            "/images/organization1.jpeg",
            "/images/organization2.jpeg"
          ]
        },
        {
          subject: "경영통계",
          images: [
            "/images/stat1.jpeg",
            "/images/stat2.jpeg"
          ],
          link: "/schoolwork/statistics"
        }
      ]
    },
    {
      question: "자격증 공부법이 궁금해요!!",
      icon: <FaCertificate />,
      color: "#ffd700",
      answer: "각 자격증별로 체계적인 공부법을 유튜브에 정리해두었습니다!",
      certificates: [
        {
          name: "TOEIC(만점)",
          description: <>990점 만점 달성 <br />공부법</>,
          youtubeLink: "https://www.youtube.com/watch?v=Da2jysdOY4I&t=419s",
          thumbnail: "/images/toeic.jpg"
        },
        {
          name: "SQLD",
          description: <>SQL 개발자 <br />공부법</>,
          youtubeLink: "https://www.youtube.com/watch?v=Fu7NkaqIchM",
          thumbnail: "/images/sqld.jpg"
        },
        {
          name: "ADSP",
          description: <>데이터분석준전문가<br />공부법</>,
          youtubeLink: "https://www.youtube.com/watch?v=E6dWleU5APs&t=80s",
          thumbnail: "/images/adsp.jpg"
        },
        {
          name: "한능검(1급)",
          description: <>한국사능력검정시험<br />공부법</>,
          youtubeLink: "https://www.youtube.com/watch?v=Rqlk3ucMs1k&t=447s",
          thumbnail: "/images/history.jpg"
        }
      ]
    }
  ];

  const schoolStats = [
    { number: "4.35", label: "현재 GPA", icon: "📊" },
    { number: "6", label: "자격증", icon: "📜" },
    { number: "4", label: "수상", icon: "🏆" },
    { number: "5+", label: "동아리/프로젝트", icon: "👥" }
  ];

  return (
    <div className={styles.schoolWorkPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
     

          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              My <span className={styles.whiteText}>School Work</span>
            </h1>
            <p className={styles.heroSubtitle}>
              성균관대학교에서의 학업 성과와 교내 활동을 소개합니다
              <br />대부분의 스펙을 학교에서 쌓은 저의 비법을 공유합니다!!
            </p>
            <div className={styles.schoolInfo}>
              <h3 className={styles.schoolName}>{currentSchool.school}</h3>
              <p className={styles.schoolMajor}>{currentSchool.major}</p>
              <div className={styles.gpaBadge}>
                <span className={styles.gpaLabel}>GPA:</span>
                <span className={styles.gpaValue}>{currentSchool.gpa}</span>
              </div>
            </div>
            <div className={styles.certificateBadges}>
              <img src="/images/badge1.png" alt="TOEIC" className={styles.certificateBadge} />
              <img src="/images/badge2.png" alt="SQLD" className={styles.certificateBadge} />
              <img src="/images/badge3.png" alt="ADsP" className={styles.certificateBadge} />
            </div>
            <div className={styles.scrollHint}>
              <p className={styles.scrollText}>아래로 내려주세요</p>
              <div className={styles.scrollArrow}>↓</div>
            </div>
          </div>

       
        </motion.div>
      </section>

      {/* Q&A Section */}
      <section className={styles.qaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
           
          </motion.div>

          <div className={styles.qaContainer}>
            {qaData.map((qa, qaIndex) => (
              <motion.div
                key={qaIndex}
                className={styles.qaCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: qaIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.questionHeader}>
                  <div className={styles.questionIcon} style={{ color: qa.color }}>
                    {qa.icon}
                  </div>
                  <h3 className={styles.questionText}>{qa.question}</h3>
                </div>
                
                <div className={styles.answerSection}>
                  <p className={styles.answerText}>{qa.answer}</p>
                  
                  {qa.description && (
                    <p className={styles.descriptionText}>{qa.description}</p>
                  )}
                  
                  {qa.steps && (
                    <div className={styles.stepsContainer}>
                      <h4 className={styles.stepsTitle}>4단계 학습법</h4>
                      <div className={styles.stepsGrid}>
                        {qa.steps.map((step, stepIndex) => (
                          <motion.div
                            key={stepIndex}
                            className={styles.stepCard}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className={styles.stepNumber}>{step.step}</div>
                            <h5 className={styles.stepTitle}>{step.title}</h5>
                            <p className={styles.stepDescription}>{step.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {qa.studySections && (
                    <div className={styles.studySectionsContainer}>
                      <div className={styles.studySectionsHeader}>
                        <h4 className={styles.studySectionsTitle}>학습 과정 사진(몇개의 과목 훔쳐보기🫣)</h4>
                        <div className={styles.studyButtons}>
                          <a
                            href="https://youtu.be/jotx7amRTPM?si=5w4lCuwe5sYiqTQT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.studyButton}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M23 12s0-8.5-11-8.5S1 12 1 12s0 8.5 11 8.5 11-8.5 11-8.5z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>중간고사 영상 보러가기</span>
                          </a>
                          <a
                            href="https://youtu.be/JY1JFxxLmJI?si=ci_HWQG61WsMN6QH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.studyButton}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M23 12s0-8.5-11-8.5S1 12 1 12s0 8.5 11 8.5 11-8.5 11-8.5z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>기말고사 영상 보러가기</span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.studySectionsGrid}>
                        {qa.studySections.map((studySection, sectionIndex) => (
                          <div key={sectionIndex} className={styles.studySectionItem}>
                            {studySection.subject && (
                              <h5 className={styles.studySectionSubject}>
                                {studySection.link ? (
                                  <Link to={studySection.link} className={styles.subjectLink}>
                                    {studySection.subject}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </Link>
                                ) : (
                                  studySection.subject
                                )}
                              </h5>
                            )}
                            {studySection.subjects ? (
                              <div className={styles.multiSubjectContainer}>
                                {studySection.subjects.map((subject, subjectIndex) => (
                                  <div key={subjectIndex} className={styles.subjectContainer}>
                                    <h6 className={styles.subjectName}>{subject.name}</h6>
                                    <div className={styles.studySectionImages}>
                                      {subject.images.map((image, imageIndex) => (
                                        <motion.div
                                          key={imageIndex}
                                          className={styles.imageCard}
                                          whileHover={{ scale: 1.05 }}
                                          transition={{ duration: 0.2 }}
                                          onClick={() => openImageModal(image)}
                                          style={{ cursor: 'pointer' }}
                                        >
                                          <img src={image} alt={`${subject.name} ${imageIndex + 1}`} className={styles.studyImage} />
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className={styles.studySectionImages}>
                                {studySection.images.map((image, imageIndex) => (
                                  <motion.div
                                    key={imageIndex}
                                    className={styles.imageCard}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => openImageModal(image)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    <img src={image} alt={`${studySection.subject} ${imageIndex + 1}`} className={styles.studyImage} />
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {qa.categories && (
                    <div className={styles.categoriesContainer}>
                      {qa.categories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className={styles.categorySection}>
                          <h4 className={styles.categoryTitle}>{category.title}</h4>
                          <p className={styles.categoryDescription}>{category.description}</p>
                          <div className={styles.programsGrid}>
                            {category.programs.map((program, programIndex) => (
                              <motion.div
                                key={programIndex}
                                className={styles.programCard}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                              >
                                <h5 className={styles.programTitle}>{program.name}</h5>
                                <p className={styles.programDescription}>{program.description}</p>
                                
                                {program.link && (
                                  <div className={styles.detailButtonContainer}>
                                    <Link to={program.link} className={styles.detailButton}>
                                      <span>자세히 보기</span>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </Link>
                                  </div>
                                )}
                                
                                {program.reviewLink && (
                                  <div className={styles.reviewButtonContainer}>
                                    <a
                                      href={program.reviewLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={styles.reviewButton}
                                    >
                                      <span>생생한 나의 후기 보러가기</span>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </a>
                                  </div>
                                )}
                                
                                {program.projects && program.projects.length > 0 && (
                                  <div className={styles.projectsList}>
                                    {program.projects.map((project, projectIndex) => (
                                      <Link
                                        key={projectIndex}
                                        to={project.link}
                                        className={styles.projectLink}
                                      >
                                        <div className={styles.projectCard}>
                                          <h6 className={styles.projectName}>{project.name}</h6>
                                          <p className={styles.projectDescription}>{project.description}</p>
                                          <div className={styles.projectArrow}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {qa.certificates && (
                    <div className={styles.certificatesContainer}>
                      <h4 className={styles.certificatesTitle}>자격증별 공부법 영상</h4>
                      <div className={styles.certificatesGrid}>
                        {qa.certificates.map((certificate, certIndex) => (
                          <motion.a
                            key={certIndex}
                            href={certificate.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.certificateCard}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div 
                              className={styles.certificateThumbnail}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openImageModal(certificate.thumbnail);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <img src={certificate.thumbnail} alt={certificate.name} className={styles.thumbnailImage} />
                            </div>
                            <h5 className={styles.certificateName}>{certificate.name}</h5>
                            <p className={styles.certificateDescription}>{certificate.description}</p>
                            <div className={styles.youtubeButton}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M23 12s0-8.5-11-8.5S1 12 1 12s0 8.5 11 8.5 11-8.5 11-8.5z" stroke="currentColor" strokeWidth="2"/>
                                <path d="M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span>유튜브 보기</span>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}

                  {qa.sections && (
                    <div className={styles.sectionsContainer}>
                      {qa.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.sectionItem}>
                          <h4 className={styles.sectionTitle}>{section.title}</h4>
                          {section.description && (
                            <p className={styles.sectionDescription}>{section.description}</p>
                          )}
                          <div className={styles.sectionImagesGrid}>
                            {section.images.map((image, imageIndex) => (
                              <motion.div
                                key={imageIndex}
                                className={styles.imageCard}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => openImageModal(image)}
                                style={{ cursor: 'pointer' }}
                              >
                                <img src={image} alt={`${section.title} ${imageIndex + 1}`} className={styles.studyImage} />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2>더 자세한 이야기가 궁금하신가요?</h2>
          <p>개발자로 성장한 과정과 프로젝트 경험을 확인해보세요.</p>
          <div className={styles.ctaButtons}>
            <Link to="/story" className={styles.ctaButton}>
              <span>My Story 보기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/project" className={styles.ctaButtonAlt}>
              <span>Projects 보기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>


          {/* Image Modal */}
          {selectedImage && (
            <motion.div
              className={styles.imageModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={closeImageModal}>
                  <FaTimes />
                </button>
                <img src={selectedImage} alt="확대된 이미지" className={styles.modalImage} />
              </div>
            </motion.div>
          )}
        </div>
  );
};

export default SchoolWork;
