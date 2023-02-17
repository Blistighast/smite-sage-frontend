import styles from "@/styles/navbar.module.scss";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className={styles.logoContainer}>
      <h1 className={styles.logo}>SMITE SAGE</h1>
    </Link>
  );
};

export default Logo;
