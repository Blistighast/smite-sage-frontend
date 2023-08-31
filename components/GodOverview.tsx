import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/godPage.module.scss";

const GodOverview = ({ god }) => {
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
              src={`/class_icons/${god.Roles}.webp`}
              alt="Role Icon"
              width={50}
              height={50}
            />
            {god.Roles}
          </div>
          <div>
            <Image
              src={`/pantheon_icons/${god.Pantheon}.webp`}
              alt="Pantheon Icon"
              width={50}
              height={50}
            />
            {god.Pantheon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodOverview;
