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
    <Link
      href={`/god/${god.id}`}
      className={`${styles.card} ${styles.godCard}`}
    >
      <h3>{god.Name}</h3>
      <Image
        className="godCardPic"
        src={god.godCard_URL}
        alt={`picture of ${god.Name}`}
        // fill
        width={300}
        height={420}
      />
      <span className={styles.lowerFrame}>
        <div className="roles">
          <Image
            src={`/class-icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={50}
            height={50}
          />
          <p>{god.Roles}</p>
        </div>
        <div className={styles.pantheon}>
          <Image
            src={`/pantheon_icons/${god.Pantheon}.webp`}
            alt="Pantheon Icon"
            width={50}
            height={50}
          />
          <p>{god.Pantheon}</p>
        </div>
      </span>
    </Link>
  );
};

export default GodCard;
