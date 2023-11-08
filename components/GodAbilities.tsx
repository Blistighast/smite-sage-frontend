import Image from "next/image";

import styles from "@/styles/godPage.module.scss";
import { useEffect, useState } from "react";

const GodAbilities = ({ god }: GodData) => {
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
    <div className={styles.abilitiesContainer}>
      {godAbilities?.map(({ id, abilityName, iconUrl, description }) => (
        <div className={styles.ability} key={id}>
          <h4>{abilityName}</h4>
          <Image
            src={iconUrl}
            alt={`icon for ${iconUrl}`}
            width={70}
            height={70}
          />
          <p>{description.replace("<n>", "\n\n").replaceAll(/<.*?>/g, "")}</p>
        </div>
      ))}
    </div>
  );
};

export default GodAbilities;

interface GodAbility {
  id: number | null;
  abilityName: string;
  iconUrl: string;
  description: string;
}

interface GodData {
  god: {
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
