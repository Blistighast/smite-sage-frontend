import Link from "next/link";

import styles from "@/styles/godPage.module.scss";
import GodTitleCard from "./GodTitleCard";

const GodOverview = ({ god }: GodData) => {
  return (
    <div className={styles.overviewContainer}>
      <div>
        <p>
          {god.Name} is a <Link href={`/gods/`}>god</Link> in{" "}
          <Link href={`/`}>Smite</Link>.
        </p>
        <h3>Lore</h3>
        <hr />
        <p className={styles.lore}>{god.Lore.replaceAll("\\n\\n", "\n\n")}</p>
      </div>
      <GodTitleCard god={god} />
    </div>
  );
};

export default GodOverview;

interface GodData {
  god: {
    id: number;
    Name: string;
    Title: string;
    Lore: string;
    godIcon_URL: string;
    Type: string;
    Pantheon: string;
    Roles: string;
    Pros: string;
  };
}
