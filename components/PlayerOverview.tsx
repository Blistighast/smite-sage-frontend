import styles from "@/styles/playerPage.module.scss";
import Image from "next/image";

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
  };
}

const PlayerOverview = ({ player }: PlayerData) => {
  return (
    <div className={styles.playerPage}>
      <div className={styles.playerAccountInfo}>
        <div>
          {player.Avatar_URL ? (
            <Image
              src={`${player.Avatar_URL}`}
              alt="Player Avatar"
              width={125}
              height={125}
            />
          ) : (
            <Image
              src={`/icons/player_icons/playerAvatarDefault.jpg`}
              alt="Player Avatar"
              width={125}
              height={125}
            />
          )}
        </div>
        <h2>{player.Name.charAt(0).toUpperCase() + player.Name.slice(1)}</h2>
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
        <h3>Ranked Stats</h3>
        <h4>Conquest</h4>
        {}
        <p>Conquest controller: {player.Rank_Stat_Conquest_Controller}</p>
        <p>Ranked Conquest: {player.Rank_Stat_Conquest.toFixed(0)}</p>
        <p>Tier Conquest: {player.Tier_Conquest}</p>
        <Image
          src={`/icons/rank_icons/conquest/Conquest_Master.webp`}
          alt="Player Conquest Rank Badge"
          width={125}
          height={125}
        />
        <h4>Joust</h4>
        <p>Joust controller: {player.Rank_Stat_Joust_Controller}</p>
        <p>Ranked Joust: {player.Rank_Stat_Joust.toFixed(0)}</p>
        <p>Tier Joust: {player.Tier_Joust}</p>
        <Image
          src={`/icons/rank_icons/joust/Joust_Master.webp`}
          alt="Player Joust Rank Badge"
          width={125}
          height={125}
        />
        <h4>Duel</h4>
        <p>Ranked Duel: {player.Rank_Stat_Duel.toFixed(0)}</p>
        <p>Tier Duel: {player.Tier_Duel}</p>
        <Image
          src={`/icons/rank_icons/duel/Duel_Master.webp`}
          alt="Player Duel Rank Badge"
          width={125}
          height={125}
        />
      </div>
    </div>
  );
};

export default PlayerOverview;
