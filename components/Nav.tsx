import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/runners.module.scss";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const { pathname } = useRouter();

  const activeLink = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <div className={styles.navContainer}>
      <Link href="/" className={activeLink("/")}>
        Home
      </Link>
      <Link href="/gods" className={activeLink("/gods")}>
        Gods
      </Link>
      <Link href="/items" className={activeLink("/items")}>
        Items
      </Link>
    </div>
  );
};

export default Nav;
