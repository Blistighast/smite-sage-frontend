import Link from "next/link";

import styles from "@/styles/runners.module.scss";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">Home</Link>
      <Link href="/gods">Gods</Link>
      {/* remove dev page later */}
      <Link href="/dev">Dev</Link>
    </div>
  );
};

export default Nav;
