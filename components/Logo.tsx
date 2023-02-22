import Link from "next/link";

import styles from "@/styles/runners.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href="/" className={styles.logoContainer}>
      <h1 className={styles.logo}>SMITE SAGE</h1>
    </Link>
  );
};

export default Logo;
