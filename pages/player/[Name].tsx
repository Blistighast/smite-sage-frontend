import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import Player from "../../components/Player";
import { useEffect } from "react";

interface PlayerData {
  player: {
    Name: string;
    Platform: string;
    Region: string;
    Personal_Status_Message: string;
    TeamId: number;
    Team_Name: string;
    Created_Datetime: string;
    Last_Login_Datetime: string;
    HoursPlayed: number;
    MinutesPlayed: number;
    Level: number;
    MasteryLevel: number;
    Wins: number;
    Losses: number;
    Leaves: number;
    Total_Achievements: number;
    Total_Worshippers: number;
    Avatar_URL: string;
    Rank_Stat_Conquest: number;
    Rank_Stat_Conquest_Controller: number;
    Rank_Stat_Duel: number;
    Rank_Stat_Duel_Controller: number;
    Rank_Stat_Joust: number;
    Rank_Stat_Joust_Controller: number;
    Tier_Conquest: number;
    Tier_Duel: number;
    Tier_Joust: number;
  } | null;
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function PlayerPage() {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    console.log("from page", name);
  }, []);

  return <Player name={name} />;
}

// { player }: PlayerData

// export const getServerSideProps: GetServerSideProps<{
//   player: PlayerData;
// }> = async (context) => {
//   console.log("inside fetch", context.query);
//   const playerResp = await fetch(
//     `${serverUrl}/getplayer/${context.query.name}`
//   );
//   const playerData: PlayerData = await playerResp.json();
//   return {
//     props: { player: playerData },
//   };
// };
