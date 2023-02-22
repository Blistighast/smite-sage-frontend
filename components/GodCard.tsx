import Image from "next/image";
import styles from "@/styles/card.module.scss";
import Link from "next/link";

interface LayoutProps {
  god: {
    Name: string;
    Pantheon: string;
    Roles: string;
    godCard_URL: string;
    godIcon_URL: string;
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
        // big picture
        // src={god.godCard_URL}
        // small picture
        src={god.godIcon_URL}
        alt={`picture of ${god.Name}`}
        // fill
        width={150}
        height={150}
      />
      <svg width={150} height={100}>
        <image href="/lowerFrame.svg" width={150} height={100} />
      </svg>
      <span className={styles.lowerFrame}>
        <div className="roles">
          <Image
            src={`/class-icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={40}
            height={40}
          />
          <p>{god.Roles}</p>
        </div>
        <div className={styles.pantheon}>
          <Image
            src={`/pantheon_icons/${god.Pantheon}.webp`}
            alt="Pantheon Icon"
            width={40}
            height={40}
          />
          <p>{god.Pantheon}</p>
        </div>
      </span>
    </Link>
  );
};

export default GodCard;
