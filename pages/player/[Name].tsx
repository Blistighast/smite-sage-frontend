import { GetServerSideProps } from "next";

import Player from "../../components/Player";

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
  };
};

const serverUrl = process.env.serverUrl;

export default function PlayerPage(player: PlayerData["player"]) {
  return <Player player={player} />;
}

export const getServerSideProps: GetServerSideProps<{
  player: PlayerData;
}> = async ({ query }) => {
  const playerResp = await fetch(`${serverUrl}/getplayer/${query.name}`);
  const playerData = await playerResp.json();
  return {
    props: playerData[0],
  };
};
