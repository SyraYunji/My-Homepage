import React from "react";
import styles from "./contact.module.css";
import { FaEnvelope, FaPhone, FaGithub, FaYoutube, FaBlog } from "react-icons/fa"; 

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>📩 Contact Me</h1>
      <p className={styles.subtitle}>
        아래 정보로 저에게 연락하실 수 있습니다!  
        궁금한 점이 있다면 언제든지 문의 주세요. 😊
      </p>

      {/* 📌 내 정보 섹션 */}
      <div className={styles.contactInfo}>
        <p><FaEnvelope className={styles.icon} /> <strong>Email: </strong>  syralee1004@naver.com</p>
        <p><FaPhone className={styles.icon} /> <strong>Phone:</strong> +82 10-3423-0041</p>
        <p>
          <FaGithub className={styles.icon} /> 
          <strong>GitHub: </strong> 
          <a href="https://github.com/SyraYunji" target="_blank" rel="noopener noreferrer">
          Click here
          </a>
        </p>
        <p>
          <FaYoutube className={styles.icon} /> 
          <strong>YouTube: </strong> 
          <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noopener noreferrer">
             Click here
          </a>
        </p>
        <p>
          <FaBlog className={styles.icon} /> 
          <strong>Blog: </strong> 
          <a href="https://blog.naver.com/syralee1004" target="_blank" rel="noopener noreferrer">
          Click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
