import styles from "@/styles/godPage.module.scss";
import GodSkins from "./GodSkins";
import GodAbilities from "./GodAbilities";
import GodOverview from "./GodOverview";
import GodHeader from "./GodHeader";

import { useState } from "react";
import Header from "./Header";

export default function GodPage({ god }: GodData) {
  const [activeTab, setActiveTab] = useState<string>("lore");

  return (
    <div className={styles.godPage}>
      <Header
        tabNames={["lore", "abilities", "skins"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className={styles.godMain}>
        {god ? (
          <div className={styles.godInfo}>
            {activeTab === "lore" && <GodOverview god={god} />}
            {activeTab === "abilities" && <GodAbilities god={god} />}
            {activeTab === "skins" && <GodSkins skins={god.skins} />}
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
