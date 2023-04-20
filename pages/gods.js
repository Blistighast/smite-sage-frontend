import { useEffect, useState } from "react";
import GodCard from "./../components/GodCard";
import GodsFilter from "./../components/GodsFilter";

import styles from "@/styles/cards-container.module.scss";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Gods = () => {
  const [gods, setGods] = useState();
  const [filteredGods, setFilteredGods] = useState();

  const getGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    setGods(data);
    setFilteredGods(data);
  };

  useEffect(() => {
    getGods();
  }, []);

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
