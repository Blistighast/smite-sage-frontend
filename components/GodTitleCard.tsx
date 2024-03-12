import Image from "next/image";

import styles from "@/styles/godPage.module.scss";

const GodTitleCard = ({ god }: GodData) => {
  return (
    <div className={styles.titleCard}>
      <h2>{god.Name}</h2>
      <h3>{god.Title}</h3>

      <Image
        src={god.godIcon_URL}
        alt={`picture of ${god.Name}`}
        width={180}
        height={210}
      />
      <p>{god.Type}</p>
      <p>{god.Pros}</p>
      <div className={styles.godType}>
        <div>
          <Image
            src={`/icons/class_icons/${god.Roles}.webp`}
            alt="Role Icon"
            width={50}
            height={50}
          />
          {god.Roles}
        </div>
        <div>
          <Image
            src={`/icons/pantheon_icons/${god.Pantheon}.webp`}
            alt="Pantheon Icon"
            width={50}
            height={50}
          />
          {god.Pantheon}
        </div>
      </div>
    </div>
  );
};

export default GodTitleCard;

interface GodData {
  god: {
    id: number;
    Name: string;
    Title: string;
    godIcon_URL: string;
    Type: string;
    Pantheon: string;
    Roles: string;
    Pros: string;
  };
}
