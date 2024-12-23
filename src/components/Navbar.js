import React from "react";
import { Link } from "react-router-dom"; // React Router Link 가져오기
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* 로고 */}
      <div className={styles.logo}>
        <Link to="/">MyPortfolio</Link>
      </div>

      {/* 네비게이션 링크 */}
      <ul className={styles.navLinks}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/activities">Activities</Link></li> {/* Activities로 이동 */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* 외부 링크 */}
      <div className={styles.externalLinks}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://yourblog.com/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-blog"></i>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
