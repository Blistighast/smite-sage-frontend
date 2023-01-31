import Logo from "./Logo";
import Nav from "./Nav";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
