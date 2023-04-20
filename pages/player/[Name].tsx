import { GetServerSideProps } from "next";

import Player from "../../components/Player";
import { useEffect } from "react";

type PlayerData = {
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
};

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function PlayerPage(playerData: PlayerData) {
  return <Player player={playerData.player} />;
}

export const getServerSideProps: GetServerSideProps<{
  player: PlayerData;
}> = async ({ query }) => {
  const playerResp = await fetch(`${serverUrl}/getplayer/${query.name}`);
  const playerData: PlayerData = await playerResp.json();
  return {
    props: { player: playerData },
  };
};
