import { useEffect, useState } from "react";

import styles from "@/styles/playerPage.module.scss";

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
    <>
      {player ? (
        <div className={styles.playerPage}>
          <div className={styles.playerAccountInfo}>
            <h2>{player.Name}</h2>
            <p>Region: {player.Region}</p>
            <p>Platform: {player.Platform}</p>
            <p>Account Created: {player.Created_Datetime}</p>
            <p>Last Logged In: {player.Last_Login_Datetime}</p>
            <p>Hours Played: {player.HoursPlayed}</p>
          </div>
          <div className={styles.playerStats}>
            <h3>Level {player.Level}</h3>
            <p>Mastery Level {player.MasteryLevel}</p>
            <p>Wins: {player.Wins}</p>
            <p>Lossed: {player.Losses}</p>
            <p>Leaves: {player.Leaves}</p>
            <p>Achievements: {player.Total_Achievements}</p>
            <p>Worshippers: {player.Total_Worshippers}</p>
          </div>
          <div className={styles.rankedStats}>
            <p>Ranked Conquest: {player.Rank_Stat_Conquest.toFixed(0)}</p>
            <p>Tier Conquest: {player.Tier_Conquest}</p>
            <p>Ranked Duel: {player.Rank_Stat_Duel.toFixed(0)}</p>
            <p>Tier Duel: {player.Tier_Duel}</p>
            <p>Ranked Joust: {player.Rank_Stat_Joust.toFixed(0)}</p>
            <p>Tier Joust: {player.Tier_Joust}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Player;
