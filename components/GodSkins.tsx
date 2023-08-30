import styles from "@/styles/godPage.module.scss";

import GodSkin from "./GodSkin";

const GodSkins = ({ skins }: SkinsProps) => {
  const skinSortOrder = ["Normal", "Exclusive", "Limited"];

  return (
    <div className={styles.skinContainer}>
      {skins
        .filter((skin) => skin.godSkin_URL)
        .sort(
          (a, b) =>
            skinSortOrder.indexOf(a.obtainability) -
            skinSortOrder.indexOf(b.obtainability)
        )
        .map((skin) => (
          <GodSkin key={skin.skin_id1} skin={skin} />
        ))}
    </div>
  );
};

export default GodSkins;

interface SkinsProps {
  skins: [
    {
      skin_id1: number;
      skin_name: string;
      god_name: string;
      godSkin_URL: string;
      godIcon_URL: string;
      obtainability: string;
      price_favor: number;
      price_gems: number;
    }
  ];
}
