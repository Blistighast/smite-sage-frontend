import { useState } from "react";

import GodCard from "./GodCard";
import GodsFilter from "./GodsFilter";

import styles from "@/styles/cards-container.module.scss";

interface GodProps {
  gods: [
    god: {
      Name: string;
      Pantheon: string;
      Roles: string;
      godCard_URL: string;
      godIcon_URL: string;
      id: number;
      _id: number;
    }
  ];
}

const Gods: React.FC<GodProps> = ({ gods }) => {
  const [filteredGods, setFilteredGods] = useState(gods);

  return (
    <div>
      <GodsFilter
        gods={gods}
        filteredGods={filteredGods}
        setFilteredGods={setFilteredGods}
      />
      <div className={`${styles.cardsContainer}`}>
        {filteredGods ? (
          filteredGods
            .sort((a, b) => a.Name.localeCompare(b.Name))
            .map((god) => <GodCard key={god._id} god={god} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Gods;
