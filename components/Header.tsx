import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";

import styles from "@/styles/runners.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Search />
      <Nav />
    </div>
  );
};

export default Header;
