import styles from "@/styles/playerPage.module.scss";
import { useEffect, useState } from "react";
import PlayerOverview from "./PlayerOverview";
import PlayerGodStats from "./PlayerGodStats";
import Header from "./Header";

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

// example player single god data, in list of all gods :
// {
//   Assists: 49,
//   Deaths: 17,
//   Kills: 21,
//   Losses: 4,
//   MinionKills: 406,
//   Rank: 1,
//   Wins: 4,
//   Worshippers: 82,
//   god: 'Tyr',
//   god_id: '1924',
//   player_id: '709171487',
//   ret_msg: null
// },

interface queryProps {
  name: string | string[] | undefined;
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Player: React.FC<queryProps> = ({ name }) => {
  const [player, setPlayer] = useState<Player>();
  const [isLoading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const res = await fetch(`${serverUrl}/player/${name}`);

      const playerData = await res.json();
      setPlayer(playerData);
      setLoading(false);
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  if (isLoading) return <p>Loading player...</p>;

  return (
    <>
      <Header
        tabNames={["Overview", "Gods", "Recent Games", "Ranked"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {player ? (
        <div className={styles.playerPage}>
          <PlayerOverview player={player} />
          <PlayerGodStats />
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
