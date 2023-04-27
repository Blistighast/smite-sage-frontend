import { GetStaticProps } from "next";

import GodPage from "../../components/GodPage";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function SingleGodPage({ god }: GodData) {
  return <GodPage god={god} />;
}

export async function getStaticPaths() {
  const resp = await fetch(`${serverUrl}/getgods`);
  const godsData = await resp.json();

  const paths = godsData.map((god: GodData["god"]) => ({
    params: { name: god.Name },
  }));
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<{ god: GodData }> = async ({
  params,
}) => {
  const resp = await fetch(`${serverUrl}/gods/${params?.name}`);
  const godData = await resp.json();
  return {
    props: { god: godData[0] },
    revalidate: 60 * 60 * 24,
  };
};

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
