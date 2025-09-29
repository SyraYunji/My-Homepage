import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaYoutube, FaBlog, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./contact.module.css";

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "syralee1004@naver.com",
      link: "mailto:syralee1004@naver.com",
      color: "#667eea"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+82 10-3423-0041",
      link: "tel:+821034230041",
      color: "#764ba2"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Seoul, South Korea",
      link: null,
      color: "#f39c12"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/SyraYunji",
      color: "#333"
    },
    {
      icon: <FaYoutube />,
      title: "YouTube",
      link: "https://www.youtube.com/@studyesme9286/videos",
      color: "#ff0000"
    },
    {
      icon: <FaBlog />,
      title: "Blog",
      link: "https://blog.naver.com/syralee1004",
      color: "#03c75a"
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Let's <span className={styles.highlight}>Connect</span>
          </h1>
          <p className={styles.heroSubtitle}>
            새로운 프로젝트나 협업 기회에 대해 이야기해보세요.
            <br />
            언제든지 연락주시면 빠르게 답변드리겠습니다.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}

            {/* Contact Info */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <p className={styles.infoSubtitle}>
                다양한 방법으로 연락하실 수 있습니다.
              </p>

              <div className={styles.contactMethods}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={styles.contactMethod}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.methodIcon} style={{ backgroundColor: info.color }}>
                      {info.icon}
                    </div>
                    <div className={styles.methodContent}>
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Follow Me</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ backgroundColor: social.color }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                      <span>{social.title}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>함께 멋진 프로젝트를 만들어보시겠습니까?</h2>
          <p>새로운 아이디어나 협업 기회가 있다면 언제든 연락해주세요.</p>
          <a href="mailto:syralee1004@naver.com" className={styles.ctaButton}>
            바로 연락하기
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
