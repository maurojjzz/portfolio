import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.hamburger}>
      <input className={styles.checkbox} type="checkbox" />
      <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
        <path
          className={`${styles.lineTop} ${styles.line}`}
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 11L44 11"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 24H43"
          className={`${styles.lineMid} ${styles.line}`}
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 37H43"
          className={`${styles.lineBottom} ${styles.line}`}
        ></path>
      </svg>
    </div>
  );
};

export default Menu;
