import React from "react";
import styles from "./contact.module.css";
import { FaEnvelope, FaPhone, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa"; 

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
          <strong>GitHub:</strong> 
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            github.com/your-github
          </a>
        </p>
        <p>
          <FaYoutube className={styles.icon} /> 
          <strong>YouTube:</strong> 
          <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
            youtube.com/your-channel
          </a>
        </p>
        <p>
          <FaInstagram className={styles.icon} /> 
          <strong>Instagram:</strong> 
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            @your-profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
