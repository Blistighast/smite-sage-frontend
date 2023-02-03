import Image from "next/image";
import styles from "@/styles/cards.module.scss";
import Link from "next/link";

interface LayoutProps {
  god: {
    Name: string;
    Pantheon: string;
    Roles: string;
    godCard_URL: string;
    id: number;
  };
}

const GodCard: React.FC<LayoutProps> = ({ god }) => {
  return (
    <Link href={`/god/${god.id}`}>
      <div className={`${styles.card} ${styles.godCard}`}>
        {god.Name} {god.Pantheon} {god.Roles}
        <Image
          src={god.godCard_URL}
          alt={`picture of god ${god.Name}`}
          width={240}
          height={400}
        />
      </div>
    </Link>
  );
};

export default GodCard;
