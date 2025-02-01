import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonContainer}>
      <h1 className={styles.title}>🚀 Coming Soon...</h1>
      <p className={styles.subtitle}>페이지가 준비 중입니다. 곧 만나보실 수 있어요! 😊</p>
      <p className={styles.footer}>Stay tuned! 🎉</p>
    </div>
  );
};

export default ComingSoon;
