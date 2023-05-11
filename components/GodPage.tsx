import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "@/styles/godPage.module.scss";
import Link from "next/link";
import GodSkin from "./GodSkin";

export default function GodPage({ god }: GodData) {
  const skinSortOrder = ["Normal", "Exclusive", "Limited"];
  const [godAbilities, setGodAbilities] = useState<GodAbility[]>();

  useEffect(() => {
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
                <p className={styles.lore}>
                  {god.Lore.replaceAll("\\n\\n", "\n\n")}
                </p>
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
            <div className={styles.abilitiesContainer}>
              {godAbilities?.map(
                ({ id, abilityName, iconUrl, description }) => (
                  <div className={styles.ability} key={id}>
                    <h4>{abilityName}</h4>
                    <Image
                      src={iconUrl}
                      alt={`icon for ${iconUrl}`}
                      width={70}
                      height={70}
                    />
                    <p>
                      {description
                        .replace("<n>", "\n\n")
                        .replaceAll(/<.*?>/g, "")}
                    </p>
                  </div>
                )
              )}
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
    AbilityId1: number;
    Ability1: string;
    godAbility1_URL: string;
    AbilityId2: number;
    Ability2: string;
    godAbility2_URL: string;
    AbilityId3: number;
    Ability3: string;
    godAbility3_URL: string;
    AbilityId4: number;
    Ability4: string;
    godAbility4_URL: string;
    AbilityId5: number;
    Ability5: string;
    godAbility5_URL: string;
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
    Ability_1: {
      Description: {
        itemDescription: {
          description: string;
        };
      };
    };
    Ability_2: {
      Description: {
        itemDescription: {
          description: string;
        };
      };
    };
    Ability_3: {
      Description: {
        itemDescription: {
          description: string;
        };
      };
    };
    Ability_4: {
      Description: {
        itemDescription: {
          description: string;
        };
      };
    };
    Ability_5: {
      Description: {
        itemDescription: {
          description: string;
        };
      };
    };
  };
}

interface GodAbility {
  id: number | null;
  abilityName: string;
  iconUrl: string;
  description: string;
}
