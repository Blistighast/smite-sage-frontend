import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "@/styles/godPage.module.scss";
import Link from "next/link";
import GodSkin from "./GodSkin";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// change god to id to go back to old method, delete this once new method working
export default function GodPage({ god }) {
  const skinSortOrder = ["Normal", "Exclusive", "Limited"];
  // const [god, setGod] = useState();
  const [godAbilities, setGodAbilities] = useState([]);

  useEffect(() => {
    // console.log(god);
    // const fetchGod = async () => {
    //   const resp = await fetch(`${serverUrl}/gods/${name}`);
    //   const data = await resp.json();
    //   setGod(...data);
    setGodAbilities([
      {
        id: god.AbilityId1,
        abilityName: god.Ability1,
        iconUrl: god.godAbility1_URL,
        description: god.Ability_1.Description.itemDescription.description,
      },
      {
        id: god.AbilityId2,
        abilityName: god.Ability2,
        iconUrl: god.godAbility2_URL,
        description: god.Ability_2.Description.itemDescription.description,
      },
      {
        id: god.AbilityId3,
        abilityName: god.Ability3,
        iconUrl: god.godAbility3_URL,
        description: god.Ability_3.Description.itemDescription.description,
      },
      {
        id: god.AbilityId4,
        abilityName: god.Ability4,
        iconUrl: god.godAbility4_URL,
        description: god.Ability_4.Description.itemDescription.description,
      },
      {
        id: god.AbilityId5,
        abilityName: god.Ability5,
        iconUrl: god.godAbility5_URL,
        description: god.Ability_5.Description.itemDescription.description,
      },
    ]);
    // };
    // fetchGod();
  }, [god]);

  return (
    <div>
      <div>
        {god ? (
          <div className={styles.godPage}>
            <div className={styles.overviewContainer}>
              <div>
                <p>
                  {god.Name} is a <Link href={`/gods/`}>god</Link> in{" "}
                  <Link href={`/`}>Smite</Link>.
                </p>
                <h3>Lore</h3>
                <hr />
                <p>{god.Lore.replaceAll("\\n\\n", "\n\n")}</p>
              </div>
              <div>
                <h2>{god.Name}</h2>
                <h3>{god.Title}</h3>

                <Image
                  src={god.godIcon_URL}
                  alt={`picture of ${god.Name}`}
                  width={180}
                  height={210}
                />
                <h4>{god.Type}</h4>
                <h4>{god.Pros}</h4>
                <div>
                  <span>
                    {god.Roles}
                    <Image
                      src={`/class-icons/${god.Roles}.webp`}
                      alt="Role Icon"
                      width={50}
                      height={50}
                    />
                  </span>
                  <span>
                    {god.Pantheon}
                    <Image
                      src={`/pantheon_icons/${god.Pantheon}.webp`}
                      alt="Pantheon Icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.abilitiesContainer}>
              {godAbilities.map(({ id, abilityName, iconUrl, description }) => (
                <div className={styles.ability} key={id}>
                  <h4>{abilityName}</h4>
                  <Image
                    src={iconUrl}
                    alt={`icon for ${iconUrl}`}
                    width={70}
                    height={70}
                  />
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className={styles.skinContainer}>
              {god.skins
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
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
