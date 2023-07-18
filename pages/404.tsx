import styles from "@/styles/error.module.scss";

const Custom404 = () => {
  return (
    <div className={`${styles.error404}`}>
      <h1 className={`${styles.error404H1}`}>404</h1>
      <div className={`${styles.error404p}`}>Page Not Found</div>
    </div>
  );
};

export default Custom404;
