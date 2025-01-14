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
      </ul>

      {/* 외부 링크 */}
      <div className={styles.externalLinks}>
        <a href="https://www.youtube.com/@studyesme9286/videos" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
