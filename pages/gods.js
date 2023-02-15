import { useEffect, useState } from "react";
import styles from "@/styles/cards-container.module.scss";
import GodCard from "./../components/GodCard";
import { testGods } from "../testData";
import GodsFilter from "./../components/GodsFilter";

const serverUrl = "http://localhost:4000";

const Gods = () => {
  const [gods, setGods] = useState();
  const [filteredGods, setFilteredGods] = useState(gods);

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
          filteredGods.map((god) => <GodCard key={god._id} god={god} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Gods;
