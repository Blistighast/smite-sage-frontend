import Link from "next/link";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/gods">Gods</Link>
      {/* remove dev page later */}
      <Link href="/dev">Dev</Link>
    </div>
  );
};

export default Nav;
