import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

import styles from "@/styles/godPage.module.scss";
import Link from "next/link";
import GodSkin from "./GodSkin";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function GodPage({ id }) {
  const skinSortOrder = ["Normal", "Exclusive", "Limited"];
  const [god, setGod] = useState();
  const [godAbilities, setGodAbilities] = useState([]);

  useEffect(() => {
    const fetchGod = async () => {
      const resp = await fetch(`${serverUrl}/gods/${id}`);
      const data = await resp.json();
      setGod(...data);
      setGodAbilities([
        {
          id: data[0].AbilityId1,
          abilityName: data[0].Ability1,
          iconUrl: data[0].godAbility1_URL,
          description:
            data[0].Ability_1.Description.itemDescription.description,
        },
        {
          id: data[0].AbilityId2,
          abilityName: data[0].Ability2,
          iconUrl: data[0].godAbility2_URL,
          description:
            data[0].Ability_2.Description.itemDescription.description,
        },
        {
          id: data[0].AbilityId3,
          abilityName: data[0].Ability3,
          iconUrl: data[0].godAbility3_URL,
          description:
            data[0].Ability_3.Description.itemDescription.description,
        },
        {
          id: data[0].AbilityId4,
          abilityName: data[0].Ability4,
          iconUrl: data[0].godAbility4_URL,
          description:
            data[0].Ability_4.Description.itemDescription.description,
        },
        {
          id: data[0].AbilityId5,
          abilityName: data[0].Ability5,
          iconUrl: data[0].godAbility5_URL,
          description:
            data[0].Ability_5.Description.itemDescription.description,
        },
      ]);
    };
    fetchGod();
  }, [id]);

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
