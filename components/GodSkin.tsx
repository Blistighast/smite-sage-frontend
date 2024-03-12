import Image from "next/image";

import styles from "@/styles/godPage.module.scss";

interface SkinProps {
  skin: {
    skin_id1: number;
    skin_name: string;
    god_name: string;
    godSkin_URL: string;
    godIcon_URL: string;
    obtainability: string;
    price_favor: number;
    price_gems: number;
  };
}

const GodSkin: React.FC<SkinProps> = ({ skin }) => {
  return (
    <div className={styles.skinCard}>
      <h3>{skin.skin_name}</h3>
      <p>{skin.obtainability}</p>
      <Image
        src={skin.godSkin_URL}
        alt={skin.skin_name}
        width={250}
        height={300}
      />
      <span>
        <p>Favor: {skin.price_favor}</p>
        <Image
          src={"/icons/currency_icons/favor.webp"}
          alt="favor icon"
          width={30}
          height={30}
        />
      </span>
      <span>
        <p>Gems: {skin.price_gems}</p>
        <Image
          src={"/icons/currency_icons/gem.png"}
          alt="gem icon"
          width={30}
          height={30}
        />
      </span>
    </div>
  );
};

export default GodSkin;
