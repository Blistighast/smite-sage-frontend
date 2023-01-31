import Link from "next/link";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div>
      <Link href="/gods">Gods</Link>
    </div>
  );
};

export default Nav;
