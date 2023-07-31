import styles from "@/styles/playerPage.module.scss";
import { useEffect, useState } from "react";

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

interface queryProps {
  name: string | string[] | undefined;
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Player: React.FC<queryProps> = ({ name }) => {
  const [player, setPlayer] = useState<Player>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      console.log(`${serverUrl}/player/${name}`);
      const res = await fetch(`${serverUrl}/player/${name}`);
      console.log(name);
      console.log(res);

      const playerData = await res.json();
      setPlayer(playerData);
      setLoading(false);
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {player ? (
        <div className={styles.playerPage}>
          <div className={styles.playerAccountInfo}>
            <h2>
              {player.Name.charAt(0).toUpperCase() + player.Name.slice(1)}
            </h2>
            {player.Region ? <p>Region: {player.Region}</p> : null}
            <p>Platform: {player.Platform}</p>
            <p>Account Created: {player.Created_Datetime}</p>
            <p>Last Logged In: {player.Last_Login_Datetime}</p>
            <p>Hours Played: {player.HoursPlayed}</p>
          </div>
          <div className={styles.playerStats}>
            <h3>Level {player.Level}</h3>
            <p>Mastery Level {player.MasteryLevel}</p>
            <p>Wins: {player.Wins}</p>
            <p>Losses: {player.Losses}</p>
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
        <p>
          Sorry, that player name could not be found or the Smite server might
          be down.
        </p>
      )}
    </>
  );
};

export default Player;
