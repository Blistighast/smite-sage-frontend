import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/card.module.scss";
import LowerFrameSvg from "./LowerFrameSvg";

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
      href={`/god/${god.Name}`}
      className={`${styles.card} ${styles.godCard}`}
    >
      <h3>{god.Name}</h3>
      {god.godIcon_URL && (
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
      )}
      <LowerFrameSvg width={180} height={100} color={"#031329"} />
      <span className={styles.lowerFrame}>
        <div className="roles">
          <Image
            src={`/class-icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={43}
            height={43}
          />
        </div>
        <div className={styles.pantheon}>
          <Image
            src={`/pantheon_icons/${god.Pantheon}.webp`}
            alt="Pantheon Icon"
            width={43}
            height={43}
          />
          <p>{god.Pantheon}</p>
        </div>
        <p>{god.Roles}</p>
      </span>
    </Link>
  );
};

export default GodCard;
