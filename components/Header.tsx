import Logo from "./Logo";
import Nav from "./Nav";

import styles from "@/styles/navbar.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
