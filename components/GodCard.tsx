import Image from "next/image";
import styles from "@/styles/card.module.scss";
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
        <Image
          className="godCardPic"
          src={god.godCard_URL}
          alt={`picture of ${god.Name}`}
          width={240}
          height={400}
        />
        <p>{god.Name}</p>
        <span className="pantheon">
          <p>{god.Pantheon}</p>
          <Image
            src={`/pantheon_icons/${god.Pantheon}.webp`}
            alt="Pantheon Icon"
            width={30}
            height={30}
          />
        </span>
        <span className="roles">
          <p>{god.Roles}</p>
          <Image
            src={`/class-icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={30}
            height={30}
          />
        </span>
      </div>
    </Link>
  );
};

export default GodCard;
