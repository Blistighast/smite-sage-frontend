import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/card.module.scss";

interface GodProps {
  god: {
    Name: string;
    Pantheon: string;
    Roles: string;
    godCard_URL: string;
    godIcon_URL: string;
    id: number;
  };
}

const GodCard: React.FC<GodProps> = ({ god }) => {
  return (
    <Link
      href={`/god/${god.id}`}
      className={`${styles.card} ${styles.godCard}`}
    >
      <h3>{god.Name}</h3>
      <Image
        className={styles.godCardPic}
        // big picture
        // src={god.godCard_URL}
        // small picture
        src={god.godIcon_URL}
        alt={`picture of ${god.Name}`}
        // fill
        width={160}
        height={160}
      />
      <svg width={180} height={100}>
        <image href="/lowerFrame.svg" width={180} height={100} />
      </svg>
      <span className={styles.lowerFrame}>
        <div className="roles">
          <Image
            src={`/class-icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={40}
            height={40}
          />
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
        <p>{god.Roles}</p>
      </span>
    </Link>
  );
};

export default GodCard;
