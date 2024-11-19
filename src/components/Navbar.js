import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* 로고 */}
      <div className={styles.logo}>
        <a href="#home">MyPortfolio</a>
      </div>

      {/* 네비게이션 링크 (오른쪽 정렬) */}
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 외부 링크 (GitHub, YouTube, Blog, Instagram) */}
      <div className={styles.externalLinks}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* GitHub 아이콘 */}
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> {/* YouTube 아이콘 */}
        </a>
        <a href="https://yourblog.com/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-blog"></i> {/* Blog 아이콘 */}
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Instagram 아이콘 */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
