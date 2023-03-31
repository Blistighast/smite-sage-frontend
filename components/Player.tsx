import { useEffect, useState } from "react";

interface PlayerProps {
  name: string | string[] | undefined;
}

interface Player {
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
}

const serverUrl = "http://localhost:4000";

const Player: React.FC<PlayerProps> = ({ name }) => {
  const [player, setPlayer] = useState<Player>();

  const playerFetch = async () => {
    const playerResp = await fetch(`${serverUrl}/getplayer/${name}`);
    const playerData = await playerResp.json();
    setPlayer(playerData[0]);
  };

  useEffect(() => {
    playerFetch();
  }, []);

  return (
    <div>
      <div>
        <div>{player ? player.Name : <p>Loading...</p>}</div>
      </div>
    </div>
  );
};

export default Player;
